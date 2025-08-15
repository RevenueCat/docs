import OneSignal, { UserChangedState } from 'react-native-onesignal';
import Purchases from '@revenuecat/purchases-react-native';

export async function initOneSignalRevenueCat() {
  await Purchases.configure({ apiKey: '<revenuecat_api_key>' });

  OneSignal.initialize('<onesignal_app_id>');
  OneSignal.User.addObserver((state: UserChangedState) => {
    const onesignalId = state.current.onesignalId;
    if (onesignalId) {
      Purchases.setOnesignalUserID(onesignalId);
    }
  });

  const onesignalId = OneSignal.User.onesignalId;
  if (onesignalId) {
    await Purchases.setOnesignalUserID(onesignalId);
  }
}
