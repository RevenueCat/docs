const IChunk = require("./chunk.interface");
const IEmbeddingProvider = require("./embedding-provider.interface");

/**
 * @typedef {Object} EmbeddingUpdate
 * @property {string} filePath - Path to the file to update
 * @property {string} content - New content
 * @property {Object} [embeddings] - Optional new embeddings
 */

/**
 * Interface for managing embeddings
 * @interface IEmbeddingManager
 */
class IEmbeddingManager {
  /**
   * @param {IEmbeddingProvider} openAIProvider - OpenAI embedding provider
   * @param {IEmbeddingProvider} localProvider - Local embedding provider
   * @param {string} storagePath - Path to store embeddings
   */
  constructor(openAIProvider, localProvider, storagePath) {
    this.openAIProvider = openAIProvider;
    this.localProvider = localProvider;
    this.storagePath = storagePath;
  }

  /**
   * Initialize the embedding manager
   * @returns {Promise<void>}
   */
  async initialize() {
    throw new Error("Method not implemented");
  }

  /**
   * Load all stored embeddings
   * @returns {Promise<IChunk[]>}
   */
  async loadEmbeddings() {
    throw new Error("Method not implemented");
  }

  /**
   * Save embeddings to storage
   * @param {IChunk[]} chunks - Chunks with embeddings to save
   * @returns {Promise<void>}
   */
  async saveEmbeddings(chunks) {
    throw new Error("Method not implemented");
  }

  /**
   * Update specific embeddings
   * @param {EmbeddingUpdate[]} updates - Updates to apply
   * @returns {Promise<void>}
   */
  async updateEmbeddings(updates) {
    throw new Error("Method not implemented");
  }

  /**
   * Create chunks from content
   * @param {string} content - Content to chunk
   * @param {Object} metadata - Metadata for the chunks
   * @returns {IChunk[]}
   */
  createChunks(content, metadata) {
    throw new Error("Method not implemented");
  }

  /**
   * Load documentation chunks from files
   * @returns {Promise<IChunk[]>}
   */
  async loadDocumentationChunks() {
    throw new Error("Method not implemented");
  }

  /**
   * Process a batch of chunks
   * @param {IChunk[]} chunks - Chunks to process
   * @param {number} batchSize - Size of each batch
   * @returns {Promise<IChunk[]>}
   */
  async processBatch(chunks, batchSize) {
    throw new Error("Method not implemented");
  }

  /**
   * Compute embeddings for all documentation
   * @returns {Promise<void>}
   */
  async computeDocsEmbeddings() {
    throw new Error("Method not implemented");
  }
}

module.exports = IEmbeddingManager;
