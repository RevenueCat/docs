import analytics from '@react-native-firebase/analytics';
import Purchases from 'react-native-purchases';

async function init() {
  Purchases.configure({ apiKey: 'public_sdk_key' });
  const instanceId = await analytics().getAppInstanceId();
  await Purchases.setFirebaseAppInstanceId(instanceId);
}
