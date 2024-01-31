import RevenueCatUI, { PAYWALL_RESULT } from "react-native-purchases-ui";

async function presentPaywall(): Promise<boolean> {
    const paywallResult: PAYWALL_RESULT = await RevenueCatUI.presentPaywall({
        offering: offering // Optional offering parameter
    });

    switch (paywallResult) {
        case PAYWALL_RESULT.NOT_PRESENTED:
        case PAYWALL_RESULT.ERROR:
        case PAYWALL_RESULT.CANCELLED:
            return false;
        case PAYWALL_RESULT.PURCHASED:
        case PAYWALL_RESULT.RESTORED:
            return true;
        default:
            return false;
    }
}

async function presentPaywallIfNeeded() {
    const paywallResult: PAYWALL_RESULT = await RevenueCatUI.presentPaywallIfNeeded({
        offering: offering, // Optional offering parameter
        requiredEntitlementIdentifier: "pro"
    });
}