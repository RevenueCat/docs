PurchasesConfiguration configuration = PurchasesConfiguration(<public_api_key>);
configuration.entitlementVerificationMode = EntitlementVerificationMode.informational;
await Purchases.configure(configuration);
