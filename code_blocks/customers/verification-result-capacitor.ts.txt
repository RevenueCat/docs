const customerInfo = await Purchases.getCustomerInfo().customerInfo;
switch (customerInfo.entitlements.verification) {
    // No verification was done.
    //
    // This can happen for multiple reasons:
    //  1. Verification is not enabled in Configuration
    //  2. Verification can't be performed prior to Android 4.4
    case VERIFICATION_RESULT.NOT_REQUESTED:

    // Entitlements were verified with our server.
    case VERIFICATION_RESULT.VERIFIED:

    // Entitlements were verified on device.
    case VERIFICATION_RESULT.VERIFIED_ON_DEVICE:
        // Grant access
        break;

    case VERIFICATION_RESULT.FAILED:
        // Failed verification
        break;
}
