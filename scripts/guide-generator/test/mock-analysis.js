const mockAnalysisResponses = {
  android: {
    platformSpecificNeeds: [
      "Google Play Billing Library version",
      "Android SDK version compatibility",
      "ProGuard/R8 configuration",
    ],
    requiredCredentials: [
      "Google Play Console account",
      "Service account key for Google Play API access",
      "Package name for the app",
    ],
    integrationSteps: [
      "Create a RevenueCat account",
      "Configure Google Play Console",
      "Set up products and subscriptions in Google Play Console",
      "Configure service account for Google Play API access",
      "Enable Google Play Billing in the app",
      "Set up test accounts in Google Play Console",
      "Integrate RevenueCat SDK into the Android app",
    ],
    testingRequirements: [
      "Test account setup in Google Play Console",
      "Sandbox environment configuration in RevenueCat",
      "Purchase flow testing",
      "Subscription lifecycle testing",
      "Error handling verification",
    ],
  },
  ios: {
    platformSpecificNeeds: [
      "StoreKit 2 compatibility",
      "iOS deployment target",
      "App Store Connect configuration",
    ],
    requiredCredentials: [
      "Apple Developer account",
      "App Store Connect access",
      "Bundle identifier for the app",
    ],
    integrationSteps: [
      "Create a RevenueCat account",
      "Configure App Store Connect",
      "Set up products and subscriptions in App Store Connect",
      "Configure StoreKit configuration file",
      "Enable in-app purchases in Xcode",
      "Set up sandbox testers in App Store Connect",
      "Integrate RevenueCat SDK into the iOS app",
    ],
    testingRequirements: [
      "Sandbox tester setup in App Store Connect",
      "StoreKit configuration file setup",
      "Purchase flow testing",
      "Subscription lifecycle testing",
      "Error handling verification",
    ],
  },
};

function getMockAnalysis(platform) {
  return mockAnalysisResponses[platform];
}

module.exports = {
  getMockAnalysis,
};
