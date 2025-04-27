const path = require("path");
const fs = require("fs").promises;
const { log } = require("./utils/env");
const { analyzeUserContext } = require("./services/analysis");
const { createChunks } = require("./services/chunking");
const { scoreChunks } = require("./services/scoring");
const { generateGuide } = require("./services/generation");

/**
 * Main orchestrator for guide generation
 * @param {Object} options - Command line options
 * @returns {Promise<void>}
 */
async function generateCustomGuide(options) {
  try {
    // Load user context
    const userContext = await loadUserContext(options);
    if (!userContext) {
      log(
        "No user context provided. Please specify a scenario or context file.",
        true,
      );
      process.exit(1);
    }
    log("\nUser Context:", JSON.stringify(userContext, null, 2));

    // Analyze user context
    const reasonedContext = await analyzeUserContext(userContext);
    log("\nReasoned Context:", JSON.stringify(reasonedContext, null, 2));

    // Get the docs directory path
    const docsPath = path.resolve(__dirname, "../../docs/docs");
    log("\nLoading documentation from:", docsPath);

    // Verify the path exists
    try {
      const stats = await fs.stat(docsPath);
      if (!stats.isDirectory()) {
        throw new Error(`${docsPath} is not a directory`);
      }
      log(`Directory exists and is accessible`, true);
    } catch (error) {
      log(`Error accessing docs directory: ${error.message}`, true);
      throw error;
    }

    // Create chunks
    const chunks = await createChunks(docsPath);
    log(`\nLoaded ${chunks.length} documentation chunks`);

    // Score chunks
    const scoredChunks = scoreChunks(chunks, reasonedContext);
    log(`\nFound ${scoredChunks.length} relevant chunks`);

    if (scoredChunks.length === 0) {
      log("No relevant chunks found for the given context.", true);
      process.exit(1);
    }

    // Print top chunks for inspection
    log("\nTop relevant chunks:");
    log("===================");
    scoredChunks.slice(0, options.limit).forEach((chunk, index) => {
      log(`\nChunk ${index + 1}:`);
      log("-------------------");
      log(`Path: ${chunk.path}`);
      log(`Score: ${chunk.score}`);
      log(`Platforms: ${chunk.platform.join(", ") || "none"}`);
      log(`Tags: ${chunk.tags.join(", ") || "none"}`);
      log("Content preview:");
      const lines = chunk.content
        .split("\n")
        .filter((line) => line.trim().length > 0)
        .slice(0, 3);
      lines.forEach((line) => log(line.trim()));
      if (lines.length === 0) log("(empty content)");
      log("-------------------");
    });

    // Save chunks to a JSON file for inspection
    const outputPath = path.resolve(__dirname, "..", options.outputFile);
    await fs.writeFile(
      outputPath,
      JSON.stringify(
        {
          userContext,
          reasonedContext,
          chunks: scoredChunks,
        },
        null,
        2,
      ),
    );
    log(`\nSaved results to: ${outputPath}`);

    if (!options.dryRun) {
      // Generate the guide
      const guide = await generateGuide(scoredChunks, reasonedContext);
      log("\nGenerated Guide:");
      log("================");
      log(guide);
    } else {
      log("\nDry run completed - no guide generation performed");
    }
  } catch (error) {
    log(
      "An error occurred while processing the documentation:",
      error.message,
      true,
    );
    process.exit(1);
  }
}

// Load user context from file or command line
async function loadUserContext(options) {
  if (options.scenario) {
    try {
      // Load from test-context-helper.json
      const helperPath = path.join(__dirname, "test-context-helper.json");
      log(`Loading scenario from: ${helperPath}`, true);
      const helperContent = await fs.readFile(helperPath, "utf-8");
      const scenarios = JSON.parse(helperContent).scenarios;

      if (!scenarios[options.scenario]) {
        const availableScenarios = Object.keys(scenarios).join(", ");
        log(
          `Scenario "${options.scenario}" not found. Available scenarios: ${availableScenarios}`,
          true,
        );
        process.exit(1);
      }

      const context = scenarios[options.scenario];
      log(`Loaded scenario "${options.scenario}":`, true);
      log(JSON.stringify(context, null, 2), true);
      return context;
    } catch (error) {
      log(`Error loading scenario: ${error.message}`, true);
      process.exit(1);
    }
  } else if (options.contextFile) {
    try {
      const contextContent = await fs.readFile(options.contextFile, "utf-8");
      return JSON.parse(contextContent);
    } catch (error) {
      log(`Error loading context file: ${error.message}`, true);
      process.exit(1);
    }
  } else if (options.userContext) {
    return {
      description: options.userContext,
      platforms: options.platform ? [options.platform] : [],
      hasRevenueCatAccount: false,
      hasBackend: false,
      currentStage: "starting",
    };
  }
  return null;
}

module.exports = {
  generateCustomGuide,
};
