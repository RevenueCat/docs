const { log } = require("../../utils/env");
const { findRelevantChunks } = require("../services/chunking");
const { getMockAnalysis } = require("./mock-analysis");

async function testChunking(scenarioName) {
  try {
    log("\n🔍 Testing chunking service...");

    // Get the platform from the scenario name
    const platform = scenarioName.split("_")[0];

    // Get mock analysis for the platform
    const analyzedContext = getMockAnalysis(platform);
    if (!analyzedContext) {
      log(`\n❌ Invalid platform: ${platform}`);
      log("\nAvailable platforms:");
      log("- android");
      log("- ios");
      return;
    }

    log("\n📋 Using mock analysis:");
    log(JSON.stringify(analyzedContext, null, 2));

    // Find relevant chunks using the mock analysis
    const relevantChunks = await findRelevantChunks(analyzedContext);

    // Display results
    log("\n📊 Chunking Results:");
    log(`Found ${relevantChunks.length} relevant chunks`);

    relevantChunks.forEach((chunk, index) => {
      log(`\nChunk ${index + 1}:`);
      log(`File: ${chunk.filePath}`);
      log(`Header: ${chunk.header}`);
      log(`Score: ${chunk.score}`);
      log("Content preview:");
      log(chunk.content.substring(0, 200) + "...");
    });
  } catch (error) {
    log(`\n❌ Error in test: ${error.message}`, true);
    if (error.stack) {
      log("Stack trace:", error.stack, true);
    }
  }
}

// Get scenario name from command line
const scenarioName = process.argv[2];
if (!scenarioName) {
  log("\n❌ Please provide a scenario name");
  log("\nUsage: node test-chunking.js <scenario_name>");
  log("\nAvailable scenarios:");
  log("- android_new_user");
  log("- ios_existing_user");
  process.exit(1);
}

testChunking(scenarioName);
