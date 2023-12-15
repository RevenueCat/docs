purchases.GetCustomerInfo((info, error) =>
{
    switch (info.Entitlements.Verification) {
        // No verification was done.
        //
        // This can happen for multiple reasons:
        //  1. Verification is not enabled in Configuration
        //  2. Verification can't be performed prior to Android 4.4
        case Purchases.VerificationResult.NotRequested:

        // Entitlements were verified with our server.
        case Purchases.VerificationResult.Verified:

        // Entitlements were verified on device.
        case Purchases.VerificationResult.VerifiedOnDevice:
            // Grant access
            break;

        // Entitlement verification failed, possibly due to a MiTM attack.
        case Purchases.VerificationResult.Failed:
            // Verification failed
            break;
    }
});
