try {
  CustomerInfo customerInfo = await Purchases.purchasePackage(package);
  var isPro = customerInfo.entitlements.all[<my_entitlement_identifier>].isActive;
  if (isPro) {
    // Unlock that great "pro" content
  }
} on PlatformException catch (e) {
  var errorCode = PurchasesErrorHelper.getErrorCode(e);
  if (errorCode != PurchasesErrorCode.purchaseCancelledError) {
    showError(e);  	          
  }
}