Purchases.configure(with: .builder(withAPIKey: apiKey)
    // highlight-next-line
    .with(purchasesAreCompletedBy: .myApp, storeKitVersion: .storeKit2)
    .build()