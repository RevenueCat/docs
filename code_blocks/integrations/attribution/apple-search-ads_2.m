- (BOOL)application:(UIApplication *)application 
  didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
  
  RCPurchases *purchases = [RCPurchases configureWithAPIKey:@"public_sdk_key" appUserID:@"my_app_user_id"];
  [purchases.attribution enableAdServicesAttributionTokenCollection];

}