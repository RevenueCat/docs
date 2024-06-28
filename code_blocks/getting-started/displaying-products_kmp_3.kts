Purchases.sharedInstance.getOfferings(
    onError = { error ->
        // An error occurred
    },
    onSuccess = { offerings ->
        val product = offerings.current?.monthly?.storeProduct?.also {
            // Get the price and introductory period from the StoreProduct
        }
    }
)