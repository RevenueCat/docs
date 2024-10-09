//After setting logHandler var to whatever you would like, set the logHandler accordingly. 
Purchases.logHandler = logHandler;
Purchases.configure(PurchasesConfiguration.Builder(context, apiKey = "")
            .appUserID(<my_app_user_id>)
            .build()