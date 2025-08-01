import 'package:purchases_flutter/purchases_flutter.dart';
import 'package:amplitude_flutter/amplitude.dart';

Future<void> setup() async {
  await Purchases.configure(
    PurchasesConfiguration('public_sdk_key')..appUserId = 'my_app_user_id',
  );
  final amplitude = Amplitude.getInstance(instanceName: 'default')
    ..init('amplitude_api_key', 'my_app_user_id');
  final deviceId = await amplitude.getDeviceId();
  await Purchases.setAttributes({'\$amplitudeDeviceId': deviceId});
}
