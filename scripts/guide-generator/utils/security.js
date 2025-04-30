const path = require("path");
const { OpenAI } = require("openai");

/**
 * Gets an environment variable, returns null if not found
 * @param {string} key - The environment variable key
 * @returns {string|null} - The environment variable value or null if not found
 */
const getEnv = (key) => {
  return process.env[key] || null;
};

/**
 * Validates input is not null/undefined and is of the correct type
 * @param {*} input - The input to validate
 * @param {string} type - The expected type
 * @param {string} name - The name of the input for error messages
 * @returns {*} - The validated input
 * @throws {Error} - If validation fails
 */
const validateInput = (input, type = "object", name = "input") => {
  if (!input) {
    throw new Error(`${name} is required`);
  }
  if (typeof input !== type) {
    throw new Error(`${name} must be a ${type}`);
  }
  return input;
};

/**
 * Validates a file path to prevent directory traversal
 * @param {string} filePath - The path to validate
 * @returns {string} - The normalized and validated path
 * @throws {Error} - If the path is invalid
 */
const validatePath = (filePath) => {
  const normalized = path.normalize(filePath);
  if (normalized.includes("..")) {
    throw new Error("Invalid path: directory traversal not allowed");
  }
  return normalized;
};

/**
 * Wraps an async operation with basic error handling
 * @param {Function} operation - The async operation to execute
 * @param {string} context - Context for error messages
 * @returns {Promise<*>} - The result of the operation or null if it fails
 */
const safeOperation = async (operation, context = "operation") => {
  try {
    return await operation();
  } catch (error) {
    console.error(`${context} failed:`, error.message);
    return null;
  }
};

/**
 * Initializes OpenAI with graceful error handling
 * @returns {OpenAI|null} - OpenAI instance or null if API key is missing
 */
const initOpenAI = () => {
  const apiKey = getEnv("OPENAI_API_KEY");
  if (!apiKey) {
    console.error(
      "OpenAI API key is missing. Some features may be unavailable.",
    );
    return null;
  }
  return new OpenAI({ apiKey });
};

module.exports = {
  getEnv,
  validateInput,
  validatePath,
  safeOperation,
  initOpenAI,
};
