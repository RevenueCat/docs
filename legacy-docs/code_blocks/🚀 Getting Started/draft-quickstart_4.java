public class MainApplication extends Application {

    @Override
    public void onCreate() {
        super.onCreate();
        Purchases.debugLogsEnabled = true;
       Purchases.configure(this, "public_sdk_key");
    }

}