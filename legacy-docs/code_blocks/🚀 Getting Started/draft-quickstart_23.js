// Using packages
try {
  const purchaseMade = await Purchases.purchasePackage(package);
  if (typeof purchaseMade.purchaserInfo.entitlements.active.my_entitlement_identifier !== "undefined") {
    // Unlock that great "pro" content
  }
} catch (e) {
  if (!e.userCancelled) {
  	showError(e);
  }
}

// Note: if you are using purchaseProduct to purchase Android In-app products, an optional third parameter needs to be provided when calling purchaseProduct. You can use the package system to avoid this
await Purchases.purchaseProduct("product_id", null, Purchases.PURCHASE_TYPE.INAPP);