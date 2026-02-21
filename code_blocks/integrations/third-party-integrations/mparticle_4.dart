import 'package:mparticle_flutter/mparticle_flutter.dart';
import 'package:purchases_flutter/purchases_flutter.dart';

Future<void> logout() async {
  await MParticleFlutter.identity.logout();
  await Purchases.reset();
}

