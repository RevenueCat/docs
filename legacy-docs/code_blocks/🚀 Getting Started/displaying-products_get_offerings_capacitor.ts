const displayUpsellScreen = async () => {
  try {
    const offerings = await Purchases.getOfferings();
    if (offerings.current !== null && offerings.current.availablePackages.length !== 0) {  
      // Display packages for sale
    }
  } catch (error) {
    // Handle error
  }
}
