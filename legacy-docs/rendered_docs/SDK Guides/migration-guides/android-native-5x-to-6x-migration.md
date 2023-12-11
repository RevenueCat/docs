---
title: Android Native - 5.x to 6.x Migration
slug: android-native-5x-to-6x-migration
excerpt: New Google subscription model migration
hidden: false
categorySlug: sdk-reference
order: 2
parentDoc: 649983b4c31b2e000a3c18d4
---
## Google Product setup

Google introduced a lot of new concepts in their new subscription model. Here are some definitions:

- **Subscription**: A subscription represents access to a set of features of your app. It can have 1 or more base plans.
- **Base plan**: represents an auto-renewing or prepaid period subscription. You can have multiple base plans in a single subscription to support different subscription periods.
- **Offer**: represents an offer on a base plan. Google’s billing client returns the offers that a user is eligible for. There are 3 eligibility criteria: 

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/3aede2a-Screen_Shot_2023-01-12_at_11.44.20_AM.png",
        "Screen Shot 2023-01-12 at 11.44.20 AM.png",
        1692
      ],
      "align": "center",
      "sizing": "80",
      "border": true
    }
  ]
}
[/block]

- **Phase**: Allows to specify the pricing of the offer. You can add up to 2 “phases” to an offer. There are 3 types of offer:
  - Free trial: It provides access for free for a specific period of time
  - Single payment: Subscribers pay upfront for a specific period of time
  - Discounted recurring payment: Subscribers get a discount for a specific number of subscription periods.
- **Tags**: Strings you can add to a base plan or offer to help you identify the base plan / offer in the client.

This is a more visual representation of the relationship between these concepts:

![](https://files.readme.io/8fa740d-Screen_Shot_2023-01-12_at_5.06.28_PM.png "Screen Shot 2023-01-12 at 5.06.28 PM.png")

Our recommendation is to:

- Create a subscription for each set of features you need to unlock (e.g. “Pro”, “Premium”,…)
- Create a base plan for each renewal period you want to provide your users (e.g. “monthly”, “yearly”,...)
- If you want to provide free trials or other types of offers, add an offer with your choice of eligibility criteria and the appropriate phase. For example, to add a free trial for new users, you can create an offer with eligibility criteria “New customer acquisition” and a free trial phase with your desired duration.

> 📘 Do I need to make all new subscriptions in Google Play Console?
> 
> Existing subscriptions should still work, but you don’t need to create multiple subscriptions for different durations anymore. You should instead create multiple base plans for the same subscription.

If you plan to have multiple offers for the same plan or have developer-determined offers, we highly recommend you add tags for each offer so it’s easier to identify them later. It is not needed from a RevenueCat perspective but is just best practice for you to manage these offers on your paywall. 

## RevenueCat Product Setup

Once you have created your products in Google, you can add your products in the RevenueCat dashboard. The entitlements, offerings and packages of your dashboard should remain the same. However, to add new products, the UI has changed. 

There are two ways to add products via the RevenueCat dashboard. 

### 1. Automatic Import

Currently, this functionality is limited to importing subscriptions, but one-time purchases are in the works. 

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/fe78bbb-Screen_Shot_2023-01-12_at_5.06.34_PM.png",
        "Screen Shot 2023-01-12 at 5.06.34 PM.png",
        2204
      ],
      "align": "center",
      "sizing": "80",
      "border": true
    }
  ]
}
[/block]

### 2. Manual Import

For manual import, you need to add both your subscription ID and your base plan ID when adding a new product. 

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/c8b5476-Screen_Shot_2023-01-12_at_5.10.18_PM.png",
        "Screen Shot 2023-01-12 at 5.10.18 PM.png",
        1468
      ],
      "align": "center",
      "sizing": "80",
      "border": true
    }
  ]
}
[/block]

You can find this information in Google Play Console here:

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/9d0e770-Screen_Shot_2023-01-12_at_5.07.03_PM.png",
        "Screen Shot 2023-01-12 at 5.07.03 PM.png",
        1982
      ],
      "align": "center",
      "sizing": "80",
      "border": true
    }
  ]
}
[/block]

