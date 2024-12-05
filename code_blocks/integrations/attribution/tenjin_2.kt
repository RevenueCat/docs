//..
Purchases.configure(this, "public_sdk_key")
//..

// Automatically collect the $idfa, $idfv, and $ip values
Purchases.sharedInstance.collectDeviceIdentifiers()

// Set the Tenjin ID
Purchases.sharedInstance.setTenjinAnalyticsInstallationID(tenjinAnalyticsId);