import 'package:flutter/material.dart';
import 'package:purchases_ui_flutter/purchases_ui_flutter.dart';

class HardPaywall extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SafeArea(
        child: PaywallView(
          offering: offering, // Optional Offering object
          onDismiss: () {
            // Hard paywall - no dismissal allowed
            // Only dismiss on successful purchase or restore
          },
        ),
      ),
    );
  }
} 