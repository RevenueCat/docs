Purchases.sharedInstance.getOfferings(
    onError = { error ->
        // An error occurred
    },
    onSuccess = { offerings ->
        offerings.current?.availablePackages?.takeUnless { it.isEmpty() }?.let {
            // Display packages for sale
        }
    }
)