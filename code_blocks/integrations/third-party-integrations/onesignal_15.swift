@main
struct MyApp: App {
    init() {
        Purchases.configure(withAPIKey: "<revenuecat_api_key>")

        OneSignal.initialize("<onesignal_app_id>", withLaunchOptions: launchOptions)
        OneSignal.User.addObserver(self as OSUserStateObserver)

        // If you've already set up OneSignal, then users should already have
        // a OneSignal Id. We can check if it's available and send it to RevenueCat
        if let onesignalId = OneSignal.User.onesignalId {
            // It is recommended to confirm the associated `externalId` to ensure
            // you are capturing the correct data for the user you expect
            if (OneSignal.User.externalId == "<expected_user_external_id>") {
                Purchases.shared.attribution.setOnesignalUserID(onesignalId)
            } else {
                // handle unexpected externalId
            }
        }

        return true
    }
}

public extension MyApp: OSUserStateObserver {
    // Add this method to update the $onesignalUserId in RevenueCat whenever it changes
    // This code should be sufficient to capture all new users if you're setting
    // up OneSignal for the first time.
    func onUserStateDidChange(state: OSUserChangedState) {
        let onesignalId = state.current.onesignalId
        let externalId = state.current.externalId

        // Confirm the `onesignalId` is for the expected user by also checking the associated `externalId`
        // For example, if the device is offline, there may be cached user-related requests
        if let onesignalId,
           externalId == "<expected_user_external_id>"
        {Purchases.shared.attribution.setOnesignalUserID(onesignalId)}
    }
}