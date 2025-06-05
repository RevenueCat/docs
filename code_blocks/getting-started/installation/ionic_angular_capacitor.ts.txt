import { Platform } from "@ionic/angular";
// TS typings for the plugin
import { Purchases, LOG_LEVEL } from '@revenuecat/purchases-capacitor';

constructor(platform: Platform) {
    platform.ready().then(async () => {
        await Purchases.setLogLevel({ level: LOG_LEVEL.DEBUG }); // Enable to get debug logs
        await Purchases.configure({
            apiKey: "my_api_key",
            appUserID: "my_app_user_id" // Optional
        });
    });
}