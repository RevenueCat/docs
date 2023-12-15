// Using Swift Concurrency
do {
    let customerInfo = try await Purchases.shared.customerInfo()
} catch {
    // handle error
}
// Using Completion Blocks
Purchases.shared.getCustomerInfo { (customerInfo, error) in
    // access latest customerInfo
}
