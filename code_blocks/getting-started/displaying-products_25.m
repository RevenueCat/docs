// Accessing the monthly product

[[RCPurchases sharedPurchases] offeringsWithCompletionBlock:^(RCOfferings *offerings, NSError *error) {
  if (offerings.current && offerings.current.monthly) {
    SKProduct *product = offerings.current.monthly.storeProduct;
    // Get the price and introductory period from the StoreProduct
  } else if (error) {
    // optional error handling
  }
}];