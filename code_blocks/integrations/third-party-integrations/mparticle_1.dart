import 'package:mparticle_flutter/mparticle_flutter.dart';
import 'package:purchases_flutter/purchases_flutter.dart';

Future<void> setup() async {
  await Purchases.configure(
    PurchasesConfiguration('public_sdk_key')..appUserId = 'my_app_user_id',
  );
  final options = MParticleOptions(
    apiKey: 'API_KEY',
    apiSecret: 'API_SECRET',
    identityRequest: IdentityRequest(userId: 'my_app_user_id'),
  );
  await MParticleFlutter.start(options);
}

