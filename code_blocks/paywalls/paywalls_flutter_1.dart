import 'dart:async';
import 'dart:developer';

import 'package:purchases_ui_flutter/purchases_ui_flutter.dart';

void presentPaywall() async {
  final paywallResult = await RevenueCatUI.presentPaywall();
  log('Paywall result: $paywallResult');
}

void presentPaywallIfNeeded() async {
  final paywallResult = await RevenueCatUI.presentPaywallIfNeeded("pro");
  log('Paywall result: $paywallResult');
}