import 'package:firebase_auth/firebase_auth.dart';
import 'package:purchases_flutter/purchases_flutter.dart';

Future<void> initPlatformState() async {
  await Purchases.configure(PurchasesConfiguration('public_sdk_key'));
  FirebaseAuth.instance.authStateChanges().listen((user) {
    if (user != null) {
      Purchases.logIn(user.uid);
    }
  });
}
