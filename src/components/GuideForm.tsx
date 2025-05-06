import React, { useState } from "react";
import { GuideRequest, GeneratedGuide } from "./SetupGuideGenerator/types";
import "./GuideForm.css";

interface Platform {
  id: string;
  name: string;
  icon?: string;
}

interface Feature {
  id: string;
  name: string;
  description: string;
}

interface GuideFormProps {
  title?: string;
  subtitle?: string;
  onSubmit?: (formData: any) => void;
}

const GuideForm: React.FC<GuideFormProps> = ({
  title = "Let's get started with RevenueCat",
  subtitle = "Tell us about your setup and we'll generate a personalized guide",
  onSubmit = (formData) => {
    console.log("Form data:", formData);
  },
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>([]);
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const [experience, setExperience] = useState<
    "beginner" | "intermediate" | "advanced"
  >("beginner");
  const [description, setDescription] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const platforms: Platform[] = [
    { id: "ios", name: "iOS", icon: "🍎" },
    { id: "android", name: "Android", icon: "🤖" },
    { id: "react-native", name: "React Native", icon: "⚛️" },
    { id: "flutter", name: "Flutter", icon: "🎯" },
    { id: "capacitor", name: "Capacitor", icon: "⚡" },
    { id: "unity", name: "Unity", icon: "🎮" },
    { id: "web", name: "Web", icon: "🌐" },
  ];

  const features: Feature[] = [
    {
      id: "paywalls",
      name: "Paywalls",
      description: "Dynamic paywalls with A/B testing",
    },
    {
      id: "analytics",
      name: "Analytics",
      description: "Charts, metrics, and data exports",
    },
    {
      id: "experiments",
      name: "Experiments",
      description: "A/B testing for pricing and paywalls",
    },
    {
      id: "entitlements",
      name: "Entitlements",
      description: "Manage access to features and content",
    },
    {
      id: "integrations",
      name: "Integrations",
      description: "Connect with other tools and services",
    },
  ];

  const experienceLevels: {
    id: "beginner" | "intermediate" | "advanced";
    name: string;
  }[] = [
    { id: "beginner", name: "Beginner" },
    { id: "intermediate", name: "Intermediate" },
    { id: "advanced", name: "Advanced" },
  ];

  const handlePlatformToggle = (platformId: string) => {
    setSelectedPlatforms((prev) =>
      prev.includes(platformId)
        ? prev.filter((id) => id !== platformId)
        : [...prev, platformId],
    );
  };

  const handleFeatureToggle = (featureId: string) => {
    setSelectedFeatures((prev) =>
      prev.includes(featureId)
        ? prev.filter((id) => id !== featureId)
        : [...prev, featureId],
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const request: GuideRequest = {
        platforms: selectedPlatforms,
        features: selectedFeatures,
        experience,
        description,
      };

      // Step 1: Get required docs
      const analysisResponse = await fetch("/api/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(request),
      });

      if (!analysisResponse.ok) {
        throw new Error(
          `Failed to analyze requirements: ${analysisResponse.statusText}`,
        );
      }

      const analysisData = await analysisResponse.json();
      const requiredDocs = analysisData.requiredDocs;

      // Step 2: Fetch the required docs from your internal system
      const docs = await fetchInternalDocs(requiredDocs);

      // Step 3: Generate the guide with the docs
      const generateResponse = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...request,
          docs: docs.map((doc) => ({
            path: doc.path,
            content: doc.content,
            type: "mdx",
          })),
        }),
      });

      if (!generateResponse.ok) {
        throw new Error(
          `Failed to generate guide: ${generateResponse.statusText}`,
        );
      }

      const data = await generateResponse.json();
      const guide: GeneratedGuide = data.guide;

      onSubmit?.({
        ...request,
        guide,
      });
    } catch (error) {
      console.error("Error generating guide:", error);
      setError(
        error instanceof Error ? error.message : "Failed to generate guide",
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={`rc-guide-form ${isExpanded ? "expanded" : ""}`}>
      <div className="rc-guide-form-header">
        <h2>{title}</h2>
        {subtitle && <p className="rc-guide-form-subtitle">{subtitle}</p>}
        <button
          className="rc-guide-form-expand-button"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? "Collapse" : "Expand"} Form
        </button>
      </div>

      {isExpanded && (
        <form onSubmit={handleSubmit}>
          <div className="rc-guide-form-section">
            <h3>What platforms are you using?</h3>
            <p className="rc-guide-form-section-description">
              Select all that apply
            </p>
            <div className="rc-guide-form-platform-buttons">
              {platforms.map((platform) => (
                <button
                  key={platform.id}
                  type="button"
                  className={`rc-guide-form-platform-button ${selectedPlatforms.includes(platform.id) ? "selected" : ""}`}
                  onClick={() => handlePlatformToggle(platform.id)}
                >
                  {platform.icon && (
                    <span className="rc-guide-form-platform-icon">
                      {platform.icon}
                    </span>
                  )}
                  {platform.name}
                </button>
              ))}
            </div>
          </div>

          <div className="rc-guide-form-section">
            <h3>What features are you interested in?</h3>
            <p className="rc-guide-form-section-description">
              Select all that apply
            </p>
            <div className="rc-guide-form-feature-buttons">
              {features.map((feature) => (
                <button
                  key={feature.id}
                  type="button"
                  className={`rc-guide-form-feature-button ${selectedFeatures.includes(feature.id) ? "selected" : ""}`}
                  onClick={() => handleFeatureToggle(feature.id)}
                >
                  <div className="rc-guide-form-feature-content">
                    <div className="rc-guide-form-feature-name">
                      {feature.name}
                    </div>
                    <div className="rc-guide-form-feature-description">
                      {feature.description}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="rc-guide-form-section">
            <h3>What's your experience level?</h3>
            <p className="rc-guide-form-section-description">
              This helps us provide the right level of detail
            </p>
            <div className="rc-guide-form-experience-selector">
              {experienceLevels.map((level) => (
                <button
                  key={level.id}
                  type="button"
                  className={`rc-guide-form-experience-button ${experience === level.id ? "selected" : ""}`}
                  onClick={() => setExperience(level.id)}
                >
                  {level.name}
                </button>
              ))}
            </div>
          </div>

          <div className="rc-guide-form-section">
            <h3>Tell us about your setup</h3>
            <p className="rc-guide-form-section-description">
              What are you trying to achieve with RevenueCat?
            </p>
            <textarea
              className="rc-guide-form-description-textarea"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="For example: I have a React Native app with a Node.js backend. I want to implement subscriptions and track user behavior..."
              rows={4}
            />
          </div>

          {error && <div className="rc-guide-form-error">{error}</div>}

          <div className="rc-guide-form-footer">
            <button
              type="submit"
              className="rc-guide-form-submit-button"
              disabled={selectedPlatforms.length === 0 || isLoading}
            >
              {isLoading ? "Generating..." : "Generate Guide"}
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default GuideForm;
