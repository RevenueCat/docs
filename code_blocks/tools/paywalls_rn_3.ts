import React from 'react';
import { Text } from 'react-native';

import RevenueCatUI from 'react-native-purchases-ui';

// Display current offering
return (
    <RevenueCatUI.PaywallFooterContainerView>
        <Text>
            Your Custom Paywall Design
        </Text>
    </RevenueCatUI.PaywallFooterContainerView>
);

// If you need to display a specific offering:
return (
  <RevenueCatUI.PaywallFooterContainerView
    options={{
      offering: offering // Optional Offering object obtained through getOfferings
    }}
    onDismiss={() => {
      // Dismiss the paywall, i.e. remove the view, navigate to another screen, etc.
    }}>
      <Text>
        Your Custom Paywall Design
      </Text>
  </RevenueCatUI.PaywallFooterContainerView>
);
