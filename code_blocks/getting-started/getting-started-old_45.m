// Additional configure setup
// on iOS and tvOS, use `application:didFinishLaunchingWithOptions:`
// on macOS and watchOS use `applicationDidFinishLaunching:`

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
    // Override point for customization after application launch.
    RCPurchases.logLevel = RCLogLevelDebug;
    [RCPurchases configureWithAPIKey:@"public_sdk_key"];
    RCPurchases.sharedPurchases.delegate = self;

    return YES;
}

- (void)purchases:(nonnull RCPurchases *)purchases receivedUpdatedCustomerInfo:(nonnull RCCustomerInfo *)customerInfo {
    // handle any changes to purchaserInfo
}