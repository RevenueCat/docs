---
title: RevenueCat Billing Product Setup
slug: rc-billing-products
excerpt: Setting up your web purchases using RevenueCat Billing
hidden: false
---

# RevenueCat Billing Product Setup

:::warning Beta Feature
RevenueCat Billing is currently in beta.
:::

To create a new RevenueCat Billing product, open the RevenueCat dashboard, go to your project's settings, and under "Products" click on "New", and then select your RevenueCat Billing App:

![New product button in the products screen](/images/rc-billing/new-product.png)

In the "new product" screen, you can set up the following properties of the product:

- Identifier: A unique ID for the Product, accessible from the SDK, events, etc.
- Display name: An optional human readable name for the Product, will be shown on the dashboard instead of the identifier.
- Duration: The billing cycle (period length) of the subscription.
- Price: The price that will be charged for every period of the subscription. Currently, only USD is supported.

![New product configuration page](/images/rc-billing/new-product-configuration.png)
