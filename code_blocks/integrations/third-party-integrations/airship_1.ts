import Purchases from '@revenuecat/purchases-react-native';
import Airship from 'urbanairship-react-native';

async function setAirshipChannel() {
  const channelId = await Airship.getChannelId();
  await Purchases.setAirshipChannelID(channelId);
}
