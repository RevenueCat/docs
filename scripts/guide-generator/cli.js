/**
 * Command Line Interface (CLI) for the Guide Generator
 *
 * This is the main entry point for the guide generation system. It provides a command-line
 * interface for generating custom integration guides based on user requirements.
 *
 * The CLI:
 * 1. Parses command-line arguments using the args utility
 * 2. Validates the input options
 * 3. Coordinates the guide generation process
 * 4. Handles errors and provides logging
 *
 * Usage (planned):
 * ```bash
 * node cli.js --platform android --requirements "subscriptions, analytics"
 * ```
 *
 * Note: Currently in development. We're using test scripts (test-analysis.js and test-chunking.js)
 * for development and testing. This CLI will be the main entry point for production use.
 */

const { parseArgs } = require("./utils/args");
const { generateCustomGuide } = require("./index");
const { log } = require("./utils/env");

async function main() {
  try {
    const options = parseArgs();
    log("\nOptions:", JSON.stringify(options, null, 2));
    await generateCustomGuide(options);
  } catch (error) {
    log("An error occurred:", error.message, true);
    process.exit(1);
  }
}

// Run the script
main();
