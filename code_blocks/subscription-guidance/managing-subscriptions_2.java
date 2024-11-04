Purchases.getSharedInstance().purchase(
	new PurchaseParams.Builder(activity, pkg)
		.oldProductId("oldProductId:oldBasePlanId")
		.googleReplacementMode(GoogleReplacementMode.WITHOUT_PRORATION)
		.build(),
	new PurchaseCallback() {
		@Override
		public void onCompleted(@NonNull StoreTransaction storeTransaction, @NonNull CustomerInfo customerInfo) {
			if (customerInfo.getEntitlements().get("my_entitlement_identifier").isActive()) {
				// Unlock that great "pro" content
			}
		}

		@Override
		public void onError(@NonNull PurchasesError purchasesError, boolean b) {
			// No purchase
		}
	}
);