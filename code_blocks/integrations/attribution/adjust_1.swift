import AdSupport

func application(_ application: UIApplication,
                 didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {

    Purchases.configure(withAPIKey: "public_sdk_key")

    // ... Configure Adjust SDK and set delegate

    // Automatically collect the $idfa, $idfv, and $ip values
    Purchases.shared.attribution.collectDeviceIdentifiers()

    // Set the Adjust Id on app launch if it exists
    if let adjustId = Adjust.adid() {
        Purchases.shared.attribution.setAdjustID(adjustId)
    }

    // ..
}

// IMPORTANT: - Set the Adjust Id when it becomes available, if it
// didn't exist on app launch
extension AppDelegate: AdjustDelegate {
    func adjustAttributionChanged(_ attribution: ADJAttribution?) {
        if let adjustId = attribution?.adid {
            Purchases.shared.attribution.collectDeviceIdentifiers()
            Purchases.shared.attribution.setAdjustID(adjustId)
        }
    }
}
