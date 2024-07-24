// Accessing the monthly product// Displaying the monthly product

try {
  Offerings offerings = await Purchases.getOfferings();
  if (offerings.current != null && offerings.current.monthly != null) {
    StoreProduct product = offerings.current.monthly.storeProduct;
    // Get the price and introductory period from the Product
  }
} on PlatformException catch (e) {
	// optional error handling
}
