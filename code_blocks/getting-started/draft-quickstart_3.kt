class MainApplication: Application() {

    override fun onCreate() {
        super.onCreate()
        Purchases.debugLogsEnabled = true
        Purchases.configure(this, "public_sdk_key")
    }

}