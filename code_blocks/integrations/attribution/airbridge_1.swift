import AdSupport
import Purchases

// ...
Purchases.configure(withAPIKey: "public_sdk_key")
// ...

// Automatically collect the $idfa, $idfv, and $ip values
Purchases.shared.attribution.collectDeviceIdentifiers()

// Retrieve the DeviceUUID from the Airbridge SDK
let deviceUUID = /* Airbridge SDK DeviceUUID */

// Set the Airbridge Device ID
Purchases.shared.attribution.setAirbridgeDeviceID(deviceUUID)
