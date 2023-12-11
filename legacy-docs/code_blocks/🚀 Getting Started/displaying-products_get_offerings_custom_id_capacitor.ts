try {
  const offerings = await Purchases.getOfferings();
  if (offerings.all["experiment_group"].availablePackages.length !== 0) {  
    // Display packages for sale
  }
} catch (error) {
  // Handle error
}
