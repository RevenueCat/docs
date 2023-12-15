Purchases.getSharedInstance().getCustomerInfo(new ReceiveCustomerInfoCallback() {
  @Override
  public void onReceived(@NonNull CustomerInfo customerInfo) {
    // access latest customerInfo
  }
  
  @Override
  public void onError(@NonNull PurchasesError error) {

  }
});