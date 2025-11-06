// If you're targeting only Google Play Store
public class MainApplication extends Application {
    @Override
    public void onCreate() {
        super.onCreate();
        Purchases.configure(
            new PurchasesConfiguration.Builder(this, <public_google_sdk_key>)
                .appUserID(<my_app_user_id>)
                .purchasesAreCompletedBy(PurchasesAreCompletedBy.MY_APP)
                .build()
        );
    }
}
