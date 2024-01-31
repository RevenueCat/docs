import AdSupport
// ...
Purchases.configure(withAPIKey: "public_sdk_key")
// ...

// Automatically collect the $idfa, $idfv, and $ip values
Purchases.shared.attribution.collectDeviceIdentifiers()

// Set the Appsflyer Id
Purchases.shared.attribution.setAppsflyerID(AppsFlyerLib.shared().getAppsFlyerUID())
