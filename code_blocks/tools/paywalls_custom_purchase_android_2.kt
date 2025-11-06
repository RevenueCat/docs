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

        val myPurchaseLogic = object : PurchaseLogicWithCallback() {
            override fun performPurchaseWithCompletion(
                activity: Activity,
                rcPackage: Package,
                completion: (PurchaseLogicResult) -> Unit,
            ) {
                try {
                    // Your custom purchase implementation

                    // Sync with RevenueCat
                    Purchases.sharedInstance.syncPurchases()

                    completion(PurchaseLogicResult.Success)
                } catch (e: Exception) {
                    completion(
                        PurchaseLogicResult.Error(
                            errorDetails = PurchasesError(
                                code = PurchasesErrorCode.PurchaseInvalidError,
                                underlyingErrorMessage = e.message
                            )
                        )
                    )
                }
            }

            override fun performRestoreWithCompletion(
                customerInfo: CustomerInfo,
                completion: (PurchaseLogicResult) -> Unit,
            ) {
                // Your custom restore implementation
                Purchases.sharedInstance.syncPurchases()
                completion(PurchaseLogicResult.Success)
            }
        }

        val paywallOptions = PaywallOptions.Builder(dismissRequest = {
            // Handle dismiss
        })
            .setPurchaseLogic(myPurchaseLogic)
            .build()

        paywallView.setPaywallOptions(paywallOptions)
    }
}
