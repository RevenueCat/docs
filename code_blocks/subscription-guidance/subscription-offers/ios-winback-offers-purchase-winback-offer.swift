let purchaseParams = PurchaseParams.Builder(product: purchasedPackage.storeProduct)
    .with(winBackOffer: offer)
    .build()

try await Purchases.shared.purchase(purchaseParams)