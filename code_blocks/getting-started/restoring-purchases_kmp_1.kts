Purchases.sharedInstance.restorePurchases(
    onError = { error -> 
        // An error occurred.
    },
    onSuccess = { customerInfo ->
        //... check customerInfo to see if entitlement is now active
    }
)