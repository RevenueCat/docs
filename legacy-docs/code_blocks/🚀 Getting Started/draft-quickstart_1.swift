func application(_ application: UIApplication,
                 didFinishLaunchingWithOptions launchOptions: [UIApplicationLaunchOptionsKey: Any]?) -> Bool {

    Purchases.debugLogsEnabled = true
    Purchases.configure(withAPIKey: "public_sdk_key")

}
