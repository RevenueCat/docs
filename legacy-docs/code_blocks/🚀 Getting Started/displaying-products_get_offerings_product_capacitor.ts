// Accessing the monthly product

const displayUpsellScreen = async () => {
  try {
    const offerings = await Purchases.getOfferings();
    if (offerings.current && offerings.current.monthly) {
      const product = offerings.current.monthly;  
      // Get the price and introductory period from the PurchasesProduct
    }
  } catch (error) {
    // Handle error
  }
}
