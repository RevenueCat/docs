import MParticle from '@mparticle/react-native';
import Purchases from '@revenuecat/purchases-react-native';

async function setup() {
  await Purchases.configure({ apiKey: 'public_sdk_key', appUserID: 'my_app_user_id' });
  MParticle.init({
    apiKey: 'API_KEY',
    apiSecret: 'API_SECRET',
  });
  MParticle.Identity.login({ userIdentities: { customerId: 'my_app_user_id' } });
}

