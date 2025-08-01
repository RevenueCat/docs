import 'package:purchases_flutter/purchases_flutter.dart';
import 'package:clevertap_plugin/clevertap_plugin.dart';

Future<void> syncCleverTapId() async {
  await Purchases.configure(
    PurchasesConfiguration('public_sdk_key')..appUserId = 'my_app_user_id',
  );
  final cleverTapId = await CleverTapPlugin.profileGetCleverTapID();
  await Purchases.setAttributes({'\$cleverTapId': cleverTapId});
}

