Purchases.shared.purchaserInfo { (purchaserInfo, error) in
    if purchaserInfo?.entitlements.all["your_entitlement_id"]?.isActive == true {
        // User is "premium"
    }
}
