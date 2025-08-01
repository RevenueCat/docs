import React from 'react';
import { View } from 'react-native';
import RevenueCatUI from 'react-native-purchases-ui';

// Method 1: Hard paywall with current offering
function HardPaywall() {
    return (
        <View style={{ flex: 1 }}>
            <RevenueCatUI.Paywall 
              onDismiss={() => {
                // Hard paywall - no dismissal allowed
                // Only dismiss on successful purchase or restore
              }}
            />
        </View>
    );
}

// Method 2: Hard paywall with specific offering
function HardPaywallWithOffering() {
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
                // Hard paywall - no dismissal allowed
                // Only dismiss on successful purchase or restore
              }}
            />
        </View>
    );
}