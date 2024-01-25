document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
  Purchases.setLogLevel(LOG_LEVEL.DEBUG);
  if (window.cordova.platformId === 'ios') {
    Purchases.configure(<revenuecat_project_apple_api_key>);
  } else if (window.cordova.platformId === 'android') {
    Purchases.configure(<revenuecat_project_google_api_key>);
    // OR: if building for Amazon, be sure to follow the installation instructions then:
    await Purchases.configure({apiKey: <revenuecat_project_amazon_api_key>, useAmazon: true});
  }
}
