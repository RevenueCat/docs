import 'dart:io' show Platform;

//...

Future<void> initPlatformState() async {
  await Purchases.setDebugLogsEnabled(true);

  PurchasesConfiguration configuration;
  if (Platform.isAndroid) {
    configuration = PurchasesConfiguration(<revenuecat_project_google_api_key>);
    if (buildingForAmazon) {
      // use your preferred way to determine if this build is for Amazon store
      // checkout our MagicWeather sample for a suggestion
      configuration = AmazonConfiguration(<revenuecat_project_amazon_api_key>);
    }
  } else if (Platform.isIOS) {
    configuration = PurchasesConfiguration(<revenuecat_project_apple_api_key>);
  }
  await Purchases.configure(configuration);
}
