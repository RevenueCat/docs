import FirebaseAuth
import RevenueCat

func application(_ application: UIApplication,
                 didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {

    // Configure Purchases before Firebase
    Purchases.configure(withAPIKey: "public_sdk_key")
    Purchases.shared.delegate = self

    // Set the reserved $firebaseAppInstanceId attribute from Firebase Analytics
    let instanceID = Analytics.appInstanceID()
    if let unwrapped = instanceID {
        print("Instance ID -> " + unwrapped)
        print("Setting Attributes")
        Purchases.shared.attribution.setFirebaseAppInstanceID(unwrapped)
    } else {
        print("Instance ID -> NOT FOUND!")
    }

    return true
}
