import 'package:purchases_flutter/purchases_flutter.dart';

Future<void> syncCustomerIoId(String customerIoId) async {
  await Purchases.setAttributes({'\$customerioId': customerIoId});
}

