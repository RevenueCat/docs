Purchases purchases = GetComponent<Purchases>();
purchases.PurchasePackage(package, (productIdentifier, customerInfo, userCancelled, error) =>
{
  if (customerInfo.Entitlements.Active.ContainsKey("my_entitlement_identifier")) {
    // Unlock that great "pro" content
  }
});