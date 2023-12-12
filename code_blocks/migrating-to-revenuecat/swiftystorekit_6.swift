Purchases.shared.purchase(package: package) { (transaction, info, error, cancelled) in
    if cancelled {
        print("User cancelled purchase")
        return
    }

    // Optionally handle specific purchase errors
    if let err = error as NSError? {

        // log error details
        print("RCError: \(err.userInfo[ReadableErrorCodeKey])")
        print("Message: \(err.localizedDescription)")
        print("Underlying Error: \(err.userInfo[NSUnderlyingErrorKey])")

        // handle specific errors from: https://docs.revenuecat.com/docs/errors
        switch PurchasesErrorCode(_nsError: err).code {

        case .purchaseNotAllowedError:
            print("Purchases not allowed on this device.")

        case .purchaseInvalidError:
            print("Purchase invalid, check payment source.")

        case .networkError:
            print("Network error, check your connection and try again.")

        default:
            break
        }
    } else if info?.entitlements.all[<pro>]?.isActive == true {
        print("Unlocked Pro Cats 🎉")
    }

}
