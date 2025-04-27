/**
 * Documentation Chunking and Scoring Service
 *
 * This service processes documentation files to find relevant chunks based on user context.
 * It uses a sophisticated scoring system that combines multiple factors to determine relevance.
 *
 * Scoring Approach:
 * 1. Text Preprocessing
 *    - Converts text to lowercase
 *    - Removes special characters and numbers
 *    - Handles variations in text (e.g., "Google Play" vs "GooglePlay")
 *    - Tokenizes and normalizes text
 *    - Platform-specific term normalization
 *
 * 2. Embedding-based Scoring (Primary)
 *    - Uses pre-computed OpenAI embeddings for semantic understanding
 *    - Uses pre-computed sentence transformer embeddings for local similarity matching
 *    - Combines both approaches for robust results
 *
 * 3. Semantic Scoring (Secondary)
 *    - Platform-specific needs: +5 points per match
 *    - Required credentials: +4 points per match
 *    - Integration steps: +3 points per match
 *    - Testing requirements: +2 points per match
 *    - Backend integration: +4 points per match
 *    - Webhook setup: +3 points per match
 *    - API usage: +3 points per match
 *    - Legal/Compliance: +3 points per match
 *
 * 4. Contextual Scoring (Tertiary)
 *    - Platform-specific content: +2 points
 *    - New user setup content: +2 points
 *    - Backend integration content: +2 points
 *    - Quality penalties for short chunks
 *
 * 5. Final Filtering
 *    - Minimum score threshold: 3 points
 *    - Results are sorted by score (highest first)
 */

const { log } = require("../../utils/env");
const fs = require("fs");
const path = require("path");
const { pipeline } = require("@xenova/transformers");
const OpenAI = require("openai");
const { loadStoredEmbeddings } = require("./embedding-manager");

// Initialize OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Initialize sentence transformer
let sentenceTransformer;
async function initializeTransformer() {
  if (!sentenceTransformer) {
    log("Initializing local sentence transformer model...");
    sentenceTransformer = await pipeline(
      "feature-extraction",
      "Xenova/all-MiniLM-L6-v2",
    );
    log("Local model initialized successfully");
  }
  return sentenceTransformer;
}

/**
 * Creates embeddings for context using OpenAI
 * @param {string} text - Text to create embedding for
 * @returns {Promise<Array>} - Embedding vector
 */
async function createContextEmbedding(text) {
  try {
    log("Creating context embedding...");
    const response = await openai.embeddings.create({
      model: "text-embedding-3-small",
      input: text,
      encoding_format: "float",
    });
    log("Context embedding created successfully");
    return response.data[0].embedding;
  } catch (error) {
    log(`Error creating context embedding: ${error.message}`, true);
    return null;
  }
}

/**
 * Creates embeddings for context using sentence transformer
 * @param {string} text - Text to create embedding for
 * @returns {Promise<Array>} - Embedding vector
 */
async function createContextLocalEmbedding(text) {
  try {
    log("Creating local context embedding...");
    const model = await initializeTransformer();
    const output = await model(text, { pooling: "mean", normalize: true });
    log("Local context embedding created successfully");
    return Array.from(output.data);
  } catch (error) {
    log(`Error creating local context embedding: ${error.message}`, true);
    return null;
  }
}

/**
 * Calculates cosine similarity between two vectors
 * @param {Array} vec1 - First vector
 * @param {Array} vec2 - Second vector
 * @returns {number} - Cosine similarity score
 */
function cosineSimilarity(vec1, vec2) {
  if (!vec1 || !vec2 || vec1.length !== vec2.length) return 0;

  let dotProduct = 0;
  let norm1 = 0;
  let norm2 = 0;

  for (let i = 0; i < vec1.length; i++) {
    dotProduct += vec1[i] * vec2[i];
    norm1 += vec1[i] * vec1[i];
    norm2 += vec2[i] * vec2[i];
  }

  norm1 = Math.sqrt(norm1);
  norm2 = Math.sqrt(norm2);

  return dotProduct / (norm1 * norm2);
}

