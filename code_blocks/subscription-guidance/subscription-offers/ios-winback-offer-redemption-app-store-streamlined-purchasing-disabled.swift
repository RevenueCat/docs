public class PurchasesDelegate: NSObject, PurchasesDelegate {

    var promotedProduct: StoreProduct?
    var completePurchaseFlow: StartPurchaseBlock?

    public func purchases(_ purchases: Purchases,
                          readyForPromotedProduct product: StoreProduct,
                          purchase startPurchase: @escaping StartPurchaseBlock) {
        self.promotedProduct = product
        self.completePurchaseFlow = startPurchase

        // Do what you need to do before letting the user complete the redemption flow
        // Once that is done, call self.completePurchaseFlow() to complete the redemption
    }
}

// Don't forget to register your PurchasesDelegate with the SDK, like so:
Purchases.shared.delegate = PurchasesDelegate()