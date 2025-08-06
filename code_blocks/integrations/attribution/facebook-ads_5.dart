import 'package:purchases_flutter/purchases_flutter.dart';
import 'package:facebook_app_events/facebook_app_events.dart';

Future<void> init() async {
  await Purchases.configure(PurchasesConfiguration('public_sdk_key'));
  FacebookAppEvents().activateApp();
}
