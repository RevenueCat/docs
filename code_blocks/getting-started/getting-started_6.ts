import { Platform } from 'react-native';

//...

export default class App extends React.Component {

  componentDidMount() {
    Purchases.setLogLevel(LOG_LEVEL.VERBOSE);

    if (Platform.OS === 'ios') {
       Purchases.configure({apiKey: <revenuecat_project_apple_api_key>});
    } else if (Platform.OS === 'android') {
       Purchases.configure({apiKey: <revenuecat_project_google_api_key>});

      // OR: if building for Amazon, be sure to follow the installation instructions then:
       Purchases.configure({ apiKey: <revenuecat_project_amazon_api_key>, useAmazon: true });
    }

  }
}
