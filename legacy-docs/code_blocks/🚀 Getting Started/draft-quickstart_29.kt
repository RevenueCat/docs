Purchases.sharedInstance.getPurchaserInfoWith({ error -> /* Optional error handling */ }) { purchaserInfo ->
  if (purchaserInfo.entitlements["my_entitlement_identifier"]?.isActive == true) {
    // Grant user "pro" access
  }
}