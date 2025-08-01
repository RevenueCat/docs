import android.app.Application
import com.appsflyer.AppsFlyerLib
import com.revenuecat.purchases.Purchases

class MyApplication : Application() {
    override fun onCreate() {
        super.onCreate()
        Purchases.configure(this, "public_sdk_key")
        Purchases.sharedInstance.collectDeviceIdentifiers()
        val appsflyerId = AppsFlyerLib.getInstance().getAppsFlyerUID(this)
        Purchases.sharedInstance.setAppsflyerID(appsflyerId)
    }
}