---
title: PayPal Product Setup
slug: paypal-products
excerpt: Setting up products and plans in the PayPal Dashboard
hidden: false
---

To set up products for PayPal, start by logging into the PayPal Developer Dashboard. This guide assumes basic knowledge of PayPal's subscription products and plans. For more information, visit PayPal's [documentation](https://developer.paypal.com/docs/subscriptions/).

## Create a product and plan

1. In the PayPal Developer Dashboard, create a Product for your subscription.
2. Create one or more Plans under that Product (monthly, yearly, etc.).
3. Copy the Plan ID for each plan you want to track in RevenueCat.

:::info Product Mapping between RevenueCat and PayPal
A PayPal Plan maps to a Product in RevenueCat. If you create multiple plans under a single PayPal product, you'll import each plan into RevenueCat as a separate product.
:::

## Integrate with RevenueCat

If you're ready to integrate your new PayPal plans with RevenueCat, continue our [product setup guide →](/getting-started/entitlements).
