- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
  	// Override point for customization after application launch.
    
  	RCPurchases.debugLogsEnabled = YES;
  	[RCPurchases configureWithAPIKey:@"public_sdk_key"];
    
  	return YES;
}