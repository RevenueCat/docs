[[RCPurchases sharedPurchases] purchasePackage:package withCompletionBlock:^(SKPaymentTransaction *transaction, RCPurchaserInfo *purchaserInfo, NSError *error, BOOL cancelled) {
    if (purchaserInfo.entitlements.all[@"your_entitlement_id"].isActive) {
    // User is "premium"
	}
}];