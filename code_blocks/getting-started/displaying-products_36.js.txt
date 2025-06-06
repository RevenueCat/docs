try {
  Offerings offerings = await Purchases.getOfferings();
  var packages;
  if (user.isPaidDownload) {
    packages = offerings?.getOffering("paid_download_offer")?.availablePackages;
  } else if (user.signedUpOver30DaysAgo) {
    packages = offerings?.getOffering("long_term_offer")?.availablePackages;
  } else if (user.recentlyChurned) {
    packages = offerings?.getOffering("ios_subscription_offer")?.availablePackages;
  }
  presentPaywall(packages);
} on PlatformException catch (e) {
	// optional error handling
}