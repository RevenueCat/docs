var purchases = GetComponent<Purchases>();
purchases.GetOfferings((offerings, error) =>
{
  List<Purchases.Package> packages;
  if (user.isPaidDownload) {
    packages = offerings.All["paid_download_offer"].AvailablePackages;
  } else if (user.signedUpOver30DaysAgo) {
    packages = offerings.All["long_term_offer"].AvailablePackages;
  } else if (user.recentlyChurned) {
    packages = offerings.All["ios_subscription_offer"].AvailablePackages;
  }
  presentPaywall(packages);
});