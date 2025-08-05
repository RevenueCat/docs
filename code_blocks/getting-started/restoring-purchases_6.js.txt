try {
  const restore = await Purchases.restorePurchases();
  // ... check restored purchaserInfo to see if entitlement is now active
} catch (e) {

}