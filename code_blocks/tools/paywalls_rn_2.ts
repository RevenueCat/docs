import React from 'react';
import { View } from 'react-native';

import RevenueCatUI from 'react-native-purchases-ui';

// Simple version
return (
    <View style={{ flex: 1 }}>
        <RevenueCatUI.Paywall />
    </View>
);

// If you need to display a specific offering:
return (
    <View style={{ flex: 1 }}>
        <RevenueCatUI.Paywall options={{
            offering: offering // Optional Offering object obtained through getOfferings
        }} />
    </View>
);