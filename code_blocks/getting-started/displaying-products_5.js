try {
  Offerings offerings = await Purchases.getOfferings();
  if (offerings.current != null && offerings.current.availablePackages.isNotEmpty) {
    // Display packages for sale
  }
} on PlatformException catch (e) {
	// optional error handling
}