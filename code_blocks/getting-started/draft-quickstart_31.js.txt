try {
  PurchaserInfo purchaserInfo = await Purchases.getPurchaserInfo();
  if (purchaserInfo.entitlements.all["my_entitlement_identifier"].isActive) {
    // Grant user "pro" access
  }
} on PlatformException catch (e) {
  // Error fetching purchaser info
}