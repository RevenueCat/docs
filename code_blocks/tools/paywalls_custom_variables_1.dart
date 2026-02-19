import 'dart:developer';

import 'package:purchases_ui_flutter/purchases_ui_flutter.dart';

void presentPaywallWithCustomVariables() async {
  final paywallResult = await RevenueCatUI.presentPaywall(
    customVariables: {
      'player_name': CustomVariableValue.string('John'),
      'level': CustomVariableValue.string('42'),
    },
  );
  log('Paywall result: $paywallResult');
}
