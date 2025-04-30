/**
 * Interface for managing document embeddings
 * @interface IEmbeddingManager
 */
class IEmbeddingManager {
  /**
   * Initialize the embedding manager
   * @returns {Promise<void>}
   */
  async initialize() {}

  /**
   * Check if the embedding manager is initialized
   * @returns {boolean}
   */
  isInitialized() {}

  /**
   * Load all documentation chunks and their metadata
   * @returns {Promise<Array<IChunk>>}
   */
  async loadDocumentationChunks() {}

  /**
   * Split markdown content into chunks
   * @param {string} content - Markdown content
   * @param {string} filePath - Path to the file
   * @returns {Array<IChunk>}
   */
  splitIntoChunks(content, filePath) {}

  /**
   * Compute and store embeddings for all documentation chunks
   * @returns {Promise<void>}
   */
  async computeDocsEmbeddings() {}

  /**
   * Load stored embeddings
   * @returns {Promise<Array<IChunk>>}
   */
  async loadStoredEmbeddings() {}

  /**
   * Create OpenAI embeddings for a batch of texts
   * @param {Array<string>} texts - Array of texts to embed
   * @returns {Promise<Array<Array<number>>>}
   */
  async createOpenAIEmbeddings(texts) {}

  /**
   * Create local embeddings for a batch of texts
   * @param {Array<string>} texts - Array of texts to embed
   * @returns {Promise<Array<Array<number>>>}
   */
  async createLocalEmbeddings(texts) {}

  /**
   * Setup the data directory for storing embeddings
   * @returns {void}
   */
  setupDataDirectory() {}
}

module.exports = IEmbeddingManager;
