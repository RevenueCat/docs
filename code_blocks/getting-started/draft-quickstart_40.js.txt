try {
  PurchaserInfo restoredInfo = await Purchases.restoreTransactions();
  // ... check restored purchaserInfo to see if entitlement is now active
} on PlatformException catch (e) {
  // Error restoring purchases
}