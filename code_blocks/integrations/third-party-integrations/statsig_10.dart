import 'package:statsig/statsig.dart';
import 'package:purchases_flutter/purchases_flutter.dart';

Future<void> setupRevenueCatWithStatsig() async {
  await Purchases.configure(
    PurchasesConfiguration('public_sdk_key')..appUserId = 'your_app_user_id',
  );

  await Statsig.initialize(
    'STATSIG_CLIENT_KEY',
    user: StatsigUser(userID: 'your_app_user_id'),
  );

  final stableID = Statsig.getStableID();
  await Purchases.setAttributes({'$statsigUserID': stableID});
}
