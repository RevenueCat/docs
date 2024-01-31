- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {

  // Configure Purchases
  [RCPurchases configureWithAPIKey:@"public_sdk_key" appUserID:@"my_app_user_id"];

  // Initialize Airship
  [UAirship takeOffWithLaunchOptions:launchOptions];
  
  // Set the Airship channel ID in Purchases
  NSString *channelID = UAirship.channel.identifier;
  [[RCPurchases sharedPurchases] setAirshipChannelID:channelID];
  
  // ...

  return YES;
}