import 'package:purchases_flutter/purchases_flutter.dart';

Future<void> syncOneSignalId(String onesignalId) async {
  await Purchases.setOnesignalUserID(onesignalId);
}

