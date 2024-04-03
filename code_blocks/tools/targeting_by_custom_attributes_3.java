Purchases.getSharedInstance().syncAttributesAndOfferingsIfNeeded(new SyncAttributesAndOfferingsCallback() {
    @Override
    public void onReceived(@NonNull Offerings offerings) {
        // Attributes and offerings are synced
    }

    @Override
    public void onError(@NonNull PurchasesError error) {
        // An error occurred
    }
});