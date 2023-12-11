// Using Offerings/Packages
try {
  const {customerInfo, productIdentifier} = await Purchases.purchasePackage(package);
  if (typeof customerInfo.entitlements.active.my_entitlement_identifier !== "undefined") {
    // Unlock that great "pro" content
  }
} catch (e) {
  if (!e.userCancelled) {
  	showError(e);
  }
}

// -----
// If you are NOT using Offerings/Packages:
await Purchases.purchaseProduct("product_id");

// Or, optionally provide the product type as the third parameter. Defaults to PURCHASE_TYPE.SUBS
// The `null` second parameter is the `upgradeInfo` object discussed here: https://www.revenuecat.com/docs/managing-subscriptions#google-play
await Purchases.purchaseProduct("product_id", null, Purchases.PURCHASE_TYPE.INAPP);