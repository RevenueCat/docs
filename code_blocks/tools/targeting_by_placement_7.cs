var purchases = GetComponent<Purchases>();
purchases.GetCurrentOfferingForPlacement("your-placement-identifier", (offering, error) =>
{
  if (offering != null){
    // TODO: Show paywall
  } else {
    // TODO: Do nothing or continue on to next view
  }
}
});