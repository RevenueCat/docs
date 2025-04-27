const { OpenAI } = require("openai");
const { getOpenAIKey, log } = require("../utils/env");

/**
 * Generates a step-by-step guide from scored chunks
 * @param {Array} scoredChunks - Array of scored document chunks
 * @param {Object} reasonedContext - The reasoned context from analysis
 * @returns {Promise<string>} - The generated guide
 */
async function generateGuide(scoredChunks, reasonedContext) {
  const openai = initOpenAI();
  if (!openai) {
    log("OpenAI client not available for guide generation", true);
    return "Guide generation features are currently unavailable.";
  }

  try {
    // Prepare the chunks for the prompt
    const chunkContent = scoredChunks
      .slice(0, 10) // Limit to top 10 chunks
      .map(
        (chunk) =>
          `Path: ${chunk.path}\nContent: ${chunk.content.slice(0, 1000)}...`,
      )
      .join("\n\n");

    const prompt = `Given these relevant documentation chunks and the user's requirements:

User Requirements:
${JSON.stringify(reasonedContext, null, 2)}

Relevant Documentation:
${chunkContent}

Please create a comprehensive, step-by-step guide that:
1. Follows a logical progression from setup to completion
2. Includes all necessary platform-specific steps
3. Provides clear instructions for each step
4. Includes important warnings or prerequisites
5. References specific documentation where needed

Format the guide in markdown with clear sections and steps.`;

    const response = await openai.chat.completions.create({
      model: "gpt-4-turbo-preview",
      messages: [
        {
          role: "system",
          content:
            "You are a technical documentation expert. Create clear, actionable guides from documentation.",
        },
        {
          role: "user",
          content: prompt,
        },
      ],
      temperature: 0.2,
      max_tokens: 2000,
    });

    return response.choices[0].message.content;
  } catch (error) {
    log(`Error generating guide: ${error.message}`, true);
    return "An error occurred while generating the guide.";
  }
}

function initOpenAI() {
  try {
    const apiKey = getOpenAIKey();
    if (!apiKey) {
      log("Guide generation features are currently unavailable.", true);
      return null;
    }
    return new OpenAI({ apiKey });
  } catch (error) {
    log("Guide generation features are currently unavailable.", true);
    return null;
  }
}

module.exports = {
  generateGuide,
};
