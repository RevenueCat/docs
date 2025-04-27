const dotenv = require("dotenv");
const path = require("path");

// Load environment variables from .env file
dotenv.config();

// Get OpenAI API key from environment
function getOpenAIKey() {
  const key = process.env.OPENAI_API_KEY;
  if (!key) {
    console.warn("Guide generation features are currently unavailable.");
    return null;
  }
  return key;
}

// Get verbose logging setting
function getVerboseLogs() {
  return process.env.VERBOSE_LOGS === "true";
}

// Log helper that always shows logs with timestamps
function log(message, alwaysShow = true) {
  const timestamp = new Date().toISOString();
  if (alwaysShow || getVerboseLogs()) {
    console.log(`[${timestamp}] ${message}`);
  }
}

module.exports = {
  getOpenAIKey,
  getVerboseLogs,
  log,
};
