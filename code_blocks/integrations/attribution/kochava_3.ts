import Purchases from 'react-native-purchases';
import KochavaTracker from 'react-native-kochava-tracker';

Purchases.configure({ apiKey: 'public_sdk_key' });

const deviceId = await KochavaTracker.getInstallId();
Purchases.setKochavaDeviceId(deviceId);
