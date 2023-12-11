let user = try await Purchases.shared.customerInfo()

switch user.entitlements.verificationResult {
/// No verification was done.
///
/// This can happen for multiple reasons:
///  1. Verification is not enabled in ``Configuration``
///  2. Verification can't be performed prior to iOS 13.0
case .notRequested:
    break

/// Entitlements were verified with our server.
case .verified:
    break

/// Entitlements were created and verified on device through `StoreKit 2`.
case .verifiedOnDevice:
    break

/// Entitlement verification failed, possibly due to a MiTM attack.
case .failed:
    break
}