After you’ve added your products, you can assign them to packages the same as before. You can follow the documentation [here](doc:entitlements).  If you select a non backwards-compatible product and the [app compatibility setting](doc:google-subscriptions-and-backwards-compatibility) is set to "SDK v6+ and backwards compatible", you will have the ability to configure a backwards compatible fallback product. This product will be available for purchase in previous versions of the SDK which don't yet support non backwards compatible products.

![](https://files.readme.io/a37b7a9-Screenshot_2023-03-21_at_10.54.52.png "Screenshot 2023-03-21 at 10.54.52.png")

## Default Offer Selection

With the new configuration options, there could be multiple offers available when purchasing a Package or StoreProduct. When purchasing a Package or Product, the SDK will choose which option to purchase as the "default offer", mimicking how it worked on previous versions of our SDK.  If you want more control, you can instead purchase a SubscriptionOption directly. For more information, check out [this guide](doc:subscription-offers#google-play).

## Migration Guide

The full SDK migration reference can be found [here](https://github.com/RevenueCat/purchases-android/blob/main/migrations/v6-MIGRATION.md).

These are the abstraction models we use to support Google’s new features:

![](https://files.readme.io/ede6b16-Screen_Shot_2023-01-18_at_9.11.44_AM.png "Screen Shot 2023-01-18 at 9.11.44 AM.png")

With v6.x, you can choose to pass in a `StoreProduct`, a `Package`, or a `SubscriptionOption` into the `PurchaseParams.Builder`. 

### Migration implementation steps

1. Update RevenueCat to version `6.4.0`. You can do this in your app’s module build.gradle.

```kotlin 
implementation "com.revenuecat.purchases:purchases:6.4.0"
```
```Text React Native
npm install --save react-native-purchases@6.0.0
```
```Text Flutter
flutter pub add purchases_flutter:5.0.0
```
```Text Cordova
cordova plugin add cordova-plugin-purchases@4.0.0 --save
```

2. Adapt your paywall to use the new SDK. 

- The `price` property on `StoreProduct` (which is either the one-time purchase price or subscription's base plan price) is now a `Price` object
- There are also price related fields on the `StoreProduct` > `SubscriptionOption` > `PricingPhase` model. 

Follow the migration reference doc to migrate all the changes. These are some examples of code changes you might have to do:

```kotlin 
// To get the price for your product after all offers

// Old:
Purchases.sharedInstance.getOfferingsWith(
     onError = { /* ... */ }, 
     onSuccess = { offerings ->  
         val price = offerings.current?.annual?.product?.price
         /* Do something with price */
     }
)

// New:
Purchases.sharedInstance.getOfferingsWith(
     onError = { /* ... */ },
     onSuccess = { offerings ->
         val price = offerings.current?.annual?.product?.price?.formatted
         /* Do something with price */
     }
)
```

```kotlin 
// To purchase a subscription with a free trial

// Old:
Purchases.sharedInstance.purchasePackageWith(
    activity, 
    packageToPurchase = myPackage, 
    onError = { _, _ -> /* handle error */ }, 
    onSuccess = { _, _ -> /* handle success */ }
)

// New:
val purchaseParams = PurchaseParams.Builder(
    freeTrialSubscriptionOption, // You need to obtain this with storeProduct.subscriptionOptions?.freeTrial
    activity
).build()
Purchases.sharedInstance.purchaseWith(
    purchaseParams,
    onError = { _, _ -> /* handle error */ },
    onSuccess = { _, _ -> /* handle success */ }
)
```

3. If you are using products with offers:

- If you keep using the existing purchase functions, the [default offer logic](#default-offer-selection) will be applied to choose which option to purchase. 
- If you want more control, you will need to choose the purchase option that includes your offer from your `StoreProduct`. A possible way to identify a free trial is `storeProduct.subscriptionOptions?.freeTrial`. Alternatively, you can add tags to your offer and filter them through the `storeProduct.subscriptionOptions?.withTag("your-tag")`.

### Observer Mode

Observer mode is still supported in v6. Other than updating the SDK version, there are no changes required.
