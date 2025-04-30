const fs = require("fs");
const path = require("path");
const { log } = require("../utils/env");
const {
  getEnv,
  validateInput,
  validatePath,
  safeOperation,
  initOpenAI,
} = require("../utils/security");
const IEmbeddingManager = require("../interfaces/embedding-manager");
const IChunk = require("../interfaces/chunk.interface");
const OpenAIEmbeddingProvider = require("../providers/openai/openai-embedding-provider");
const LocalEmbeddingProvider = require("../providers/local/local-embedding-provider");

// Path constants - single source of truth
const EMBEDDINGS_PATH = validatePath(
  path.resolve(process.cwd(), "data/embeddings.json"),
);
const DATA_DIR = validatePath(path.resolve(process.cwd(), "data"));

class EmbeddingManager extends IEmbeddingManager {
  constructor() {
    super();
    this.initialized = false;
    this.openAIProvider = new OpenAIEmbeddingProvider();
    this.localProvider = new LocalEmbeddingProvider();
  }

  async initialize() {
    try {
      log("Initializing embedding manager...");

      // Initialize providers with proper error handling
      await safeOperation(async () => {
        await this.openAIProvider.initialize();
        await this.localProvider.initialize();
      }, "initializeProviders");

      // Setup data directory with path validation
      this.setupDataDirectory();

      this.initialized = true;
      log("Embedding manager initialized successfully");
    } catch (error) {
      log(`Error initializing embedding manager: ${error.message}`, true);
      throw error;
    }
  }

  isInitialized() {
    return this.initialized;
  }

  setupDataDirectory() {
    return safeOperation(() => {
      // Create data directory if it doesn't exist
      if (!fs.existsSync(DATA_DIR)) {
        log("Creating data directory...");
        fs.mkdirSync(DATA_DIR, { recursive: true });
      }

      // Create empty embeddings file if it doesn't exist
      if (!fs.existsSync(EMBEDDINGS_PATH)) {
        log("Creating empty embeddings file...");
        fs.writeFileSync(EMBEDDINGS_PATH, JSON.stringify([], null, 2));
      }
    }, "setupDataDirectory");
  }

  async loadDocumentationChunks() {
    return safeOperation(() => {
      const docsRoot = validatePath(path.join(process.cwd(), "docs"));
      const chunks = [];

      function processDirectory(dirPath) {
        const entries = fs.readdirSync(dirPath, { withFileTypes: true });

        for (const entry of entries) {
          const fullPath = validatePath(path.join(dirPath, entry.name));

          if (entry.isDirectory()) {
            processDirectory(fullPath);
          } else if (
            entry.isFile() &&
            (entry.name.endsWith(".md") || entry.name.endsWith(".mdx"))
          ) {
            const content = fs.readFileSync(fullPath, "utf8");
            validateInput(content, "string", "file content");
            const fileChunks = this.splitIntoChunks(content, fullPath);
            chunks.push(...fileChunks);
          }
        }
      }

      processDirectory(docsRoot);
      return chunks;
    }, "loadDocumentationChunks");
  }

  splitIntoChunks(content, filePath) {
    validateInput(content, "string", "content");
    validateInput(filePath, "string", "filePath");
    validatePath(filePath);

    // Extract frontmatter if present
    const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---/);
    let metadata = {
      filePath,
      header: "Introduction",
      lastUpdated: new Date().toISOString(),
    };

    if (frontmatterMatch) {
      const frontmatter = frontmatterMatch[1];
      const lines = frontmatter.split("\n");
      for (const line of lines) {
        const [key, ...valueParts] = line.split(":");
        if (key && valueParts.length > 0) {
          const value = valueParts.join(":").trim();
          switch (key.trim()) {
            case "title":
              metadata.header = value;
              break;
            case "lastUpdated":
              metadata.lastUpdated = value;
              break;
          }
        }
      }
      // Remove frontmatter from content
      content = content.replace(/^---\n[\s\S]*?\n---\n/, "");
    }

