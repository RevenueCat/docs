const { validateInput } = require("../utils/security");

/**
 * @typedef {Object} ChunkMetadata
 * @property {string} filePath - Path to the source file
 * @property {string} [header] - Optional header/title of the chunk
 * @property {string} [lastUpdated] - Optional timestamp of last update
 */

/**
 * @typedef {Object} ChunkEmbeddings
 * @property {number[]} [openAI] - OpenAI embedding vector
 * @property {number[]} [local] - Local embedding vector
 */

/**
 * Interface for documentation chunks
 * @interface IChunk
 */
class IChunk {
  /**
   * @param {string} content - The actual content of the chunk
   * @param {ChunkMetadata} metadata - Metadata about the chunk
   * @param {ChunkEmbeddings} [embeddings] - Optional embeddings for the chunk
   */
  constructor(content, metadata, embeddings) {
    validateInput(content, "string", "content");
    validateInput(metadata, "object", "metadata");
    validateInput(metadata.filePath, "string", "metadata.filePath");

    this.content = content;
    this.metadata = metadata;
    this.embeddings = embeddings || {};
  }

  /**
   * Get the chunk content
   * @returns {string}
   */
  getContent() {
    return this.content;
  }

  /**
   * Get the chunk metadata
   * @returns {ChunkMetadata}
   */
  getMetadata() {
    return this.metadata;
  }

  /**
   * Get the chunk embeddings
   * @returns {ChunkEmbeddings}
   */
  getEmbeddings() {
    return this.embeddings;
  }

  /**
   * Set embeddings for the chunk
   * @param {ChunkEmbeddings} embeddings - New embeddings to set
   */
  setEmbeddings(embeddings) {
    validateInput(embeddings, "object", "embeddings");
    this.embeddings = embeddings;
  }

  /**
   * Check if the chunk has embeddings
   * @returns {boolean}
   */
  hasEmbeddings() {
    return Object.keys(this.embeddings).length > 0;
  }

  /**
   * Check if the chunk has OpenAI embeddings
   * @returns {boolean}
   */
  hasOpenAIEmbeddings() {
    return Array.isArray(this.embeddings.openAI);
  }

  /**
   * Check if the chunk has local embeddings
   * @returns {boolean}
   */
  hasLocalEmbeddings() {
    return Array.isArray(this.embeddings.local);
  }
}

module.exports = IChunk;
