try {
  const purchaseResult = await Purchases.purchasePackageWithWinBackOffer({
    aPackage: aPackage,
    winBackOffer: winBackOffer,
  });

  // TODO: Handle successful purchase in your UI
} catch (err) {
  // TODO: Handle failed purchase in your UI
}
