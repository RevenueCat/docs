---
title: Google Play Product Setup
slug: android-products
excerpt: Setting up your in-app purchases in Google Play Billing
hidden: false
---

To set up products for Android devices, start by logging into [Google Play Console](https://play.google.com/console). Google Play Console is Google's central hub for managing app releases, testing, in-app purchases, and more.

This guide assumes basic knowledge of Google Play Console, as well as having an app set up and ready for adding in-app purchases. For more information, visit [Google's documentation and guides for Google Play Console](https://support.google.com/googleplay/android-developer/?hl=en#topic=3450769).

## Create an In-App Product or Subscription

:::info
You'll need to have an APK uploaded before you can create in-app products. Check out our guide on [sandbox testing on Android](/test-and-launch/sandbox/google-play-store) for details on how to upload an APK and roll out a release on a closed test track.
:::

To create an in-app product or subscription, go to Google Play Console's 'All Applications' page and select your app from the list.

In the sidebar, select the **Products** dropdown. Depending on your in-app product type, you will either choose **In-app products** or **Subscriptions**.

![](/images/1bbcf2f-2020-10-09_18.02.44_play.google.com_16c50bed37ae_c75d64503bab6228ee83570a9dc0a507.png "2020-10-09 18.02.44 play.google.com 16c50bed37ae.png")

After clicking Create, provide a couple pieces of metadata to Google:

| Metadata   | Description                                                                                                                                                                                                                                                                           |
| :--------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Product ID | The product ID is a unique alphanumeric ID that is used for accessing your product in development and syncing with RevenueCat. After you use a Product ID for one product in Google Play Console, **it can’t be used again across any of your apps, even if the product is deleted**. |
| Name       | A short name of the item, up to 55 characters. This will be displayed on your Google Play Store listing.                                                                                                                                                                              |

### Tips for creating robust product IDs

After you use a Product ID for one product in Google Play Console, **it can’t be used again across any of your apps, even if the product is deleted**. It helps to be a little organized here from the beginning - we recommend using a consistent naming scheme across all of your product identifiers such as:

> **`<app>_<entitlement>_<version>`**

- **app:** Some prefix that will be unique to your app, since the same product Id cannot but used in any future apps you create.
- **entitlement**: A name for what the product provides access to, e.g., "premium"
- **version**: A version number

For example, using this format the identifier for your first product that grants access to a "premium" subscription would be:

> `rc_premium_v1`

![](/images/9b43a80-Screen_Shot_2022-06-28_at_5.51.57_PM_139d82439030679f11e2aa5d0933b681.png "Screen Shot 2022-06-28 at 5.51.57 PM.png")

### Create a base plan

For subscription products, you'll need to add a base plan. Base plans define a billing period, price, and renewal type for purchasing your subscription. Customers never purchase a subscription product directly, they always purchase a base plan of a subscription.

Click "Add base plan" and fill out the associated fields. Make sure to set a price, and click "Activate". Since Google introduced multiple base plans with Billing Client 5, it's good practice to be as clear as possible when naming your plans, such as: `<duration>-<renewaltype>`, eg. `annual-autorenewing`.

![Screenshot 2023-07-27 at 4 56 24 PM](/images/9f32a53-image_dba8895e87a0d3979f5b87804f93d73d.png)

:::success Migrated products from before May 2022
When Google introduced the new subscription features in May 2022, all existing subscriptions were migrated to subscription products with a single base plan. That base plan has an identifier representing the duration, like `P1Y` which stands for annual.
:::

:::info Representation of Google Play subscription products in RevenueCat
RevenueCat Products map to Base Plans for Google Play subscriptions, since those are the products that customers can purchase. Newly set up products in RevenueCat follow the identifier format `<subscription_id>:<base-plan-id>`, whereas products that were set up before February 2023 follow the identifier format `<subscription_id>`.
:::

:::danger Support for non backwards-compatible base plans
Old versions of RevenueCat SDKs do not support Google's new subscription features such as multiple base plans per subscription product. Only base plans marked as \"[backwards compatible](https://support.google.com/googleplay/android-developer/answer/12124625?hl=en#backwards_compatible)\" in Google Play Console are available in these SDK versions. [Learn more](/getting-started/entitlements/google-subscriptions-and-backwards-compatibility). Only one base plan per subscription can be marked as backwards compatible.
:::

To mark a base plan as backwards compatible, click the overflow menu on the base plan and select "Use for deprecated billing methods".

![](/images/0375be4-f309ab8-Screen_Shot_2022-07-07_at_2.12.18_PM_1ecaf7748ac037b55e44d2ea3d034918.png "f309ab8-Screen_Shot_2022-07-07_at_2.12.18_PM.png")

### (Optional) Create an offer

If you wish to create an offer for your base plan, you can do so from the subscription page by clicking "Add offer". Offers can be free trials, discounts, or simply special price setups that apply when a customer first purchases a subscription.

![](/images/63e2cad-Screen_Shot_2022-06-30_at_3.58.40_PM_6735fc3d30229c1175babf075ed316dc.png "Screen Shot 2022-06-30 at 3.58.40 PM.png")

You can then select a product ID, eligibility, and offer phases.

:::danger Support for non-backwards-compatible offers
Old versions of RevenueCat SDKs do not support Google's new subscription features such as multiple offers per base plan. Only offers marked as \"[backwards compatible](https://support.google.com/googleplay/android-developer/answer/12124625?hl=en#backwards_compatible)\" in Google Play Console are available in these SDK versions. [Learn more](/getting-started/entitlements/google-subscriptions-and-backwards-compatibility). Only one offer per base plan can be marked as backwards compatible.
:::

To mark an offer as backwards compatible, click the overflow menu and select "Use for deprecated billing methods".

![](/images/f309ab8-Screen_Shot_2022-07-07_at_2.12.18_PM_4979d641e4ad1bd1a1f4ca3fe8dc9224.png "Screen Shot 2022-07-07 at 2.12.18 PM.png")

### Add non-consumable products 

If you want your users to be able to purchase a certain In-App product only once (for example, a lifetime purchase), you need to configure the product as a non-consumable when creating it in the RC dashboard. 

![](/images/non-consumable-android-support.png "non-consumable-android-support.png")

If you don't configure it as a non-consumable, we will automatically `consume` the purchase and Google will allow the customer to purchase it again. The purchase will still be registered in that user's `CustomerInfo`.

You can also edit existing or imported consumable products to make them non-consumable.

:::info
Non-consumable support is supported in Android SDK version 7.11.0 and up. In previous versions, the SDK will still consume the purchase.
:::

### Making Subscriptions Editable, InAppProduct API

**RevenueCat does not use the InAppProduct API for subscriptions.** You are safe to make subscriptions editable, **unless** you are manually using this API outside of RevenueCat.

This is related to this notice:

![](/images/3b927cd-Screen_Shot_2022-07-07_at_2.23.03_PM_3333e38cb7d6a07672403723695aea2a.png "Screen Shot 2022-07-07 at 2.23.03 PM.png")

![](/images/6dcb926-4a6f1139-085f-4e5c-8132-5d5573ec2cca_1a925154fc0a3f1522d523e4503940b8.png "4a6f1139-085f-4e5c-8132-5d5573ec2cca.png")

If you are relying solely on RevenueCat for your subscriptions, you can safely select "Make editable".

## Integrate with RevenueCat

If you're ready to integrate your new Google Play in-app product with RevenueCat, continue our [product setup guide ](/getting-started/entitlements).
