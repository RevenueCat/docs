// Configure Purchases SDK
Purchases.configure(withAPIKey: "public_sdk_key", appUserID: "my_app_user_id")

// Configure CleverTap SDK
CleverTap.autoIntegrate()

// ...

if let cleverTapId = CleverTap.sharedInstance()?.profileGetCleverTapID() {
  Purchases.shared.attribution.setCleverTapID(cleverTapId)
}
