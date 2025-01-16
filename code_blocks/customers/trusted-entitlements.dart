PurchasesConfiguration configuration = PurchasesConfiguration(<public_api_key>);
configuration.entitlementVerificationMode = EntitlementVerificationMode.disabled;
await Purchases.configure(configuration);
