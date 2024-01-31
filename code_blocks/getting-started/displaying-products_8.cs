var purchases = GetComponent<Purchases>();
purchases.GetOfferings((offerings, error) =>
{
  if (offerings.Current != null && offerings.Current.AvailablePackages.Count != 0){
    // Display packages for sale
  }
});