var purchases = GetComponent<Purchases>();
purchases.RestorePurchases((info, error) =>
{
    //... check purchaserInfo to see if entitlement is now active
});