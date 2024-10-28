import RevenueCat

func application(_ application: UIApplication,
                 didFinishLaunchingWithOptions launchOptions: [UIApplicationLaunchOptionsKey: Any]?) -> Bool {

    Purchases.logLevel = .debug
    Purchases.configure(withAPIKey: <public_apple_api_key>, appUserID: <app_user_id>)

}
