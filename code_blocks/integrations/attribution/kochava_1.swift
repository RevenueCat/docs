import AdSupport
// ...
Purchases.configure(withAPIKey: "public_sdk_key")
// ...

// Automatically collect the $idfa, $idfv, and $ip values
Purchases.shared.attribution.collectDeviceIdentifiers()

// Set the Kochava Device ID
Purchases.shared.attribution.setKochavaDeviceID(kochavaDeviceId)
