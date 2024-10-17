// After configuring a custom log handler, set the `logHandler` property on Purchases
Purchases.setLogHandler = logHandler
Purchases.configure(new PurchasesConfiguration.Builder(context, <api_key>).appUserID(<my_app_user_id>).build());