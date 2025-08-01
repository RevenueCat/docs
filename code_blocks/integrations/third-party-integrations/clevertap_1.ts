import Purchases from '@revenuecat/purchases-react-native';
import CleverTap from 'clevertap-react-native';

async function syncCleverTapId() {
  await Purchases.configure({ apiKey: 'public_sdk_key', appUserID: 'my_app_user_id' });
  const cleverTapId = await CleverTap.getCleverTapID();
  await Purchases.setAttributes({ '$cleverTapId': cleverTapId });
}

