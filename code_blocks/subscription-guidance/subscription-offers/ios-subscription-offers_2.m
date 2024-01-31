[RCPurchases.sharedPurchases getPromotionalOfferForProductDiscount:product.discounts[0]
                                                       withProduct:product
                                                    withCompletion:^(RCPromotionalOffer * _Nullable discount, NSError * _Nullable error) {
	if (discount) {
  	// Payment discount fetched
  }
}];