Purchases.sharedInstance.getCustomerInfoWith({ error -> /* Optional error handling */ }) { customerInfo ->
    when (customerInfo.entitlements.verificationResult) {
        /// No verification was done.
        ///
        /// This can happen for multiple reasons:
        ///  1. Verification is not enabled in Configuration
        ///  2. Verification can't be performed prior to Android 4.4
        VerificationResult.NOT_REQUESTED

        /// Entitlements were verified with our server.
        VerificationResult.VERIFIED,

        /// Entitlements were verified on device.
        VerificationResult.VERIFIED_ON_DEVICE -> {}

        /// Entitlement verification failed, possibly due to a MiTM attack.
        VerificationResult.FAILED,
        -> {}
    }
}