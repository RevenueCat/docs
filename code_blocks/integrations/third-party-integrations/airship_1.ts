import Purchases from '@revenuecat/purchases-react-native';
import Airship from 'urbanairship-react-native';

async function setAirshipChannel() {
  await Purchases.configure({
    apiKey: 'public_sdk_key',
    appUserID: 'my_app_user_id',
  });

  // Airship is configured in native code with your app key
  const channelId = await Airship.getChannelId();
  await Purchases.setAirshipChannelID(channelId);
}
