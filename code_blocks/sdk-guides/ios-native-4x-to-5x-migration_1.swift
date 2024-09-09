Purchases.configure(with: .builder(withAPIKey: apiKey)
  // Not recommended. Remove to use StoreKit 2 by default.
  .with(storeKitVersion: .storeKit1)
  .build()