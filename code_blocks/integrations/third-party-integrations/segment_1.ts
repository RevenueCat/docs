import Purchases from '@revenuecat/purchases-react-native';
import { createClient } from '@segment/analytics-react-native';

async function setup() {
  await Purchases.configure({ apiKey: 'public_sdk_key', appUserID: 'my_app_user_id' });
  const segment = createClient({ writeKey: 'SEGMENT_WRITE_KEY' });
  segment.identify('my_app_user_id');
}

