import android.content.Context
import com.revenuecat.purchases.ui.revenuecatui.PaywallActivityLauncher

class MainActivity : AppCompatActivity() {
    fun presentPaywall(context: Context) {
        PaywallActivityLauncher.launch(context, offeringIdentifier = "your_offering")
    }
} 