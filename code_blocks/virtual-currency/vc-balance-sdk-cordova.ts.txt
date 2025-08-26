// Fetch virtual currencies
Purchases.getVirtualCurrencies(
    virtualCurrencies => {
        // TODO: Handle virtual currencies
    },
    error => {
        // TODO: Handle error
    }
);

// Get the details of a specific virtual currency
const virtualCurrency = virtualCurrencies.all['<virtual_currency_code>'];
const balance = virtualCurrency.balance;
const name = virtualCurrency.name;
const code = virtualCurrency.code;

// Keep in mind that serverDescription may be null if no description was provided
// in the RevenueCat dashboard
const serverDescription = virtualCurrency.serverDescription;

// Iterate through all virtual currencies
for (const [virtualCurrencyCode, virtualCurrency] of Object.entries(virtualCurrencies.all)) {
    console.log(`${virtualCurrency.code}: ${virtualCurrency.balance}`);
}
