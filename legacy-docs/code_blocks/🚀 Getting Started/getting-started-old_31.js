try {
  CustomerInfo customerInfo = await Purchases.getCustomerInfo();
  if (customerInfo.entitlements.all["my_entitlement_identifier"].isActive) {
    // Grant user "pro" access
  }
} on PlatformException catch (e) {
  // Error fetching purchaser info
}