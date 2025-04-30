/**
 * Embedding Manager Service
 *
 * This service manages pre-computed embeddings for documentation chunks.
 * It handles:
 * 1. Computing and storing embeddings for all documentation
 * 2. Loading embeddings when needed
 * 3. Updating embeddings when documentation changes
 */

const { log } = require("../utils/env");
const fs = require("fs");
const path = require("path");
const { pipeline } = require("@xenova/transformers");
const OpenAI = require("openai");
const {
  getEnv,
  validatePath,
  safeOperation,
  initOpenAI,
} = require("../utils/security");

// Initialize OpenAI client
const openai = initOpenAI();

// Initialize sentence transformer
let sentenceTransformer;
async function initializeTransformer() {
  if (!sentenceTransformer) {
    log("Initializing local sentence transformer model...");
    sentenceTransformer = await pipeline(
      "feature-extraction",
      "Xenova/all-MiniLM-L6-v2",
    );
    log("Local model initialized successfully");
  }
  return sentenceTransformer;
}

// Path to store embeddings
const EMBEDDINGS_PATH = validatePath(
  path.resolve(process.cwd(), "scripts/guide-generator/data/embeddings.json"),
);
const DATA_DIR = validatePath(
  path.resolve(process.cwd(), "scripts/guide-generator/data"),
);

/**
 * Ensures the data directory exists and creates an empty embeddings file if needed
 * @returns {void}
 */
function setupDataDirectory() {
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

/**
 * Creates embeddings for a batch of texts using OpenAI
 * @param {Array<string>} texts - Array of texts to create embeddings for
 * @returns {Promise<Array>} - Array of embedding vectors
 */
async function createOpenAIEmbeddings(texts) {
  try {
    log(`Creating OpenAI embeddings for ${texts.length} texts...`);
    const response = await openai.embeddings.create({
      model: "text-embedding-3-small",
      input: texts,
      encoding_format: "float",
    });
    log("OpenAI embeddings created successfully");
    return response.data.map((item) => item.embedding);
  } catch (error) {
    log(`Error creating OpenAI embeddings: ${error.message}`, true);
    return null;
  }
}

/**
 * Creates embeddings for a batch of texts using sentence transformer
 * @param {Array<string>} texts - Array of texts to create embeddings for
 * @returns {Promise<Array>} - Array of embedding vectors
 */
async function createLocalEmbeddings(texts) {
  try {
    log(`Creating local embeddings for ${texts.length} texts...`);
    const model = await initializeTransformer();
    const outputs = await Promise.all(
      texts.map((text) => model(text, { pooling: "mean", normalize: true })),
    );
    log("Local embeddings created successfully");
    return outputs.map((output) => Array.from(output.data));
  } catch (error) {
    log(`Error creating local embeddings: ${error.message}`, true);
    return null;
  }
}

/**
 * Loads all documentation chunks and their metadata
 * @returns {Array} - Array of documentation chunks with metadata
 */
function loadDocumentationChunks() {
  const docsRoot = path.join(process.cwd(), "docs");
  const chunks = [];

  function processDirectory(dirPath) {
    const entries = fs.readdirSync(dirPath, { withFileTypes: true });

    for (const entry of entries) {
      const fullPath = path.join(dirPath, entry.name);

      if (entry.isDirectory()) {
        processDirectory(fullPath);
      } else if (
        entry.isFile() &&
        (entry.name.endsWith(".md") || entry.name.endsWith(".mdx"))
      ) {
        const content = fs.readFileSync(fullPath, "utf8");
        const fileChunks = splitIntoChunks(content, fullPath);
        chunks.push(...fileChunks);
      }
    }
  }

  processDirectory(docsRoot);
  return chunks;
}

/**
 * Splits markdown content into chunks
 * @param {string} content - Markdown content
 * @param {string} filePath - Path to the file
 * @returns {Array} - Array of content chunks
 */
function splitIntoChunks(content, filePath) {
  const headerRegex = /^#{2,3}\s+(.+)$/gm;
  const chunks = [];
  let lastIndex = 0;
  let match;

  while ((match = headerRegex.exec(content)) !== null) {
    const header = match[1];
    const startIndex = lastIndex;
    const endIndex = match.index;

    if (startIndex < endIndex) {
      chunks.push({
        content: content.substring(startIndex, endIndex).trim(),
        header: header,
        filePath: filePath,
      });
    }

    lastIndex = endIndex;
  }

  if (lastIndex < content.length) {
    chunks.push({
      content: content.substring(lastIndex).trim(),
      header: "Introduction",
      filePath: filePath,
    });
  }

  return chunks;
}

/**
 * Computes and stores embeddings for all documentation chunks
 * @returns {Promise<void>}
 */
async function computeDocsEmbeddings() {
  try {
    // Ensure data directory exists
    setupDataDirectory();

    log("Loading documentation chunks...");
    const chunks = loadDocumentationChunks();
    log(`Found ${chunks.length} chunks to process`);

    // Process chunks in batches
    const batchSize = 10;
    const embeddings = [];

    for (let i = 0; i < chunks.length; i += batchSize) {
      const batch = chunks.slice(i, i + batchSize);
      const batchTexts = batch.map((chunk) => chunk.content);

      log(
        `Processing batch ${Math.floor(i / batchSize) + 1}/${Math.ceil(chunks.length / batchSize)}...`,
      );

      // Get embeddings for the batch
      const openAIEmbeddings = await createOpenAIEmbeddings(batchTexts);
      const localEmbeddings = await createLocalEmbeddings(batchTexts);

      // Store embeddings with metadata
      for (let j = 0; j < batch.length; j++) {
        embeddings.push({
          ...batch[j],
          openAIEmbedding: openAIEmbeddings ? openAIEmbeddings[j] : null,
          localEmbedding: localEmbeddings ? localEmbeddings[j] : null,
          lastUpdated: new Date().toISOString(),
        });
      }
    }

    // Save embeddings to file
    fs.writeFileSync(EMBEDDINGS_PATH, JSON.stringify(embeddings, null, 2));
    log(`Successfully stored embeddings for ${embeddings.length} chunks`);
  } catch (error) {
    log(`Error computing embeddings: ${error.message}`, true);
    throw error;
  }
}

/**
 * Loads stored embeddings
 * @returns {Promise<Array>} - Array of chunks with their embeddings
 */
async function loadStoredEmbeddings() {
  return safeOperation(() => {
    log(`Attempting to load embeddings from: ${EMBEDDINGS_PATH}`);

    if (!fs.existsSync(EMBEDDINGS_PATH)) {
      log("No stored embeddings found at the specified path", true);
      return [];
    }

    log("Embeddings file exists, attempting to read...");
    const data = fs.readFileSync(EMBEDDINGS_PATH, "utf8");
    log("File read successfully, parsing JSON...");

    const parsed = JSON.parse(data);
    log(`Raw parsed data type: ${typeof parsed}`);
    log(`Is Array: ${Array.isArray(parsed)}`);
    log(`Has length property: ${"length" in parsed}`);
    log(`Length value: ${parsed.length}`);
    log(`First item type: ${typeof parsed[0]}`);
    log(`First item keys: ${Object.keys(parsed[0] || {}).join(", ")}`);

    // Ensure we're returning an array
    const result = Array.isArray(parsed) ? parsed : [];
    log(`Returning array with ${result.length} items`);
    return result;
  }, "loadStoredEmbeddings").then((result) => {
    if (result === null) {
      log("Error in loadStoredEmbeddings operation", true);
      return [];
    }
    return result;
  });
}

module.exports = {
  computeDocsEmbeddings,
  loadStoredEmbeddings,
};
