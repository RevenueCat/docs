import 'package:purchases_ui_flutter/purchases_ui_flutter.dart';

@override
Widget build(BuildContext context) {
  return Scaffold(
    body: SafeArea(
      child: Center(
        child: PaywallView(
          offering: offering, // Optional Offering object obtained through getOfferings
          customVariables: {
            "player_name": "John",
            "level": "42"
          },
          onDismiss: () {
            // Dismiss the paywall, i.e. remove the view, navigate to another screen, etc.
            // Will be called when the close button is pressed (if enabled) or when a purchase succeeds.
          },
        ),
      ),
    ),
  );
}
