var purchases = GetComponent<Purchases>();
purchases.RestoreTransactions((info, error) =>
{
    //... check purchaserInfo to see if entitlement is now active
});