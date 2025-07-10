try {
  const result = await Purchases.purchaseProductWithWinBackOffer(
    selectedProduct,
    winBackOffer,
  );
  console.log('Win-Back offer purchase successful:', result);
  // TODO: Handle successful purchase in your UI
} catch (err) {
  console.error('Win-Back Offer purchase failed:', err);
  // TODO: Handle failed purchase in your UI
}