- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
  	// Override point for customization after application launch.
    
  	RCPurchases.logLevel = RCLogLevelDebug;
        [RCPurchases configureWithAPIKey:<public_apple_api_key> appUserID:<app_user_id>];
    
  	return YES;
}