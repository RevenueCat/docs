import { Platform, useEffect } from 'react-native';
import Purchases from 'react-native-purchases';

//...

export default function App() {

  useEffect(() => {
    Purchases.setLogLevel(Purchases.LOG_LEVEL.DEBUG);

    if (Platform.OS === 'ios') {
    	Purchases.configure({ apiKey: <public_apple_api_key> });
    } else if (Platform.OS === 'android') {
    	Purchases.configure({ apiKey: <public_google_api_key> });

      // OR: if building for Amazon, be sure to follow the installation instructions then:
    	Purchases.configure({ apiKey: <public_amazon_api_key>, useAmazon: true });
    }

  }, []);
}