    // Extract first heading if no title in frontmatter
    if (metadata.header === "Introduction") {
      const headingMatch = content.match(/^#+\s+(.+)$/m);
      if (headingMatch) {
        metadata.header = headingMatch[1];
      }
    }

    // Split content into chunks based on headings
    const chunks = [];
    const sections = content.split(/(?=^#+\s+)/m);

    for (const section of sections) {
      if (!section.trim()) continue;

      const sectionHeaderMatch = section.match(/^#+\s+(.+)$/m);
      const sectionHeader = sectionHeaderMatch
        ? sectionHeaderMatch[1]
        : metadata.header;

      chunks.push(
        new IChunk(section.trim(), {
          ...metadata,
          header: sectionHeader,
        }),
      );
    }

    return chunks;
  }

  async computeDocsEmbeddings() {
    try {
      if (!this.isInitialized()) {
        throw new Error("Embedding manager not initialized");
      }

      log("Loading documentation chunks...");
      const chunks = await this.loadDocumentationChunks();
      validateInput(chunks, "object", "chunks");
      log(`Found ${chunks.length} chunks to process`);

      // Process chunks in batches
      const batchSize = 10;
      const embeddings = [];

      for (let i = 0; i < chunks.length; i += batchSize) {
        const batch = chunks.slice(i, i + batchSize);
        const batchTexts = batch.map((chunk) => {
          const content = chunk.getContent();
          validateInput(content, "string", "chunk content");
          return content;
        });

        log(
          `Processing batch ${Math.floor(i / batchSize) + 1}/${Math.ceil(chunks.length / batchSize)}...`,
        );

        // Get embeddings for the batch with error handling
        const [openAIEmbeddings, localEmbeddings] = await Promise.all([
          safeOperation(
            () => this.createOpenAIEmbeddings(batchTexts),
            "createOpenAIEmbeddings",
          ),
          safeOperation(
            () => this.createLocalEmbeddings(batchTexts),
            "createLocalEmbeddings",
          ),
        ]);

        // Store embeddings with metadata
        for (let j = 0; j < batch.length; j++) {
          const chunk = batch[j];
          chunk.setEmbeddings({
            openAI: openAIEmbeddings ? openAIEmbeddings[j] : null,
            local: localEmbeddings ? localEmbeddings[j] : null,
          });
          embeddings.push(chunk);
        }
      }

      // Save embeddings to file with proper error handling
      await safeOperation(() => {
        fs.writeFileSync(
          EMBEDDINGS_PATH,
          JSON.stringify(
            embeddings.map((chunk) => ({
              content: chunk.getContent(),
              metadata: chunk.getMetadata(),
              embeddings: chunk.getEmbeddings(),
            })),
            null,
            2,
          ),
        );
      }, "saveEmbeddings");

      log(`Successfully stored embeddings for ${embeddings.length} chunks`);
    } catch (error) {
      log(`Error computing embeddings: ${error.message}`, true);
      throw error;
    }
  }

  async loadStoredEmbeddings() {
    return safeOperation(() => {
      log(`Attempting to load embeddings from: ${EMBEDDINGS_PATH}`);

      if (!fs.existsSync(EMBEDDINGS_PATH)) {
        log("No stored embeddings found at the specified path", true);
        return [];
      }

      const data = fs.readFileSync(EMBEDDINGS_PATH, "utf8");
      const parsed = JSON.parse(data);
      validateInput(parsed, "object", "parsed embeddings");

      return parsed.map((item) => {
        validateInput(item.content, "string", "chunk content");
        validateInput(item.filePath, "string", "chunk filePath");

        // Convert the current format to the expected format
        const metadata = {
          filePath: item.filePath,
          header: item.header,
          lastUpdated: item.lastUpdated,
        };

        const embeddings = {
          openAI: item.openAIEmbedding,
          local: item.localEmbedding,
        };

        return new IChunk(item.content, metadata, embeddings);
      });
    }, "loadStoredEmbeddings");
  }

  async createOpenAIEmbeddings(texts) {
    validateInput(texts, "object", "texts");
    if (!this.openAIProvider.isInitialized()) {
      throw new Error("OpenAI provider not initialized");
    }
    return this.openAIProvider.createEmbeddings(texts);
  }

  async createLocalEmbeddings(texts) {
    validateInput(texts, "object", "texts");
    if (!this.localProvider.isInitialized()) {
      throw new Error("Local provider not initialized");
    }
    return this.localProvider.createEmbeddings(texts);
  }
}

module.exports = EmbeddingManager;
