//After setting logHandler var to whatever you would like, set the logHandler accordingly. 
Purchases.setLogHandler = logHandler
Purchases.configure(new PurchasesConfiguration.Builder(context, <api_key>).appUserID(<my_app_user_id>).build());