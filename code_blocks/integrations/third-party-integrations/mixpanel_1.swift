import SwiftUI
import RevenueCat
import Mixpanel

@main
struct MyApp: App {
    init() {
        Purchases.configure(withAPIKey: "public_sdk_key", appUserID: "my_app_user_id")
        Mixpanel.mainInstance().identify(distinctId: "my_app_user_id")
        Purchases.shared.attribution.setMixpanelDistinctID(Mixpanel.mainInstance().distinctId)
    }

    var body: some Scene {
        WindowGroup {
            ContentView()
        }
    }
}
