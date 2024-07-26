Purchases.configure(with: .builder(withAPIKey: apiKey)
    // highlight-next-line
    .with(observerMode: true)
    .build()