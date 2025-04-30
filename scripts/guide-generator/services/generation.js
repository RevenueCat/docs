const { OpenAI } = require("openai");
const { log } = require("../utils/env");
const {
  validateInput,
  safeOperation,
  initOpenAI,
} = require("../utils/security");

/**
 * Generates a step-by-step guide from scored chunks
 * @param {Array} scoredChunks - Array of scored document chunks
 * @param {Object} reasonedContext - The reasoned context from analysis
 * @returns {Promise<string>} - The generated guide
 */
async function generateGuide(scoredChunks, reasonedContext) {
  validateInput(scoredChunks, "object", "scoredChunks");
  validateInput(reasonedContext, "object", "reasonedContext");

  const openai = initOpenAI();
  if (!openai) {
    log("OpenAI client not available for guide generation", true);
    return "Guide generation features are currently unavailable.";
  }

  return safeOperation(async () => {
    // Sort chunks by score in descending order
    const sortedChunks = [...scoredChunks].sort((a, b) => b.score - a.score);

    // Take chunks with scores above a threshold or top 20, whichever is larger
    const scoreThreshold = 0.3; // Only include chunks with score > 0.3
    const topChunks = sortedChunks.filter(
      (chunk) => chunk.score > scoreThreshold,
    );
    const finalChunks =
      topChunks.length > 0 ? topChunks : sortedChunks.slice(0, 20);

    log(
      `Using ${finalChunks.length} chunks for guide generation (${topChunks.length} above threshold)`,
    );

    // Group chunks by platform for better organization
    const platformChunks = {};
    finalChunks.forEach((chunk) => {
      const platforms = chunk.platform || ["general"];
      platforms.forEach((platform) => {
        if (!platformChunks[platform]) {
          platformChunks[platform] = [];
        }
        platformChunks[platform].push(chunk);
      });
    });

    // Prepare the chunks for the prompt with platform grouping
    const chunkContent = Object.entries(platformChunks)
      .map(([platform, chunks]) => {
        return `Platform: ${platform}\n${chunks
          .map(
            (chunk) =>
              `Path: ${chunk.path}\nScore: ${chunk.score}\nContent: ${chunk.content.slice(0, 1000)}...`,
          )
          .join("\n\n")}`;
      })
      .join("\n\n");

    const prompt = `Given these relevant documentation chunks and the user's requirements:

User Requirements:
${JSON.stringify(reasonedContext, null, 2)}

Relevant Documentation (sorted by relevance):
${chunkContent}

Please create a comprehensive, step-by-step guide that:
1. Follows a logical progression from setup to completion
2. Includes all necessary platform-specific steps
3. Provides clear instructions for each step, with simple language and examples where appropriate
4. Includes important warnings or prerequisites
5. References specific documentation where needed
6. Is written in the style of a technical writer
7. Provides all official documentation links where needed (docs, videos, etc)
8. Considers the user's context and requirements and highlight any limitations and possible mishappens during the process that can catch people off guard
9. Use only the official documentation and never make up your own steps or instructions
10. MUST include content from the highest-scoring chunks (those with the highest scores)
11. Don't mention chunks at all in the guide, just use the content directly. Chunks is an internal notion.
12. For each major decision point or configuration option:
    - Explain why it's needed
    - List the available options
    - Explain the trade-offs of each option
    - Provide recommendations based on the user's context
    - Highlight any potential pitfalls or common mistakes
13. Include a "Why This Matters" section for key concepts and decisions
14. Provide context about how each step fits into the bigger picture
15. Explain the implications of each configuration choice
16. Include alternative approaches when relevant and explain when to use them
17. For each major section, include:
    - A "Key Considerations" subsection explaining important decisions
    - A "Common Pitfalls" subsection highlighting what can go wrong
    - A "Best Practices" subsection with recommendations
    - An "Alternative Approaches" subsection when relevant
18. Explain the relationship between different components and how they interact
19. Provide context about the impact of each decision on:
    - User experience
    - App performance
    - Revenue potential
    - Maintenance requirements
    - Future scalability
20. Include specific examples of:
    - Error handling scenarios
    - Edge cases to consider
    - Testing strategies
    - Debugging approaches

Format the guide in markdown with clear sections and steps.`;

    const response = await openai.chat.completions.create({
      model: "gpt-4-turbo-preview",
      messages: [
        {
          role: "system",
          content:
            "You are a technical documentation expert. Create clear, actionable guides from documentation. You must use the highest-scoring chunks and explain any omissions of high-scoring content.",
        },
        {
          role: "user",
          content: prompt,
        },
      ],
      temperature: 0.2,
      max_tokens: 3000, // Increased token limit to accommodate more detailed guide
    });

    return response.choices[0].message.content;
  }, "generateGuide");
}

module.exports = {
  generateGuide,
};
