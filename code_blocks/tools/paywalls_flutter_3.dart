import 'package:purchases_ui_flutter/purchases_ui_flutter.dart';

// In your own Widget:
@override
Widget build(BuildContext context) {
  return Scaffold(
    body: SafeArea(
      child: Center(
        child: PaywallFooterView(
          offering: offering, // Optional Offering object obtained through getOfferings,
          onRestoreCompleted: (CustomerInfo customerInfo) {
            // Optional listener. Called when a restore has been completed.
            // This may be called even if no entitlements have been granted.
          },
          onDismiss: () {
            // Dismiss the paywall, i.e. remove the view, navigate to another screen, etc.
            // Will be called when a purchase succeeds.
          },
          contentCreator: (bottomPadding) => YourPaywall(bottomPadding),
        ),
      ),
    ),
  );
}
