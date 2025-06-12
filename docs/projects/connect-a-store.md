---
title: Connect Platforms
sidebar_label: Connect Platforms
slug: connect-a-store
excerpt: Connect your project to App Store Connect, Google Play Console, and more
---

Once you've created a [project](/projects/overview), you'll need to connect it to the stores and platforms you want to support and set up [Server Notifications](/platform-resources/server-notifications). After you've connected your app, you can import your products from the stores to start configuring your offerings.

Add an **app platform** or **web platform** in the _Platforms_ section of your project settings.

![Add App Platform](/docs_images/projects/add-app-platform.png)

![Add Web Platform](/docs_images/projects/add-web-platform.png)

## Add a Platform

RevenueCat supports a wide range of stores and payment providers.

### App Platforms

#### Apple App Store

To connect your app to the Apple App Store, you'll need to add your **App name**, **Bundle ID**, **Shared Secret**, and **In-App Purchase Key**.

- [Where do I find my shared secret?](/service-credentials/itunesconnect-app-specific-shared-secret)
- [Where do I find my in-app purchase key?](/service-credentials/itunesconnect-app-specific-shared-secret/in-app-purchase-key-configuration)

We also recommend adding your **App Store Connect API Key** to your project, which will let you fetch your app's products from App Store Connect directly.

- [Where do I find my App Store Connect API Key?](/service-credentials/itunesconnect-app-specific-shared-secret/app-store-connect-api-key-configuration)

#### Google Play Store

To connect your app to the Google Play Store, you'll need to add your **App name**, **Package Name**, and **Service Credentials**.

- [Where do I find my service credentials?](/service-credentials/creating-play-service-credentials)

#### Amazon Appstore

To connect your app to the Amazon Appstore, you'll need to add your **App name**, **Package Name**, and **Shared Secret**.

- [Where do I find my shared secret?](/service-credentials/amazon-appstore-credentials)

#### Roku Store

To connect your app to the Roku Store, you'll need to add your **App name**, and **Roku Pay API Key**.

- [Where do I find my Roku Pay API Key?](/service-credentials/roku-credentials)

### Web Platforms

#### Web Billing

Web Billing (formerly RevenueCat Billing) and the Web SDK allow you to easily offer web subscriptions by taking advantage of RevenueCat's powerful features, including dynamic paywalls, a customer portal, and more.

- [Learn more about Web Billing](/web/web-billing/overview)

#### Stripe (Manual Integration)

Stripe is a popular payment processor that allows you to accept payments from customers. RevenueCat integrates with Stripe to allow you to easily offer subscriptions and manage your customers.

- [Learn more about Stripe](/web/integrations/stripe)

#### Paddle

Paddle is a popular all-in-one payment infrastructure that allows you to accept payments from customers and acts as a merchant of record. RevenueCat integrates with Paddle to allow you to easily offer subscriptions and manage your customers.

- [Learn more about Paddle](/web/integrations/paddle)

## Platform Server Notifications

After adding your platforms, we recommend setting up [Platform Server Notifications](/platform-resources/server-notifications). These notifications will ensure RevenueCat is notified of purchases and subscription events as soon as possible, and will speed up [webhooks](/integrations/webhooks) and integration delivery times.

## Import Products

After adding your platforms, you can import your products from the stores to start configuring your offerings.

- [Learn more about importing products](/offerings/products-overview)

## Next steps

If you've added your platforms, it's time to install the SDK to start making purchases.

<Button href="/docs/getting-started/installation">Install the SDK →</Button>
