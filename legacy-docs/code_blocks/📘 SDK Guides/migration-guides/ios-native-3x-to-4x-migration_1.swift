if error.domain == Purchases.ErrorDomain {
    switch Purchases.ErrorCode(_nsError: error).code {
    case .purchaseInvalidError: break
    default: break
    }
}
