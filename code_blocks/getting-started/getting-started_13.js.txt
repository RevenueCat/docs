try {
  Offerings offerings = await Purchases.getOfferings();
  if (offerings.current != null) {
    // Display current offering with offerings.current
  }
} on PlatformException catch (e) {
	// optional error handling
}