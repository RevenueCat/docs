try {
  const result = await Purchases.purchaseProductWithWinBackOffer(
    selectedProduct,
    winBackOffer
  );
  console.log("Win-Back offer purchase successful:", result);
  // Handle successful purchase in your UI
} catch (err) {
  console.error("Win-Back offer purchase failed:", err);
  // Handle purchase error in your UI
}
