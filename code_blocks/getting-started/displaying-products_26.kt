// Accessing the monthly product

Purchases.sharedInstance.getOfferingsWith({ error ->
  // An error occurred
}) { offerings ->
  val product = offerings.current?.monthly?.product?.also {
    // Get the price and introductory period from the SkuDetails
  }
}