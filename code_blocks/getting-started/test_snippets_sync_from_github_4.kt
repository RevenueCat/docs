override fun onCreate() {
        super.onCreate()
        Purchases.logLevel = LogLevel.DEBUG

        if (BuildConfig.STORE == "amazon") {
            Purchases.configure(AmazonConfiguration.Builder(this, "public_amazon_sdk_key").build())
        } else if (BuildConfig.STORE == "google") {
            Purchases.configure(PurchasesConfiguration.Builder(this, "public_google_sdk_key").build())
        }
    }
}