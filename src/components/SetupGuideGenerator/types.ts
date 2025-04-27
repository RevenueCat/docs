export interface DocChunk {
  id: string;
  content: string;
  path: string;
  platform?: string[];
  tags?: string[];
}

export interface GuideSection {
  title: string;
  content: string;
  links: string[];
  codeSnippets?: {
    language: string;
    code: string;
  }[];
}

export interface GeneratedGuide {
  sections: GuideSection[];
  metadata: {
    platforms: string[];
    hasRevenueCatAccount: boolean;
    hasBackend: boolean;
    currentStage: "starting" | "implementing" | "testing" | "production";
    additionalContext?: string;
  };
}

export interface OpenAIConfig {
  apiKey: string;
  model: string;
  temperature: number;
  maxTokens: number;
}
