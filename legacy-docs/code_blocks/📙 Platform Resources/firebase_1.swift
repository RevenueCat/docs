import Firebase
import RevenueCat

func application(_ application: UIApplication,
                 didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {

    // Configure Purchases before Firebase
    Purchases.configure(withAPIKey: "public_sdk_key")
    Purchases.shared.delegate = self

    // Configure Firebase
    FirebaseApp.configure()

    // Add state change listener for Firebase Authentication
    Auth.auth().addStateDidChangeListener { (auth, user) in

        if let uid = user?.uid {

            // identify Purchases SDK with new Firebase user
            Purchases.shared.logIn(uid, { (info, created, error) in
                if let error {
                    print("Sign in error: \(error.localizedDescription)")
                } else {
                    print("User \(uid) signed in")
                }
            })
        }
    }

    return true
}

// MARK: - Purchases delegate (optional)
func purchases(_ purchases: Purchases, receivedUpdated customerInfo: CustomerInfo) {

    // You can optionally post to the notification center whenever
    // customer info changes.

    // You can subscribe to this notification throughout your app
    // to refresh tableViews or change the UI based on the user's
    // subscription status
    let notificationName = Notification.Name(rawValue: "com.RevenueCat.customerInfoUpdatedNotification")
    NotificationCenter.default.post(name: notificationName, object: nil)
}
