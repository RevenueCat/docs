Purchases.getSharedInstance().getOfferings(new ReceiveOfferingsCallback() {
  @Override
  public void onReceived(@NonNull Offerings offerings) {
    if (offerings.getCurrent() != null) {
      List<Package> availablePackages = offerings.getCurrent().getAvailablePackages();
      // Display packages for sale
    }
  }
  
  @Override
  public void onError(@NonNull PurchasesError error) {
    // An error occurred
  }
});