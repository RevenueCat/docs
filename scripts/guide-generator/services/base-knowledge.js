const BASE_KNOWLEDGE = {
  platforms: {
    android: {
      commonRequirements: {
        credentials: [
          "Google Play Console account",
          "Service account key for Google Play API access",
          "Package name for the app",
          "Google Play Billing Library version",
        ],
        legalRequirements: [
          "Privacy Policy",
          "Terms of Service",
          "Subscription terms and conditions",
        ],
        setupSteps: [
          "Configure Google Play Console",
          "Set up products and subscriptions",
          "Configure service account",
          "Enable Google Play Billing",
          "Set up test accounts",
        ],
        testingRequirements: [
          "Test account setup",
          "Sandbox environment configuration",
          "Purchase flow testing",
          "Subscription lifecycle testing",
          "Error handling verification",
        ],
      },
    },
    ios: {
      commonRequirements: {
        credentials: [
          "Apple Developer account",
          "App Store Connect access",
          "Bundle identifier",
          "In-App Purchase capability enabled",
        ],
        legalRequirements: [
          "Privacy Policy",
          "Terms of Service",
          "Subscription terms and conditions",
          "App Store Review Guidelines compliance",
        ],
        setupSteps: [
          "Configure App Store Connect",
          "Set up products and subscriptions",
          "Configure StoreKit",
          "Set up sandbox testing",
          "Configure app capabilities",
        ],
        testingRequirements: [
          "Sandbox account setup",
          "StoreKit testing",
          "Purchase flow testing",
          "Subscription lifecycle testing",
          "Receipt validation testing",
        ],
      },
    },
    react_native: {
      commonRequirements: {
        credentials: [
          "Platform-specific credentials (iOS/Android)",
          "React Native version compatibility",
          "Native module setup",
        ],
        setupSteps: [
          "Platform-specific setup (iOS/Android)",
          "React Native SDK installation",
          "Native module linking",
          "Platform-specific configuration",
        ],
        testingRequirements: [
          "Cross-platform testing",
          "Platform-specific purchase flows",
          "Subscription management testing",
          "Error handling verification",
        ],
      },
    },
    flutter: {
      commonRequirements: {
        credentials: [
          "Platform-specific credentials (iOS/Android)",
          "Flutter version compatibility",
          "Platform-specific setup",
        ],
        setupSteps: [
          "Platform-specific setup (iOS/Android)",
          "Flutter SDK installation",
          "Platform-specific configuration",
          "Plugin setup",
        ],
        testingRequirements: [
          "Cross-platform testing",
          "Platform-specific purchase flows",
          "Subscription management testing",
          "Error handling verification",
        ],
      },
    },
  },
  commonConcepts: {
    subscriptionTypes: [
      "Auto-renewable subscriptions",
      "Non-renewing subscriptions",
      "Consumable purchases",
      "Non-consumable purchases",
    ],
    testingEnvironments: [
      "Sandbox testing",
      "Production testing",
      "Test accounts",
      "Test purchases",
    ],
    integrationPhases: [
      "Initial setup",
      "Product configuration",
      "Purchase implementation",
      "Testing and validation",
      "Production deployment",
    ],
  },
};

module.exports = {
  BASE_KNOWLEDGE,
};
