const onDeviceReady = async () => {
  await Purchases.setLogLevel({level: LOG_LEVEL.DEBUG});
  if (Capacitor.getPlatform() === 'ios') {
    await Purchases.configure({ apiKey: <public_apple_api_key> });
  } else if (Capacitor.getPlatform() === 'android') {
    await Purchases.configure({ apiKey: <public_google_api_key> });
  }
  // OR: if building for Amazon, be sure to follow the installation instructions then:
  await Purchases.configure({ apiKey: <public_amazon_api_key>, useAmazon: true });
}
