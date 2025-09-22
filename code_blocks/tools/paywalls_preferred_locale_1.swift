// In configure
let builder = Configuration 
    .builder(withAPIKey: "<YOUR_API_KEY>")
    .with(preferredUILocaleOverride: "es-ES")

// Or during runtime
Purchases.shared.overridePreferredUILocale("de-DE")