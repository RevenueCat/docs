import android.app.Application
import com.onesignal.OneSignal
import com.onesignal.OSSubscriptionObserver
import com.onesignal.OSSubscriptionStateChanges
import com.revenuecat.purchases.Purchases
import com.revenuecat.purchases.PurchasesConfiguration

class MyApp : Application(), OSSubscriptionObserver {
    override fun onCreate() {
        super.onCreate()
        Purchases.configure(PurchasesConfiguration.Builder(this, "<revenuecat_api_key>").build())

        OneSignal.initWithContext(this)
        OneSignal.setAppId("<onesignal_app_id>")
        OneSignal.addSubscriptionObserver(this)

        OneSignal.getDeviceState()?.userId?.let {
            Purchases.shared.attribution.setOnesignalID(it)
        }
    }

    override fun onOSSubscriptionChanged(state: OSSubscriptionStateChanges) {
        if (!state.from.isSubscribed && state.to.isSubscribed) {
            state.to.userId?.let { Purchases.shared.attribution.setOnesignalID(it) }
        }
    }
}
