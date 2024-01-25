// Using Swift Concurrency
let customerInfo = try await Purchases.shared.customerInfo()
if customerInfo.entitlements.all[<your_entitlement_id>]?.isActive == true {
    // User is "premium"
}
// Using Completion Blocks
Purchases.shared.getCustomerInfo { (customerInfo, error) in
    if customerInfo?.entitlements.all[<your_entitlement_id>]?.isActive == true {
        // User is "premium"
    }
}
