[[RCPurchases sharedPurchases] offeringsWithCompletionBlock:^(RCOfferings *offerings, NSError *error) {
  if (offerings) {
		// Display current offering with offerings.current
  } else if (error) {
    // optional error handling
  }
}];