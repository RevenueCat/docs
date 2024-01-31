func application(_ application: UIApplication,
                 didFinishLaunchingWithOptions launchOptions: [UIApplicationLaunchOptionsKey: Any]?) -> Bool {

    Purchases.configure(withAPIKey: "public_sdk_key", appUserID: "my_app_user_id")
    Purchases.shared.attribution.enableAdServicesAttributionTokenCollection()

    return true
}