/**
 * Preprocesses text for better matching
 * @param {string} text - The text to preprocess
 * @returns {string} - Preprocessed text
 */
function preprocessText(text) {
  // Convert to lowercase
  let processed = text.toLowerCase();

  // Remove special characters and numbers, keep spaces
  processed = processed.replace(/[^a-z\s]/g, " ");

  // Remove extra whitespace
  processed = processed.replace(/\s+/g, " ").trim();

  // Handle common variations
  const variations = {
    "google play": "googleplay",
    "app store": "appstore",
    "store kit": "storekit",
    "in app": "inapp",
    "sdk version": "sdkversion",
    "api key": "apikey",
    // Android-specific variations
    "android studio": "androidstudio",
    gradle: "gradle",
    kotlin: "kotlin",
    java: "java",
    "google play billing": "googleplaybilling",
    "play billing": "playbilling",
    "billing client": "billingclient",
    "billing library": "billinglibrary",
    "play console": "playconsole",
    "google play console": "googleplayconsole",
    "android manifest": "androidmanifest",
    "build.gradle": "buildgradle",
    "settings.gradle": "settingsgradle",
    "gradle.properties": "gradleproperties",
    // Backend integration terms
    webhook: "webhook",
    "server notification": "servernotification",
    "api v1": "apiv1",
    "api v2": "apiv2",
    "rest api": "restapi",
    graphql: "graphql",
    backend: "backend",
    server: "server",
    // Legal/Compliance terms
    "privacy policy": "privacypolicy",
    "terms of service": "termsofservice",
    "data safety": "datasafety",
    gdpr: "gdpr",
    ccpa: "ccpa",
    // New user specific terms
    "getting started": "gettingstarted",
    "quick start": "quickstart",
    "first time": "firsttime",
    "initial setup": "initialsetup",
    "basic setup": "basicsetup",
    "basic configuration": "basicconfiguration",
  };

  for (const [original, normalized] of Object.entries(variations)) {
    processed = processed.replace(new RegExp(original, "g"), normalized);
  }

  return processed;
}

/**
 * Calculates the similarity score between two pieces of text
 * @param {string} text1 - First text
 * @param {string} text2 - Second text
 * @returns {number} - Similarity score (0-1)
 */
function calculateSimilarity(text1, text2) {
  const words1 = new Set(preprocessText(text1).split(" "));
  const words2 = new Set(preprocessText(text2).split(" "));

  const intersection = new Set([...words1].filter((x) => words2.has(x)));
  const union = new Set([...words1, ...words2]);

  return intersection.size / union.size;
}

/**
 * Finds relevant documentation chunks based on analyzed requirements
 * @param {Object} analyzedContext - The analyzed context from the LLM
 * @returns {Promise<Array>} - Array of relevant documentation chunks
 */
