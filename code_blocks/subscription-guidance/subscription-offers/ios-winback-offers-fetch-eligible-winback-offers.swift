let eligibleWinBackOffers: [WinBackOffer] = try await Purchases.shared.eligibleWinBackOffers(
    forProduct: product
)

// Now, display these eligible win-back offers on your paywall