// Fetch virtual currencies
// With Async/Await
let virtualCurrencies = try? await Purchases.shared.virtualCurrencies()

// With Completion Handlers
Purchases.shared.virtualCurrencies { virtualCurrencies, error in

}

// Get the details of a specific virtual currency
let virtualCurrency = virtualCurrencies.all[<your_virtual_currency_code>]
let balance = virtualCurrency?.balance
let name = virtualCurrency?.name
let code = virtualCurrency?.code

// Keep in mind that serverDescription may be null if no description was provided
// in the RevenueCat dashboard
let description = virtualCurrency?.serverDescription

// Iterate through all virtual currency balances
for(virtualCurrencyCode, virtualCurrencyInfo) in virtualCurrencies.all {
   print("\(virtualCurrencyCode): \(virtualCurrencyInfo.balance)")
}
