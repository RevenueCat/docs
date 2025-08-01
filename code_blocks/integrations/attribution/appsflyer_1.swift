import SwiftUI
import RevenueCat
import AppsFlyerLib

@main
struct MyApp: App {
    init() {
        Purchases.configure(withAPIKey: "public_sdk_key")
        Purchases.shared.attribution.collectDeviceIdentifiers()
        let appsflyerId = AppsFlyerLib.shared().getAppsFlyerUID()
        Purchases.shared.attribution.setAppsflyerID(appsflyerId)
    }

    var body: some Scene {
        WindowGroup {
            ContentView()
        }
    }
}
