PurchasesConfiguration configuration = PurchasesConfiguration(<public_sdk_key>);
configuration.purchasesAreCompletedBy = PurchasesAreCompletedByMyApp(
    storeKitVersion: StoreKitVersion.storeKit2,
);

await Purchases.configure(configuration);