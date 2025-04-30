/**
 * Script to compute and store embeddings for documentation chunks.
 *
 * This script uses OpenAI's text-embedding-3-small model to generate embeddings
 * for each documentation chunk. The embeddings are stored in embeddings.json
 * and used for semantic search to find relevant documentation based on user queries.
 *
 * The embeddings.json file contains an array of chunks with the following structure:
 * {
 *   content: string,      // The actual documentation content
 *   header: string,       // The section header
 *   filePath: string,     // Path to the source file
 *   openAIEmbedding: number[], // The embedding vector (1536 dimensions)
 *   lastUpdated: string   // Timestamp of last update
 * }
 *
 * Usage: node embed-official-docs.js [--force]
 *   --force: Regenerate all embeddings even if they exist
 *
 * See https://platform.openai.com/docs/guides/embeddings for more details
 * about OpenAI's embedding models and their usage.
 */

const { log } = require("../utils/env");
const fs = require("fs");
const path = require("path");
const { validatePath } = require("../utils/security");
const EmbeddingManager = require("../services/embedding-manager");

const EMBEDDINGS_PATH = validatePath(
  path.join(process.cwd(), "data/embeddings.json"),
);

async function main() {
  try {
    const force = process.argv.includes("--force");
    const embeddingsExist = fs.existsSync(EMBEDDINGS_PATH);

    if (embeddingsExist && !force) {
      log("Embeddings already exist. Use --force to recompute.");
      return;
    }

    // Initialize the embedding manager
    const embeddingManager = new EmbeddingManager();
    await embeddingManager.initialize();

    log("Starting embedding computation...");
    await embeddingManager.computeDocsEmbeddings();
    log("Embedding computation completed successfully");
  } catch (error) {
    log(`Error computing embeddings: ${error.message}`, true);
    process.exit(1);
  }
}

main();
