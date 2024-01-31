[[RCPurchases sharedPurchases] purchasePackage:package withCompletion:^(RCStoreTransaction *transaction, RCCustomerInfo *customerInfo, NSError *error, BOOL cancelled) {
    if (customerInfo.entitlements.all[@"your_entitlement_id"].isActive) {
    // User is "premium"
	}
}];