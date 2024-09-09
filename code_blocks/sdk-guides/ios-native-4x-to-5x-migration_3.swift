Purchases.configure(with: .builder(withAPIKey: apiKey)
    // Set only if your app has its own implementation of StoreKit to make purchases.<br>   Select the version of StoreKit you're using.
    // highlight-next-line
    .with(purchasesAreCompletedBy: .myApp, storeKitVersion: /* Select .storeKit1 or .storeKit2 */)
    .build()