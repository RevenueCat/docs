// If you're targeting only Google Play Store
public class MainApplication extends Application {
    @Override
    public void onCreate() {
        super.onCreate();
        Purchases.setLogLevel(LogLevel.DEBUG);
        Purchases.configure(new PurchasesConfiguration.Builder(this, <revenuecat_project_google_api_key>).build());
    }
}

// If you're building for the Amazon Appstore,
// click the Kotlin tab to see how to set up flavors in your build.gradle:
///...

public class MainApplication extends Application {
    @Override
    public void onCreate() {
        super.onCreate();
        Purchases.setLogLevel(LogLevel.DEBUG);

        PurchasesConfiguration.Builder builder = null;

        if (BuildConfig.STORE.equals("amazon")) {
            builder = new AmazonConfiguration.Builder(this, <revenuecat_project_amazon_api_key>);
        } else if (BuildConfig.STORE.equals("google")) {
            builder = new PurchasesConfiguration.Builder(this, <revenuecat_project_google_api_key>);
        }

        Purchases.configure(builder.build());
    }
}
