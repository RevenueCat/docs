// Don't forget to opt in to experimental RevenueCat APIs with 
// @OptIn(ExperimentalPreviewRevenueCatPurchasesAPI::class)

// Get the balance of a specific virtual currency
val goldBalance = customerInfo.virtualCurrencies["GLD"]?.balance

// Iterate through all virtual currency balances
for((virtualCurrencyCode, virtualCurrencyInfo) in customerInfo.virtualCurrencies) {
    println("$virtualCurrencyCode: ${virtualCurrencyInfo.balance}")
}