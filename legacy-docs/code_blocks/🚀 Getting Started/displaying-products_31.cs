// Accessing the monthly product

var purchases = GetComponent<Purchases>();
purchases.GetOfferings((offerings, error) =>
{
  if (offerings.Current != null && offerings.Current.Monthly != null){
    var product = offerings.Current.Monthly.Product;
    // Get the price and introductory period from the Product
  }
});