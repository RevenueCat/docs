import Purchases from '@revenuecat/purchases-react-native';
import Airship from 'urbanairship-react-native';

async function identifyAirshipUser() {
  await Purchases.configure({ apiKey: 'public_sdk_key', appUserID: 'my_app_user_id' });
  await Airship.identify('my_app_user_id');
}
