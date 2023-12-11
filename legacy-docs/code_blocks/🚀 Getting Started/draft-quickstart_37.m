[[RCPurchases sharedPurchases] restoreTransactionsWithCompletionBlock:^(RCPurchaserInfo *purchaserInfo, NSError *error) {
    //... check purchaserInfo to see if entitlement is now active
}];