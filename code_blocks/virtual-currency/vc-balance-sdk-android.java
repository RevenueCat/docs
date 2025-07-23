// Fetch virtual currencies
Purchases.sharedInstance.getVirtualCurrencies(
    new GetVirtualCurrenciesCallback() {
        @Override
        public void onReceived(@NonNull VirtualCurrencies virtualCurrencies) {
            // TODO: Handle virtual currencies
        }

        @Override
        public void onError(@NonNull PurchasesError error) {
            // TODO: Handle error
        }
    }
);

// Get the details of a specific virtual currency
VirtualCurrency virtualCurrency = virtualCurrencies.getAll().get(<virtual_currency_code>);
int balance = virtualCurrency.getBalance();
String name = virtualCurrency.getName();
String code = virtualCurrency.getCode();

// Keep in mind that serverDescription may be null if no description was provided
// in the RevenueCat dashboard
String serverDescription = virtualCurrency.getServerDescription();

// Iterate through all virtual currencies
virtualCurrencies.getAll().forEach((key, virtualCurrency) -> {
    System.out.println(virtualCurrency.getCode() + ": " + virtualCurrency.getBalance());
});