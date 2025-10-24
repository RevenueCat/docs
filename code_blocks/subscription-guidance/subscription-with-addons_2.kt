// Fetch available packages with Purchases.sharedInstance.getOfferings()

// You'll need to annotate your function making the purchase with 
// @OptIn(ExperimentalPreviewRevenueCatPurchasesAPI::class)
// until this feature leaves beta.
val purchaseParams = PurchaseParams.Builder(
    activity = currentActivity,
    packageToPurchase = package1
)
    .oldProductId(package1.product.id)
    .addOnPackages(listOf(package2, package3))
    .build()

Purchases.sharedInstance.purchase(
    purchaseParams = purchaseParams,
    callback = object : PurchaseCallback {
        override fun onCompleted(
            storeTransaction: StoreTransaction, 
            customerInfo: CustomerInfo
        ) {
            // Purchase Completed Successfully
        }

        override fun onError(error: PurchasesError, userCancelled: Boolean) {
            // The purchase did not complete successfully
        }
    },
)
