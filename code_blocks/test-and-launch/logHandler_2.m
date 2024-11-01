// After configuring a custom log handler, set the `logHandler` property on Purchases
RCPurchases.logHandler = RCLogHandler;
[RCPurchases configureWithAPIKey:@<public_sdk_key> appUserID:@<my_app_user_id>];