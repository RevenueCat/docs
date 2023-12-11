[[RCPurchases sharedPurchases] getOfferingsWithCompletion:^(RCOfferings *offerings, NSError *error) {
  if (offerings.current && offerings.current.availablePackages.count != 0) {
    // Display packages for sale
  } else if (error) {
    // optional error handling
  }
}];