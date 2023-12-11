if let error = error as? RevenueCat.ErrorCode {
    switch error {
    case .purchaseInvalidError: break
    default: break
    }
} else {
    // Error is a different type
}
