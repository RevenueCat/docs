import React, { useState } from "react";
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
  const [description, setDescription] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // App Builders / No-Code Tools
  const appBuilders = [
    { id: "flutterflow", name: "FlutterFlow", icon: "🧩" },
    { id: "bravo-studios", name: "Bravo Studios", icon: "🎨" },
    { id: "natively", name: "Natively", icon: "🛠️" },
    { id: "purchasely", name: "Purchasely", icon: "🛒" },
    { id: "teta", name: "Teta", icon: "🔧" },
    { id: "thunkable", name: "Thunkable", icon: "🔲" },
  ];
  const [selectedAppBuilders, setSelectedAppBuilders] = useState<string[]>([]);

  const platforms: Platform[] = [
    { id: "ios", name: "iOS", icon: "🍎" },
    { id: "android", name: "Android", icon: "🤖" },
    { id: "react-native", name: "React Native", icon: "⚛️" },
    { id: "flutter", name: "Flutter", icon: "🎯" },
    { id: "capacitor", name: "Capacitor", icon: "⚡" },
    { id: "unity", name: "Unity", icon: "🎮" },
    { id: "web", name: "Web", icon: "🌐" },
    { id: "macos", name: "macOS", icon: "🖥️" },
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

  // Template examples for user input
  const TEMPLATES = [
    {
      label: "New App Setup",
      text: `I am building a new mobile app for both [iOS] and [Android]. I want to use RevenueCat to manage subscriptions, handle purchases, and validate receipts. I need help with SDK installation, configuring products in App Store Connect and Google Play Console, and implementing a basic purchase flow. I also want to test everything in the sandbox environment before going live. I plan to integrate with [Stripe] for web payments.`,
    },
    {
      label: "Migrating an Existing App",
      text: `I have an existing [iOS] app with in-app subscriptions managed manually. I want to migrate to RevenueCat for easier subscription management and analytics. I need guidance on planning the migration, mapping existing products, integrating the SDK, and ensuring a smooth transition for current users. Security and proper testing are important to me. I also use [Roku] for TV apps.`,
    },
    {
      label: "I have my own backend",
      text: `I want to integrate RevenueCat into my [React Native] app and connect it to my backend server. My goals are to track user subscriptions, receive real-time updates via webhooks, and analyze revenue and churn metrics. I also want to implement custom entitlement logic and ensure secure API key management. I plan to use [Stripe] and [Roku] as integrations.`,
    },
    {
      label: "Other Apps Integration (Paddle, Roku, Stripe, etc)",
      text: `I am working on integrating RevenueCat with other platforms such as [Paddle], [Roku], or [Stripe]. I need help with connecting these third-party or alternative storefronts, configuring products, and ensuring a smooth purchase flow for users outside the traditional app stores. I am also interested in analytics and tracking subscription events across all platforms.`,
    },
    {
      label: "App-to-Web Purchase Flow",
      text: `I want to enable users to purchase subscriptions on the web and unlock access in my app using RevenueCat. I need guidance on integrating the Web Purchases Button, handling user authentication between app and web, and ensuring a seamless experience for hybrid app/web payment flows. Security and syncing entitlements across platforms is important to me.`,
    },
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

  const handleAppBuilderToggle = (builderId: string) => {
    setSelectedAppBuilders((prev) =>
      prev.includes(builderId)
        ? prev.filter((id) => id !== builderId)
        : [...prev, builderId],
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    // Open the preview page in a new tab
    const newTab = window.open("/docs/guide-preview", "_blank");

    try {
      const allPlatforms = [...selectedPlatforms, ...selectedAppBuilders];
      const response = await fetch(
        "http://localhost:3001/api/generate-custom-guide",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            query: description,
            platforms: allPlatforms,
            features: selectedFeatures,
            additionalContext: description, // or leave blank if not needed
          }),
        },
      );

      if (!response.ok) {
        throw new Error("Failed to generate guide");
      }

      const data = await response.json();
      if (newTab) {
        // Send the MDX string to the new tab
        newTab.postMessage(data.guide, "*");
      }
      console.log("Custom guide API response:", data);
      onSubmit?.({
        platforms: allPlatforms,
        features: selectedFeatures,
        description,
        guide: data.guide,
      });
    } catch (error) {
      if (newTab) {
        newTab.document.body.innerHTML = `<div style='color: red; font-size: 1.2rem; text-align: center;'>${error instanceof Error ? error.message : "Failed to generate guide"}</div>`;
      }
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

          {/* App Builders / No-Code Tools Section */}
          <div className="rc-guide-form-section">
            <h3>Are you using an app builder or no-code tool?</h3>
            <p className="rc-guide-form-section-description">
              Select all that apply (optional)
            </p>
            <div className="rc-guide-form-platform-buttons">
              {appBuilders.map((builder) => (
                <button
                  key={builder.id}
                  type="button"
                  className={`rc-guide-form-platform-button ${selectedAppBuilders.includes(builder.id) ? "selected" : ""}`}
                  onClick={() => handleAppBuilderToggle(builder.id)}
                >
                  {builder.icon && (
                    <span className="rc-guide-form-platform-icon">
                      {builder.icon}
                    </span>
                  )}
                  {builder.name}
                </button>
              ))}
            </div>
          </div>

          {/* Features Section */}
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

          {/* Description Section with Templates */}
          <div className="rc-guide-form-section">
            <h3>Tell us about your setup</h3>
            <p className="rc-guide-form-section-description">
              What are you trying to achieve with RevenueCat?
            </p>
            {/* Template selection buttons */}
            <div
              className="rc-guide-form-template-buttons"
              style={{ marginBottom: 8 }}
            >
              {TEMPLATES.map((template, idx) => (
                <button
                  key={template.label}
                  type="button"
                  className="rc-guide-form-template-button"
                  style={{ marginRight: 8, marginBottom: 4 }}
                  onClick={() => setDescription(template.text)}
                >
                  {template.label}
                </button>
              ))}
            </div>
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
