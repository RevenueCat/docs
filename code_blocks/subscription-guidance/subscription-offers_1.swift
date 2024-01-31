Purchases.shared.getOfferings { offerings, error in
  if let product = offerings?.current?.availablePackages.first?.storeProduct {
    Purchases.shared.checkTrialOrIntroDiscountEligibility(product: product) { eligibility in
      if eligibility == .eligible {
        // show trial/introductory terms
      } else {
        // user is not eligible, show non-trial/introductory terms
      }
    }
  }
}
