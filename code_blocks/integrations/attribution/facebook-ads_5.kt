import android.app.Application
import com.facebook.appevents.AppEventsLogger
import com.revenuecat.purchases.Purchases
import com.revenuecat.purchases.PurchasesConfiguration

class MyApp : Application() {
    override fun onCreate() {
        super.onCreate()
        Purchases.configure(PurchasesConfiguration.Builder(this, "public_sdk_key").build())
        AppEventsLogger.activateApp(this)
    }
}
