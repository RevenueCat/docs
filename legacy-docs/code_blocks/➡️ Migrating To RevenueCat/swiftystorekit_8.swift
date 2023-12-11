func application(application: UIApplication,
                 didFinishLaunchingWithOptions launchOptions: [NSObject: AnyObject]?) -> Bool {

    // ...
    Purchases.shared.delegate = self
    // ...

}

func purchases(_ purchases: Purchases,
               shouldPurchasePromoProduct product: SKProduct,
               defermentBlock makeDeferredPurchase: @escaping RCDeferredPromotionalPurchaseBlock) {

    // Save the deferment block and call it later...
    let defermentBlock = makeDeferredPurchase

    // ...or call it right away to proceed with the purchase
    defermentBlock { (transaction, customerInfo, error, cancelled) in

        if customerInfo?.entitlements.all[<pro>]?.isActive == true {
            // Unlock that great "pro" content
        }
    }
}
