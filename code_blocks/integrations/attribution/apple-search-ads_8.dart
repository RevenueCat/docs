import 'package:purchases_flutter/purchases_flutter.dart';
import 'package:app_tracking_transparency/app_tracking_transparency.dart';

Future<void> setupAppleSearchAds() async {
  await Purchases.configure(PurchasesConfiguration('public_sdk_key'));
  final status = await AppTrackingTransparency.requestTrackingAuthorization();
  if (status == TrackingStatus.authorized) {
    await Purchases.enableAdServicesAttributionTokenCollection();
  }
}
