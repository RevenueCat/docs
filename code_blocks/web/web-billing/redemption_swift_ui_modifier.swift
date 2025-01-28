YourContent()
    .onWebPurchaseRedemptionAttempt { result in
        switch result {
        case .success(customerInfo):
            // Redemption was successful and entitlements were granted to the user.
            updateUI(customerInfo)
        case let .error(error):
            // Redemption failed due to an error.
            displayError(error)
        case .invalidToken:
            // The redemption link is invalid.
            displayInvalidLinkError()
        case .purchaseBelongsToOtherUser:
            // The purchase associated to the link belongs to a different user and it cannot be redeemed.
            displayBelongsToOtherUserError()
        case let .expired(obfuscatedEmail):
            // The redemption link has expired. A new one has been sent to the user to the provided obfuscated email.
            displayExpiredMessage(obfuscatedEmail)
        }
    }
