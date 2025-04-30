const { OpenAI } = require("openai");
const { log } = require("../utils/env");
const { BASE_KNOWLEDGE } = require("./base-knowledge");
const {
  validateInput,
  safeOperation,
  initOpenAI,
} = require("../utils/security");

/**
 * Analyzes user context and expands it into detailed technical requirements
 * @param {Object} userContext - The raw user context from the form
 * @returns {Promise<Object>} - The reasoned context with detailed requirements
 */
async function analyzeUserContext(userContext) {
  validateInput(userContext, "object", "userContext");

  log("\n🔄 Initializing OpenAI client...");
  const openai = initOpenAI();
  if (!openai) {
    log("❌ OpenAI client not available for reasoning step", true);
    return null;
  }

  return safeOperation(async () => {
    log("\n📝 Preparing analysis prompt...");
    const prompt = `Given this user context for RevenueCat integration:
${JSON.stringify(userContext, null, 2)}

And this base knowledge about common integration requirements:
${JSON.stringify(BASE_KNOWLEDGE, null, 2)}

Please analyze and expand this into a detailed technical requirements list focusing on:
1. Platform-specific setup needs
2. Required credentials and configurations
3. Key integration steps
4. Testing and validation requirements

IMPORTANT: Return ONLY a valid JSON object with these fields:
{
  "platformSpecificNeeds": [],
  "requiredCredentials": [],
  "integrationSteps": [],
  "testingRequirements": []
}

DO NOT include any markdown formatting, comments, or additional text.`;

    log("\n🤖 Sending request to LLM...");
    const response = await openai.chat.completions.create({
      model: "gpt-4-turbo-preview",
      messages: [
        {
          role: "system",
          content: `You are a technical expert in mobile app development and in-app purchases. 
RevenueCat is a subscription management platform that helps developers implement and manage in-app purchases and subscriptions across multiple platforms.

Your task is to analyze the user's context and break down their needs into specific technical requirements. Focus on:
1. Understanding the user's current setup and requirements
2. Identifying what they need to implement RevenueCat
3. Breaking down the requirements into clear, actionable items

Use the provided base knowledge about common integration requirements to inform your analysis, but:
- Only include requirements that are relevant to the user's specific context
- Don't include requirements that the user already has (e.g., if they have an account)
- Focus on what's missing or needs to be set up

IMPORTANT: Your response must be a valid JSON object with no additional formatting or text.`,
        },
        {
          role: "user",
          content: prompt,
        },
      ],
      temperature: 0.2,
      max_tokens: 1000,
    });

    log("\n✅ LLM response received, parsing results...");
    const responseText = response.choices[0].message.content;

    // Clean the response text to ensure it's valid JSON
    const cleanedResponse = responseText
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    try {
      const reasonedContext = JSON.parse(cleanedResponse);

      // Validate the response structure
      const requiredFields = [
        "platformSpecificNeeds",
        "requiredCredentials",
        "integrationSteps",
        "testingRequirements",
      ];
      const missingFields = requiredFields.filter(
        (field) => !(field in reasonedContext),
      );

      if (missingFields.length > 0) {
        throw new Error(`Missing required fields: ${missingFields.join(", ")}`);
      }

      log("\n✨ Analysis complete!", true);
      return reasonedContext;
    } catch (parseError) {
      log("\n❌ Error parsing LLM response:", parseError.message, true);
      log("Raw response:", responseText, true);
      return null;
    }
  }, "analyzeUserContext");
}

module.exports = {
  analyzeUserContext,
};
