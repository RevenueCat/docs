import 'package:onesignal_flutter/onesignal_flutter.dart';
import 'package:purchases_flutter/purchases_flutter.dart';

Future<void> initOneSignalRevenueCat() async {
  await Purchases.configure(PurchasesConfiguration('<revenuecat_api_key>'));

  OneSignal.initialize('<onesignal_app_id>');
  OneSignal.User.addObserver((state) {
    final onesignalId = state.current.onesignalId;
    if (onesignalId != null) {
      Purchases.setOnesignalUserID(onesignalId);
    }
  });

  final onesignalId = OneSignal.User.onesignalId;
  if (onesignalId != null) {
    await Purchases.setOnesignalUserID(onesignalId);
  }
}
