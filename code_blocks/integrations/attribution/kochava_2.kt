//..
Purchases.configure(this, "public_sdk_key")
//..

// Automatically collect the $gpsAdId and $ip values
Purchases.sharedInstance.collectDeviceIdentifiers()

// Set the KochavaDeviceID
Tracker.getInstance().retrieveDeviceId { deviceId ->
    Purchases.sharedInstance.setKochavaDeviceID(deviceId);
}
