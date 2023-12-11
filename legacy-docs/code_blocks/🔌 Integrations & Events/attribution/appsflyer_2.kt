//..
Purchases.configure(this, "public_sdk_key")
//..
  
// Automatically collect the $gpsAdId, $androidId, and $ip values
Purchases.sharedInstance.collectDeviceIdentifiers()
  
// Set the Appsflyer Id
Purchases.sharedInstance.setAppsflyerID(AppsFlyerLib.getInstance().getAppsFlyerUID(this));