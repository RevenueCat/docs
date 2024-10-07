//..
Purchases.configure(this, "public_sdk_key")
//..

// Set the KochavaDeviceID
Tracker.getInstance().retrieveDeviceId { deviceId ->
    Purchases.sharedInstance.setKochavaDeviceID(deviceId);
}
