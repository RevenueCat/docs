// NOTE: Facebook has officially ended support for their React Native SDK. You can read more about this here: https://developers.facebook.com/blog/post/2021/01/19/introducing-facebook-platform-sdk-version-9/

// NOTE: You can find a community-supported alternative for the SDK here: https://github.com/facebookarchive/react-native-fbsdk

// The following docs are left in place for reference

import FBSDK from "react-native-fbsdk"

//...
Purchases.setLogLevel(Purchases.LOG_LEVEL.DEBUG);
Purchases.configure({ apiKey: <public_sdk_key> });
//...

// Automatically collect the $idfa, $idfv, and $ip values
Purchases.collectDeviceIdentifiers();

// REQUIRED: Set the Facebook anonymous Id
const anonymousId = await FBSDK.AppEventsLogger.getAnonymousID();
Purchases.setFBAnonymousID(anonymousId);

// Optionally set additional user data
Purchases.setEmail("test@example.com");
Purchases.setPhoneNumber("+16505551234");
