[[RCPurchases sharedPurchases] offeringsWithCompletionBlock:^(RCOfferings *offerings, NSError *error) {
  NSArray<RCPackage *> *packages;
  
  if (user.isPaidDownload) {
    packages = [offerings offeringWithIdentifier:"paid_download_offer"].availablePackages;
  } else if (user.signedUpOver30DaysAgo) {
    packages = [offerings offeringWithIdentifier:"long_term_offer"].availablePackages;
  } else if (user.recentlyChurned) {
    packages = [offerings offeringWithIdentifier:"ios_subscription_offer"].availablePackages;
  }
  
  [self presentPaywallWithPackages:packages];
}];