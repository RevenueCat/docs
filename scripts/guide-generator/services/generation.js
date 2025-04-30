const { OpenAI } = require("openai");
const { log } = require("../utils/env");
const {
  validateInput,
  safeOperation,
  initOpenAI,
} = require("../utils/security");

// Token estimation constants
const TOKENS_PER_CHAR = 0.25; // Rough estimate
const MAX_TOKENS_PER_SECTION = 4000;
const MIN_TOKENS = 1000;
const MAX_TOKENS = 16000;

/**
 * Estimates the number of tokens in a string
 * @param {string} text - The text to estimate tokens for
 * @returns {number} - Estimated token count
 */
function estimateTokens(text) {
  return Math.ceil(text.length * TOKENS_PER_CHAR);
}

/**
 * Generates a guide in sections to handle token limits
 * @param {Array} chunks - The chunks to use
 * @param {Object} context - The reasoned context
 * @param {Set} technicalTerms - Set of technical terms to include
 * @param {Object} openai - The OpenAI client
 * @returns {Promise<string>} - The complete guide
 */
async function generateGuideInSections(
  chunks,
  context,
  technicalTerms,
  openai,
) {
  if (!openai) {
    throw new Error("OpenAI client is required for guide generation");
  }

  // Split chunks into sections by platform
  const sections = {};
  chunks.forEach((chunk) => {
    const platforms = chunk.platform || ["general"];
    platforms.forEach((platform) => {
      if (!sections[platform]) {
        sections[platform] = [];
      }
      sections[platform].push(chunk);
    });
  });

  log(`Generating guide in ${Object.keys(sections).length} sections`, true);

  // Generate each section separately
  const sectionPrompts = Object.entries(sections).map(
    ([platform, platformChunks]) => {
      return {
        platform,
        prompt: `Generate a detailed guide section for ${platform} using these chunks:
${platformChunks.map((chunk) => `Chunk ID: ${chunk.id}\nContent: ${chunk.content.slice(0, 1000)}...`).join("\n\n")}

Technical terms to include: ${Array.from(technicalTerms).join(", ")}

Focus on platform-specific details, setup, testing, and troubleshooting.`,
      };
    },
  );

  try {
    // Generate each section
    const sectionGuides = await Promise.all(
      sectionPrompts.map(async ({ platform, prompt }) => {
        log(`Generating section for ${platform}`, true);
        const response = await openai.chat.completions.create({
          model: "gpt-4-turbo-preview",
          messages: [
            {
              role: "system",
              content: "Generate a detailed platform-specific guide section.",
            },
            {
              role: "user",
              content: prompt,
            },
          ],
          temperature: 0.2,
          max_tokens: MAX_TOKENS_PER_SECTION,
        });
        return `## ${platform}\n\n${response.choices[0].message.content}`;
      }),
    );

    // Combine sections with a table of contents
    return `# Comprehensive Guide\n\n## Table of Contents\n${Object.keys(
      sections,
    )
      .map((platform) => `- [${platform}](#${platform.toLowerCase()})`)
      .join("\n")}\n\n${sectionGuides.join("\n\n")}`;
  } catch (error) {
    log(`Error generating sections: ${error.message}`, true);
    throw error;
  }
}

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

    // Track which chunks are used in the guide
    const usedChunks = new Set();

    // Extract key technical terms from chunks
    const technicalTerms = new Set();
    finalChunks.forEach((chunk) => {
      // Extract technical terms (capitalized words, specific patterns)
      const terms = chunk.content.match(/\b[A-Z][a-zA-Z0-9]+\b/g) || [];
      terms.forEach((term) => technicalTerms.add(term));

      // Extract code-related terms
      const codeTerms =
        chunk.content.match(
          /\b(?:class|interface|enum|struct|function|var|let|const)\s+([A-Za-z0-9_]+)\b/g,
        ) || [];
      codeTerms.forEach((term) => technicalTerms.add(term));
    });

    // Prepare the chunks for the prompt with platform grouping and tracking
    const chunkContent = Object.entries(platformChunks)
      .map(([platform, chunks]) => {
        return `Platform: ${platform}\n${chunks
          .map(
            (chunk) =>
              `Chunk ID: ${chunk.id}\nPath: ${chunk.path}\nScore: ${chunk.score}\nContent: ${chunk.content.slice(0, 1000)}...`,
          )
          .join("\n\n")}`;
      })
      .join("\n\n");

    // Create a technical terms summary
    const technicalTermsSummary = Array.from(technicalTerms).join(", ");

    // Estimate total content size
    const totalContentSize =
      estimateTokens(chunkContent) +
      estimateTokens(technicalTermsSummary) +
      estimateTokens(JSON.stringify(reasonedContext));

    // Determine appropriate token limit
    let tokenLimit;
    if (totalContentSize > MAX_TOKENS) {
      log(
        `Content size (${totalContentSize} tokens) exceeds maximum, using section-based generation`,
        true,
      );
      return generateGuideInSections(
        finalChunks,
        reasonedContext,
        technicalTerms,
        openai,
      );
    } else if (totalContentSize > MAX_TOKENS_PER_SECTION) {
      tokenLimit = MAX_TOKENS;
      log(
        `Using maximum token limit (${tokenLimit}) for comprehensive guide`,
        true,
      );
    } else {
      tokenLimit = Math.max(MIN_TOKENS, Math.ceil(totalContentSize * 1.5));
      log(
        `Using adaptive token limit (${tokenLimit}) based on content size`,
        true,
      );
    }

    const prompt = `Given these relevant documentation chunks and the user's requirements:

User Requirements:
${JSON.stringify(reasonedContext, null, 2)}

Relevant Documentation (sorted by relevance):
${chunkContent}

IMPORTANT TECHNICAL TERMS TO INCLUDE:
${technicalTermsSummary}

IMPORTANT INSTRUCTIONS:
1. You MUST use the provided chunks as your primary source of information
2. For each section of the guide, you MUST reference specific chunks by their ID
3. You MUST NOT make up information not present in the chunks
4. If information is missing, clearly state what is missing and why
5. You MUST maintain the original technical accuracy from the chunks
6. You MUST preserve all code examples and configurations from the chunks
7. You MUST follow the exact steps and sequences from the chunks
8. You MUST include all troubleshooting steps from the chunks
9. You MUST maintain all platform-specific details from the chunks
10. You MUST preserve all security considerations from the chunks
11. You MUST include ALL technical terms listed above in the relevant sections
12. If you cannot include all terms due to token limits, explain which terms were omitted and why

Please create a comprehensive, step-by-step guide that:

1. Platform-Specific Details:
   - Include detailed platform-specific setup instructions
   - List all required configurations for each platform
   - Provide platform-specific code examples
   - Mention platform-specific limitations and requirements

2. Testing and Validation:
   - Detailed testing instructions for each platform
   - Sandbox vs. production environment differences
   - Physical device testing requirements
   - Common test scenarios and how to verify them
   - Step-by-step testing checklist

3. Troubleshooting:
   - Common issues and their solutions
   - Platform-specific troubleshooting guides
   - Debug logs interpretation
   - Error messages and their meanings
   - Step-by-step debugging process

4. Best Practices:
   - Security considerations
   - Performance optimization tips
   - Code organization recommendations
   - Error handling strategies
   - Testing best practices

5. Additional Resources:
   - Links to relevant documentation
   - Links to video tutorials
   - Links to troubleshooting guides
   - Links to sample projects
   - Links to community resources

For each section, you MUST:
1. Reference the specific chunk IDs used
2. Explain why certain chunks were chosen
3. Note any missing information
4. Maintain exact technical details
5. Preserve all code examples
6. Follow the exact sequence of steps
7. Include all relevant technical terms from the list above

Make the guide as detailed as possible. Length is not a concern - thoroughness is key.`;

    const response = await openai.chat.completions.create({
      model: "gpt-4-turbo-preview",
      messages: [
        {
          role: "system",
          content:
            "You are a technical documentation expert. Create comprehensive, detailed guides from documentation. You MUST strictly follow the provided chunks and not make up information. For each section, reference the specific chunks used and explain any omissions. Maintain exact technical accuracy and preserve all code examples and configurations. You MUST include all technical terms provided in the prompt.",
        },
        {
          role: "user",
          content: prompt,
        },
      ],
      temperature: 0.2,
      max_tokens: tokenLimit,
    });

    // Validate the response against the chunks
    const guide = response.choices[0].message.content;
    const validationResult = validateGuideAgainstChunks(
      guide,
      finalChunks,
      technicalTerms,
    );

    if (!validationResult.isValid) {
      log(`Guide validation failed: ${validationResult.reason}`, true);
      log(
        `Missing technical terms: ${validationResult.missingTerms.join(", ")}`,
        true,
      );

      // If we're missing terms due to token limits, we can try a different approach
      if (validationResult.missingTerms.length > 50) {
        // Arbitrary threshold
        log(
          "Attempting to generate guide in sections due to token limits",
          true,
        );
        return generateGuideInSections(
          finalChunks,
          reasonedContext,
          technicalTerms,
          openai,
        );
      }
    }

    return guide;
  }, "generateGuide");
}

/**
 * Validates that the generated guide properly uses the provided chunks
 * @param {string} guide - The generated guide
 * @param {Array} chunks - The chunks used for generation
 * @param {Set} technicalTerms - Set of technical terms to include
 * @returns {Object} - Validation result
 */
function validateGuideAgainstChunks(guide, chunks, technicalTerms) {
  // Check if guide references chunk IDs
  const chunkIds = chunks.map((chunk) => chunk.id);
  const missingReferences = chunkIds.filter((id) => !guide.includes(id));

  // Check for technical terms
  const missingTerms = Array.from(technicalTerms).filter(
    (term) => !guide.includes(term),
  );

  if (missingReferences.length > 0 || missingTerms.length > 0) {
    return {
      isValid: false,
      reason: `Guide is missing ${missingReferences.length} chunk references and ${missingTerms.length} technical terms`,
      missingReferences,
      missingTerms,
    };
  }

  return { isValid: true };
}

module.exports = {
  generateGuide,
};
