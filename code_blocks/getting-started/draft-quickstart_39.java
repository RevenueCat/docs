Purchases.getSharedInstance().restorePurchases(new ReceivePurchaserInfoListener() {
	@Override
	public void onReceived(@android.support.annotation.Nullable PurchaserInfo purchaserInfo, @android.support.annotation.Nullable PurchasesError error) {
    //... check purchaserInfo to see if entitlement is now active 	
  }
});