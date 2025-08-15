import 'package:purchases_flutter/purchases_flutter.dart';
import 'package:appsflyer_sdk/appsflyer_sdk.dart';

Future<void> init() async {
  await Purchases.configure(PurchasesConfiguration('public_sdk_key'));
  Purchases.collectDeviceIdentifiers();

  final appsflyerSdk = AppsFlyerSdk(AppsFlyerOptions(afDevKey: 'afDevKey', appId: '123'));
  final uid = await appsflyerSdk.getAppsFlyerUID();
  if (uid != null) {
    await Purchases.setAppsflyerId(uid);
  }
}
