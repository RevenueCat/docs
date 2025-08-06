import 'package:purchases_flutter/purchases_flutter.dart';

Future<void> syncPostHogUserId(String posthogUserId) async {
  await Purchases.setAttributes({'\$posthogUserId': posthogUserId});
}

