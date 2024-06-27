//..
Purchases.configure(this, "public_sdk_key")
//..
  
// Automatically collect the $gpsAdId and $ip values
Purchases.sharedInstance.collectDeviceIdentifiers()

// Optionally set additional user data
Purchases.sharedInstance.setEmail("test@example.com")
Purchases.sharedInstance.setPhoneNumber("+16505551234")