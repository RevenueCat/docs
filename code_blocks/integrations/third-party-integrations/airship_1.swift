func application(application: UIApplication,
                 didFinishLaunchingWithOptions launchOptions: [UIApplicationLaunchOptionsKey: Any]?) -> Bool {

  // Configure Purchases
  Purchases.configure(withAPIKey: "public_sdk_key", appUserID: "my_app_user_id")

  // Initialize Airship
  Airship.takeOff(launchOptions: launchOptions)

  // Set the Airship channel ID in Purchases
  let channelID = Airship.channel.identifier
  Purchases.shared.attribution.setAirshipChannelID(channelID)

  // ...

  return true
}
