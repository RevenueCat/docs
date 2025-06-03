const isSubscribedInOldSystem = oldTracking.isSubscribed()
const isSubscribedInRevenueCat = !customerInfo.entitlements.active.isEmpty

// If the old system says we have a subscription, but RevenueCat does not
if (isSubscribedInOldSystem && !isSubscribedInRevenueCat) 
{
  // Tell Purchases to syncPurchases. 
  // This will sync the user's receipt with RevenueCat.
  Purchases.shared.syncPurchases { (customerInfo, error) in }
}