const { analyzeUserContext } = require("../services/analysis");
const { log, getOpenAIKey } = require("../utils/env");

// Test scenarios for LLM pre-processing step
const ANALYSIS_SCENARIOS = {
  android_new_user: {
    description:
      "I want to integrate RevenueCat into my product. I have a native android app, no account yet and my business model is subscription based",
    platforms: ["android"],
    hasRevenueCatAccount: false,
    hasBackend: true,
    currentStage: "starting",
  },
  ios_existing_user: {
    description:
      "I already have a RevenueCat account and want to add iOS support to my existing React Native app",
    platforms: ["ios", "react-native"],
    hasRevenueCatAccount: true,
    hasBackend: true,
    currentStage: "implementing",
  },
  flutter_setup: {
    description:
      "Need help setting up RevenueCat in my Flutter app with a custom backend",
    platforms: ["flutter"],
    hasRevenueCatAccount: true,
    hasBackend: true,
    currentStage: "starting",
  },
};

async function testAnalysis(scenarioName) {
  try {
    // Check OpenAI API key
    const apiKey = getOpenAIKey();
    if (!apiKey) {
      log(
        "\n❌ OpenAI API key not found. Please set OPENAI_API_KEY in your .env file.",
        true,
      );
      process.exit(1);
    }

    // Validate scenario name
    if (!ANALYSIS_SCENARIOS[scenarioName]) {
      log(
        `\n❌ Invalid scenario name. Available scenarios: ${Object.keys(ANALYSIS_SCENARIOS).join(", ")}`,
        true,
      );
      process.exit(1);
    }

    const scenario = ANALYSIS_SCENARIOS[scenarioName];

    log(`\n🔍 Testing analysis service with scenario: ${scenarioName}`);
    log("\n📋 Input context:");
    log(JSON.stringify(scenario, null, 2));

    // Run the analysis
    log("\n🔄 Starting analysis...");
    const analyzedContext = await analyzeUserContext(scenario);

    if (!analyzedContext || Object.keys(analyzedContext).length === 0) {
      log("\n❌ Analysis returned empty results", true);
      process.exit(1);
    }

    log("\n✅ Analysis results:");
    log(JSON.stringify(analyzedContext, null, 2));
  } catch (error) {
    log("\n❌ Test failed:", error.message, true);
    if (error.stack) {
      log("\nStack trace:", error.stack, true);
    }
    process.exit(1);
  }
}

// Get scenario name from command line arguments
const scenarioName = process.argv[2];
if (!scenarioName) {
  log("\n❌ Please provide a scenario name. Available scenarios:", true);
  log(Object.keys(ANALYSIS_SCENARIOS).join("\n"));
  process.exit(1);
}

// Run the test
testAnalysis(scenarioName);
