// ...
Purchases.configure(this, "public_sdk_key")
// ...

// Automatically collect the $gpsAdId and $ip values
Purchases.sharedInstance.collectDeviceIdentifiers()

// Retrieve the DeviceUUID from the Airbridge SDK
val deviceUUID = /* Airbridge SDK DeviceUUID */

// Set the Airbridge Device ID
Purchases.sharedInstance.setAirbridgeDeviceID(deviceUUID)
