import Purchases from 'react-native-purchases';
import {Mixpanel} from 'mixpanel-react-native';

const mixpanel = new Mixpanel('MIXPANEL_TOKEN');

async function init() {
  await Purchases.configure({ apiKey: 'public_sdk_key', appUserID: 'my_app_user_id' });
  await mixpanel.init();
  mixpanel.identify('my_app_user_id');
  const distinctId = await mixpanel.getDistinctId();
  Purchases.setMixpanelDistinctId(distinctId);
}
