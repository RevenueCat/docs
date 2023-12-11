document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
  Purchases.setLogLevel(LOG_LEVEL.DEBUG);
  if (window.cordova.platformId === 'ios') {
    Purchases.configure(<public_ios_sdk_key>);
  } else if (window.cordova.platformId === 'android') {
    Purchases.configure(<public_google_sdk_key>);
    // OR: if building for Amazon, be sure to follow the installation instructions then:
    await Purchases.configure({apiKey: <public_amazon_sdk_key>, useAmazon: true});
  }
}
