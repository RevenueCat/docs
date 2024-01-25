var purchases = GetComponent<Purchases>();
purchases.GetOfferings((offerings, error) =>
{
  if (offerings.All.ContainsKey("experiment_group") && offerings.All["experiment_group"].AvailablePackages.Count != 0) {
  	// Display packages for sale
  }
});