async function findRelevantChunks(analyzedContext) {
  try {
    log("\n🔍 Finding relevant documentation chunks...");

    // Load pre-computed embeddings
    const chunksWithEmbeddings = loadStoredEmbeddings();
    if (chunksWithEmbeddings.length === 0) {
      log(
        "\n❌ No pre-computed embeddings found. Please run the embedding computation first.",
      );
      return [];
    }

    // Create context embeddings
    const contextText = [
      ...analyzedContext.platformSpecificNeeds,
      ...analyzedContext.requiredCredentials,
      ...analyzedContext.integrationSteps,
      ...analyzedContext.testingRequirements,
    ].join(" ");

    log("Creating context embeddings...");
    const contextEmbedding = await createContextEmbedding(contextText);
    const contextLocalEmbedding =
      await createContextLocalEmbedding(contextText);

    // Score chunks using pre-computed embeddings
    const scoredChunks = chunksWithEmbeddings.map((chunk) => {
      let score = 0;

      // Calculate embedding-based scores
      if (contextEmbedding && chunk.openAIEmbedding) {
        const openAIScore = cosineSimilarity(
          contextEmbedding,
          chunk.openAIEmbedding,
        );
        score += openAIScore * 5;
      }

      if (contextLocalEmbedding && chunk.localEmbedding) {
        const localScore = cosineSimilarity(
          contextLocalEmbedding,
          chunk.localEmbedding,
        );
        score += localScore * 3;
      }

      // Fallback to semantic scoring if embeddings fail
      if (score === 0) {
        const content = preprocessText(chunk.content);

        // Score based on platform-specific needs
        if (
          analyzedContext.platformSpecificNeeds.some((need) => {
            const similarity = calculateSimilarity(content, need);
            return similarity > 0.7;
          })
        ) {
          score += 5;
        }

        // Score based on required credentials
        if (
          analyzedContext.requiredCredentials.some((credential) => {
            const similarity = calculateSimilarity(content, credential);
            return similarity > 0.6;
          })
        ) {
          score += 4;
        }

        // Score based on integration steps
        if (
          analyzedContext.integrationSteps.some((step) => {
            const similarity = calculateSimilarity(content, step);
            return similarity > 0.5;
          })
        ) {
          score += 3;
        }

        // Score based on testing requirements
        if (
          analyzedContext.testingRequirements.some((req) => {
            const similarity = calculateSimilarity(content, req);
            return similarity > 0.5;
          })
        ) {
          score += 2;
        }

        // Score based on backend integration
        if (analyzedContext.hasBackend) {
          const backendTerms = [
            "backend",
            "server",
            "webhook",
            "servernotification",
            "apiv1",
            "apiv2",
            "restapi",
            "graphql",
          ];
          const hasBackendContent = backendTerms.some((term) =>
            content.includes(term),
          );
          if (hasBackendContent) {
            score += 4;
          }
        }

        // Score based on webhook setup
        if (analyzedContext.hasBackend) {
          const webhookTerms = [
            "webhook",
            "servernotification",
            "notification",
            "event",
          ];
          const hasWebhookContent = webhookTerms.some((term) =>
            content.includes(term),
          );
          if (hasWebhookContent) {
            score += 3;
          }
        }

        // Score based on API usage
        const apiTerms = [
          "api",
          "rest",
          "graphql",
          "endpoint",
          "request",
          "response",
        ];
        const hasApiContent = apiTerms.some((term) => content.includes(term));
        if (hasApiContent) {
          score += 3;
        }

        // Score based on legal/compliance
        const legalTerms = [
          "privacy",
          "terms",
          "gdpr",
          "ccpa",
          "compliance",
          "legal",
          "datasafety",
        ];
        const hasLegalContent = legalTerms.some((term) =>
          content.includes(term),
        );
        if (hasLegalContent) {
          score += 3;
        }

        // Additional scoring based on context
        if (analyzedContext.platform === "android") {
          const androidTerms = [
            "android",
            "kotlin",
            "java",
            "googleplay",
            "gradle",
            "androidstudio",
            "billingclient",
          ];
          const hasAndroidContent = androidTerms.some((term) =>
            content.includes(term),
          );
          if (hasAndroidContent) {
            score += 2;
          }
        }

        // Score based on new user setup
        const newUserTerms = [
          "gettingstarted",
          "quickstart",
          "firsttime",
          "initialsetup",
          "basicsetup",
          "basicconfiguration",
        ];
        const hasNewUserContent = newUserTerms.some((term) =>
          content.includes(term),
        );
        if (hasNewUserContent) {
          score += 2;
        }
      }

      // Penalize chunks that are too short
      if (chunk.content.length < 100) {
        score -= 2;
      }

      return { ...chunk, score };
    });

    log(`\n✅ Found ${scoredChunks.length} chunks with embeddings`);

    return scoredChunks
      .filter((chunk) => chunk.score >= 3)
      .sort((a, b) => b.score - a.score);
  } catch (error) {
    log(`\n❌ Error finding chunks: ${error.message}`, true);
    if (error.stack) {
      log("Stack trace:", error.stack, true);
    }
    return [];
  }
}

module.exports = {
  findRelevantChunks,
};
