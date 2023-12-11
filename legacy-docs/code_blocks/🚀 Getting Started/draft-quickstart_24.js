Purchases.purchasePackage(package, ({ productIdentifier, purchaserInfo }) => {
    if (typeof purchaserInfo.entitlements.active.my_entitlement_identifier !== "undefined") {
      // Unlock that great "pro" content
    }
  },
  ({error, userCancelled}) => {
    // Error making purchase
  }
);

// Note: if you are using purchaseProduct to purchase Android In-app products, an optional third parameter needs to be provided when calling purchaseProduct. You can use the package system to avoid this.

Purchases.purchaseProduct("product_id", ({ productIdentifier, purchaserInfo }) => {
}, ({error, userCancelled}) => {
    // Error making purchase
}, null, Purchases.PURCHASE_TYPE.INAPP);