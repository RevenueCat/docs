Purchases purchases = GetComponent<Purchases>();
purchases.PurchasePackageWithWinBackOffer(
    package, 
    winBackOffers[0],
    (productIdentifier, customerInfo, userCancelled, purchaseError) =>
    {
        if (purchaseError != null)
        {
            // TODO: handle failed purchase in your UI
            return;
        }

        // TODO: handle successful purchase in your UI
    }
);