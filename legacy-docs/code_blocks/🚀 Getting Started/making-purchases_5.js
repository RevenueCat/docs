try {
  PurchaserInfo purchaserInfo = await Purchases.purchasePackage(package);
  if (purchaserInfo.entitlements.all["my_entitlement_identifier"].isActive) {
    // Unlock that great "pro" content
  }
} on PlatformException catch (e) {
  var errorCode = PurchasesErrorHelper.getErrorCode(e);
  if (errorCode != PurchasesErrorCode.purchaseCancelledError) {
    showError(e);  	          
  }
}