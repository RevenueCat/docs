[[RCPurchases sharedPurchases] getCustomerInfoWithCompletion:^(RCPurchaserInfo * customerInfo, NSError * error) {
    switch (customerInfo.entitlements.verificationResult) {
        /// No verification was done.
        ///
        /// This can happen for multiple reasons:
        ///  1. Verification is not enabled in ``Configuration``
        ///  2. Verification can't be performed prior to iOS 13.0
        case RCVerificationResultNotRequested:
            break;

        /// Entitlements were verified with our server.
        case RCVerificationResultVerified:
            break;

        /// Entitlements were created and verified on device through `StoreKit 2`.
        case RCVerificationResultVerifiedOnDevice:
            break;

        /// Entitlement verification failed, possibly due to a MiTM attack.
        case RCVerificationResultFailed:
            break;
    }
}]