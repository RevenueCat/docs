Purchases.getSharedInstance().getOfferings(new ReceiveOfferingsListener() {
    @Override
    public void onReceived(@Nullable Map<String, Entitlement> offerings) {
        // Display current offering with offerings.current
    }
  
	  @Override
    public void onError(@NonNull PurchasesError error) {
        /* Optional error handling */ 
    }
});