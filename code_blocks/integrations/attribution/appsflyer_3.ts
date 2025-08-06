import Purchases from 'react-native-purchases';
import appsFlyer from 'react-native-appsflyer';

async function initRevenueCatAndAppsFlyer() {
  // 1. Configure RevenueCat first
  await Purchases.configure({ apiKey: 'public_sdk_key' });

  // 2. Collect device identifiers: $gpsAdId, $ip (automatically handles platform-specifics)
  await Purchases.collectDeviceIdentifiers();

  // 3. Initialize AppsFlyer before retrieving UID
  appsFlyer.initSdk(
    {
      devKey: 'your_af_dev_key',
      isDebug: false,
      appId: 'your_ios_app_id', // required only for iOS
    },
    (result) => console.log('AppsFlyer initialized:', result),
    (error) => console.error('AppsFlyer init error:', error)
  );

  // 4. Get the AppsFlyer ID and set it to RevenueCat
  appsFlyer.getAppsFlyerUID((err, uid) => {
    if (!err && uid) {
      Purchases.setAppsflyerId(uid);
    }
  });
}
