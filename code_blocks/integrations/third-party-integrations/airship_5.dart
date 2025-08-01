import 'package:purchases_flutter/purchases_flutter.dart';
import 'package:airship_flutter/airship_flutter.dart';

Future<void> identifyAirshipUser() async {
  await Purchases.configure(
    PurchasesConfiguration('public_sdk_key')..appUserId = 'my_app_user_id',
  );
  await Airship.identify('my_app_user_id');
}
