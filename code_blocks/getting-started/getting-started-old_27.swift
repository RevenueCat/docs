Purchases.shared.getCustomerInfo { (customerInfo, error) in
    if customerInfo?.entitlements.all["your_entitlement_id"]?.isActive == true {
        // User is "premium"
    }
}
