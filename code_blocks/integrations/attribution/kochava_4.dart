import 'package:kochava_tracker/kochava_tracker.dart';
import 'package:purchases_flutter/purchases_flutter.dart';

Future<void> init() async {
  await Purchases.configure(PurchasesConfiguration('public_sdk_key'));

  final deviceId = await KochavaTracker.instance.getInstallId();
  await Purchases.setKochavaDeviceId(deviceId);
}
