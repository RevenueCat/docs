import Purchases

@main
struct SampleApp: App {
    init() {
        Purchases.logLevel = .debug
        Purchases.configure(withAPIKey: <public_apple_api_key>, appUserID: <app_user_id>)
    }

    var body: some Scene {
        WindowGroup {
            ContentView()
        }
    }
}
