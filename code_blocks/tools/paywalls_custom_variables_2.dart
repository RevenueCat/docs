import 'package:flutter/material.dart';
import 'package:purchases_ui_flutter/purchases_ui_flutter.dart';

class PaywallScreen extends StatelessWidget {
  const PaywallScreen({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SafeArea(
        child: Center(
          child: PaywallView(
            customVariables: {
              'player_name': CustomVariableValue.string('John'),
              'level': CustomVariableValue.string('42'),
            },
            onDismiss: () {
              Navigator.of(context).pop();
            },
          ),
        ),
      ),
    );
  }
}
