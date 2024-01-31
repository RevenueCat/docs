// Configure Purchases SDK
[RCPurchases configureWithAPIKey:@"public_sdk_key" appUserID:@"my_app_user_id"];

// Set App User Id in Segment
[[SEGAnalytics sharedAnalytics] identify:@"my_app_user_id"];