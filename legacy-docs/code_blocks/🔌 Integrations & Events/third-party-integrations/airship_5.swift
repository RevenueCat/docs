func application(application: UIApplication,
                 didFinishLaunchingWithOptions launchOptions: [UIApplicationLaunchOptionsKey: Any]?) -> Bool {

  // Configure Purchases
  Purchases.configure(withAPIKey: "public_sdk_key", appUserID: "my_app_user_id")

  // Initialize Airship
  Airship.takeOff(launchOptions: launchOptions)

  // Identify the user in Airship
  Airship.contact.identify("my_app_user_id")

  // ...

  return true
}
