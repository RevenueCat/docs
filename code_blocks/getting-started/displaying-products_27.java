// Accessing the monthly product

Purchases.getSharedInstance().getOfferings(new ReceiveOfferingsCallback() {
  @Override
  public void onReceived(@NonNull Offerings offerings) {
    if (offerings.getCurrent() != null && offerings.getCurrent().getMonthly() != null) {
      StoreProduct product = offerings.getCurrent().getMonthly().getProduct();
      // Get the price and introductory period from the StoreProduct
    }
  }
  
  @Override
  public void onError(@NonNull PurchasesError error) {
    // An error occurred
  }
});