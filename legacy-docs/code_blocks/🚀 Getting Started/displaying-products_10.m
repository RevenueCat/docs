[[RCPurchases sharedPurchases] offeringsWithCompletionBlock:^(RCOfferings *offerings, NSError *error) {
	NSArray<RCPackage *> *availablePackages = [offerings offeringWithIdentifier:"experiment_group"].availablePackages;
  if (availablePackages) {
    // Display packages for sale
  }
}];