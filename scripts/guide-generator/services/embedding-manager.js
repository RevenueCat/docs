/**
 * Embedding Manager Service
 *
 * This service manages pre-computed embeddings for documentation chunks.
 * It handles:
 * 1. Computing and storing embeddings for all documentation
 * 2. Loading embeddings when needed
 * 3. Updating embeddings when documentation changes
 */

const { log } = require("../../utils/env");
const fs = require("fs");
const path = require("path");
const { pipeline } = require("@xenova/transformers");
const OpenAI = require("openai");

// Initialize OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

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
const EMBEDDINGS_PATH = path.join(
  process.cwd(),
  "scripts/guide-generator/data/embeddings.json",
);
const DATA_DIR = path.join(process.cwd(), "scripts/guide-generator/data");

/**
 * Ensures the data directory exists and creates an empty embeddings file if needed
 * @returns {void}
 */
function setupDataDirectory() {
  try {
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
  } catch (error) {
    log(`Error setting up data directory: ${error.message}`, true);
    throw error;
  }
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
async function computeAndStoreEmbeddings() {
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
 * @returns {Array} - Array of chunks with their embeddings
 */
function loadStoredEmbeddings() {
  try {
    if (!fs.existsSync(EMBEDDINGS_PATH)) {
      log("No stored embeddings found");
      return [];
    }

    const data = fs.readFileSync(EMBEDDINGS_PATH, "utf8");
    return JSON.parse(data);
  } catch (error) {
    log(`Error loading embeddings: ${error.message}`, true);
    return [];
  }
}

module.exports = {
  computeAndStoreEmbeddings,
  loadStoredEmbeddings,
};
