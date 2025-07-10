try {
  const purchaserInfo = await Purchases.getPurchaserInfo();
  if(typeof purchaserInfo.entitlements.active.my_entitlement_identifier !== "undefined") {
    // Grant user "pro" access
  }
} catch (e) {
 // Error fetching purchaser info
}