try {
  const offerings = await purchases.getOfferings(appUserId);
  if (
    offerings.current !== null &&
    offerings.current.availablePackages.length !== 0
  ) {
    // Display packages for sale
  }
} catch (e) {}
