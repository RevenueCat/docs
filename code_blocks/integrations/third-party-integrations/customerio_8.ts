import Purchases from '@revenuecat/purchases-react-native';
import CustomerIO from '@customerio/react-native';

export async function setupRevenueCatWithCustomerIo() {
  // Configure RevenueCat first
  await Purchases.configure({ apiKey: 'public_sdk_key', appUserID: 'your_app_user_id' });

  // Ensure Customer.io is initialized and identify has been called
  const customerIoId = await CustomerIO.getIdentifier();

  if (customerIoId) {
    await Purchases.setAttributes({ '$customerioId': customerIoId });
  }
}

