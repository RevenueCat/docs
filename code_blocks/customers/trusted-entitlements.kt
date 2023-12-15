Purchases.configure(
    PurchasesConfiguration.Builder(context, apiKey = <api_key>)
        .entitlementVerificationMode(EntitlementVerificationMode.INFORMATIONAL)
        .build()
)