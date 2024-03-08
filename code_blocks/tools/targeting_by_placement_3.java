Purchases.getSharedInstance().getOfferings(new ReceiveOfferingsCallback() {
    @Override
    public void onReceived(@NonNull Offerings offerings) {
        Offering offering = offerings.getCurrentOfferingForPlacement("your-placement-identifier");
        if (offering != null) {
            // TODO: Show paywall
        } else {
            // TODO: Do nothing or continue on to next view
        }
    }

    @Override
    public void onError(@NonNull PurchasesError error) {
        // An error occurred
    }
});