import { Platform } from "@ionic/angular";
// TS typings for the plugin
import Purchases, { LOG_LEVEL } from 'cordova-plugin-purchases/www/plugin';

constructor(platform: Platform) {
    platform.ready().then(() => {
        Purchases.setLogLevel(LOG_LEVEL.DEBUG); // Enable to get debug logs
        Purchases.configureWith({
            apiKey: "my_api_key",
            appUserID: "my_app_user_id"
        });
    });
}