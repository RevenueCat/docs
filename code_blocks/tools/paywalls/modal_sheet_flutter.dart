import 'dart:async';
import 'dart:developer';
import 'package:purchases_ui_flutter/purchases_ui_flutter.dart';

Future<void> presentModalPaywall() async {
  final paywallResult = await RevenueCatUI.presentPaywallIfNeeded("premium");
  log('Paywall result: $paywallResult');
  
  switch (paywallResult) {
    case PaywallResult.purchased:
    case PaywallResult.restored:
      print('Access granted');
      break;
    case PaywallResult.cancelled:
      print('User cancelled');
      break;
    case PaywallResult.error:
      print('Error occurred');
      break;
  }
} 