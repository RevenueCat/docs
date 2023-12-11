[[RCPurchases sharedPurchases] purchaserInfoWithCompletionBlock:^(RCPurchaserInfo * purchaserInfo, NSError * error) {
        
    if (purchaserInfo.entitlements.all[@"your_entitlement_id"].isActive) {
    // User is "premium"
	}
}];