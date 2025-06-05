import Purchases from 'react-native-purchases';
// ..
Purchases.configure({apiKey: <public_sdk_key>});
// ..
Purchases.collectDeviceIdentifiers();