import 'package:purchases_flutter/purchases_flutter.dart';

Future<void> init() async {
  await Purchases.configure(PurchasesConfiguration('public_sdk_key'));
  await Purchases.collectDeviceIdentifiers();
}
