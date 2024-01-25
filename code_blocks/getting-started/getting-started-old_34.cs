var purchases = GetComponent<Purchases>();
purchases.GetPurchaserInfo((info, error) =>
{
   if (purchaserInfo.Entitlements.Active.ContainsKey("my_entitlement_identifier")) {
    // Unlock that great "pro" content
  }
});