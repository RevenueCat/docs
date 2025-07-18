Purchases purchases = GetComponent<Purchases>();
purchases.PurchasePackage(package, (purchaseResult) =>
{
  if (purchaseResult.CustomerInfo.Entitlements.Active.ContainsKey("my_entitlement_identifier")) {
    // Unlock that great "pro" content
  }
});