Purchases.sharedInstance.purchase(
    packageToPurchase = packageToPurchase,
    winBackOffer = winBackOffer,
    onError = { error: PurchasesError, userCancelled: Boolean -> 
        // TODO: handle failed purchase in your UI
    },
    onSuccess = { transaction: StoreTransaction, customerInfo: CustomerInfo -> 
        // TODO: handle successful purchase in your UI
    }
)