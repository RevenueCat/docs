import 'package:purchases_flutter/purchases_flutter.dart';
import 'package:iterable_flutter/iterable_flutter.dart';

Future<void> setup() async {
  await Purchases.configure(
    PurchasesConfiguration('public_sdk_key')..appUserId = 'my_app_user_id',
  );
  await IterableFlutter.initialize('<YOUR_API_KEY>');
  await IterableFlutter.setEmail('user@example.com');
  await IterableFlutter.setUserId('user123');
  await Purchases.setAttributes({
    '\$email': 'user@example.com',
    '\$iterableUserId': 'user123',
    '\$iterableCampaignId': '123',
    '\$iterableTemplateId': '123',
  });
}

