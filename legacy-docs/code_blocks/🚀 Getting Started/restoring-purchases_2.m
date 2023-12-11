[[RCPurchases sharedPurchases] restorePurchasesWithCompletion:^(RCCustomerInfo *customerInfo, NSError *error) {
    //... check customerInfo to see if entitlement is now active
}];