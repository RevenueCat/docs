//After setting logHandler var to whatever you would like, set the logHandler accordingly. 
await Purchases.setLogHandler(logHandler);
PurchasesConfiguration pc = PurchasesConfiguration(<public_sdk_key>);
await Purchases.configure(pc);