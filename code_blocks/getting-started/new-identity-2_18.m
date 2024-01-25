// Configure Purchases on app launch
[RCPurchases configureWithAPIKey:@"my_api_key"];

//...

// Later log in provided user Id
[[RCPurchases sharedPurchases] identify:@"my_app_user_id" completionBlock:^(RCPurchaserInfo *purchaserInfo, NSError *error) {
    // purchaserInfo updated for my_app_user_id
}];