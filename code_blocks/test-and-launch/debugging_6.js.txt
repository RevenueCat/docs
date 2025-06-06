await Purchases.setLogLevel(LogLevel.debug);
PurchasesConfiguration pc = PurchasesConfiguration(<public_sdk_key>);
await Purchases.configure(pc);