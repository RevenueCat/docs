import path from "node:path";
import fs from "node:fs";
import { promises as fsPromises } from "node:fs";

import { mdxToMarkdown } from "./mdxToMarkdown.js";
import { createFrontMatterBlock } from "./frontMatter.js";

const DEFAULT_OPTIONS = {
  docsPluginId: "default",
  markdownExtension: ".md",
  fallbackText:
    "Interactive content is available in the web version of this doc.",
  videoText: "Watch the video content in the hosted documentation.",
};

async function fileExists(targetPath) {
  try {
    await fsPromises.access(targetPath);
    return true;
  } catch (error) {
    if ((error?.code ?? "") === "ENOENT") {
      return false;
    }
    throw error;
  }
}

function resolveSourcePath(siteDir, source) {
  if (!source) {
    return null;
  }

  if (source.startsWith("@site/")) {
    return path.join(siteDir, source.replace(/^@site\//, ""));
  }

  if (path.isAbsolute(source)) {
    return source;
  }

  return path.join(siteDir, source);
}

async function collectDocMetadata(context, docsPluginId) {
  const pluginDir = path.join(
    context.generatedFilesDir,
    "docusaurus-plugin-content-docs",
    docsPluginId,
  );

  async function gatherMetadataFiles(dir, accumulator) {
    const entries = await fsPromises.readdir(dir, { withFileTypes: true });
    for (const entry of entries) {
      const entryPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        await gatherMetadataFiles(entryPath, accumulator);
      } else if (
        entry.isFile() &&
        entry.name.startsWith("site-docs") &&
        entry.name.endsWith(".json")
      ) {
        accumulator.push(entryPath);
      }
    }
  }

  const metadataFiles = [];
  try {
    await gatherMetadataFiles(pluginDir, metadataFiles);
  } catch (error) {
    if ((error?.code ?? "") === "ENOENT") {
      return [];
    }
    throw error;
  }

  const records = [];

  for (const filePath of metadataFiles) {
    try {
      const raw = await fsPromises.readFile(filePath, "utf8");
      const doc = JSON.parse(raw);
      if (!doc.permalink || !doc.source) {
        continue;
      }

      const absoluteSourcePath = resolveSourcePath(context.siteDir, doc.source);
      const tags = Array.isArray(doc.tags)
        ? doc.tags.map((tag) =>
            typeof tag === "string"
              ? tag
              : typeof tag?.label === "string"
                ? tag.label
                : "",
          )
        : [];

      records.push({
        id: doc.id,
        title: doc.title,
        description: doc.description,
        permalink: doc.permalink,
        tags,
        frontMatter: doc.frontMatter ?? {},
        sourcePath: absoluteSourcePath,
        sidebar: doc.sidebar,
        sidebarPosition: doc.sidebarPosition,
        versionName: doc.version,
      });
    } catch (error) {
      console.warn(
        `Failed to process doc metadata at ${filePath}: ${error.message}`,
      );
    }
  }

  return records;
}

async function ensureAlternateLink(htmlPath, markdownHref) {
  try {
    const html = await fsPromises.readFile(htmlPath, "utf8");
    if (html.includes(`rel="alternate"`) && html.includes(markdownHref)) {
      return;
    }

    const linkTag = `<link rel="alternate" type="text/markdown" href="${markdownHref}">`;
    if (html.includes(linkTag)) {
      return;
    }

    const closingHeadIndex = html.indexOf("</head>");
    let anchorIndex = closingHeadIndex;

    if (anchorIndex === -1) {
      anchorIndex = html.indexOf("<body");
    }

    if (anchorIndex === -1) {
      return;
    }

    const updatedHtml =
      html.slice(0, anchorIndex) + `${linkTag}` + html.slice(anchorIndex);

    await fsPromises.writeFile(htmlPath, updatedHtml, "utf8");
  } catch (error) {
    if ((error?.code ?? "") !== "ENOENT") {
      throw error;
    }
  }
}

async function writeLinkHeadersManifest(outDir, docs) {
  if (!docs.length) {
    return;
  }

  const headersPath = path.join(outDir, "_headers");
  let existing = "";

  try {
    existing = await fsPromises.readFile(headersPath, "utf8");
  } catch (error) {
    if ((error?.code ?? "") !== "ENOENT") {
      throw error;
    }
  }

  const seen = new Set();
  const lines = ["# Markdown alternate representations"];

  for (const doc of docs) {
    if (!doc.permalink || seen.has(doc.permalink)) {
      continue;
    }

    seen.add(doc.permalink);
    lines.push(doc.permalink);
    lines.push(
      `  Link: <${doc.markdownHref}>; rel="alternate"; type="text/markdown"`,
    );
    lines.push("");
  }

  if (lines.length <= 1) {
    return;
  }

  if (lines[lines.length - 1] === "") {
    lines.pop();
  }

  const trimmedExisting = existing.trimEnd();
  const merged = [trimmedExisting, lines.join("\n")]
    .filter((value) => value && value.length > 0)
    .join("\n\n");

  await fsPromises.writeFile(headersPath, `${merged}\n`, "utf8");
}

async function writeMetadataSummary(outDir, docs) {
  if (!docs.length) {
    return;
  }

  const summaryPath = path.join(outDir, "markdown-alternates.json");
  const payload = {
    generatedAt: new Date().toISOString(),
    count: docs.length,
    docs: docs.map((doc) => ({
      permalink: doc.permalink,
      markdownHref: doc.markdownHref,
      markdownPath: doc.markdownPath,
      markdownPublicPath: doc.markdownPublicPath,
      htmlPath: doc.htmlPath,
    })),
  };

  await fsPromises.writeFile(
    summaryPath,
    JSON.stringify(payload, null, 2),
    "utf8",
  );
}

function permalinkToOutputPaths(
  outDir,
  permalink,
  markdownExtension,
  baseUrl,
  trailingSlash,
) {
  const hasTrailingSlash = permalink.endsWith("/");
  const trimmed = permalink.replace(/\/+$/, "");
  const trimmedRelative = trimmed.replace(/^\/+/, "");
  const markdownPublicPath = (() => {
    if (hasTrailingSlash) {
      if (!trimmedRelative) {
        return `/index${markdownExtension}`;
      }
      return `/${trimmedRelative}/index${markdownExtension}`;
    }

    if (!trimmedRelative) {
      return `/index${markdownExtension}`;
    }

    return `/${trimmedRelative}${markdownExtension}`;
  })();

  const markdownPath = path.join(
    outDir,
    markdownPublicPath.replace(/^\/+/, ""),
  );

  const normalizedBase = (baseUrl || "/")
    .replace(/^\/+/, "")
    .replace(/\/+$/, "");
  let routePath = trimmedRelative;

  if (normalizedBase && routePath.startsWith(`${normalizedBase}/`)) {
    routePath = routePath.slice(normalizedBase.length + 1);
  } else if (normalizedBase && routePath === normalizedBase) {
    routePath = "";
  }

  let htmlPath;
  if (!routePath) {
    htmlPath = path.join(outDir, "index.html");
  } else if (trailingSlash) {
    htmlPath = path.join(outDir, routePath, "index.html");
  } else {
    htmlPath = path.join(outDir, `${routePath}.html`);
  }

  return {
    markdownPath,
    markdownPublicPath,
    htmlPath,
  };
}

export default function markdownAlternatesPlugin(context, opts = {}) {
  const options = { ...DEFAULT_OPTIONS, ...opts };

  return {
    name: "revenuecat-markdown-alternates",

    async postBuild({ outDir }) {
      const docs = await collectDocMetadata(context, options.docsPluginId);
      if (!docs.length) {
        return;
      }

      const siteUrl = context.siteConfig?.url ?? "";
      const generatedDocs = [];

      for (const doc of docs) {
        const { markdownPath, markdownPublicPath, htmlPath } =
          permalinkToOutputPaths(
            outDir,
            doc.permalink,
            options.markdownExtension,
            context.siteConfig?.baseUrl ?? "/",
            context.siteConfig?.trailingSlash ?? undefined,
          );

        if (!doc.sourcePath) {
          continue;
        }

        const sourceExists = fs.existsSync(doc.sourcePath);
        if (!sourceExists) {
          continue;
        }

        const rawMdx = await fsPromises.readFile(doc.sourcePath, "utf8");
        const markdownBody = await mdxToMarkdown(rawMdx, {
          fallbackText: options.fallbackText,
          videoText: options.videoText,
        });

        const relativeSource = path.relative(context.siteDir, doc.sourcePath);
        const slugCandidate = doc.frontMatter?.slug
          ? String(doc.frontMatter.slug)
          : doc.permalink.replace(/^\/+/, "");

        const frontMatterBlock = createFrontMatterBlock({
          id: doc.id,
          title: doc.title,
          description: doc.description,
          permalink: doc.permalink,
          slug: slugCandidate,
          version: doc.versionName,
          original_source: relativeSource,
          tags: doc.tags,
          keywords: Array.isArray(doc.frontMatter?.keywords)
            ? doc.frontMatter.keywords
            : undefined,
        });

        const dir = path.dirname(markdownPath);
        await fsPromises.mkdir(dir, { recursive: true });
        await fsPromises.writeFile(
          markdownPath,
          `${frontMatterBlock}${markdownBody}\n`,
          "utf8",
        );

        const markdownHref = siteUrl
          ? new URL(markdownPublicPath, siteUrl).toString()
          : markdownPublicPath;

        await ensureAlternateLink(htmlPath, markdownHref);

        generatedDocs.push({
          permalink: doc.permalink,
          markdownPath,
          markdownPublicPath,
          markdownHref,
          htmlPath,
        });
      }

      await writeLinkHeadersManifest(outDir, generatedDocs);
      await writeMetadataSummary(outDir, generatedDocs);
    },

    extendCli(cli) {
      cli
        .command("markdown-alternates:check")
        .description(
          "Validate generated markdown alternate files, HTML head tags, and headers",
        )
        .option(
          "--out-dir <path>",
          "Directory containing the built site",
          context.outDir,
        )
        .action(async (command) => {
          const outDir = path.resolve(command.outDir);
          const summaryPath = path.join(outDir, "markdown-alternates.json");
          let summary;

          try {
            const raw = await fsPromises.readFile(summaryPath, "utf8");
            summary = JSON.parse(raw);
          } catch (error) {
            console.error(
              `Unable to read markdown alternate summary at ${summaryPath}: ${error.message}`,
            );
            process.exitCode = 1;
            return;
          }

          const issues = [];

          const headersPath = path.join(outDir, "_headers");
          let headersContent = "";
          try {
            headersContent = await fsPromises.readFile(headersPath, "utf8");
          } catch (error) {
            if ((error?.code ?? "") !== "ENOENT") {
              throw error;
            }
          }

          for (const doc of summary.docs ?? []) {
            const markdownPresent = await fileExists(doc.markdownPath);
            if (!markdownPresent) {
              issues.push(
                `Missing markdown file for ${doc.permalink} (expected at ${doc.markdownPath})`,
              );
            }

            try {
              const html = await fsPromises.readFile(doc.htmlPath, "utf8");
              if (!html.includes(doc.markdownHref)) {
                issues.push(
                  `HTML page ${doc.htmlPath} does not reference ${doc.markdownHref}`,
                );
              }
            } catch (error) {
              if ((error?.code ?? "") === "ENOENT") {
                issues.push(
                  `Missing HTML output for ${doc.permalink} at ${doc.htmlPath}`,
                );
              } else {
                throw error;
              }
            }

            if (!headersContent.includes(doc.markdownHref)) {
              issues.push(
                `HTTP Link header entry for ${doc.permalink} (${doc.markdownHref}) not found in ${headersPath}`,
              );
            }
          }

          if (issues.length) {
            console.error(
              "Markdown alternate checks failed:\n" + issues.join("\n"),
            );
            process.exitCode = 1;
            return;
          }

          console.log(
            `Validated ${summary.count ?? summary.docs?.length ?? 0} markdown alternate entries in ${outDir}`,
          );
        });
    },
  };
}
