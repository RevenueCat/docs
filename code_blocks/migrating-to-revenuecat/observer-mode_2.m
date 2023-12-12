RCPurchases.logLevel = RCLogLevelDebug;
RCConfigurationBuilder *configuration = [RCConfiguration builderWithAPIKey:@<public_sdk_key>];
configuration = [configuration withObserverMode:YES];
configuration = [configuration withAppUserID:@<app_user_id>];
[RCPurchases configureWithConfiguration:[configuration build]];