---
title: Google Subscriptions and Backwards Compatibility
slug: google-subscriptions-and-backwards-compatibility
hidden: false
---

## RevenueCat compatibility with Google May 2022 Subscription Changes

In May 2022, Google introduced several [new features for subscription products](https://developer.android.com/google/play/billing/compatibility). These features are not supported in old versions of the RevenueCat SDK ([see table below](#revenuecat-sdk-version-support)). Only products marked as “backwards compatible” in the Google Play Console are functional with RevenueCat in those older SDKs. As of purchases-android v6 (and equivalent versions of cross-platform SDKs), Google’s new subscription setup configurations are supported. We’ve automatically migrated your app to use those backwards-compatible products with all SDKs.

To take full advantage of the newer Google subscription configurations and features in RevenueCat Offerings, RevenueCat now allows setting up a backwards compatible fallback product that will only be used for apps using old versions of the SDK.

## Product backwards compatibility

When creating Google Play products you can now specify whether the product is marked as backwards compatible in the Play Console. RevenueCat uses this information to know whether this product can be purchased by older version of the SDK (versions 5 and below).

![](/docs_images/products/google-play/config/1efcc0b-Screenshot_2023-04-10_at_15.15.08_c800fd2a9ce23735b3d2ca7251edfc79.png)

This information is also displayed in the product details page and will be synced from the Google play store regularly (checking the product details and status will trigger a sync immediately).

![](/docs_images/products/google-play/config/b7b34e8-Screenshot_2023-04-10_at_15.13.41_2540aee4fdc2595e40ebfecc38799b77.png)

## App compatibility setting

In the settings page for Google Play apps, you can change whether RevenueCat Offerings should support only new versions of the RevenueCat SDK (versions 6 and above or equivalent cross-platform SDKs). You should choose the setting "Only Android SDK v6+" **only if** you have never used an earlier version of the RevenueCat Android SDK in production, or if you are confident that versions of your app using previous versions of the SDK do not constitute a substantial proportion of your customer base anymore.

![Google app setting: SDK support in offering setup](/docs_images/products/google-play/config/96831d2-Screenshot_2023-03-27_at_11.03.06_1930c93c744b1ceaca8086972512db40.png)

If you select the setting "SDK v6+ and backwards compatible" and you are attaching a non-backwards compatible product to an Offering, you will additionally be able to attach a backwards compatible fallback product for use with SDK versions 5 and below and equivalent cross-platform SDKs. Please note that each version of the SDK will always only see one product per package of an offering – when a fallback product is set up, SDK v6+ will only see the regular, non-backward compatible product, and SDK v5 and below will only see the backward compatible fallback product.

![Selecting a backwards compatible fallback product](/docs_images/products/google-play/config/39a73e1-Screenshot_2023-03-21_at_10.54.52_74db96e1ed7314ffe45704b51e5e01bc.png)

:::danger Why are my offerings empty when using "Only Android SDK v6+"?
If setting the SDK support to "Only Android SDK v6+", Offerings will not contain any products for older versions of the SDK.
:::

## Migration of existing products to SDK v6+

In order to support the new Google Play features through the RevenueCat Android SDK v6+ and above, any existing products set up in your app were automatically migrated. This step does not impact compatibility with previous versions of the SDK. Old SDK versions will continue to work as before, regardless of whether or not the migration was successful.

In some cases, the migration might have failed. This could be due to invalid Play Store service credentials, a product identifier being mistyped in RevenueCat, or the product having been deleted in Google Play Console in the meantime. In these cases, a warning will be displayed in the products page and when attempting to attach such a product to an Offering:

![](/docs_images/products/google-play/config/e465cfc-Screenshot_2023-01-30_at_12.18.01_da31ca53e353fdc690c07e5837906e7f.png "Screenshot 2023-01-30 at 12.18.01.png")

Since we are lacking required data to purchase this product in the RevenueCat Android SDK v6+, it will not work with this version of the SDK. In addition, products that couldn't be migrated prevent the creation or import of new products with the same identifier to prevent conflicts.

To fix this problem, you can try one of the following:

- Delete the product in RevenueCat side and re-create or import it.
- Update your [Play Store service credentials](/service-credentials/creating-play-service-credentials) in the app's settings in RevenueCat. This will re-trigger the migration. Please allow a few minutes for the migration to complete, and then check the product status again.
- Create a new product with a new identifier.

If neither of these helps, please contact our [support team](https://www.revenuecat.com/support).

## RevenueCat SDK version support

The following table shows which SDK versions require backwards compatible products and which versions support all Google Play products:

| RevenueCat SDK           | Version requiring backwards compatible product | Versions supporting all products |
| :----------------------- | :--------------------------------------------- | :------------------------------- |
| purchases-android        | v5 and below                                   | v6 and above                     |
| purchases-react-native   | v5 and below                                   | v6 and above                     |
| purchases-flutter        | v4 and below                                   | v5 and above                     |
| purchases-unity          | v4 and below                                   | v5 and above                     |
| cordova-plugin-purchases | v3 and below                                   | v4 and above                     |
