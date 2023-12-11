// on iOS and tvOS, use `application:didFinishLaunchingWithOptions:`
// on macOS and watchOS use `applicationDidFinishLaunching:` 

func application(_ application: UIApplication,
                 didFinishLaunchingWithOptions launchOptions: [UIApplicationLaunchOptionsKey: Any]?) -> Bool {

    Purchases.logLevel = .debug
    Purchases.configure(withAPIKey: <revenuecat_api_key>, appUserID: <app_user_id>)

}
