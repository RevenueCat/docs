// Get the balance of a specific virtual currency
let balance = customerInfo.virtualCurrencies[<your_virtual_currency_code>]?.balance

// Iterate through all virtual currency balances
for(virtualCurrencyCode, virtualCurrencyInfo) in customerInfo.virtualCurrencies {
   print("\(virtualCurrencyCode): \(virtualCurrencyInfo.balance)")
}
