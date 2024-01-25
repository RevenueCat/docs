Purchases.getCustomerInfo(
  info => {
    const isPro = typeof customerInfo.entitlements.active[<my_entitlement_identifier>] !== "undefined";
  },
  error => {
    // Error fetching customer info
  }
);