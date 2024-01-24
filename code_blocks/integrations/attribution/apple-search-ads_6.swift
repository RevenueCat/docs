import AdServices

func application(_ application: UIApplication,
                 didFinishLaunchingWithOptions launchOptions: [UIApplicationLaunchOptionsKey: Any]?) -> Bool {

     Purchases.configure(withAPIKey: "public_sdk_key", appUserID: "my_app_user_id")

     if ATTrackingManager.trackingAuthorizationStatus != .notDetermined {
     // The user has previously seen a tracking request, so enable automatic collection
     // before configuring in order to to collect whichever token is available
     Purchases.shared.attribution.enableAdServicesAttributionTokenCollection()
    }

    return true
}

// Later in your app's lifecycle, ask consent for tracking
if ATTrackingManager.trackingAuthorizationStatus == .notDetermined {
    ATTrackingManager.requestTrackingAuthorization { _ in
        Purchases.shared.attribution.enableAdServicesAttributionTokenCollection()
    }
}
