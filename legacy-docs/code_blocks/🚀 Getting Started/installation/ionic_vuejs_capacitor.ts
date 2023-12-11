import {LOG_LEVEL, Purchases} from "@revenuecat/purchases-capacitor";

const app = createApp(App)
  .use(IonicVue)
  .use(router);

const configure = async () => {
  await Purchases.setLogLevel({ level: LOG_LEVEL.DEBUG }); // Enable to get debug logs
  await Purchases.configure({
    apiKey: "my_api_key",
    appUserID: "my_app_user_id" // Optional
  });
};

router.isReady().then(() => {
  app.mount('#app');
  configure().then(() => { "RevenueCat SDK configured!" });
});
