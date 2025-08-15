import Purchases from 'react-native-purchases';
import { Mixpanel } from 'mixpanel-react-native';

const mixpanel = new Mixpanel('MIXPANEL_TOKEN');

async function init() {
  try {
    // Configure RevenueCat first
    await Purchases.configure({
      apiKey: 'public_sdk_key',
      appUserID: 'my_app_user_id',
    });

    // Initialize Mixpanel
    await mixpanel.init();
    await mixpanel.identify('my_app_user_id');

    // Get and pass distinctId to RevenueCat
    const distinctId = await mixpanel.getDistinctId();
    if (distinctId) {
      await Purchases.setMixpanelDistinctId(distinctId);
    }
  } catch (e) {
    console.warn('Error setting up Mixpanel + RevenueCat:', e);
  }
}
