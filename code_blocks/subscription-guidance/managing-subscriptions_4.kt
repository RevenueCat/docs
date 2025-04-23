Purchases.sharedInstance.getCustomerInfoWith(
  onError = { error -> /* Optional error handling */ },
  onSuccess = { customerInfo ->
    val managementURL = customerInfo.managementURL
    // display the managementURL in your app
  }
)