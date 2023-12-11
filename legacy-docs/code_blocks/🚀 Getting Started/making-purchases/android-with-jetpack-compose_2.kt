LocalContext.current.findActivity()?.let { activity ->
	Purchases.sharedInstance.purchaseWith(
		PurchaseParams.Builder(this, aPackage).build(),
    onError = { error, userCancelled -> /* No purchase */ },
    onSuccess = { storeTransaction, customerInfo ->
			if (customerInfo.entitlements["my_entitlement_identifier"]?.isActive == true) {
				// Unlock that great "pro" content
			}
    }
	)
}