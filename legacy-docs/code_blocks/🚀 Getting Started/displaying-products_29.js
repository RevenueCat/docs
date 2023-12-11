// Accessing the monthly product// Displaying the monthly product

try {
  const offerings = await Purchases.getOfferings();
  if (offerings.current && offerings.current.monthly) {
    const product = offerings.current.monthly;
    // Get the price and introductory period from the PurchasesProduct
  }
} catch (e) {
 
}