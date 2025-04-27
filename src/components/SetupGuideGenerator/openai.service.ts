import { OpenAIConfig, DocChunk, GeneratedGuide } from "./types";

export class OpenAIService {
  private config: OpenAIConfig;

  constructor(config: OpenAIConfig) {
    this.config = config;
  }

  private async makeOpenAIRequest(prompt: string): Promise<string> {
    try {
      const response = await fetch(
        "https://api.openai.com/v1/chat/completions",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${this.config.apiKey}`,
          },
          body: JSON.stringify({
            model: this.config.model,
            messages: [
              {
                role: "system",
                content:
                  "You are a helpful assistant that generates RevenueCat integration guides based on documentation chunks and user context.",
              },
              {
                role: "user",
                content: prompt,
              },
            ],
            temperature: this.config.temperature,
            max_tokens: this.config.maxTokens,
          }),
        },
      );

      if (!response.ok) {
        throw new Error(`OpenAI API error: ${response.statusText}`);
      }

      const data = await response.json();
      return data.choices[0].message.content;
    } catch (error) {
      console.error("Error calling OpenAI API:", error);
      throw error;
    }
  }

  async generateGuide(
    chunks: DocChunk[],
    context: GeneratedGuide["metadata"],
  ): Promise<GeneratedGuide> {
    const prompt = this.buildPrompt(chunks, context);
    const response = await this.makeOpenAIRequest(prompt);

    try {
      // Parse the response into our guide format
      const guide = JSON.parse(response) as GeneratedGuide;
      return guide;
    } catch (error) {
      console.error("Error parsing OpenAI response:", error);
      throw new Error("Failed to parse guide generation response");
    }
  }

  private buildPrompt(
    chunks: DocChunk[],
    context: GeneratedGuide["metadata"],
  ): string {
    return `Generate a RevenueCat integration guide based on the following documentation chunks and user context.
    
User Context:
- Platforms: ${context.platforms.join(", ")}
- Has RevenueCat Account: ${context.hasRevenueCatAccount}
- Has Backend: ${context.hasBackend}
- Current Stage: ${context.currentStage}
${context.additionalContext ? `- Additional Context: ${context.additionalContext}` : ""}

Documentation Chunks:
${chunks
  .map(
    (chunk) => `
Path: ${chunk.path}
Content: ${chunk.content}
${chunk.platform ? `Platforms: ${chunk.platform.join(", ")}` : ""}
${chunk.tags ? `Tags: ${chunk.tags.join(", ")}` : ""}
`,
  )
  .join("\n")}

Please generate a guide in the following JSON format:
{
  "sections": [
    {
      "title": "string",
      "content": "string",
      "links": ["string"],
      "codeSnippets": [
        {
          "language": "string",
          "code": "string"
        }
      ]
    }
  ],
  "metadata": {
    "platforms": ["string"],
    "hasRevenueCatAccount": boolean,
    "hasBackend": boolean,
    "currentStage": "string",
    "additionalContext": "string"
  }
}

The guide should be tailored to the user's context and include only relevant information from the documentation chunks.`;
  }
}
