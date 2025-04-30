const { findRelevantChunks } = require("../services/chunking");
const { log } = require("../utils/env");

// Test scenarios for documentation chunking service
const CHUNKING_SCENARIOS = {
  android_new_user: {
    platform: "android",
    experience: "new_user",
    goals: [
      "Set up RevenueCat SDK",
      "Configure in-app purchases",
      "Handle subscription status",
      "Implement backend integration",
      "Set up webhooks",
      "Configure API access",
    ],
    constraints: [
      "Using Kotlin",
      "Targeting Android 12+",
      "Using Google Play Billing",
      "Has custom backend",
      "Needs webhook support",
      "Requires API access",
    ],
  },
  ios_existing_user: {
    platform: "ios",
    experience: "existing_user",
    goals: [
      "Add iOS support to existing app",
      "Migrate existing purchases",
      "Handle cross-platform subscriptions",
    ],
    constraints: [
      "Using Swift",
      "Targeting iOS 15+",
      "Existing RevenueCat account",
      "Cross-platform support needed",
    ],
  },
  flutter_setup: {
    platform: "flutter",
    experience: "new_user",
    goals: [
      "Set up RevenueCat in Flutter",
      "Configure cross-platform purchases",
      "Handle subscription state",
    ],
    constraints: [
      "Using Flutter 3.0+",
      "Cross-platform support",
      "Custom backend integration",
    ],
  },
};

async function testChunking(scenarioName) {
  try {
    // Validate scenario name
    if (!CHUNKING_SCENARIOS[scenarioName]) {
      log(
        `\n❌ Invalid scenario name. Available scenarios: ${Object.keys(CHUNKING_SCENARIOS).join(", ")}`,
        true,
      );
      process.exit(1);
    }

    const scenario = CHUNKING_SCENARIOS[scenarioName];

    log(`\n🔍 Testing chunking service with scenario: ${scenarioName}`);
    log("\n📋 Input context:");
    log(JSON.stringify(scenario, null, 2));

    // Run the chunking service
    log("\n🔄 Finding relevant chunks...");
    const chunks = await findRelevantChunks(scenario);

    if (!chunks || chunks.length === 0) {
      log("\n❌ No relevant chunks found", true);
      process.exit(1);
    }

    log("\n✅ Found chunks:");
    chunks.forEach((chunk, index) => {
      log(`\nChunk ${index + 1} (Score: ${chunk.score.toFixed(2)}):`);
      log(`File: ${chunk.filePath}`);
      log(`Content: ${chunk.content.substring(0, 200)}...`);
    });
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
  log(Object.keys(CHUNKING_SCENARIOS).join("\n"));
  process.exit(1);
}

// Run the test
testChunking(scenarioName);
