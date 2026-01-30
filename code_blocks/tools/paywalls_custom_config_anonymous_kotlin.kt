Purchases.configure(
    PurchasesConfiguration.Builder(this, <api_key>)
        .purchasesAreCompletedBy(PurchasesAreCompletedBy.MY_APP)
        .build()
)
