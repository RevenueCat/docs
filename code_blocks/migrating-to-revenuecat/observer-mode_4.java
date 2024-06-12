// If you're targeting only Google Play Store
public class MainApplication extends Application {
    @Override
    public void onCreate() {
        super.onCreate();
        Purchases.setLogLevel(LogLevel.DEBUG);
        Purchases.configure(
            new PurchasesConfiguration.Builder(this, <public_google_sdk_key>)
                .purchasesAreCompletedBy(PurchasesAreCompletedBy.MY_APP)
                .build()
        );
    }
}

// If you're building for the Amazon Appstore 
public class MainApplication extends Application {
    @Override
    public void onCreate() {
        super.onCreate();
        Purchases.setLogLevel(LogLevel.DEBUG);
      
        PurchasesConfiguration.Builder builder = null;
      
        if (BuildConfig.STORE.equals("amazon")) {
            builder = new AmazonConfiguration.Builder(this, <public_amazon_sdk_key>);
        } else if (BuildConfig.STORE.equals("google")) {
            builder = new PurchasesConfiguration.Builder(this, <public_google_sdk_key>);
        }
      
        Purchases.configure(
            builder
            .purchasesAreCompletedBy(PurchasesAreCompletedBy.MY_APP)
            .build()
        );
    }
}