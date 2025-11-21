import android.app.Activity
import android.os.Bundle
import androidx.appcompat.app.AppCompatActivity
import com.android.billingclient.api.*
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

        // Note: For new projects, we recommend using the Compose + suspend function approach
        // (see paywalls_custom_purchase_android_1.kt). This callback-based approach is
        // provided for legacy codebases.

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

    // MARK: - Your Billing Client 8 implementation here. Sample below:

    private fun performCustomPurchase(
        activity: Activity,
        rcPackage: Package,
        completion: (PurchaseLogicResult) -> Unit
    ) {
        // 1. Initialize and connect to Billing Client
        val billingClient = BillingClient.newBuilder(activity)
            .setListener { billingResult, purchases ->
                if (billingResult.responseCode == BillingClient.BillingResponseCode.OK && purchases != null) {
                    purchases.forEach { purchase ->
                        if (purchase.purchaseState == Purchase.PurchaseState.PURCHASED) {
                            // Acknowledge purchase
                            if (!purchase.isAcknowledged) {
                                val params = AcknowledgePurchaseParams.newBuilder()
                                    .setPurchaseToken(purchase.purchaseToken)
                                    .build()
                                billingClient.acknowledgePurchase(params) { }
                            }
                        }
                    }
                }
            }
            .enablePendingPurchases()
            .build()

        billingClient.startConnection(object : BillingClientStateListener {
            override fun onBillingSetupFinished(billingResult: BillingResult) {
                if (billingResult.responseCode == BillingClient.BillingResponseCode.OK) {
                    // 2. Query product details
                    val product = QueryProductDetailsParams.Product.newBuilder()
                        .setProductId(rcPackage.product.id)
                        .setProductType(BillingClient.ProductType.SUBS)
                        .build()

                    val params = QueryProductDetailsParams.newBuilder()
                        .setProductList(listOf(product))
                        .build()

                    billingClient.queryProductDetailsAsync(params) { result, productDetailsList ->
                        val productDetails = productDetailsList.firstOrNull()
                        if (result.responseCode == BillingClient.BillingResponseCode.OK && productDetails != null) {
                            // 3. Launch billing flow
                            val offerToken = productDetails.subscriptionOfferDetails?.firstOrNull()?.offerToken
                            val productDetailsParams = BillingFlowParams.ProductDetailsParams.newBuilder()
                                .setProductDetails(productDetails)
                                .setOfferToken(offerToken ?: "")
                                .build()

                            val flowParams = BillingFlowParams.newBuilder()
                                .setProductDetailsParamsList(listOf(productDetailsParams))
                                .build()

                            val flowResult = billingClient.launchBillingFlow(activity, flowParams)

                            when (flowResult.responseCode) {
                                BillingClient.BillingResponseCode.OK -> {
                                    // 4. Sync with RevenueCat
                                    Purchases.sharedInstance.syncPurchases()
                                    completion(PurchaseLogicResult.Success)
                                }
                                BillingClient.BillingResponseCode.USER_CANCELED -> {
                                    completion(PurchaseLogicResult.Cancellation)
                                }
                                else -> {
                                    completion(
                                        PurchaseLogicResult.Error(
                                            errorDetails = PurchasesError(
                                                code = PurchasesErrorCode.PurchaseInvalidError,
                                                underlyingErrorMessage = flowResult.debugMessage
                                            )
                                        )
                                    )
                                }
                            }
                        } else {
                            completion(
                                PurchaseLogicResult.Error(
                                    errorDetails = PurchasesError(
                                        code = PurchasesErrorCode.ProductNotAvailableForPurchaseError,
                                        underlyingErrorMessage = "Product not found"
                                    )
                                )
                            )
                        }
                    }
                } else {
                    completion(
                        PurchaseLogicResult.Error(
                            errorDetails = PurchasesError(
                                code = PurchasesErrorCode.StoreProblemError,
                                underlyingErrorMessage = "Failed to connect to billing service"
                            )
                        )
                    )
                }
            }

            override fun onBillingServiceDisconnected() {
                // Retry connection if needed
            }
        })
    }

    private fun performCustomRestore(completion: (PurchaseLogicResult) -> Unit) {
        // 1. Initialize and connect to Billing Client
        val billingClient = BillingClient.newBuilder(this)
            .setListener { _, _ -> }
            .enablePendingPurchases()
            .build()

        billingClient.startConnection(object : BillingClientStateListener {
            override fun onBillingSetupFinished(billingResult: BillingResult) {
                if (billingResult.responseCode == BillingClient.BillingResponseCode.OK) {
                    // 2. Query existing purchases
                    val params = QueryPurchasesParams.newBuilder()
                        .setProductType(BillingClient.ProductType.SUBS)
                        .build()

                    billingClient.queryPurchasesAsync(params) { result, purchases ->
                        if (result.responseCode == BillingClient.BillingResponseCode.OK) {
                            // 3. Acknowledge any unacknowledged purchases
                            purchases.forEach { purchase ->
                                if (!purchase.isAcknowledged &&
                                    purchase.purchaseState == Purchase.PurchaseState.PURCHASED) {
                                    val ackParams = AcknowledgePurchaseParams.newBuilder()
                                        .setPurchaseToken(purchase.purchaseToken)
                                        .build()
                                    billingClient.acknowledgePurchase(ackParams) { }
                                }
                            }

                            // 4. Sync with RevenueCat
                            Purchases.sharedInstance.syncPurchases()
                            completion(PurchaseLogicResult.Success)
                        } else {
                            completion(
                                PurchaseLogicResult.Error(
                                    errorDetails = PurchasesError(
                                        code = PurchasesErrorCode.StoreProblemError,
                                        underlyingErrorMessage = "Failed to query purchases"
                                    )
                                )
                            )
                        }
                    }
                } else {
                    completion(
                        PurchaseLogicResult.Error(
                            errorDetails = PurchasesError(
                                code = PurchasesErrorCode.StoreProblemError,
                                underlyingErrorMessage = "Failed to connect to billing service"
                            )
                        )
                    )
                }
            }

            override fun onBillingServiceDisconnected() { }
        })
    }
}
