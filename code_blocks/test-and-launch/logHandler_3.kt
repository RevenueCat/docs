// After configuring a custom log handler, set the `logHandler` property on Purchases
Purchases.logHandler = logHandler;
Purchases.configure(PurchasesConfiguration.Builder(context, apiKey = "")
            .appUserID(<my_app_user_id>)
            .build()