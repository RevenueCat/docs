Purchases.shared.purchase(package: package) { (transaction, customerInfo, error, userCancelled) in
    if customerInfo?.entitlements.all[<your_entitlement_id>]?.isActive == true {
        // Unlock that great "pro" content
    }
}
