Purchases.sharedInstance.getOfferingsWith({ error ->
  // An error occurred
}) { offerings ->
  offerings.current?.availablePackages?.takeUnless { it.isNullOrEmpty() }?.let {
    // Display packages for sale
  }
}