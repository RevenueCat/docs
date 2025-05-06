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

export interface GuideRequest {
  platforms: string[];
  features?: string[];
  description?: string;
  experience: "beginner" | "intermediate" | "advanced";
}
