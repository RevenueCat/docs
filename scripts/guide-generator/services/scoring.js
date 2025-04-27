const { log } = require("../utils/env");

/**
 * Scores and filters chunks based on reasoned context
 * @param {Array} chunks - Array of document chunks
 * @param {Object} reasonedContext - The reasoned context from analysis
 * @returns {Array} - Filtered and scored chunks
 */
function scoreChunks(chunks, reasonedContext) {
  if (!reasonedContext) {
    log("No reasoned context provided for scoring chunks", true);
    return chunks;
  }

  log(`Scoring ${chunks.length} chunks with reasoned context:`, true);
  log(JSON.stringify(reasonedContext, null, 2), true);

  const scoredChunks = chunks
    .map((chunk) => {
      let score = 0;

      // Score based on platform-specific needs
      if (reasonedContext.platformSpecificNeeds) {
        const matchingNeeds = reasonedContext.platformSpecificNeeds.filter(
          (need) => chunk.content.toLowerCase().includes(need.toLowerCase()),
        );
        score += matchingNeeds.length * 3;
        if (matchingNeeds.length > 0) {
          log(
            `Added platform needs score for ${chunk.path}: +${matchingNeeds.length * 3} (${matchingNeeds.join(", ")})`,
            true,
          );
        }
      }

      // Score based on required credentials
      if (reasonedContext.requiredCredentials) {
        const matchingCredentials = reasonedContext.requiredCredentials.filter(
          (cred) => chunk.content.toLowerCase().includes(cred.toLowerCase()),
        );
        score += matchingCredentials.length * 4;
        if (matchingCredentials.length > 0) {
          log(
            `Added credentials score for ${chunk.path}: +${matchingCredentials.length * 4} (${matchingCredentials.join(", ")})`,
            true,
          );
        }
      }

      // Score based on integration steps
      if (reasonedContext.integrationSteps) {
        const matchingSteps = reasonedContext.integrationSteps.filter((step) =>
          chunk.content.toLowerCase().includes(step.toLowerCase()),
        );
        score += matchingSteps.length * 3;
        if (matchingSteps.length > 0) {
          log(
            `Added integration steps score for ${chunk.path}: +${matchingSteps.length * 3} (${matchingSteps.join(", ")})`,
            true,
          );
        }
      }

      // Score based on testing requirements
      if (reasonedContext.testingRequirements) {
        const matchingTests = reasonedContext.testingRequirements.filter(
          (test) => chunk.content.toLowerCase().includes(test.toLowerCase()),
        );
        score += matchingTests.length * 2;
        if (matchingTests.length > 0) {
          log(
            `Added testing requirements score for ${chunk.path}: +${matchingTests.length * 2} (${matchingTests.join(", ")})`,
            true,
          );
        }
      }

      // Additional scoring for platform match
      if (reasonedContext.platforms && reasonedContext.platforms.length > 0) {
        if (chunk.platform.some((p) => reasonedContext.platforms.includes(p))) {
          score += 3;
          log(`Added platform match score for ${chunk.path}: +3`, true);
        }
      }

      // Additional scoring for setup and configuration content
      if (
        chunk.tags.includes("setup") ||
        chunk.tags.includes("configuration")
      ) {
        score += 2;
        log(`Added setup/configuration score for ${chunk.path}: +2`, true);
      }

      log(`Final score for ${chunk.path}: ${score}`, true);
      return { ...chunk, score };
    })
    .filter((chunk) => chunk.score > 0)
    .sort((a, b) => b.score - a.score);

  log(`Found ${scoredChunks.length} relevant chunks after scoring`, true);
  return scoredChunks;
}

module.exports = {
  scoreChunks,
};
