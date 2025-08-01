import Purchases from '@revenuecat/purchases-react-native';

export async function syncPostHogUserId(posthogUserId: string) {
  await Purchases.setAttributes({ '$posthogUserId': posthogUserId });
}

