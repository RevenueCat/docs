Purchases.configure(withAPIKey: "public_sdk_key", appUserID: "my_app_user_id")

// Option 1: Match Mixpanel's SDK identity to RevenueCat's App User ID
Mixpanel.mainInstance().identify(distinctId: "my_app_user_id")

// Option 2: Set different Mixpanel identifier in RevenueCat
Purchases.shared.attribution.setMixpanelDistinctID(Mixpanel.mainInstance().distinctId)
