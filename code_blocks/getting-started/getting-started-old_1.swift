// on iOS and tvOS, use `application:didFinishLaunchingWithOptions:`
// on macOS and watchOS use `applicationDidFinishLaunching:` 

func application(_ application: UIApplication,
                 didFinishLaunchingWithOptions launchOptions: [UIApplicationLaunchOptionsKey: Any]?) -> Bool {

    Purchases.logLevel = .debug
    Purchases.configure(
     with: Configuration.Builder(withAPIKey: Constants.apiKey)
              .with(appUserID: "<app_user_id>")
              .build()
     )

}
