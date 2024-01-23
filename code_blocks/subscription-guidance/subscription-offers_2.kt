val basePlan = storeProduct.subscriptionOptions?.basePlan
val freeTrialOffer = storeProduct.subscriptionOptions?.freeTrial
val introductoryOffer = storeProduct.subscriptionOptions?.introOffer
val offerForLapsedCustomers = storeProduct.subscriptionOptions?.withTag("lapsed-customers").first()

// For example, to purchase the offer for lapsed customers directly, you would then use the following code
Purchases.sharedInstance.purchaseWith(
  PurchaseParams.Builder(requireActivity(), offerForLapsedCustomers).build(), 
  onError = { error, userCancelled ->
    ...
  },
  onSuccess = { storeTransaction, customerInfo ->
    ...
  }
)