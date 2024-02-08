---
title: Google Prepaid Plans
slug: /google-prepaid-plans
excerpt: Setting up your prepaid plan in Google Play Console
hidden: false
---

Starting May 11, 2022 Google introduced support for prepaid subscriptions among other [features](https://support.google.com/googleplay/android-developer/answer/12124625). This guide will go over what prepaid plans are and how to set them up and integrate them with RevenueCat.

:::info
This guide assumes familiarity with the Play Store's concepts of subscriptions and base plans introduced in May 2022. For an overview, check out this [blog](https://www.revenuecat.com/blog/engineering/google-play-billing-library-5-0/)
:::

:::warning
Prepaid plans are only available on our SDKs supporting BillingClient 5 and above
:::

## Introduction

In May 2022, Google changed the way subscription products are defined and managed in the Play Store. Among these is the introduction of prepaid plans. Instead of automatically renewing, these subscriptions need to be proactively extended (topped-up) by the customer in order to maintain access to the subscription content.

This feature may be of most interest for apps serving markets with limitations on auto-renewing subscriptions, like India. In fact, Google has [paused](https://www.xda-developers.com/google-play-suspend-free-trials-auto-renewing-subscriptions/) the ability of new customers in India to subscribe to auto-renewing plans due to regulations introduced by the Reserve Bank of India.

:::info
When topping up, customers can purchase any prepaid base plan available from the same subscription to top-up, even for durations different from the original purchase. Additionally, customers can switch back and forth between prepaid and auto-renewing base plans.
:::

## How to Create a Prepaid Plan

This is very similar to how you would create an auto-renewing subscription base plan. You can follow the steps [here](/getting-started/entitlements/android-products) on how to create a subscription in Google Play Console. Once you have that, you will need to add a base plan.

![](https://files.readme.io/19cad72-image.png)

The plan could be either auto-renewing or prepaid. For the purposes of this guide, we'll walk through the prepaid setup. You will need to set a duration for your plan which varies from 1 day to 1 year, and choose whether or not to allow customers to extend their plan through the Play Store subscription screen.

![](https://files.readme.io/ed0cc07-image.png)

Once you set the pricing for your base plan, click save and then activate.

:::info
Prepaid base plans do not support offers. They also cannot be marked as backwards compatible.
:::

## Purchase Cycle of a Prepaid Plan

When a customer purchases a prepaid base plan, they gain access to your subscription for the duration you specified in the Google Play Console. A customer can extend their plan before it expires by purchasing a top-up in order not to lose access. When that happens, Google will:

- Immediately mark the first prepaid base plan order as expired, and
- Create a new order (with a new order id) which has a start date of the top-up time, and an expiration date that reflects the original expiration date + the full duration of the prepaid base plan. In other words, the customer's access is increased by accumulating the entitlement time to the original expiry time.

The second order must be acknowledged quickly, especially if the duration of the base plan is small (e.g. 1 or 3 days). If you're using RevenueCat, we will automatically do that on your behalf to ensure your customers continue to have access to content.

### Events

:::info
RevenueCat now returns a period_type of 'PREPAID' for events generated from prepaid purchases.
:::

Since a top-up means that the existing order gets canceled, and a new one is issued, this is reflected in the RevenueCat dashboard as two separate events: an initial purchase and an expiration.

In the example below of a sandbox purchase, a customer bought a prepaid base plan "six-months" under the subscription "josh.prepaid" at 11:27 PM. The original expiration date is 11:42 PM. However, at 11:29, the customer purchased a top-up which resulted in the expiration of the first order, and the creation of a new one with a start time of 11:29 and an expiration time of 11:57 PM (11:42 PM + 15 minutes)

![](https://files.readme.io/775ea5a-image.png)

![](https://files.readme.io/5abd4a4-image.png)

![](https://files.readme.io/5cc4e9d-image.png)
