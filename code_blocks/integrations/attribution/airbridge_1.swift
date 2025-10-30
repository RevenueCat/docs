import Purchases

// ...
Purchases.configure(withAPIKey: "public_sdk_key")
// ...

// Retrieve the DeviceUUID from the Airbridge SDK
let deviceUUID = /* Airbridge SDK DeviceUUID */

// Forward it to RevenueCat
Purchases.shared.attribution.setAirbridgeDeviceID(deviceUUID)
