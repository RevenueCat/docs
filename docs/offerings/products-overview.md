---
title: Product Configuration
sidebar_label: Product Configuration
slug: products-overview
excerpt: Use Entitlements and Offerings to organize and display products
hidden: false
---

Products are the individual SKUs that users actually purchase from your app. The stores (Apple, Google, Stripe, etc.) process these SKUs and charge the user.

RevenueCat Offerings are a way to organize and display products to users. You can read more about Offerings [here](/offerings/overview).

## Store Configuration

No matter how you choose to use RevenueCat, you'll need to first have products set up in the stores. This is done outside of RevenueCat, and where you set things like price, duration, and free trials. If you've never set up products before or need a refresher (or tips and tricks) check out these guides:

- **[iOS / App Store Connect ](/getting-started/entitlements/ios-products)**
- **[Android / Google Play Console ](/getting-started/entitlements/android-products)**
- **[Android / Amazon Appstore ](/getting-started/entitlements/amazon-product-setup)**
- **[Stripe ](/getting-started/entitlements/stripe-products)**
- **[Paddle ](/getting-started/entitlements/paddle-products)**

### Free trials, promotional offers, and other product configuration

RevenueCat supports free trials, promotional offers, and other product configuration options.

You can read more about these product configuration options [here](/subscription-guidance/subscription-offers).

## Add Products to RevenueCat

After your products are set up in the stores, you'll need to set up a 1-to-1 mapping of the products in RevenueCat as well.

:::info Automatic Tracking
If a user purchases a product that has not been set up in RevenueCat, the transaction will still be tracked in RevenueCat, and the product will be automatically created in RevenueCat.
:::

### Automatically Import Products (recommended)

After connecting your project to a store, RevenueCat supports automatically importing products from the store.

Navigate to the **Products** tab in the settings for your project in the RevenueCat dashboard, and click the **+ New** button, then choose **Import Products**. RevenueCat will display a list of products that are available to import.

### Manually Import Products

Navigate to the **Products** tab in the **Product catalog** section of your project in the RevenueCat dashboard. To add a new product, click the **+ New product** button and enter the product identifier **exactly as it appears in the store**, as well as the store that the product belongs to.

These product identifiers are the link between RevenueCat, and Apple, Google, Stripe, or Amazon.

![](/docs_images/products/new-products.png)

When adding products manually for Google Play apps, you will need to add both the subscription ID and the base plan ID, which you can find in Google Play Console as per the following screenshot:

![](/docs_images/products/google-play-new-products.png)

## Product Display Names

To make it easier to identify your products in RevenueCat, you can optionally set a display name for them by:

1. Navigating to a product's configuration page
2. Clicking **Edit**
3. Entering your desired display name
4. Clicking **Save**

:::info
Product display names must be unique within an app. It's a good practice to include the product duration in the display name to avoid name overlaps, for example: 'My Pro Subscription Monthly', 'My Pro Subscription Yearly' etc".
:::

## Next steps

If you've added your products in the dashboard, it's time to create an Entitlement.

<Button href="/docs/getting-started/entitlements">Create an Entitlement →</Button>
