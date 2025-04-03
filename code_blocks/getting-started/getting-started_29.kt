Purchases.sharedInstance.getCustomerInfoWith({ error -> /* Optional error handling */ }) { customerInfo ->
  if (customerInfo.entitlements[<my_entitlement_identifier>]?.isActive == true) {
    // Grant user "pro" access
  }
}