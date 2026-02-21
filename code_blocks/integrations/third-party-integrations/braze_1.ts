import Purchases from 'react-native-purchases';
import braze from '@braze/react-native-sdk';

Purchases.configure({ apiKey: 'public_sdk_key', appUserID: 'my_app_user_id' });
braze.changeUser('my_app_user_id');

Purchases.setAttributes({
  '$brazeAliasName': 'name',
  '$brazeAliasLabel': 'label',
});
