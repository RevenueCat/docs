Purchases.getSharedInstance().purchasePackage(
    this,
    package,
    new MakePurchaseListener() {
        @Override
        public void onCompleted(@NonNull Purchase purchase, @NonNull PurchaserInfo purchaserInfo) {
            if (purchaserInfo.getEntitlements().get("my_entitlement_identifier").isActive()) {
              // Unlock that great "pro" content
            }
        }

        @Override
        public void onError(@NonNull PurchasesError error, Boolean userCancelled) {
          // No purchase
        }
    }
);