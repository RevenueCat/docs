---
title: Apple Family Sharing
slug: apple-family-sharing
excerpt: Let users share their subscriptions with Family Sharing
hidden: false
---

Apple allows any in-app purchases to be shared within a family using [Family Sharing](https://developer.apple.com/documentation/storekit/in-app_purchase/supporting_family_sharing_in_your_app). This is great for apps that tend to be used by groups of people, like video streaming services and kids' apps, without needing users to share their Apple ID. This guide covers how to opt-in your subscriptions to family sharing and how RevenueCat handles family-shared purchases.

## Prerequisites

While family sharing will work on all versions of the SDK, some patches were released in version 3.9.1 in the iOS SDK that improve the SDK's handling of revoked family purchases. Below are the recommended SDK versions:

| SDK          | Version |
| :----------- | :------ |
| iOS          | 3.9.1+  |
| Flutter      | 2.0.0+  |
| React Native | 4.0.0+  |
| Cordova      | 2.0.0+  |
| Unity        | 3.0.0+  |

## Opt in to Family Sharing

By default, family sharing is disabled for all new and existing in-app purchases. Therefore, you need to enable family sharing for each individual in-app purchase.

:::success Pro tip: Not all in-app purchases need to be family shareable
Since you enable family sharing per product, you can choose some products to be family shareable. This opens the door to providing family plans that cost more than an individual subscription, but are more cost-effective than purchasing multiple subscriptions for a family.
:::

If you don't have any in-app purchases in App Store Connect, go ahead and create one by following our guide on [iOS Product Setup](/docs/ios-products). Next, navigate to your in-app purchase and click **Turn On** under Family Sharing.

![Click **Turn On** to enable Family Sharing.](https://files.readme.io/908bb53-2021-02-09_14.54.25_appstoreconnect.apple.com_ab0d5a03d489.png)

:::warning Family Sharing cannot be disabled once turned on
Double check that you're turning on family sharing for the correct in-app purchase!
:::

Click **Confirm**, and you're done! The Family Sharing section should now display "This subscription can be shared by everyone in a family group."

![This in-app purchase has family sharing enabled.](https://files.readme.io/58339d7-2021-02-09_14.59.04_appstoreconnect.apple.com_d5fd0205d87d.png)

## RevenueCat and Family Sharing

RevenueCat seamlessly tracks family shared purchases, so there's no additional setup needed in RevenueCat. In the customer history, you can find out if a purchase was made by the user by checking the `is_family_share` key. True means the user's family made the purchase and this user has access via their family; false means the user made the purchase themselves.

![`is_family_share` is true, so this user has access to Pro via their family.](https://files.readme.io/bd05f51-app.revenuecat.com_activity_16e7167a_event_c2f2ca41-28f9-457d-b5a0-b55e61a52b9f.png)

RevenueCat also makes it easy for developers to tell if their customer is subscribed from a family member sharing their account via the total spent metric on the dashboard.

![Image](https://files.readme.io/b2c687a-253415365-d3811735-59e8-4ddf-9b05-b074382fe5b0.png)
The `is_family_share` key is included in webhook events. In the REST API, the `ownership_type` is included.

:::info The user must manually share a subscription with their family
Even after setting up your in-app purchase to be shareable, the user must choose to share the subscription with their family in settings.

:::

## FAQ

### 1. Is it possible to know which family a user is part of? In other words, is it possible to track a family-shared purchase back to the original owner?

Apple doesn't provide any info that will allow you to link purchases that come from the same family together. If this is something you want to do, you'll have to record which purchases come from which family yourself using user authentication.

### 2. What happens if a user leaves a family? Will their entitlements be revoked?

Yes, RevenueCat will automatically revoke any entitlements that were granted by the user's former family. Version 3.9.1 of the iOS SDK addresses some issues for this edge case, so if this is a concern for you, make sure you use a recent SDK version.

### 3. How long does it take for family members to gain access to a new shared subscription?

It takes up to 1 hour after a user purchases a subscription and shares it for it to be available to their family members. This is an intentional feature from Apple to give the user time to undo the action if desired. Renewals don't have a delay.

### 4. Are family-shared purchases counted in RevenueCat metrics?

Family-shared transactions are **not included** in charts data. Transactions are ignored in some [overview metrics](/docs/overview#metrics) (all except 'Installs' and 'Active Users').
