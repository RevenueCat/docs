[RCPurchases.sharedPurchases purchasePackage:package withDiscount:discount
                             completionBlock:^(RCStoreTransacction * _Nullable transaction, RCCustomerInfo * _Nullable purchaserInfo, NSError * _Nullable error, BOOL userCancelled) {
  if (purchaserInfo.entitlements[<your_entitlement_id>].isActive) {
    // Unlock that great "pro" content    
  }
}];