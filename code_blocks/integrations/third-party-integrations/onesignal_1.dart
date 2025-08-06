import 'package:onesignal_flutter/onesignal_flutter.dart';
import 'package:purchases_flutter/purchases_flutter.dart';

Future<void> initOneSignalRevenueCat() async {
  await Purchases.configure(PurchasesConfiguration('<revenuecat_api_key>'));
  OneSignal.setAppId('<onesignal_app_id>');

  OneSignal.shared.setSubscriptionObserver((changes) {
    if (!changes.from.isSubscribed && changes.to.isSubscribed) {
      final userId = changes.to.userId;
      if (userId != null) {
        Purchases.setOnesignalID(userId);
      }
    }
  });

  final deviceState = await OneSignal.shared.getDeviceState();
  final userId = deviceState?.userId;
  if (userId != null) {
    await Purchases.setOnesignalID(userId);
  }
}
