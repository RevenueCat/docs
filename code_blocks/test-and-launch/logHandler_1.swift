/* Custom Log handling object that will handle all of our types: debug, info, warn, and error. 

You can edit the message to display whatever you would like for each case. */
let handler: (LogLevel, String) -> Void  = { level, message in
    switch level {
    case .verbose:
        print("[VERBOSE] \(message)")
    case .debug:
        print("[DEBUG] \(message)")
    case .info:
        print("[INFO] \(message)")
    case .warn:
        print("[WARN] \(message)")
    case .error:
        print("[ERROR] \(message)")
    }
}


// After configuring a custom log handler, set the `logHandler` property on Purchases
Purchases.logHandler = handler
Purchases.configure(withAPIKey: <public_sdk_key>, appUserID: <my_app_user_id>)