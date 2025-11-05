// Currently only available in Flutter SDK version 9.9.3-add-ons-beta.1

// Fetch available packages to display on your paywall 
// with Purchases.getOfferings()

// You can also use PurchaseParams.package() or PurchaseParams.subscriptionOption.
// Additionally, you can provide subscription products as add-ons using the 
// `addOnSubscriptionOptions()` parameter.
// Support for add-on packages is coming soon.
final PurchaseParams params = PurchaseParams.storeProduct(
  product1,
  addOnStoreProducts: [product2, product3]
);

final result = await Purchases.purchase(params);

