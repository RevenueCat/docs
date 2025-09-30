---
title: Connect Apps & Web Providers
sidebar_label: Connect Apps & Web Providers
slug: connect-a-store
excerpt: Connect supported apps and web providers to your project
---

Each [project](/projects/overview) comes with a Test Store, where you can test your Products, Paywalls and Entitlements.

Before you can submit your app to an app store, you'll need to connect it to the stores and payment providers you want to support and set up [Server Notifications](/platform-resources/server-notifications). After you've connected your app, you can import your products from the stores to start configuring your offerings.

Add an **app config** or **web config** in the _Apps & providers_ section of your app settings.

![Add App Configuration](/docs_images/projects/add-app-platform.png)

![Add Web Configuration](/docs_images/projects/add-web-platform.png)

## Add a Configuration

RevenueCat supports a wide range of stores and payment providers.

### App Configuration

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

### Web Configuration

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

After adding your configurations, we recommend setting up [Platform Server Notifications](/platform-resources/server-notifications). These notifications will ensure RevenueCat is notified of purchases and subscription events as soon as possible, and will speed up [webhooks](/integrations/webhooks) and integration delivery times.

## Import Products

After adding your configurations, you can import your products from the stores to start configuring your offerings.

- [Learn more about importing products](/offerings/products-overview)

## Next steps

If you've added your configurations, it's time to install the SDK to start making purchases.

<Button href="/docs/getting-started/installation">Install the SDK →</Button>
