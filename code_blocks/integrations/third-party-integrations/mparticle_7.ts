import MParticle from '@mparticle/react-native';
import Purchases from '@revenuecat/purchases-react-native';

export async function login() {
  const result = await MParticle.Identity.login({ userIdentities: { customerId: 'my_app_user_id' } });
  const mPid = result.getUser().getId();
  await Purchases.collectDeviceIdentifiers();
  await Purchases.setMparticleID(String(mPid));
}

