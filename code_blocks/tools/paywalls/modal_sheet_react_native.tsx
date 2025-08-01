import React from 'react';
import RevenueCatUI, { PAYWALL_RESULT } from 'react-native-purchases-ui';

async function presentModalPaywall() {
    const paywallResult: PAYWALL_RESULT = await RevenueCatUI.presentPaywallIfNeeded({
        requiredEntitlementIdentifier: "premium"
    });
    
    switch (paywallResult) {
        case PAYWALL_RESULT.PURCHASED:
        case PAYWALL_RESULT.RESTORED:
            console.log('Access granted');
            break;
        case PAYWALL_RESULT.CANCELLED:
            console.log('User cancelled');
            break;
        case PAYWALL_RESULT.ERROR:
            console.log('Error occurred');
            break;
    }
} 