import 'dart:io' show Platform;

//...

Future<void> initPlatformState() async {
  await Purchases.setLogLevel(LogLevel.debug);
  
  PurchasesConfiguration configuration;
  if (Platform.isAndroid) {
    configuration = PurchasesConfiguration(<public_google_api_key>);
    if (buildingForAmazon) { 
      // use your preferred way to determine if this build is for Amazon store
      // checkout our MagicWeather sample for a suggestion
      configuration = AmazonConfiguration(<public_amazon_api_key>);
    }
  } else if (Platform.isIOS) {
    configuration = PurchasesConfiguration(<public_apple_api_key>);
  }
  await Purchases.configure(configuration);
}
