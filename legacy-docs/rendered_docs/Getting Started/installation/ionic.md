---
title: Ionic
slug: ionic
excerpt: Instructions for Installing Purchases SDK for Ionic
hidden: false
categorySlug: documentation
order: 4
parentDoc: 649983b4c31b2e000a3c1864
---

We offer official plugins for both Capacitor and Cordova. We recommend using the Capacitor plugin when possible. Install the plugin depending on your framework:

```text Capacitor
// Install Capacitor plugin
npm install @revenuecat/purchases-capacitor

// Update native platform project(s) to include newly added plugin
ionic cap sync
```
```text Cordova
npm install cordova-plugin-purchases

ionic cordova plugin add cordova-plugin-purchases
```

## TypeScript

The types are shipped inside the npm package. You can import them like this:

```text Capacitor Typescript types
import {
    Purchases,
    PurchasesOfferings, // Types for TypeScript
} from '@revenuecat/purchases-capacitor';
```
```text Cordova Typescript types
import Purchases, {
    PurchasesOfferings, // Types for TypeScript
} from 'cordova-plugin-purchases/www/plugin';
```

## Angular

Wait for the Platform to be ready, then configure the plugin in your `src/app/app.component.ts`:

```typescript Capacitor
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
```
```typescript Cordova
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
```

## React

Import the plugin object then use its static methods:

```typescript Capacitor
import { Purchases, LOG_LEVEL } from '@revenuecat/purchases-capacitor';

const Tab1: React.FC = () => {
  useEffect(() => {
    (async function () {
      await Purchases.setLogLevel({ level: LOG_LEVEL.DEBUG }); // Enable to get debug logs
      await Purchases.configure({
        apiKey: "my_api_key",
        appUserID: "my_app_user_id" // Optional
      });
    })();
  }, []);
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>My App</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonButton onClick={purchasePackage}>Subscribe now</IonButton>
      </IonContent>
    </IonPage>
  );
};
```
```typescript Cordova
import Purchases, { LOG_LEVEL } from 'cordova-plugin-purchases/www/plugin';

const Tab1: React.FC = () => {
  Purchases.setLogLevel(LOG_LEVEL.DEBUG); // Enable to get debug logs
  Purchases.purchases.configureWith({
    apiKey: "my_api_key",
    appUserID: "my_app_user_id"
  });
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>My App</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonButton onClick={purchasePackage}>Subscribe now</IonButton>
      </IonContent>
    </IonPage>
  );
};
```

## Vue.js

> 🚧 Important note if using Vue.js reactivity wrappers
> 
> If using Vue.js and its Reactivity API wrappers like [reactive](https://vuejs.org/api/reactivity-core.html#reactive) or [readonly](https://vuejs.org/api/reactivity-core.html#readonly), make sure you pass the raw objects (rather than `Proxy` objects) to the Capacitor plugin methods. You can use the [toRaw](https://vuejs.org/api/reactivity-advanced.html#toraw) method to convert to the raw object.

Import the plugin object then use its static methods:

```typescript Capacitor
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
```
