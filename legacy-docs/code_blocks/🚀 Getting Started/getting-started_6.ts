import { Platform } from 'react-native';

//...

export default class App extends React.Component {
 
  componentDidMount() {
    Purchases.setLogLevel(LOG_LEVEL.VERBOSE);
    
    if (Platform.OS === 'ios') {
       Purchases.configure({apiKey: <public_ios_sdk_key>});
    } else if (Platform.OS === 'android') {
       Purchases.configure({apiKey: <public_google_sdk_key>});
      
      // OR: if building for Amazon, be sure to follow the installation instructions then:
       Purchases.configure({ apiKey: <public_amazon_sdk_key>, useAmazon: true });
    }
    
  }
}