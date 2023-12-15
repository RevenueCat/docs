if (error) {

    // log error details
    NSLog(@"RCError: %@", [error.userInfo objectForKey:RCReadableErrorCodeKey]);
    NSLog(@"Message: %@", error.localizedDescription);
    NSLog(@"Underlying Error: %@", [error.userInfo objectForKey:NSUnderlyingErrorKey]);

    switch ([error code]) {
        case RCNetworkError:
            showError(@"Network error, check your connection and try again.");
        case RCPurchaseNotAllowedError:
            showError(@"Purchases not allowed on this device.");
        case RCPurchaseInvalidError:
            showError(@"Purchase invalid, check payment source.");
        default:
            break;
    }

}