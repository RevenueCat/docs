// Currently only available in Flutter SDK version 9.9.8-add-ons-beta.2

// Fetch available packages to display on your paywall 
// with Purchases.getOfferings()

final PurchaseParams params = PurchaseParams.package(
  package1,
  addOnPackages: [package2, package3]
);

final result = await Purchases.purchase(params);
