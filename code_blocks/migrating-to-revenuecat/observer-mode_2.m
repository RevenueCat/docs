RCPurchases.logLevel = RCLogLevelDebug;
[RCPurchases configureWithAPIKey:@<public_sdk_key>
                       appUserID:@<app_user_id>
         purchasesAreCompletedBy:RCPurchasesAreCompletedByRevenueCat
                 storeKitVersion:RCStoreKitVersion2];