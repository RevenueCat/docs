---
title: Google Play Product Setup
slug: android-products
excerpt: Setting up your in-app purchases in Google Play Billing
hidden: false
categorySlug: documentation
order: 1
parentDoc: 649983b4c31b2e000a3c185b
---
To set up products for Android devices, start by logging into [Google Play Console](https://play.google.com/console). Google Play Console is Google's central hub for managing app releases, testing, in-app purchases, and more. 

This guide assumes basic knowledge of Google Play Console, as well as having an app set up and ready for adding in-app purchases. For more information, visit [Google's documentation and guides for Google Play Console](https://support.google.com/googleplay/android-developer/?hl=en#topic=3450769).

# Create an In-App Product or Subscription

> 📘 
> 
> You'll need to have an APK uploaded before you can create in-app products. Check out our guide on [sandbox testing on Android](doc:google-play-store) for details on how to upload an APK and roll out a release on a closed test track.

To create an in-app product or subscription, go to Google Play Console's 'All Applications' page and select your app from the list.

In the sidebar, select the **Products** dropdown. Depending on your in-app product type, you will either choose **In-app products** or **Subscriptions**.

![](https://files.readme.io/1bbcf2f-2020-10-09_18.02.44_play.google.com_16c50bed37ae.png "2020-10-09 18.02.44 play.google.com 16c50bed37ae.png")



After clicking Create, provide a couple pieces of metadata to Google:

| Metadata   | Description                                                                                                                                                                                                                                                                           |
| :--------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Product ID | The product ID is a unique alphanumeric ID that is used for accessing your product in development and syncing with RevenueCat. After you use a Product ID for one product in Google Play Console, **it can’t be used again across any of your apps, even if the product is deleted**. |
| Name       | A short name of the item, up to 55 characters. This will be displayed on your Google Play Store listing.                                                                                                                                                                              |

## Tips for creating robust product IDs

After you use a Product ID for one product in Google Play Console, **it can’t be used again across any of your apps, even if the product is deleted**. It helps to be a little organized here from the beginning - we recommend using a consistent naming scheme across all of your product identifiers such as:

> **`<app>_<entitlement>_<version>`** 

- **app:** Some prefix that will be unique to your app, since the same product Id cannot but used in any future apps you create. 
- **entitlement**: A name for what the product provides access to, e.g., "premium"
- **version**: A version number


For example, using this format the identifier for your first product that grants access to a "premium" subscription would be:

> `rc_premium_v1`


![](https://files.readme.io/9b43a80-Screen_Shot_2022-06-28_at_5.51.57_PM.png "Screen Shot 2022-06-28 at 5.51.57 PM.png")



## Create a base plan

For subscription products, you'll need to add a base plan. Base plans define a billing period, price, and renewal type for purchasing your subscription. Customers never purchase a subscription product directly, they always purchase a base plan of a subscription.

Click "Add base plan" and fill out the associated fields. Make sure to set a price, and click "Activate". Since Google introduced multiple base plans with Billing Client 5, it's good practice to be as clear as possible when naming your plans, such as: `<duration>-<renewaltype>`, eg. `annual-autorenewing`.

![Screenshot 2023-07-27 at 4 56 24 PM](https://files.readme.io/9f32a53-image.png)

[block:callout]
{
  "type": "success",
  "title": "Migrated products from before May 2022",
  "body": "When Google introduced the new subscription features in May 2022, all existing subscriptions were migrated to subscription products with a single base plan. That base plan has an identifier representing the duration, like `P1Y` which stands for annual."
}
[/block]

[block:callout]
{
  "type": "info",
  "title": "Representation of Google Play subscription products in RevenueCat",
  "body": "RevenueCat Products map to Base Plans for Google Play subscriptions, since those are the products that customers can purchase. Newly set up products in RevenueCat follow the identifier format `<subscription_id>:<base-plan-id>`, whereas products that were set up before February 2023 follow the identifier format `<subscription_id>`."
}
[/block]

[block:callout]
{
  "type": "danger",
  "title": "Support for non backwards-compatible base plans",
  "body": "Old versions of RevenueCat SDKs do not support Google's new subscription features such as multiple base plans per subscription product. Only base plans marked as \"[backwards compatible](https://support.google.com/googleplay/android-developer/answer/12124625?hl=en#backwards_compatible)\" in Google Play Console are available in these SDK versions. [Learn more](doc:google-subscriptions-and-backwards-compatibility). Only one base plan per subscription can be marked as backwards compatible."
}
[/block]
To mark a base plan as backwards compatible, click the overflow menu on the base plan and select "Use for deprecated billing methods".

![](https://files.readme.io/0375be4-f309ab8-Screen_Shot_2022-07-07_at_2.12.18_PM.png "f309ab8-Screen_Shot_2022-07-07_at_2.12.18_PM.png")

## (Optional) Create an offer

If you wish to create an offer for your base plan, you can do so from the subscription page by clicking "Add offer". Offers can be free trials, discounts, or simply special price setups that apply when a customer first purchases a subscription.

![](https://files.readme.io/63e2cad-Screen_Shot_2022-06-30_at_3.58.40_PM.png "Screen Shot 2022-06-30 at 3.58.40 PM.png")

You can then select a product ID, eligibility, and offer phases. 
[block:callout]
{
  "type": "danger",
  "title": "Support for non backwards-compatible offers",
  "body": "Old versions of RevenueCat SDKs do not support Google's new subscription features such as multiple offers per base plan. Only offers marked as \"[backwards compatible](https://support.google.com/googleplay/android-developer/answer/12124625?hl=en#backwards_compatible)\" in Google Play Console are available in these SDK versions. [Learn more](doc:google-subscriptions-and-backwards-compatibility). Only one offer per base plan can be marked as backwards compatible."
}
[/block]
To mark an offer as backwards compatible, click the overflow menu and select "Use for deprecated billing methods".

![](https://files.readme.io/f309ab8-Screen_Shot_2022-07-07_at_2.12.18_PM.png "Screen Shot 2022-07-07 at 2.12.18 PM.png")

## Making Subscriptions Editable, InAppProduct API

**RevenueCat does not use the InAppProduct API for subscriptions.** You are safe to make subscriptions editable, **unless** you are manually using this API outside of RevenueCat.

This is related to this notice:

![](https://files.readme.io/3b927cd-Screen_Shot_2022-07-07_at_2.23.03_PM.png "Screen Shot 2022-07-07 at 2.23.03 PM.png")



![](https://files.readme.io/6dcb926-4a6f1139-085f-4e5c-8132-5d5573ec2cca.png "4a6f1139-085f-4e5c-8132-5d5573ec2cca.png")



If you are relying solely on RevenueCat for your subscriptions, you can safely select "Make editable".

# Integrate with RevenueCat

If you're ready to integrate your new Google Play in-app product with RevenueCat, continue our [product setup guide ](doc:entitlements).
