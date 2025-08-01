import Purchases from 'react-native-purchases';
import appsFlyer from 'react-native-appsflyer';

Purchases.configure({ apiKey: 'public_sdk_key' });
Purchases.collectDeviceIdentifiers();

appsFlyer.getAppsFlyerUID((err, uid) => {
  if (!err && uid) {
    Purchases.setAppsflyerId(uid);
  }
});
