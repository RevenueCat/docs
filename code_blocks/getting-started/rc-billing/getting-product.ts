// Accessing / displaying the monthly product

try {
  const offerings = await purchases.getOfferings();
  if (offerings.current && offerings.current.monthly) {
    const product = offerings.current.monthly.rcBillingProduct;
    // Get the price and currency from the RCBillingProduct
  }
} catch (e) {}
