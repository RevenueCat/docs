import SwiftUI
import FirebaseAuth
import RevenueCat

@main
struct MyApp: App {
    init() {
        Purchases.configure(withAPIKey: "public_sdk_key")
        Auth.auth().addStateDidChangeListener { _, user in
            if let uid = user?.uid {
                Purchases.shared.logIn(uid) { _, _, error in
                    if let error {
                        print("Sign in error: \(error.localizedDescription)")
                    }
                }
            }
        }
    }

    var body: some Scene {
        WindowGroup {
            ContentView()
        }
    }
}
