try {
  const offerings = await Purchases.getOfferings();
  let packages;
  if (user.isPaidDownload) {
    packages = offerings.all["paid_download_offer"].availablePackages;
  } else if (user.signedUpOver30DaysAgo) {
    packages = offerings.all["long_term_offer"].availablePackages;
  } else if (user.recentlyChurned) {
    packages = offerings.all["ios_subscription_offer"].availablePackages;
  }
  presentPaywall(packages);
} catch (error) {
  // Handle error
}
