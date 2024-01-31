try {
  Offerings offerings = await Purchases.getOfferings();
  if (offerings.getOffering("experiment_group").availablePackages.isNotEmpty) {
    // Display packages for sale
  }
} on PlatformException catch (e) {
	// optional error handling
}