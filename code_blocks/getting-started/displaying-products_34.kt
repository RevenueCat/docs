Purchases.sharedInstance.getOfferingsWith({ error ->
  // An error occurred
}) { offerings ->
  val packages: Package? = when {
    user.isPaidDownload -> offerings["paid_download_offer"]?.availablePackages
    user.signedUpOver30DaysAgo -> offerings["long_term_offer"]?.availablePackages
    user.recentlyChurned -> offerings["ios_subscription_offer"].availablePackages
    else -> null
  }
	presentPaywall(packages)
}