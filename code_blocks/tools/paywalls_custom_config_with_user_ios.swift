Purchases.configure(
    with: .init(withAPIKey: "<public_sdk_key>")
          .with(appUserID: "<app_user_id>")
          .with(purchasesAreCompletedBy: .myApp, storeKitVersion: .storeKit2)
)
