document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
    Purchases.setDebugLogsEnabled(true);
    if (window.cordova.platformId === 'ios') {
        Purchases.configureWith({
            apiKey: "public_ios_sdk_key"
        });
    } else if (window.cordova.platformId === 'android') {
        Purchases.configureWith({
            apiKey: "public_google_sdk_key"
        });
    }
    // OR: if building for Amazon, be sure to follow the installation instructions then:
    Purchases.configureWith({
        apiKey: "public_amazon_sdk_key",
        useAmazon: true
    });
}