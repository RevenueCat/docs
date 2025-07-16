// Fetch virtual currencies
// With coroutines
try {
    val getVirtualCurrenciesResult: VirtualCurrencies = Purchases.sharedInstance.awaitGetVirtualCurrencies()
    // TODO: Handle virtual currencies
} catch(error: PurchasesException) {
    // TODO: Handle error
}

// With callbacks
Purchases.sharedInstance.getVirtualCurrenciesWith(
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
val description = virtualCurrency?.serverDescription

// Iterate through all virtual currency balances
for ((virtualCurrencyCode, virtualCurrency) in virtualCurrencies.all) {
    println("$virtualCurrencyCode: ${virtualCurrency.balance}")
}