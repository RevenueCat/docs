var purchases = GetComponent<Purchases>();
purchases.GetCustomerInfo((customerInfo, error) =>
{
  // access latest customerInfo
});