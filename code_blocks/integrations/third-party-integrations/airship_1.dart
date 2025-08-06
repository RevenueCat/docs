import 'package:purchases_flutter/purchases_flutter.dart';
import 'package:airship_flutter/airship_flutter.dart';

Future<void> setAirshipChannel() async {
  await Purchases.configure(
    PurchasesConfiguration('public_sdk_key')..appUserId = 'my_app_user_id',
  );

  // Airship is configured in native code with your app key
  final channelId = await Airship.channelId;
  await Purchases.setAirshipChannelId(channelId);
}
