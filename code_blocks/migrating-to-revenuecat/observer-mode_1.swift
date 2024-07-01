Purchases.configure(
    with: .init(withAPIKey: "<public_sdk_key>")
          .with(purchasesAreCompletedBy: .myApp, storeKitVersion: .storeKit2)
)