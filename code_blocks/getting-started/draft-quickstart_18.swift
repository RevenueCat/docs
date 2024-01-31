Purchases.shared.purchasePackage(package) { (transaction, purchaserInfo, error, userCancelled) in
    if purchaserInfo?.entitlements.all["your_entitlement_id"]?.isActive == true {
        // Unlock that great "pro" content
    }
}
