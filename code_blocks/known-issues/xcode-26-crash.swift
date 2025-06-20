// App Initialization
import Networking

@main
struct MyApp: App {
    init() {
        nw_tls_create_options()
    }
}

// AppDelegate Initialization
import Networking

class AppDelegate: UIResponder, UIApplicationDelegate {
    func application(_ application: UIApplication, didFinishLaunchingWithOptions _: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {

        nw_tls_create_options()
        Purchases.configure(withAPIKey: "redacted")

        return true
    }
}