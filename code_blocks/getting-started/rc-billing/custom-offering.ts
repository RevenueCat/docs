try {
  const offerings = await purchases.getOfferings();
  if (offerings.all["experiment_group"].availablePackages.length !== 0) {
    // Display packages for sale
  }
} catch (e) {}
