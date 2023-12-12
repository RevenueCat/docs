// Observer mode can be configured through the Unity Editor. 
// If you'd like to do it programmatically instead, 
// make sure to check "Use runtime setup" in the Unity Editor, and then:

Purchases.PurchasesConfiguration.Builder builder = Purchases.PurchasesConfiguration.Builder.Init(<api_key>);
Purchases.PurchasesConfiguration purchasesConfiguration =
    builder.SetUserDefaultsSuiteName("user_default")
    .SetObserverMode(true)
    .SetAppUserId(appUserId)
    .Build();
purchases.Configure(purchasesConfiguration);