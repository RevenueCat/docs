// Fetch virtual currencies
purchases.GetVirtualCurrencies((virtualCurrencies, error) =>
{
    // TODO: Handle virtual currencies & error
});

// Get the details of a specific virtual currency
var virtualCurrency = virtualCurrencies.All[<virtual_currency_code>];
var balance = virtualCurrency.Balance;
var name = virtualCurrency.Name;
var code = virtualCurrency.Code;

// Keep in mind that serverDescription may be null if no description was provided
// in the RevenueCat dashboard
var serverDescription = virtualCurrency.ServerDescription;

// Iterate through all virtual currencies
foreach (var keyValuePair in virtualCurrencies.All) {
    var virtualCurrencyCode = keyValuePair.Key;
    var vc = keyValuePair.Value;
    Debug.Log($"{virtualCurrencyCode}: {vc.Balance}");
}
