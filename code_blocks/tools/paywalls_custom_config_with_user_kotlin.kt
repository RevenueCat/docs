Purchases.configure(
    PurchasesConfiguration.Builder(this, <api_key>)
        .appUserID(<my_app_user_id>)
        .purchasesAreCompletedBy(PurchasesAreCompletedBy.MY_APP)
        .build()
)
