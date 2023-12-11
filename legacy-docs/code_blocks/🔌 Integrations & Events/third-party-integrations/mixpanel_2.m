// Configure Purchases SDK
[RCPurchases configureWithAPIKey:@"public_sdk_key" appUserID:@"my_app_user_id"];

// Set App User Id in Mixpanel
[[Mixpanel sharedInstance] identify:@"my_app_user_id"];