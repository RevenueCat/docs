class MainApplication: Application() {

    override fun onCreate() {
        super.onCreate()
        Purchases.logLevel = LogLevel.DEBUG
        Purchases.configure(this, "public_sdk_key")
    }

}