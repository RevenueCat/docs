Purchases.configure(with: .builder(withAPIKey: apiKey)
  .with(purchasesAreCompletedBy: .myApp, storeKitVersion: .storeKit1)
  .build()