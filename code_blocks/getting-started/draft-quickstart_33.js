Purchases.getPurchaserInfo(
  info => {
    const isPro = typeof purchaserInfo.entitlements.active.my_entitlement_identifier !== "undefined";
  },
  error => {
    // Error fetching purchaser info
  }
);