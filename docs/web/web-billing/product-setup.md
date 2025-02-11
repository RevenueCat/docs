---
title: Product Setup
slug: product-setup
excerpt: Setting up your web purchases using Web Billing
hidden: false
---

# Configuring Web Purchases & Products

:::warning Beta Feature
Web Billing (formerly RevenueCat Billing) is currently in beta.
:::

To create a new Web Billing (formerly RevenueCat Billing) product, open the RevenueCat dashboard, go to your project's settings, and under "Products" click on "New", and then select your Web Billing App:

![New product button in the products screen](/images/web-billing/new-product.png)

In the "new product" screen, you can set up the following properties of the product:

- **Identifier**: A unique ID for the Product, accessible from the SDK, events, etc. Can contain up to 100 alphanumeric characters, dots, or underlines.
- **Title**: Customer-facing title of the Product. Will be shown in the checkout form and on invoices.
- **Description**: Customer-facing description of the Product. Available from the Web SDK, eg. to show on your paywall.
- **Display name**: An optional human readable name for the Product, will be shown on the dashboard instead of the identifier.
- **Product type**: The type of product being sold:
  - _Auto-renewing subscription_: A recurring subscription purchase, that continues on a given interval until canceled.
  - _Consumable_: A non-recurring purchase that can be purchased one or more times (repeated).
  - _Non-consumable_: A non-recurring purchase that can only be purchased once.
- **Duration**: The billing cycle (period length) of the subscription. _See [Sandbox testing](/web/web-billing/web-sdk#renewals-in-sandbox) for more information about durations in sandbox mode._
- **Free trial period**: The duration of a free trial. _See [Sandbox testing](/web/web-billing/web-sdk/#renewals-in-sandbox) for more information about durations in sandbox mode._
- **Trial eligibility**: Which customers have access to the free trial:
  - _Everyone_: Every customer will start a subscription to this product with a trial, even if they had a trial before. _Please note:_ If you choose this option, it means that customers could continuously cancel their trial and start another trial to keep getting free access.
  - _Has never made any purchase_: Only customers that have never made any purchase in this Project (including non-subscription purchases and purchases in other Apps of this project) are eligible for a trial.
  - _Didn't have any subscription yet_: Only customers that have never had any subscription in this Project (including in other Apps of the project) are eligible for a trial.
  - _Didn't have this subscription yet_: Only customers that have never subscribed to this product are eligible for a trial.
- **Grace period**: Length of the subscription access retention after a billing issue. _See [Sandbox testing](/web/web-billing/web-sdk#renewals-in-sandbox) for more information about durations in sandbox mode._
- **Price**: The price that will be charged for every period of the subscription in each currency. You can add prices in additional currencies by clicking "Add price". Only one price can be set per currency. [Read more about multi-currency support in Web Billing](/web/web-billing/multi-currency-support).

![New product configuration page](/images/web-billing/new-product-configuration.png)
