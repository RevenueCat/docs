import Purchases from '@revenuecat/purchases-react-native';

export async function syncCustomerIoId(customerIoId: string) {
  await Purchases.setAttributes({ '$customerioId': customerIoId });
}

