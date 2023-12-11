// Configure Purchases
[RCPurchases configureWithAPIKey:@"public_sdk_key"];

// Initialize Iterable
[IterableAPI initializeWithApiKey:@"<YOUR_API_KEY>" launchOptions:launchOptions config:config]

// Setting Iterable email or userId
IterableAPI.email = @"user@example.com";
IterableAPI.userId = @"user123";

// Set $email or $iterableUserId, (optional) $iterableCampaignId, $iterableTemplateId
[[RCPurchases sharedPurchases] setAttributes:@{
  @"$email": IterableAPI.email,
  @"iterableUserId": IterableAPI.userId ,
  @"$iterableCampaignId": @"123",
  @"$iterableTemplateId": @"123"
}];