Purchases.sharedInstance.getOfferings(
    onError = { error ->
        // An error occurred
    },
    onSuccess = { offerings ->
        val packages: List<Package> = when {
            user.isPaidDownload -> offerings["paid_download_offer"]?.availablePackages
            user.signedUpOver30DaysAgo -> offerings["long_term_offer"]?.availablePackages
            user.recentlyChurned -> offerings["ios_subscription_offer"]?.availablePackages
            else -> null
        }.orEmpty()
        presentPaywall(packages)
    }
)