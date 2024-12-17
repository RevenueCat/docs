try {
  final customerInfo = await Purchases.purchasePackageWithWinBackOffer(package, selectedWinBackOffer);
  // TODO: Handle successful purchase in your UI
} catch (e) {
  print('Win-Back offer purchase failed: $e');
  // TODO: Handle failed purchase in your UI
}