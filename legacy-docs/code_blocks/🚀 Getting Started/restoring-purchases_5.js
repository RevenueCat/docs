try {
  CustomerInfo customerInfo = await Purchases.restorePurchases();
  // ... check restored purchaserInfo to see if entitlement is now active
} on PlatformException catch (e) {
  // Error restoring purchases
}