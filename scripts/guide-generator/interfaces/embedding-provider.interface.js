/**
 * @typedef {Object} EmbeddingProviderConfig
 * @property {string} modelName - Name of the model to use
 * @property {Object} modelConfig - Configuration specific to the model
 */

/**
 * Interface for embedding providers
 * @interface IEmbeddingProvider
 */
class IEmbeddingProvider {
  /**
   * Initialize the embedding provider
   * @returns {Promise<void>}
   */
  async initialize() {
    throw new Error("Method not implemented");
  }

  /**
   * Check if the provider is initialized
   * @returns {boolean}
   */
  isInitialized() {
    throw new Error("Method not implemented");
  }

  /**
   * Create embedding for a single text
   * @param {string} text - Text to create embedding for
   * @returns {Promise<number[]>} - Embedding vector
   */
  async createEmbedding(text) {
    throw new Error("Method not implemented");
  }

  /**
   * Create embeddings for multiple texts
   * @param {string[]} texts - Array of texts to create embeddings for
   * @returns {Promise<number[][]>} - Array of embedding vectors
   */
  async createEmbeddings(texts) {
    throw new Error("Method not implemented");
  }

  /**
   * Get the model name
   * @returns {string}
   */
  getModelName() {
    throw new Error("Method not implemented");
  }

  /**
   * Get the model configuration
   * @returns {Object}
   */
  getModelConfig() {
    throw new Error("Method not implemented");
  }
}

module.exports = IEmbeddingProvider;
