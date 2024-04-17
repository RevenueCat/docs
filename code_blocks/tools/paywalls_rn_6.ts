import RevenueCatUI, { PAYWALL_RESULT } from "react-native-purchases-ui";

async function presentPaywall(): Promise<boolean> {
  const paywallResult: PAYWALL_RESULT = await RevenueCatUI.presentPaywall({
    fontFamily: 'Ubuntu',
  });
}

async function presentPaywallIfNeeded() {
  const paywallResult: PAYWALL_RESULT = await RevenueCatUI.presentPaywallIfNeeded({
    requiredEntitlementIdentifier: "pro",
    fontFamily: 'Ubuntu',
  });
}