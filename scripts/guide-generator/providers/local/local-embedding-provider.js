const { pipeline } = require("@xenova/transformers");
const { validateInput, safeOperation } = require("../../utils/security");
const IEmbeddingProvider = require("../../interfaces/embedding-provider.interface");

/**
 * Local Embedding Provider Implementation
 * @implements {IEmbeddingProvider}
 */
class LocalEmbeddingProvider extends IEmbeddingProvider {
  constructor() {
    super();
    this.model = null;
    this.initialized = false;
    this.modelName = "Xenova/all-MiniLM-L6-v2";
    this.modelConfig = {
      pooling: "mean",
      normalize: true,
    };
  }

  /**
   * Initialize the local model
   * @returns {Promise<void>}
   */
  async initialize() {
    if (this.initialized) return;

    try {
      this.model = await safeOperation(
        () => pipeline("feature-extraction", this.modelName),
        "initLocalModel",
      );
      this.initialized = true;
    } catch (error) {
      console.error("Error initializing local provider:", error);
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
      const output = await this.model(text, this.modelConfig);
      return Array.from(output.data);
    }, "createLocalEmbedding");
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
      const outputs = await Promise.all(
        texts.map((text) => this.model(text, this.modelConfig)),
      );
      return outputs.map((output) => Array.from(output.data));
    }, "createLocalEmbeddings");
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

module.exports = LocalEmbeddingProvider;
