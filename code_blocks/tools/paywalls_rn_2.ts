import React from 'react';
import { View } from 'react-native';

import RevenueCatUI from 'react-native-purchases-ui';

// Display current offering
return (
    <View style={{ flex: 1 }}>
        <RevenueCatUI.Paywall />
    </View>
);

// If you need to display a specific offering:
return (
    <View style={{ flex: 1 }}>
        <RevenueCatUI.Paywall
          options={{
            offering: offering // Optional Offering object obtained through getOfferings
          }}
          onDismiss={() => {
            // Dismiss the paywall, i.e. remove the view, navigate to another screen, etc.
            // Will be called when the close button is pressed (if enabled) or when a purchase succeeds.
          }}
        />
    </View>
);
