Purchases.getSharedInstance().getCustomerInfo(new ReceiveCustomerInfoCallback() {
    @Override
    public void onReceived(@NonNull CustomerInfo customerInfo) {
        if (customerInfo.getEntitlements().get(<my_entitlement_identifier>).isActive()) {
            // Grant user "pro" access
        }
    }

    @Override
    public void onError(@NonNull PurchasesError purchasesError) {
    }
});