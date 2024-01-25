// on iOS and tvOS, use `application:didFinishLaunchingWithOptions:`
// on macOS and watchOS use `applicationDidFinishLaunching:` 

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
    // Override point for customization after application launch.
    
    RCPurchases.logLevel = RCLogLevelDebug;
    RCConfigurationBuilder *configuration = [RCConfiguration builderWithAPIKey:@"public_sdk_key"];
    configuration = [configuration withAppUserID:@"<app_user_id>"];
    [RCPurchases configureWithConfiguration:[configuration build]];
    
    return YES;
}