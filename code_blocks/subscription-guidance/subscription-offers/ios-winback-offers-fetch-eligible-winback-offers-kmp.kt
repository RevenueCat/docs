Purchases.sharedInstance.getEligibleWinBackOffersForPackage(
    packageToCheck = packageToCheck,
    onError = { error: PurchasesError -> 
        // TODO: handle the error in your UI
    },
    onSuccess = { eligibleWinBackOffers: List<WinBackOffer> ->
        // TODO: display eligible win-back offers in your UI
    }
)