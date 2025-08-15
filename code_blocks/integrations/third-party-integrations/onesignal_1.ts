import OneSignal, { OSSubscriptionChangedEvent } from 'react-native-onesignal';
import Purchases from '@revenuecat/purchases-react-native';

export async function initOneSignalRevenueCat() {
  await Purchases.configure({ apiKey: '<revenuecat_api_key>' });
  OneSignal.setAppId('<onesignal_app_id>');

  OneSignal.addSubscriptionObserver((event: OSSubscriptionChangedEvent) => {
    const userId = event.to.userId;
    if (userId) {
      Purchases.setOnesignalID(userId);
    }
  });

  const state = OneSignal.getDeviceState();
  const userId = state?.userId;
  if (userId) {
    await Purchases.setOnesignalID(userId);
  }
}
