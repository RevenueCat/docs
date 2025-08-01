import KochavaTracker
import Purchases

Purchases.configure(withAPIKey: "public_sdk_key")

Tracker.shared.retrieveDeviceId { deviceId in
    Purchases.shared.attribution.setKochavaDeviceId(deviceId)
}
