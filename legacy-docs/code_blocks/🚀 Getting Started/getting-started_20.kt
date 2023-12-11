Purchases.sharedInstance.purchaseWith(
  PurchaseParams.Builder(this, package).build(),
  onError = { error, userCancelled -> /* No purchase */ },
  onSuccess = { storeTransaction, customerInfo ->
    if (customerInfo.entitlements[<my_entitlement_identifier>]?.isActive == true) {
    // Unlock that great "pro" content
  }
)