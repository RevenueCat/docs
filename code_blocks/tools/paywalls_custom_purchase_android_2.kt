import android.app.Activity
import android.os.Bundle
import androidx.appcompat.app.AppCompatActivity
import com.revenuecat.purchases.CustomerInfo
import com.revenuecat.purchases.Package
import com.revenuecat.purchases.Purchases
import com.revenuecat.purchases.PurchasesError
import com.revenuecat.purchases.PurchasesErrorCode
import com.revenuecat.purchases.ui.revenuecatui.PaywallOptions
import com.revenuecat.purchases.ui.revenuecatui.PurchaseLogicWithCallback
import com.revenuecat.purchases.ui.revenuecatui.PurchaseLogicResult
import com.revenuecat.purchases.ui.revenuecatui.views.PaywallView

// In your Activity or Fragment
class MyActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        val paywallView = findViewById<PaywallView>(R.id.paywallView)

        // Note: For new projects, we recommend using the Compose + suspend function approach.
        // This callback-based approach is provided for legacy codebases.

        val myPurchaseLogic = object : PurchaseLogicWithCallback() {
            override fun performPurchaseWithCompletion(
                activity: Activity,
                rcPackage: Package,
                completion: (PurchaseLogicResult) -> Unit,
            ) {
                performCustomPurchase(activity, rcPackage) { result ->
                    completion(result)
                }
            }

            override fun performRestoreWithCompletion(
                customerInfo: CustomerInfo,
                completion: (PurchaseLogicResult) -> Unit,
            ) {
                performCustomRestore { result ->
                    completion(result)
                }
            }
        }

        val paywallOptions = PaywallOptions.Builder(dismissRequest = {
            // Handle dismiss
        })
            .setPurchaseLogic(myPurchaseLogic)
            .build()

        paywallView.setPaywallOptions(paywallOptions)
    }

    // MARK: - Your Billing Client Implementation

    private fun performCustomPurchase(
        activity: Activity,
        rcPackage: Package,
        completion: (PurchaseLogicResult) -> Unit
    ) {
        // Implement your Billing Client purchase flow here.
        // See Google's documentation: https://developer.android.com/google/play/billing/integrate

        // Sync with RevenueCat after purchase completes
        // Purchases.sharedInstance.syncPurchases()
        // completion(PurchaseLogicResult.Success)
    }

    private fun performCustomRestore(completion: (PurchaseLogicResult) -> Unit) {
        // Implement your restore flow here.
        // See: https://developer.android.com/google/play/billing/integrate#pending

        // Sync with RevenueCat after restore completes
        // Purchases.sharedInstance.syncPurchases()
        // completion(PurchaseLogicResult.Success)
    }
}
