import 'package:purchases_ui_flutter/purchases_ui_flutter.dart';

// In your own Widget:
@override
Widget build(BuildContext context) {
  return Scaffold(
    body: SafeArea(
      child: Center(
        child: PaywallView(
          offering:
              offering, // Optional Offering object obtained through getOfferings
        ),
      ),
    ),
  );
}
