Purchases purchases = GetComponent<Purchases>();
purchases.GetEligibleWinBackOffersForPackage(package, (winBackOffers, error) => {
    if (error != null)
    {
        // TODO: handle the error in your UI
    }
    else
    {
        // TODO: display eligible win-back offers in your UI
    }
});