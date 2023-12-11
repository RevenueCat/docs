// on iOS and tvOS, use `application:didFinishLaunchingWithOptions:`
// on macOS and watchOS use `applicationDidFinishLaunching:` 

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
    // Override point for customization after application launch.
    
    RCPurchases.logLevel = RCLogLevelDebug;
    [RCPurchases configureWithAPIKey:@<revenuecat_api_key> appUserID:<app_user_id>];
    
    return YES;
}