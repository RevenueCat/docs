try {
  const { eligibleWinBackOffers } =
    await Purchases.getEligibleWinBackOffersForPackage({
      aPackage: aPackage,
    });

  // TODO: display eligible win-back offers in your UI
} catch (err) {
  // TODO: handle the error in your UI
}
