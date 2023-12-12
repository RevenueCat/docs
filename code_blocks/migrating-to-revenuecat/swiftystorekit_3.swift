SwiftyStoreKit.retrieveProductsInfo([<com.RevenueCat.Purchase1>]) { result in
    if let product = result.retrievedProducts.first {
        let priceString = product.localizedPrice!
        print("Product: \(product.localizedDescription), price: \(priceString)")
    } else if let invalidProductId = result.invalidProductIDs.first {
        print("Invalid product identifier: \(invalidProductId)")
    } else {
        print("Error: \(result.error)")
    }
}
