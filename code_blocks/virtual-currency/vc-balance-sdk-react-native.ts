// Get the balance of a specific virtual currency
const balance = customerInfo.virtualCurrencies[<your_virtual_currency_code>]?.balance;

// Iterate through all virtual currency balances
for (const virtualCurrencyCode of Object.keys(customerInfo.virtualCurrencies)) {
  const balance = customerInfo.virtualCurrencies[virtualCurrencyCode]?.balance;
  console.log(`${virtualCurrencyCode}: ${balance}`);
}
