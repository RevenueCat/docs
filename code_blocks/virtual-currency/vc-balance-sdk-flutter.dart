// NOTE: Virtual currencies are not yet supported in Flutter web and
// are only available for Flutter on iOS and Android.

// Fetch virtual currencies
try {
  final virtualCurrencies = await Purchases.getVirtualCurrencies();
  // TODO: Handle virtual currencies
} catch (error) {
  // TODO: Handle error
}

// Get the details of a specific virtual currency
final virtualCurrency = virtualCurrencies.all[<virtual_currency_code>];
final balance = virtualCurrency?.balance;
final name = virtualCurrency?.name;
final code = virtualCurrency?.code;

// Keep in mind that serverDescription may be null if no description was provided
// in the RevenueCat dashboard
final serverDescription = virtualCurrency?.serverDescription;

// Iterate through all virtual currencies
virtualCurrencies.all.forEach((virtualCurrencyCode, virtualCurrency) {
  print('$virtualCurrencyCode: ${virtualCurrency.balance}');
});
