Purchases purchases = GetComponent<Purchases>();
purchases.PurchasePackage(package, (productIdentifier, purchaserInfo, userCancelled, error) =>
{
  if (purchaserInfo.Entitlements.Active.ContainsKey("my_entitlement_identifier")) {
    // Unlock that great "pro" content
  }
});