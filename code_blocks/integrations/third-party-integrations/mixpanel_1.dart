import 'package:purchases_flutter/purchases_flutter.dart';
import 'package:mixpanel_flutter/mixpanel_flutter.dart';

Future<void> init() async {
  await Purchases.configure(
    PurchasesConfiguration('public_sdk_key')..appUserID = 'my_app_user_id',
  );
  final mixpanel = await Mixpanel.init('MIXPANEL_TOKEN', trackAutomaticEvents: false);
  mixpanel.identify('my_app_user_id');
  final distinctId = await mixpanel.getDistinctId();
  await Purchases.setMixpanelDistinctId(distinctId);
}
