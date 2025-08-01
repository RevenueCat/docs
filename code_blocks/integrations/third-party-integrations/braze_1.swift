import SwiftUI
import RevenueCat
import Appboy_iOS_SDK

@main
struct MyApp: App {
    init() {
        Purchases.configure(withAPIKey: "public_sdk_key", appUserID: "my_app_user_id")
        Appboy.sharedInstance()?.changeUser("my_app_user_id")
        Purchases.shared.attribution.setAttributes([
            "$brazeAliasName": "name",
            "$brazeAliasLabel": "label"
        ])
    }

    var body: some Scene {
        WindowGroup {
            ContentView()
        }
    }
}
