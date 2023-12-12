func application(application: UIApplication,
                 didFinishLaunchingWithOptions launchOptions: [NSObject: AnyObject]?) -> Bool {

    // ...

    SwiftyStoreKit.shouldAddStorePaymentHandler = { payment, product in
        // return true if the content can be delivered by your app
        // return false otherwise
    }

    // ...
}
