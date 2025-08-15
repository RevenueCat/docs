import android.app.Application
import com.onesignal.OneSignal
import com.onesignal.OSUserStateObserver
import com.onesignal.OSUserChangedState
import com.revenuecat.purchases.Purchases
import com.revenuecat.purchases.PurchasesConfiguration

class MyApp : Application(), OSUserStateObserver {
    override fun onCreate() {
        super.onCreate()
        Purchases.configure(PurchasesConfiguration.Builder(this, "<revenuecat_api_key>").build())

        OneSignal.initWithContext(this)
        OneSignal.setAppId("<onesignal_app_id>")
        OneSignal.User.addObserver(this)

        OneSignal.User.onesignalId?.let { id ->
            Purchases.shared.attribution.setOnesignalUserID(id)
        }
    }

    override fun onUserStateChange(state: OSUserChangedState) {
        state.current.onesignalId?.let { id ->
            Purchases.shared.attribution.setOnesignalUserID(id)
        }
    }
}
