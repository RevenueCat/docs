// The appUserID can be set through the Unity Editor. 
// See Unity installation instructions https://docs.revenuecat.com/docs/unity

// If you'd like to do it programmatically instead, 
// make sure to check "Use runtime setup" in the Editor and then: 

Purchases.PurchasesConfiguration.Builder builder = Purchases.PurchasesConfiguration.Builder.Init("api_key");
Purchases.PurchasesConfiguration purchasesConfiguration =
    builder.SetUserDefaultsSuiteName("user_default")
    .SetDangerousSettings(new Purchases.DangerousSettings(false))
    .SetUseAmazon(false)
    .SetAppUserId(appUserId)
    .Build();
purchases.Configure(purchasesConfiguration);