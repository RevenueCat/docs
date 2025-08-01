import 'package:purchases_flutter/purchases_flutter.dart';
import 'package:airship_flutter/airship_flutter.dart';

Future<void> setAirshipChannel() async {
  final channelId = await Airship.channelId;
  await Purchases.setAirshipChannelId(channelId);
}
