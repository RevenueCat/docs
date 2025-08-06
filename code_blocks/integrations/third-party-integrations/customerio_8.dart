import 'package:purchases_flutter/purchases_flutter.dart';
import 'package:customer_io/customer_io.dart';

Future<void> setupRevenueCatWithCustomerIo() async {
  // Configure RevenueCat first
  final configuration = PurchasesConfiguration('public_sdk_key')
    ..appUserId = 'your_app_user_id';
  await Purchases.configure(configuration);

  // Ensure Customer.io is initialized and identify has been called
  final customerIoId = CustomerIO.instance.profileIdentifier;

  if (customerIoId != null) {
    await Purchases.setAttributes({'\$customerioId': customerIoId});
  }
}

