Purchases.getSharedInstance().getPurchaserInfo(new ReceivePurchaserInfoListener() {
  @Override
  public void onReceived(@NonNull PurchaserInfo purchaserInfo) {
    if (purchaserInfo.getEntitlements().get("my_entitlement_identifier").isActive()) {
      // Grant user "pro" access
    }
  }
  
  @Override
  public void onError(@NonNull PurchasesError error) {

  }
});