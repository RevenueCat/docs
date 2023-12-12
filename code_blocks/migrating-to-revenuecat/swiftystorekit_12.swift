Purchases.shared.getCustomerInfo { (customerInfo, error) in
    if customerInfo?.entitlements.all[<pro>]?.isActive == true {
        // Grant user "pro" access
    }
}
