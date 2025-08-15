import 'package:mparticle_flutter/mparticle_flutter.dart';
import 'package:purchases_flutter/purchases_flutter.dart';

Future<void> login() async {
  final result = await MParticleFlutter.identity
      .login(IdentityRequest(userId: 'my_app_user_id'));
  final mPid = result.user.userId;
  await Purchases.collectDeviceIdentifiers();
  await Purchases.setMparticleID(mPid.toString());
}

