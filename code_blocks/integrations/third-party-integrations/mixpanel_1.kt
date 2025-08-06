import android.app.Application
import com.mixpanel.android.mpmetrics.MixpanelAPI
import com.revenuecat.purchases.Purchases

class MyApplication : Application() {
    override fun onCreate() {
        super.onCreate()
        Purchases.configure(this, "public_sdk_key", appUserID = "my_app_user_id")
        val mixpanel = MixpanelAPI.getInstance(this, "MIXPANEL_TOKEN")
        mixpanel.identify("my_app_user_id")
        Purchases.sharedInstance.attribution.setMixpanelDistinctId(mixpanel.distinctId)
    }
}
