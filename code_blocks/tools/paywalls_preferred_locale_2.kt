// In configure
val configuration = PurchasesConfiguration.Builder(context, "<YOUR_API_KEY>")
    .preferredUILocaleOverride("es-ES")
    .build()
Purchases.configure(configuration)

// Or during runtime
Purchases.sharedInstance.overridePreferredUILocale("de-DE")