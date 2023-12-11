Purchases.getSharedInstance().getOfferings(new ReceiveOfferingsCallback() {
  @Override
  public void onReceived(@NonNull Offerings offerings) {
    List<Package> packages = null;
    if (user.isPaidDownload) {
      if (offerings.get("paid_download_offer") != null) {
        packages = offerings.get("paid_download_offer").getAvailablePackages();
      }
    } else if (user.signedUpOver30DaysAgo) {
      if (offerings.get("long_term_offer") != null) {
        packages = offerings.get("long_term_offer").getAvailablePackages();
      }
    }
    presentPaywall(packages);
  }
  
  @Override
  public void onError(@NonNull PurchasesError error) {
    // An error occurred
  }
});