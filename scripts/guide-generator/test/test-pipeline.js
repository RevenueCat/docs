const { log } = require("../utils/env");
const { analyzeUserContext } = require("../services/analysis");
const { findRelevantChunks } = require("../services/chunking");
const { generateGuide } = require("../services/generation");

async function main() {
  try {
    // Sample user input
    const userInput = {
      platform: "ios",
      hasBackend: true,
      isNewUser: true,
      description:
        "I need to integrate RevenueCat into my iOS app. I have a backend server and I'm new to RevenueCat.",
    };

    log("\n🚀 Starting full pipeline test...");
    log("User Input:", userInput);

    // Step 1: LLM Pre-processing
    log("\n📊 Running LLM pre-processing...");
    const analyzedContext = await analyzeUserContext(userInput);
    log("Analysis Results:", analyzedContext);

    // Step 2: Retrieve Chunks
    log("\n🔍 Finding relevant documentation chunks...");
    const relevantChunks = await findRelevantChunks(analyzedContext);
    log(`Found ${relevantChunks.length} relevant chunks`);

    // Step 3: Generate Guide
    log("\n📝 Generating step-by-step guide...");
    const guide = await generateGuide(relevantChunks, analyzedContext);
    log("\n📋 Final Guide:");
    log(guide);

    log("\n✅ Pipeline test completed successfully!");
  } catch (error) {
    log(`\n❌ Error in pipeline test: ${error.message}`, true);
    if (error.stack) {
      log("Stack trace:", error.stack, true);
    }
  }
}

// Run the test
main();
