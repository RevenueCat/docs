/* Custom Log handling object that will handle all of our types: debug, info, warn, and error. 

You can edit the message to display whatever you would like for each case. */
class CustomLogHandler: LogHandler {
    func log(level: LogLevel, message: String) {
        switch level {
        case .debug:
            print("[DEBUG] \(message)")
        case .info:
            print("[INFO] \(message)")
        case .warn:
            print("[WARNING] \(message)")
        case .error:
            print("[ERROR] \(message)")
        }
    }
}


// After configuring a custom log handler, set the `logHandler` property on Purchases
Purchases.logHandler = CustomLogHandler()
Purchases.configure(withAPIKey: <public_sdk_key>, appUserID: <my_app_user_id>)