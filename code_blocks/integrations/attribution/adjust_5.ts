import Purchases from 'react-native-purchases';
import { Adjust } from 'react-native-adjust';

Purchases.configure({ apiKey: 'public_sdk_key' });
Purchases.collectDeviceIdentifiers();

Adjust.getAdid().then(adid => {
  if (adid) {
    Purchases.setAdjustID(adid);
  }
});

Adjust.addAttributionChangedListener(attribution => {
  Purchases.collectDeviceIdentifiers();
  Purchases.setAdjustID(attribution.adid);
});
