try {
  const restore = await Purchases.restoreTransactions();
  // ... check restored purchaserInfo to see if entitlement is now active
} catch (e) {

}