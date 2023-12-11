try {
  const purchaseResult = await Purchases.purchasePackage({ aPackage: packageToBuy });
  if (typeof purchaseResult.customerInfo.entitlements.active['my_entitlement_identifier'] !== "undefined") {
    // Unlock that great "pro" content
  }
} catch (error: any) {
  if (error.code === PURCHASES_ERROR_CODE.PURCHASE_CANCELLED_ERROR) {
    // Purchase cancelled
  } else {
    // Error making purchase
  }
}

// Note: if you are not using offerings/packages to purchase In-app products, you can use purchaseStoreProduct and getProducts

try {
  const purchaseResult = await Purchases.purchaseStoreProduct({
    product: productToBuy
  });
  if (typeof purchaseResult.customerInfo.entitlements.active['my_entitlement_identifier'] !== "undefined") {
    // Unlock that great "pro" content
  }
} catch (error: any) {
  if (error.code === PURCHASES_ERROR_CODE.PURCHASE_CANCELLED_ERROR) {
    // Purchase cancelled
  } else {
    // Error making purchase
  }
}