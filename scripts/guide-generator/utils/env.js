const dotenv = require("dotenv");
const path = require("path");
const { validatePath, getEnv } = require("./security");

// Load environment variables from .env file
const envPath = validatePath(path.join(process.cwd(), ".env"));
dotenv.config({ path: envPath });

// Get OpenAI API key
const key = getEnv("OPENAI_API_KEY");

/**
 * Gets the OpenAI API key with security checks
 * @returns {string|null} The API key or null if not available
 */
function getOpenAIKey() {
  if (!key) {
    console.warn("Guide generation features are currently unavailable.");
    return null;
  }
  return key;
}

/**
 * Gets verbose logging setting
 * @returns {boolean} Whether verbose logging is enabled
 */
function getVerboseLogs() {
  return process.env.VERBOSE_LOGS === "true";
}

/**
 * Log helper with timestamps and security
 * @param {string} message - The message to log
 * @param {boolean} alwaysShow - Whether to always show the log
 * @param {boolean} secure - Whether the message contains sensitive data
 */
function log(message, alwaysShow = true, secure = false) {
  const timestamp = new Date().toISOString();
  if (alwaysShow || getVerboseLogs()) {
    // Sanitize message if it's not secure
    const sanitizedMessage = secure
      ? message
      : message.replace(/api[-_]?key/i, "[REDACTED]");
    console.log(`[${timestamp}] ${sanitizedMessage}`);
  }
}

module.exports = {
  getOpenAIKey,
  getVerboseLogs,
  log,
};
