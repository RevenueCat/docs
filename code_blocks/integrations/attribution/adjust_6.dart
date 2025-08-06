import 'package:adjust_sdk/adjust.dart';
import 'package:purchases_flutter/purchases_flutter.dart';

Future<void> init() async {
  await Purchases.configure(PurchasesConfiguration('public_sdk_key'));
  await Purchases.collectDeviceIdentifiers();

  final adid = await Adjust.getAdid();
  if (adid != null) {
    await Purchases.setAdjustID(adid);
  }

  Adjust.addAttributionChangedListener((attribution) {
    Purchases.collectDeviceIdentifiers();
    Purchases.setAdjustID(attribution.adid);
  });
}
