Purchases.getSharedInstance().purchase(
	new PurchaseParams.Builder(activity, pkg)
		.oldProductId("old_product_id")
		.googleProrationMode(GoogleProrationMode.IMMEDIATE_WITHOUT_PRORATION)
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