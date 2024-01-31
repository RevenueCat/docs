import AdSupport

// ...
Purchases.configure(withAPIKey: "public_sdk_key")
// ...

// Automatically collect the $idfa, $idfv, and $ip values
Purchases.shared.attribution.collectDeviceIdentifiers()

// REQUIRED: Set the Facebook anonymous Id
Purchases.shared.attribution.setFBAnonymousID(FBSDKCoreKit.AppEvents.shared.anonymousID)

// Optionally set additional user data
Purchases.shared.attribution.setEmail("test@example.com")
Purchases.shared.attribution.setPhoneNumber("+16505551234")
