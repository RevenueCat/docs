func application(application: UIApplication,
                 didFinishLaunchingWithOptions launchOptions: [NSObject: AnyObject]?) -> Bool {

    Purchases.debugLogsEnabled = true
    Purchases.configure(withAPIKey: <public_sdk_key>, appUserID: <my_app_user_id>)

    return true
}
