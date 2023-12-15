final customerInfo = await Purchases.getCustomerInfo();
switch (customerInfo.entitlements.verification) {
  // No verification was done.
  //
  // This can happen for multiple reasons:
  //  1. Verification is not enabled in Configuration
  //  2. Verification can't be performed prior to Android 4.4
  case VerificationResult.notRequested:

  // Entitlements were verified with our server.
  case VerificationResult.verified:

  // Entitlements were verified on device.
  case VerificationResult.verifiedOnDevice:
    // Grant access
    break;

  // Entitlement verification failed, possibly due to a MiTM attack.
  case VerificationResult.failed:
    // Failed verification
    break;
}
