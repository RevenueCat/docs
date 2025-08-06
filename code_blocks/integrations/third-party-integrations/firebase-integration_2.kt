import android.app.Application
import com.google.firebase.analytics.ktx.analytics
import com.google.firebase.ktx.Firebase
import com.revenuecat.purchases.Purchases

class MyApplication : Application() {
    override fun onCreate() {
        super.onCreate()
        Purchases.configure(this, "public_sdk_key")
        Firebase.analytics.appInstanceId.addOnCompleteListener { task ->
            if (task.isSuccessful) {
                task.result?.let { id ->
                    Purchases.sharedInstance.attribution.setFirebaseAppInstanceId(id)
                }
            }
        }
    }
}
