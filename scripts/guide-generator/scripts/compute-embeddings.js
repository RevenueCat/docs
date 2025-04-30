/**
 * Script to compute and store embeddings for all documentation chunks.
 * This should be run periodically (e.g., daily) to keep embeddings up to date.
 *
 * Usage:
 * node compute-embeddings.js [--force]
 *
 * --force: Force recomputation even if embeddings exist
 */

const { log } = require("../utils/env");
const { computeDocsEmbeddings } = require("../services/embedding-manager");
const fs = require("fs");
const path = require("path");

const EMBEDDINGS_PATH = path.join(
  process.cwd(),
  "scripts/guide-generator/data/embeddings.json",
);

async function main() {
  try {
    const force = process.argv.includes("--force");
    const embeddingsExist = fs.existsSync(EMBEDDINGS_PATH);

    if (embeddingsExist && !force) {
      log("Embeddings already exist. Use --force to recompute.");
      return;
    }

    log("Starting embedding computation...");
    await computeDocsEmbeddings();
    log("Embedding computation completed successfully");
  } catch (error) {
    log(`Error computing embeddings: ${error.message}`, true);
    process.exit(1);
  }
}

main();
