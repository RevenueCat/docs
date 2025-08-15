import android.app.Application
import com.braze.Braze
import com.revenuecat.purchases.Purchases

class MyApplication : Application() {
    override fun onCreate() {
        super.onCreate()
        Purchases.configure(this, "public_sdk_key", appUserID = "my_app_user_id")
        Braze.getInstance(applicationContext).changeUser("my_app_user_id")
        Purchases.sharedInstance.attribution.setAttributes(
            mapOf(
                "\$brazeAliasName" to "name",
                "\$brazeAliasLabel" to "label"
            )
        )
    }
}
