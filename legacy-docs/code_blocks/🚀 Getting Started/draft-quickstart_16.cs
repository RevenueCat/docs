var purchases = GetComponent<Purchases>();
purchases.GetOfferings((offerings, error) =>
{
  if (error != null) {
    LogError(error);
  } else if (offerings.Current != null {
    // Display current offering with offerings.current
  }
});