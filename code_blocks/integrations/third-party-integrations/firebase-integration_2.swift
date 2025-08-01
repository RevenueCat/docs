import SwiftUI
import FirebaseAnalytics
import RevenueCat

@main
struct MyApp: App {
    init() {
        Purchases.configure(withAPIKey: "public_sdk_key")
        if let instanceID = Analytics.appInstanceID() {
            Purchases.shared.attribution.setFirebaseAppInstanceID(instanceID)
        }
    }

    var body: some Scene {
        WindowGroup {
            ContentView()
        }
    }
}
