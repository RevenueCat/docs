import auth from '@react-native-firebase/auth';
import Purchases from 'react-native-purchases';

Purchases.configure({ apiKey: 'public_sdk_key' });

auth().onAuthStateChanged(user => {
  if (user) {
    Purchases.logIn(user.uid);
  }
});
