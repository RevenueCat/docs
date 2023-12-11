Purchases.getSharedInstance().restorePurchases(new ReceiveCustomerInfoCallback() {
    @Override
    public void onReceived(@NonNull CustomerInfo customerInfo) {
        //... check purchaserInfo to see if entitlement is now active 	
    }

    @Override
    public void onError(@NonNull PurchasesError purchasesError) {

    }
});