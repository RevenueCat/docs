import MParticle from '@mparticle/react-native';
import Purchases from '@revenuecat/purchases-react-native';

export async function logout() {
  await MParticle.Identity.logout();
  await Purchases.reset();
}

