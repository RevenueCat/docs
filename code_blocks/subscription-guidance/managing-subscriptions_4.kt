Purchases.sharedInstance.getCustomerInfoWith({ error -> /* Optional error handling */ }) { customerInfo ->
    val managementURL = customerInfo.managementURL
    // display the managementURL in your app
}