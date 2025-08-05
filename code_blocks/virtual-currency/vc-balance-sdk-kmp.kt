// Fetch virtual currencies
// With coroutines
try {
    val virtualCurrencies: VirtualCurrencies = Purchases.sharedInstance.awaitVirtualCurrencies()
    // TODO: Handle virtual currencies
} catch(error: PurchasesException) {
    // TODO: Handle error
}

// With callbacks
Purchases.sharedInstance.getVirtualCurrencies(
    onError = { error: PurchasesError ->
        // TODO: Handle error
    },
    onSuccess = { virtualCurrencies: VirtualCurrencies ->
        // TODO: Handle virtual currencies
    },
)

// Get the details of a specific virtual currency
val virtualCurrency = virtualCurrencies.all[<your_virtual_currency_code>]
val balance = virtualCurrency?.balance
val name = virtualCurrency?.name
val code = virtualCurrency?.code

// Keep in mind that serverDescription may be null if no description was provided
// in the RevenueCat dashboard
val description = virtualCurrency?.serverDescription

// Iterate through all virtual currencies
for ((virtualCurrencyCode, virtualCurrency) in virtualCurrencies.all) {
    println("$virtualCurrencyCode: ${virtualCurrency.balance}")
}
