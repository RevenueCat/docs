---
title: Changing Prices
slug: price-changes
excerpt: Adjusting your pricing model
hidden: false
---

If subscription prices are changed via App Store Connect or Google Play, any active subscribers may need to opt-in to the new price. If the user does not opt-in, their subscription may be canceled by [Apple](https://help.apple.com/app-store-connect/#/devc9870599e) or [Google](https://support.google.com/googleplay/android-developer/answer/140504?hl=en).

:::warning Propagation
Price changes can take 24 hours to propagate the App Store and Google Play.
:::

:::info Pro Tip
You may want to consider creating a new product instead of changing the price of an existing product for tools like [Experiments](/tools/experiments-v1).
:::

## App Store Price Changes

When you increase the price of a subscription, Apple informs affected subscribers via email and push notification and may require them to agree to the new price. Smaller, infrequent price increases may not require opt-in by customers.

On iOS 13.4 and iPadOS 13.4 and later, affected subscribers are also notified through a message sheet that automatically displays in your app. If opt-in to the price change is required and they do not agree, their subscription expires at the end of their current billing cycle.

Alternatively, you can choose to grandfather existing subscriptions at the lower price and increase the price for new subscriptions only. This type of price increase does not require user consent.

Price decreases will be effective immediately for new purchases and will apply to active subscriptions at the end of the billing period.

For more information about App Store price changes, see [Managing Prices](https://developer.apple.com/app-store/subscriptions/#managing-prices-for-existing-subscribers) from Apple.

### Automatic Price Detection

RevenueCat uses a best-effort approach for tracking App Store transaction prices. By default, RevenueCat tracks prices at the time of purchase and assumes any subscriptions will renew at this purchase price. Therefore, if you ever raise the price of a product, RevenueCat's reporting from that point will only be accurate if you choose to grandfather existing subscriptions at the current price.

Of course, this may not be ideal if you regularly make price changes or you don't want to grandfather your existing users. To enable **automatic price detection** for App Store price changes to keep your transaction price data accurate, you'll need to:

- Enable [platform server notifications](/platform-resources/server-notifications/apple-server-notifications) using `V2` App Store Server Notifications
- Upload your App Store Connect API Key as detailed [here](/service-credentials/itunesconnect-app-specific-shared-secret/app-store-connect-api-key-configuration)

From this point, RevenueCat will listen to price change events from Apple's App Store Server Notifications and automatically adjust prices of transactions for subsequent renewals according to your price change schedule.

## Google Play Price Changes

Google Play does not make individual transaction prices directly available to developers, so RevenueCat tracks prices at the time of purchase and assumes any subscriptions will renew at this purchase price. Therefore, if you ever raise the price of a product, RevenueCat's reporting will be accurate if you choose to keep existing subscriptions at the current price as a [legacy price cohort](https://developer.android.com/google/play/billing/price-changes#existing).

After you change the price of an existing subscription, here’s how it affects new users and existing subscribers:

- New users can immediately see the subscription’s new price and subscribe to it on Google Play.
- Existing subscribers receiving a price increase will be notified of the price change by email and through a notification on Google Play 7 days after the price change occurs. Subscribers will then have 30 days to agree to the price change, otherwise their subscription will be canceled on their next renewal date.
- Existing subscribers receiving a price decrease will be notified and receive the lower price on their next renewal date.

For more information about Google Play price changes, see [Google Play Support](https://support.google.com/googleplay/android-developer/answer/140504?hl=en).

## Stripe Price Changes

RevenueCat is able to automatically detect the price of each Stripe transaction, including price changes that apply to subsequent purchases.

For more information about Stripe price changes, see [Stripe Support](https://stripe.com/docs/billing/subscriptions/change).

## Transaction Prices in RevenueCat

Prices detected for transactions are used to calculate metrics throughout the RevenueCat dashboard, including in Charts. For more information about Charts and Overview data, see [Charts](/dashboard-and-metrics/charts) and [Overview](/dashboard-and-metrics/overview) documentation.
