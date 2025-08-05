try {
  const customerInfo = await Purchases.restorePurchases();
  //... check customerInfo to see if entitlement is now active
} catch (error) {
  // Error restoring purchases
}
