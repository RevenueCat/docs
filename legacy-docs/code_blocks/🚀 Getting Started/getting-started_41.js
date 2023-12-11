try {
  const restore = await Purchases.restorePurchases();
  // ... check restored customerInfo to see if entitlement is now active
} catch (e) {

}