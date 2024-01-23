const paymentDiscount = await Purchases.getPromotionalOffer(product, product.discounts[0]);
if (paymentDiscount) {
  	// Payment discount fetched
}