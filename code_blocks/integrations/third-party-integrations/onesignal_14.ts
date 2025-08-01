import Purchases from '@revenuecat/purchases-react-native';

export async function syncOneSignalId(onesignalId: string) {
  await Purchases.setOnesignalUserID(onesignalId);
}

