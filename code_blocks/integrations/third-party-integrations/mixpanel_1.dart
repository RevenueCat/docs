import 'package:mixpanel_flutter/mixpanel_flutter.dart';
import 'package:purchases_flutter/purchases_flutter.dart';

// Call this early in app initialization
Future<void> setupMixpanelRevenueCat() async {
  // 1. Configure RevenueCat
  await Purchases.configure(
    PurchasesConfiguration('public_sdk_key')..appUserId = 'your_app_user_id',
  );

  // 2. Initialize Mixpanel
  final mixpanel = await Mixpanel.init(
    'MIXPANEL_TOKEN',
    trackAutomaticEvents: false,
  );

  // 3. Identify the user in Mixpanel
  mixpanel.identify('your_app_user_id');

  // 4. Fetch Mixpanel distinct ID
  final distinctId = await mixpanel.getDistinctId();
  if (distinctId != null) {
    // 5. Send to RevenueCat for attribution
    await Purchases.setMixpanelDistinctId(distinctId);
  }
}
