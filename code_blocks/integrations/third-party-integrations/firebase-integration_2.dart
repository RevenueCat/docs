import 'package:firebase_analytics/firebase_analytics.dart';
import 'package:purchases_flutter/purchases_flutter.dart';

Future<void> initPlatformState() async {
  await Purchases.configure(PurchasesConfiguration('public_sdk_key'));
  final instanceId = await FirebaseAnalytics.instance.appInstanceId;
  if (instanceId != null) {
    await Purchases.setFirebaseAppInstanceId(instanceId);
  }
}
