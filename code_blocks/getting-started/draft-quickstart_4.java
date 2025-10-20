public class MainApplication extends Application {

    @Override
    public void onCreate() {
        super.onCreate();
        Purchases.setLogLevel(LogLevel.DEBUG);
       Purchases.configure(this, "public_sdk_key");
    }

}