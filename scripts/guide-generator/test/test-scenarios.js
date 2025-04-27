const testScenarios = {
  android_new_user: {
    platform: "android",
    experience: "new_user",
    goals: [
      "Set up RevenueCat SDK",
      "Configure in-app purchases",
      "Handle subscription status",
    ],
    constraints: [
      "Using Kotlin",
      "Targeting Android 12+",
      "Using Google Play Billing",
    ],
  },
  ios_existing_user: {
    platform: "ios",
    experience: "existing_user",
    goals: [
      "Migrate to RevenueCat",
      "Preserve existing purchases",
      "Update subscription logic",
    ],
    constraints: ["Using Swift", "Targeting iOS 15+", "Using StoreKit 2"],
  },
};

function getTestScenario(name) {
  return testScenarios[name];
}

module.exports = {
  getTestScenario,
};
