const OpenAI = require("openai");
const {
  getEnv,
  validateInput,
  safeOperation,
  initOpenAI,
} = require("../../utils/security");
const IEmbeddingProvider = require("../../interfaces/embedding-provider.interface");

/**
 * OpenAI Embedding Provider Implementation
 * @implements {IEmbeddingProvider}
 *
 * Uses OpenAI's text-embedding-3-small model to generate embeddings for semantic search.
 * See https://platform.openai.com/docs/guides/embeddings for more details.
 *
 * The embeddings are used to measure the relatedness of text strings, enabling:
 * - Search (ranking results by relevance to a query)
 * - Clustering (grouping similar text strings)
 * - Recommendations (finding related content)
 *
 * The model returns a vector of 1536 floating point numbers by default.
 * These vectors are normalized to length 1, making cosine similarity an efficient
 * way to measure relatedness between embeddings.
 */
class OpenAIEmbeddingProvider extends IEmbeddingProvider {
  constructor() {
    super();
    this.client = null;
    this.initialized = false;
    this.modelName = "text-embedding-3-small";
    this.modelConfig = {
      encoding_format: "float",
    };
  }

  /**
   * Initialize the OpenAI client
   * @returns {Promise<void>}
   */
  async initialize() {
    if (this.initialized) return;

    try {
      this.client = await safeOperation(() => initOpenAI(), "initOpenAI");
      if (!this.client) {
        throw new Error("Failed to initialize OpenAI client");
      }
      this.initialized = true;
    } catch (error) {
      console.error("Error initializing OpenAI provider:", error);
      throw error;
    }
  }

  /**
   * Check if the provider is initialized
   * @returns {boolean}
   */
  isInitialized() {
    return this.initialized;
  }

  /**
   * Create embedding for a single text
   * @param {string} text - Text to create embedding for
   * @returns {Promise<number[]>} - Embedding vector
   */
  async createEmbedding(text) {
    validateInput(text, "string", "text");

    if (!this.initialized) {
      await this.initialize();
    }

    return safeOperation(async () => {
      const response = await this.client.embeddings.create({
        model: this.modelName,
        input: text,
        ...this.modelConfig,
      });
      return response.data[0].embedding;
    }, "createOpenAIEmbedding");
  }

  /**
   * Create embeddings for multiple texts
   * @param {string[]} texts - Array of texts to create embeddings for
   * @returns {Promise<number[][]>} - Array of embedding vectors
   */
  async createEmbeddings(texts) {
    validateInput(texts, "object", "texts");
    texts.forEach((text, index) =>
      validateInput(text, "string", `texts[${index}]`),
    );

    if (!this.initialized) {
      await this.initialize();
    }

    return safeOperation(async () => {
      const response = await this.client.embeddings.create({
        model: this.modelName,
        input: texts,
        ...this.modelConfig,
      });
      return response.data.map((item) => item.embedding);
    }, "createOpenAIEmbeddings");
  }

  /**
   * Get the model name
   * @returns {string}
   */
  getModelName() {
    return this.modelName;
  }

  /**
   * Get the model configuration
   * @returns {Object}
   */
  getModelConfig() {
    return this.modelConfig;
  }
}

module.exports = OpenAIEmbeddingProvider;
