import React from 'react';
import { View } from 'react-native';

import RevenueCatUI from 'react-native-purchases-ui';

return (
    <View style={{ flex: 1 }}>
        <RevenueCatUI.Paywall options={{
            fontFamily: "MyFont"
        }} />
    </View>
);