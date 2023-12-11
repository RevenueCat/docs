export default class App extends React.Component {
  
  componentDidMount() {
    Purchases.setDebugLogsEnabled(true);
    Purchases.setup("public_sdk_key");
  }
  
}