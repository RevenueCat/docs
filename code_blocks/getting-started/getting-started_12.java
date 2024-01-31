Purchases.getSharedInstance().getOfferings(new ReceiveOfferingsCallback() {

     @Override
     public void onReceived(@NonNull Offerings offerings) {
     }

     @Override
     public void onError(@NonNull PurchasesError error) {
        /* Optional error handling */
     }
});