import android.app.Activity
import androidx.compose.runtime.*
import com.android.billingclient.api.*
import com.revenuecat.purchases.CustomerInfo
import com.revenuecat.purchases.Package
import com.revenuecat.purchases.Purchases
import com.revenuecat.purchases.PurchasesError
import com.revenuecat.purchases.PurchasesErrorCode
import com.revenuecat.purchases.ui.revenuecatui.Paywall
import com.revenuecat.purchases.ui.revenuecatui.PaywallOptions
import com.revenuecat.purchases.ui.revenuecatui.PurchaseLogic
import com.revenuecat.purchases.ui.revenuecatui.PurchaseLogicResult

@Composable
fun MyPaywallScreen() {
    val myPurchaseLogic = remember {
        object : PurchaseLogic {
            override suspend fun performPurchase(
                activity: Activity,
                rcPackage: Package,
            ): PurchaseLogicResult {
                return try {
                    performCustomPurchase(activity, rcPackage)
                    PurchaseLogicResult.Success
                } catch (e: UserCancelledException) {
                    PurchaseLogicResult.Cancellation
                } catch (e: Exception) {
                    PurchaseLogicResult.Error(
                        errorDetails = PurchasesError(
                            code = PurchasesErrorCode.PurchaseInvalidError,
                            underlyingErrorMessage = e.message
                        )
                    )
                }
            }

            override suspend fun performRestore(
                customerInfo: CustomerInfo
            ): PurchaseLogicResult {
                return try {
                    performCustomRestore()
                    PurchaseLogicResult.Success
                } catch (e: Exception) {
                    PurchaseLogicResult.Error()
                }
            }
        }
    }

    val paywallOptions = PaywallOptions.Builder(dismissRequest = {
        // Handle dismiss
    })
        .setPurchaseLogic(myPurchaseLogic)
        .build()

    Paywall(options = paywallOptions)
}

// MARK: - Your Billing Client 8 implementation here. Sample below:

class UserCancelledException : Exception()

private suspend fun performCustomPurchase(
    activity: Activity,
    rcPackage: Package
): Unit = kotlinx.coroutines.suspendCancellableCoroutine { continuation ->
    // 1. Initialize Billing Client
    val billingClient = BillingClient.newBuilder(activity)
        .setListener { billingResult, purchases ->
            // Handle purchase updates
            if (billingResult.responseCode == BillingClient.BillingResponseCode.OK && purchases != null) {
                purchases.forEach { purchase ->
                    if (purchase.purchaseState == Purchase.PurchaseState.PURCHASED) {
                        // Acknowledge purchase if needed
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

    // 2. Connect to Billing Client
    billingClient.startConnection(object : BillingClientStateListener {
        override fun onBillingSetupFinished(billingResult: BillingResult) {
            if (billingResult.responseCode == BillingClient.BillingResponseCode.OK) {
                // 3. Query product details
                val product = QueryProductDetailsParams.Product.newBuilder()
                    .setProductId(rcPackage.product.id)
                    .setProductType(BillingClient.ProductType.SUBS)
                    .build()

                val params = QueryProductDetailsParams.newBuilder()
                    .setProductList(listOf(product))
                    .build()

                billingClient.queryProductDetailsAsync(params) { result, productDetailsList ->
                    if (result.responseCode == BillingClient.BillingResponseCode.OK) {
                        val productDetails = productDetailsList.firstOrNull()
                        if (productDetails != null) {
                            // 4. Launch billing flow
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
                                    // 5. Sync with RevenueCat
                                    Purchases.sharedInstance.syncPurchases()
                                    continuation.resume(Unit) { }
                                }
                                BillingClient.BillingResponseCode.USER_CANCELED -> {
                                    continuation.resumeWith(Result.failure(UserCancelledException()))
                                }
                                else -> {
                                    continuation.resumeWith(Result.failure(Exception(flowResult.debugMessage)))
                                }
                            }
                        }
                    }
                }
            }
        }

        override fun onBillingServiceDisconnected() {
            // Retry connection if needed
        }
    })
}

private suspend fun performCustomRestore() = kotlinx.coroutines.suspendCancellableCoroutine<Unit> { continuation ->
    // 1. Initialize Billing Client
    val billingClient = BillingClient.newBuilder(/* context */)
        .setListener { _, _ -> }
        .enablePendingPurchases()
        .build()

    // 2. Connect and query existing purchases
    billingClient.startConnection(object : BillingClientStateListener {
        override fun onBillingSetupFinished(billingResult: BillingResult) {
            if (billingResult.responseCode == BillingClient.BillingResponseCode.OK) {
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
                        continuation.resume(Unit) { }
                    }
                }
            }
        }

        override fun onBillingServiceDisconnected() { }
    })
}
