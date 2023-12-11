import { Platform } from 'react-native';

//...

export default class App extends React.Component {

  componentDidMount() {
    Purchases.setLogLevel(Purchases.LOG_LEVEL.DEBUG);

    if (Platform.OS === 'ios') {
    	await Purchases.configure({ apiKey: <public_apple_api_key> });
    } else if (Platform.OS === 'android') {
    	await Purchases.configure({ apiKey: <public_google_api_key> });

      // OR: if building for Amazon, be sure to follow the installation instructions then:
    	await Purchases.configure({ apiKey: <public_amazon_api_key>, useAmazon: true });
    }

  }
}
