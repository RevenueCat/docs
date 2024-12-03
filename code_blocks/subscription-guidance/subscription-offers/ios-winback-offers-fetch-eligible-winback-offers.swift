let eligibleWinBackOffers: [WinBackOffer] = try await Purchases.shared.eligibleWinBackOffers(
    forPackage: package
)

// TODO: display eligible win-back offers in your UI