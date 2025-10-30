// ...
Purchases.configure(this, "public_sdk_key")
// ...

// Retrieve the DeviceUUID from the Airbridge SDK
val deviceUUID = /* Airbridge SDK DeviceUUID */

// Forward it to RevenueCat
Purchases.sharedInstance.setAirbridgeDeviceID(deviceUUID)
