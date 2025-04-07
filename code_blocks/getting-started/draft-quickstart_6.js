import { useEffect } from 'react-native';
import Purchases from 'react-native-purchases';

export default function App() {
  
  useEffect(() => {
    Purchases.setDebugLogsEnabled(true);
    Purchases.setup("public_sdk_key");
  }, []);
  
}