import React from 'react';
import { View } from 'react-native';

import RevenueCatUI from 'react-native-purchases-ui';

// Display current offering
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

// If you need to display a specific offering:
return (
    <View style={{ flex: 1 }}>
        <RevenueCatUI.Paywall
          options={{
            offering: offering // Optional Offering object obtained through getOfferings
          }}
          onRestoreCompleted={({customerInfo}: { customerInfo: CustomerInfo }) => {
            // Optional listener. Called when a restore has been completed.
            // This may be called even if no entitlements have been granted.
          }
          onDismiss={() => {
            // Dismiss the paywall, i.e. remove the view, navigate to another screen, etc.
            // Will be called when the close button is pressed (if enabled) or when a purchase succeeds.
          }}
        />
    </View>
);
