import 'package:purchases_flutter/purchases_flutter.dart';
import 'package:segment_flutter/segment_flutter.dart';

Future<void> setup() async {
  await Purchases.configure(
    PurchasesConfiguration('public_sdk_key')..appUserId = 'my_app_user_id',
  );
  final analytics = SegmentFlutter(writeKey: 'SEGMENT_WRITE_KEY');
  analytics.identify(userId: 'my_app_user_id');
}

