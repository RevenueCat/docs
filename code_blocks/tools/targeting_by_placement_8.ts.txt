const offering = await Purchases.getCurrentOfferingForPlacement("your-placement-identifier");
if (offering !== null) {
  // TODO: Show paywall
} else {
  // TODO: Do nothing or continue on to next view
}
