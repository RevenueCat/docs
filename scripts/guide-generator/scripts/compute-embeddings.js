/**
 * Script to compute and store embeddings for all documentation chunks.
 * This should be run periodically (e.g., daily) to keep embeddings up to date.
 */

const { log } = require("../../utils/env");
const { computeAndStoreEmbeddings } = require("../services/embedding-manager");

async function main() {
  try {
    log("Starting embedding computation...");
    await computeAndStoreEmbeddings();
    log("Embedding computation completed successfully");
  } catch (error) {
    log(`Error computing embeddings: ${error.message}`, true);
    process.exit(1);
  }
}

main();
