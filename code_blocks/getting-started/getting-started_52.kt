Purchases.sharedInstance.getCustomerInfo(
  onError = { error -> /* Optional error handling */ },
  onSuccess = { customerInfo ->
    if (customerInfo.entitlements[<my_entitlement_identifier>]?.isActive == true) {
      // Grant user "pro" access
    }
  }
)