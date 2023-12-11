Purchases.PurchasesConfiguration.Builder builder = Purchases.PurchasesConfiguration.Builder.Init(<public_api_key>);
Purchases.PurchasesConfiguration purchasesConfiguration =
    .SetEntitlementVerificationMode(Purchases.EntitlementVerificationMode.Informational)
    .Build();
purchases.Configure(purchasesConfiguration);
