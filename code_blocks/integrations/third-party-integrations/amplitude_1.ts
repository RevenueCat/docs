import Purchases from '@revenuecat/purchases-react-native';
import { init } from '@amplitude/analytics-react-native';

async function setup() {
  await Purchases.configure({ apiKey: 'public_sdk_key', appUserID: 'my_app_user_id' });
  const client = await init('amplitude_api_key');
  client.setUserId('my_app_user_id');
  const deviceId = await client.getDeviceId();
  await Purchases.setAttributes({ '$amplitudeDeviceId': deviceId });
}
