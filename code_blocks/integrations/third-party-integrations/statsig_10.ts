import { Statsig } from 'statsig-react-native';
import Purchases from '@revenuecat/purchases-react-native';

export async function setupRevenueCatWithStatsig() {
  await Purchases.configure({
    apiKey: 'public_sdk_key',
    appUserID: 'your_app_user_id',
  });

  await Statsig.initialize('STATSIG_CLIENT_KEY', { userID: 'your_app_user_id' });

  const stableID = Statsig.getStableID();
  await Purchases.setAttributes({ '$statsigUserID': stableID });
}
