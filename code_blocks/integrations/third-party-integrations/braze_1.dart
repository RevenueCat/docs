import 'package:purchases_flutter/purchases_flutter.dart';
import 'package:braze_plugin/braze_plugin.dart';

Future<void> init() async {
  await Purchases.configure(
    PurchasesConfiguration('public_sdk_key')..appUserID = 'my_app_user_id',
  );
  BrazePlugin.changeUser('my_app_user_id');
  await Purchases.setAttributes({
    '\$brazeAliasName': 'name',
    '\$brazeAliasLabel': 'label',
  });
}
