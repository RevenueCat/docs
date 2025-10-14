try {
  final purchaseParams = PurchaseParams.package(package, winBackOffer: selectedWinBackOffer);
  final purchaseResult = await Purchases.purchase(purchaseParams);
  // TODO: Handle successful purchase in your UI
} catch (e) {
  print('Win-Back offer purchase failed: $e');
  // TODO: Handle failed purchase in your UI
}