// Configure Purchases SDK
[RCPurchases configureWithAPIKey:@"public_sdk_key" appUserID:@"my_app_user_id"];

// Configure CleverTap SDK
[CleverTap autoIntegrate];

//...

NSString *cleverTapId = [[CleverTap sharedInstance] profileGetCleverTapID];
if (cleverTapId != nil) {
  [[RCPurchases sharedPurchases] setCleverTapID: cleverTapId];
}