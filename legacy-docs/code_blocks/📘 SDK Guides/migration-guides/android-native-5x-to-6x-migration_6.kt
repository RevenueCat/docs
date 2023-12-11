// To purchase a subscription with a free trial

// Old:
Purchases.sharedInstance.purchasePackageWith(
    activity, 
    packageToPurchase = myPackage, 
    onError = { _, _ -> /* handle error */ }, 
    onSuccess = { _, _ -> /* handle success */ }
)

// New:
val purchaseParams = PurchaseParams.Builder(
    freeTrialSubscriptionOption, // You need to obtain this with storeProduct.subscriptionOptions?.freeTrial
    activity
).build()
Purchases.sharedInstance.purchaseWith(
    purchaseParams,
    onError = { _, _ -> /* handle error */ },
    onSuccess = { _, _ -> /* handle success */ }
)