// After configuring a custom log handler, set the `logHandler` property on Purchases
await Purchases.setLogHandler(logHandler);
PurchasesConfiguration pc = PurchasesConfiguration(<public_sdk_key>);
await Purchases.configure(pc);