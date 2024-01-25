[[RCPurchases sharedPurchases] purchasePackage:package withCompletion:^(RCStoreTransaction *transaction, RCCustomerInfo *customerInfo, NSError *error, BOOL cancelled) {
  if (customerInfo.entitlements[@"your_entitlement_id"].isActive) {
    // Unlock that great "pro" content
  }
}];