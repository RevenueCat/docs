Purchases.sharedInstance.getOfferings(
    onError = { error ->
        // Optional error handling
    },
    onSuccess = { offerings ->
        // Display current offering with offerings.current
    }
)