- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {

  // Configure Purchases
  [RCPurchases configureWithAPIKey:@"public_sdk_key" appUserID:@"my_app_user_id"];

  // Initialize Airship
  [UAirship takeOffWithLaunchOptions:launchOptions];
  
  // Identify the user in Airship
  [UAirship.contact identify:@"my_app_user_id"];
  
  // ...

  return YES;
}