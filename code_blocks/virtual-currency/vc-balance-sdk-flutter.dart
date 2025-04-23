// Get the balance of a specific virtual currency
int balance = customerInfo.virtualCurrencies[<your_virtual_currency_code>]?.balance;

// Iterate through all virtual currency balances
for (String virtualCurrencyCode in customerInfo.virtualCurrencies.keys) {
  VirtualCurrencyInfo? virtualCurrencyInfo = customerInfo.virtualCurrencies[virtualCurrencyCode];
  if (virtualCurrencyInfo != null) {
    int balance = virtualCurrencyInfo.balance;
    print("$virtualCurrencyCode: $balance");
  }
}
