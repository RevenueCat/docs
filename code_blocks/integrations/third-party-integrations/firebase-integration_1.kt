import android.app.Application
import com.google.firebase.auth.FirebaseAuth
import com.revenuecat.purchases.Purchases
import com.revenuecat.purchases.logIn

class MyApplication : Application() {
    override fun onCreate() {
        super.onCreate()
        Purchases.configure(this, "public_sdk_key")
        FirebaseAuth.getInstance().addAuthStateListener { auth ->
            auth.currentUser?.uid?.let { uid ->
                Purchases.sharedInstance.logIn(uid) { _, _, _ -> }
            }
        }
    }
}
