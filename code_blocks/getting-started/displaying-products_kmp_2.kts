Purchases.sharedInstance.getOfferings(
    onError = { error ->
        // An error occurred
    },
    onSuccess = { offerings ->
        offerings["experiment_group"]?.availablePackages?.takeUnless { it.isEmpty() }?.let {
            // Display packages for sale
        }
    }
)