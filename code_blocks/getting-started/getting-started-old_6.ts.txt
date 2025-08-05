import { Platform, useEffect } from 'react-native';
import Purchases from 'react-native-purchases';

//...

export default function App() {
 
  useEffect(() => {
    Purchases.setDebugLogsEnabled(true);
    
    if (Platform.OS === 'ios') {
        await Purchases.configure({apiKey: "public_ios_sdk_key"});
    } else if (Platform.OS === 'android') {
        await Purchases.configure({apiKey: "public_google_sdk_key"});
      
      // OR: if building for Amazon, be sure to follow the installation instructions then:
        await Purchases.configure({ apiKey: "public_amazon_sdk_key", useAmazon: true });
    }
    
  }, []);
}