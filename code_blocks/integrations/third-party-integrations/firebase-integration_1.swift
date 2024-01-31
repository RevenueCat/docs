import FirebaseAuth
import RevenueCat

func application(_ application: UIApplication,
                 didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {

    // Configure Purchases before Firebase
    Purchases.configure(withAPIKey: "public_sdk_key")
    Purchases.shared.delegate = self

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
