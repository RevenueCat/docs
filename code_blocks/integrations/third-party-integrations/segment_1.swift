// Configure Purchases SDK
Purchases.configure(withAPIKey: "public_sdk_key", appUserID: "my_app_user_id")

// Set App User Id in Segment
SEGAnalytics.sharedAnalytics().identify("my_app_user_id")
