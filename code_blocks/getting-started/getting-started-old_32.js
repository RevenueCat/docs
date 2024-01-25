try {
  const customerInfo = await Purchases.getCustomerInfo();
  if(typeof customerInfo.entitlements.active.my_entitlement_identifier !== "undefined") {
    // Grant user "pro" access
  }
} catch (e) {
 // Error fetching purchaser info
}