// In configure
await Purchases.configure(
  PurchasesConfiguration('<YOUR_API_KEY>')
    // other configuration options...
    ..preferredUILocaleOverride = 'es-ES',
);

// Or during runtime
await Purchases.overridePreferredUILocale('de-DE');