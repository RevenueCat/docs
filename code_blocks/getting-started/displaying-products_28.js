// Accessing the monthly product// Displaying the monthly product

try {
  Offerings offerings = await Purchases.getOfferings();
  if (offerings.current != null && offerings.current.monthly != null) {
    Product product = offerings.current.monthly.product;
    // Get the price and introductory period from the Product
  }
} on PlatformException catch (e) {
	// optional error handling
}