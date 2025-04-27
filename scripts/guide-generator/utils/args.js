/**
 * Parses command line arguments
 * @returns {Object} Parsed options
 */
function parseArgs() {
  const args = process.argv.slice(2);
  const options = {
    dryRun: false,
    platform: null,
    tag: null,
    limit: 3,
    outputFile: "temp-chunks.json",
    userContext: null,
    contextFile: null,
    scenario: null,
  };

  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    if (arg === "--dry-run") {
      options.dryRun = true;
    } else if (arg === "--platform" && i + 1 < args.length) {
      options.platform = args[++i];
    } else if (arg === "--tag" && i + 1 < args.length) {
      options.tag = args[++i];
    } else if (arg === "--limit" && i + 1 < args.length) {
      options.limit = parseInt(args[++i], 10);
    } else if (arg === "--output" && i + 1 < args.length) {
      options.outputFile = args[++i];
    } else if (arg === "--context" && i + 1 < args.length) {
      options.userContext = args[++i];
    } else if (arg === "--context-file" && i + 1 < args.length) {
      options.contextFile = args[++i];
    } else if (arg === "--scenario" && i + 1 < args.length) {
      options.scenario = args[++i];
    }
  }

  return options;
}

module.exports = {
  parseArgs,
};
