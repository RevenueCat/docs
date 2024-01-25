[[RCPurchases sharedPurchases] getCustomerInfoWithCompletion:^(RCPurchaserInfo * customerInfo, NSError * error) {
    if (customerInfo.entitlements.all[@<your_entitlement_id>].isActive) {
    // User is "premium"
	}
}];