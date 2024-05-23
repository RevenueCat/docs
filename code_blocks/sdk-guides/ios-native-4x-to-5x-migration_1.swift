Purchases.configure(with: .builder(withAPIKey: apiKey)
		.with(observerMode: true, storeKitVersion: .storeKit2)
    .build()