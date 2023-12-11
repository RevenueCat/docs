try {
  CustomerInfo restoredInfo = await Purchases.restoreTransactions();
  // ... check restored customerInfo to see if entitlement is now active
} on PlatformException catch (e) {
  // Error restoring purchases
}