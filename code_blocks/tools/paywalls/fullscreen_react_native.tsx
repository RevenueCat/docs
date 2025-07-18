import React from 'react';
import { View } from 'react-native';
import RevenueCatUI, { PAYWALL_RESULT } from 'react-native-purchases-ui';

// Method 1: Using presentPaywallIfNeeded with fullScreenCover presentation mode
async function presentFullscreenPaywall() {
    const paywallResult: PAYWALL_RESULT = await RevenueCatUI.presentPaywallIfNeeded({
        requiredEntitlementIdentifier: "premium",
        presentationMode: "fullScreenCover"
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

// Method 2: Using Paywall component in fullscreen container
function FullscreenPaywallComponent() {
    return (
        <View style={{ flex: 1 }}>
            <RevenueCatUI.Paywall 
              onDismiss={() => {
                // Dismiss the paywall, i.e. remove the view, navigate to another screen, etc.
                // Will be called when the close button is pressed (if enabled) or when a purchase succeeds.
              }}
            />
        </View>
    );
}

// Method 3: Using Paywall component with specific offering
function FullscreenPaywallWithOffering() {
    return (
        <View style={{ flex: 1 }}>
            <RevenueCatUI.Paywall
              options={{
                offering: offering // Optional Offering object obtained through getOfferings
              }}
              onRestoreCompleted={({customerInfo}: { customerInfo: CustomerInfo }) => {
                // Optional listener. Called when a restore has been completed.
                // This may be called even if no entitlements have been granted.
              }}
              onDismiss={() => {
                // Dismiss the paywall, i.e. remove the view, navigate to another screen, etc.
                // Will be called when the close button is pressed (if enabled) or when a purchase succeeds.
              }}
            />
        </View>
    );
} 