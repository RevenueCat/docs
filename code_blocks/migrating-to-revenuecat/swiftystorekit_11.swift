let appleValidator = AppleReceiptValidator(service: .production, sharedSecret: <your-shared-secret>)
SwiftyStoreKit.verifyReceipt(using: appleValidator) { result in
    switch result {
    case .success(let receipt):
        let productId = <my_product_identifier>
        // Verify the purchase of Consumable or NonConsumable
        let purchaseResult = SwiftyStoreKit.verifyPurchase(
            productId: productId,
            inReceipt: receipt)

        switch purchaseResult {
        case .purchased(let receiptItem):
            print("\(productId) is purchased: \(receiptItem)")
        case .notPurchased:
            print("The user has never purchased \(productId)")
        }
    case .error(let error):
        print("Receipt verification failed: \(error)")
    }
}
