import Purchases from '@revenuecat/purchases-react-native';
import { init, setUserId, getDeviceId } from '@amplitude/analytics-react-native';

async function setup() {
  await Purchases.configure({ apiKey: 'public_sdk_key', appUserID: 'my_app_user_id' });
  await init('amplitude_api_key');
  setUserId('my_app_user_id');
  const deviceId = await getDeviceId();
  await Purchases.setAttributes({ '$amplitudeDeviceId': deviceId });
}
