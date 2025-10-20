class MainApplicationOnlyPlayStore: Application() {
    override fun onCreate() {
        super.onCreate()
        Purchases.logLevel = LogLevel.DEBUG
        Purchases.configure(PurchasesConfiguration.Builder(this, "public_google_sdk_key").build())
    }
}