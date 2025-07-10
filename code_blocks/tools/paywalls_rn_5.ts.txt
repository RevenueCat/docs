import React from 'react';
import { Text } from 'react-native';

import RevenueCatUI from 'react-native-purchases-ui';

return (
    <RevenueCatUI.PaywallFooterContainerView
        options={{
            fontFamily: "MyFont"
        }}
    >
        <Text>
            Your Custom Paywall Design
        </Text>
    </RevenueCatUI.PaywallFooterContainerView>
);