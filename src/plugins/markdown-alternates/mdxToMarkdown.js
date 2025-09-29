import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkMdx from "remark-mdx";
import remarkStringify from "remark-stringify";

const DEFAULT_FALLBACK =
  "Interactive content is available in the web version of this document.";
const DEFAULT_VIDEO_TEXT =
  "Watch the video content in the hosted documentation.";

function stripFrontMatter(source) {
  if (typeof source !== "string") {
    return source;
  }

  if (!source.startsWith("---")) {
    return source;
  }

  const closingMarker = source.indexOf("\n---", 3);
  if (closingMarker === -1) {
    return source;
  }

  const afterMarker = closingMarker + "\n---".length;
  const remainder = source.slice(afterMarker);

  // Remove a single leading newline to avoid blank first line in output.
  return remainder.startsWith("\n") ? remainder.slice(1) : remainder;
}

function getAttributeValue(node, attributeName) {
  const attributes = Array.isArray(node.attributes) ? node.attributes : [];
  const attribute = attributes.find(
    (current) =>
      current.type === "mdxJsxAttribute" && current.name === attributeName,
  );

  if (!attribute) {
    return undefined;
  }

  if (typeof attribute.value === "string") {
    return attribute.value;
  }

  if (
    attribute.value &&
    typeof attribute.value === "object" &&
    "value" in attribute.value
  ) {
    return String(attribute.value.value);
  }

  return undefined;
}

function createFallbackParagraph(text) {
  return {
    type: "paragraph",
    children: [
      {
        type: "emphasis",
        children: [{ type: "text", value: text }],
      },
    ],
  };
}

function createVideoParagraph({ url, videoText }) {
  const children = [];

  children.push({
    type: "strong",
    children: [{ type: "text", value: "Video:" }],
  });
  children.push({ type: "text", value: " " });

  if (url) {
    children.push({
      type: "link",
      url,
      title: null,
      children: [{ type: "text", value: url }],
    });
  } else {
    children.push({ type: "text", value: videoText });
  }

  return { type: "paragraph", children };
}

function isLikelyVideoComponent(node) {
  const name = node.name ?? "";
  const urlCandidate =
    getAttributeValue(node, "src") ||
    getAttributeValue(node, "source") ||
    getAttributeValue(node, "url") ||
    getAttributeValue(node, "href");

  if (/video|youtube|wistia|vimeo|loom/i.test(name)) {
    return true;
  }

  if (!urlCandidate) {
    return false;
  }

  return (
    /\.(mp4|webm|mov)(\?|$)/i.test(urlCandidate) ||
    /youtu|vimeo|loom|wistia/i.test(urlCandidate)
  );
}

function transformChildren(children, context) {
  if (!Array.isArray(children) || !children.length) {
    return [];
  }

  const transformed = [];

  for (const child of children) {
    const result = transformNode(child, context);
    if (Array.isArray(result)) {
      transformed.push(...result);
    } else if (result) {
      transformed.push(result);
    }
  }

  return transformed;
}

function transformFlowElement(node, context) {
  if (isLikelyVideoComponent(node)) {
    const url =
      getAttributeValue(node, "src") ||
      getAttributeValue(node, "source") ||
      getAttributeValue(node, "url") ||
      getAttributeValue(node, "href");
    return [createVideoParagraph({ url, videoText: context.videoText })];
  }

  if (node.name === "Tabs") {
    const children = transformChildren(node.children, context);
    return children.length
      ? children
      : [createFallbackParagraph(context.fallbackText)];
  }

  if (node.name === "TabItem") {
    const label =
      getAttributeValue(node, "label") ||
      getAttributeValue(node, "value") ||
      getAttributeValue(node, "defaultValue");

    const heading = label
      ? {
          type: "heading",
          depth: 4,
          children: [{ type: "text", value: label }],
        }
      : null;

    const content = transformChildren(node.children, context);
    const nodes = [];

    if (heading) {
      nodes.push(heading);
    }

    if (content.length) {
      nodes.push(...content);
    }

    if (!nodes.length) {
      nodes.push(createFallbackParagraph(context.fallbackText));
    }

    return nodes;
  }

  const transformedChildren = transformChildren(node.children, context);
  return transformedChildren.length
    ? transformedChildren
    : [createFallbackParagraph(context.fallbackText)];
}

function transformTextElement(node, context) {
  const children = transformChildren(node.children, context);
  if (children.length) {
    return children;
  }

  return [
    {
      type: "text",
      value: `(${context.fallbackText})`,
    },
  ];
}

function transformNode(node, context) {
  if (!node) {
    return null;
  }

  switch (node.type) {
    case "yaml":
    case "mdxjsEsm":
      return null;
    case "mdxFlowExpression":
      return [createFallbackParagraph(context.fallbackText)];
    case "mdxTextExpression":
      return [
        {
          type: "text",
          value: `(${context.fallbackText})`,
        },
      ];
    case "mdxJsxFlowElement":
      return transformFlowElement(node, context);
    case "mdxJsxTextElement":
      return transformTextElement(node, context);
    default:
      break;
  }

  if (Array.isArray(node.children)) {
    node.children = transformChildren(node.children, context);
  }

  return node;
}

function rewriteDynamicContent({ fallbackText, videoText }) {
  const context = {
    fallbackText: fallbackText || DEFAULT_FALLBACK,
    videoText: videoText || DEFAULT_VIDEO_TEXT,
  };

  return (tree) => {
    if (!tree || typeof tree !== "object") {
      return;
    }

    const rootChildren = Array.isArray(tree.children) ? tree.children : [];
    tree.children = transformChildren(rootChildren, context);
  };
}

export async function mdxToMarkdown(source, options = {}) {
  const sanitizedSource = stripFrontMatter(source);

  const processor = unified()
    .use(remarkParse)
    .use(remarkMdx)
    .use(rewriteDynamicContent, options)
    .use(remarkStringify, {
      fences: true,
      bullet: "-",
      listItemIndent: "one",
    });

  const file = await processor.process(sanitizedSource);
  return String(file).trim();
}
