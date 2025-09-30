---
title: Configure Products & Prices

slug: product-setup
excerpt: Setting up your web products, pricing structure and upgrade paths
hidden: false
---

# Configure Web Billing products & prices

Web Billing products are created and managed within the RevenueCat Dashboard.

On this page, you can learn how to:

- [Create a product and configure its pricing](#creating-a-new-web-billing-product)
- [Configure subscription changes](#configure-subscription-changes)

## Creating a new web billing product

To create a new Web Billing product, log in to the RevenueCat dashboard.

1. Go to the **Product catalog**
1. Select the **Products** tab
1. Find your web billing config, and click **+ New**:

![New product button in the products screen](/docs_images/web/web-billing/new-product.png)

### Configuring the product & pricing

In the "new product" screen, you can set up the following aspects of the product:

#### Identifier

A unique ID for the Product, accessible from the SDK, events, etc. Can contain up to 100 alphanumeric characters, dots, or underscores.

#### Display name

An optional human readable name for the Product, will be shown on the dashboard instead of the identifier.

#### Name

The customer-facing name of the Product. Will be shown in the checkout form and on invoices.

#### Description

The customer-facing description of the Product. Available from the Web SDK, eg. to show on your paywall.

#### Product type

The type of product being sold:

- _Auto-renewing subscription_: A recurring subscription purchase, that continues on a given interval until canceled.
- _Consumable_: A non-recurring purchase that can be purchased one or more times (repeated).
- _Non-consumable_: A non-recurring purchase that can only be purchased once.

#### Duration

The base billing cycle (period length) of the subscription.

:::info Accelerated billing cycles in sandbox
In sandbox mode, billing cycles are accelerated to enable easier testing. See [Sandbox testing](/web/web-billing/testing#subscription-schedules-in-sandbox) for more information.
:::

#### Free trial

Check this to enable a free trial period, and choose the duration.

:::info Accelerated trial periods in sandbox
In sandbox mode, free trial periods are accelerated to enable easier testing. See [Sandbox testing](/web/web-billing/testing#subscription-schedules-in-sandbox) for more information.
:::

#### Introductory period

Applies a discounted price for a limited time at the beginning of a subscription (AKA introductory offer). Introductory periods are presented to customers in the product selection page (for web purchase links) and the checkout. They automatically renew to the base subscription price at the end of the period.

Introductory periods are always scheduled after a free trial, when both are enabled.

You can configure:

1. **Introductory period length:** How long the discounted price will apply for
1. **Introductory billing cycle:** Whether customers pay upfront for the entire introductory period, or pay in multiple cycles (e.g. monthly renewals)

You can define introductory prices per-currency in the pricing table (see [prices](#prices)).

:::info Billing cycle options

The available billing cycles for introductory periods depend on the length of the intro period you've selected. For some lengths, only "paid upfront" is available.

:::

:::info Accelerated introductory billing cycles in sandbox
In sandbox mode, introductory billing cycles are set at 5 mins, regardless of configured length, to enable easier testing. See [Sandbox testing](/web/web-billing/testing#subscription-schedules-in-sandbox) for more information.
:::

#### Trial / introductory period eligibility

Defines which customers have access to the free trial or introductory period:

- _Everyone_: Every customer will start a subscription to this product with a trial, even if they had a trial before. _Please note:_ If you choose this option, it means that customers could continuously cancel their trial and start another trial to keep getting free access.
- _Has never made any purchase_: Only customers that have never made any purchase in this Project (including non-subscription purchases and purchases in other Apps of this project) are eligible for a trial.
- _Didn't have any subscription yet_: Only customers that have never had any subscription in this Project (including in other Apps of the project) are eligible for a trial.
- _Didn't have this subscription yet_: Only customers that have never subscribed to this product are eligible for a trial.

:::info Eligibility for anonymous purchases
If you're using [Redemption Links](redemption-links) to enable anonymous purchases, it's not possible to assess the eligibility of a customer when they land on your purchase flow, because they're anonymous. If strict eligibility is important to you, we recommend passing App User IDs to the purchase flow so that eligbility can be checked.
:::

#### Grace period for billing issues

The length of the subscription access retention after a billing issue. _See [Sandbox testing](/web/web-billing/testing#subscription-schedules-in-sandbox) for more information about durations in sandbox mode._

#### Prices

The price that will be charged for each period of the subscription, for each currency.

You can add prices in additional currencies by clicking "Add new currency", and filling in the price fields.

Only one base price can be set per currency. [Read more about multi-currency support in Web Billing](/web/web-billing/multi-currency-support).

![Pricing table](/docs_images/web/web-billing/pricing-table.png)

:::warning Price changes not currently possible
Once you've saved the product, it's only possible to add prices for new currencies, and not edit existing ones. If you need to change pricing, we recommend you create a new product with the desired pricing, and replace the existing product in your offering. We're working on fully supporting pricing changes and migrations in the future.
:::

## Configure subscription changes

You can allow customers to change their subscription from the Customer Portal, and upgrade or downgrade to a different product.

To enable this, you first need to create upgrade or downgrade paths between your web billing products. Subscribers can only move between products when an explicit path is defined between them.

![Subscription Changes in Customer Portal](/docs_images/web/web-billing/customer-portal-subscription-changes.png)

### Upgrade behavior

When a customer chooses to **upgrade** their subscription:

- Access to their new product is granted immediately
- Access to their existing product is revoked immediately
- Existing free trials are ended immediately, and are not carried over to the new product
- The customer is charged the full amount for the new product's price immediately
- A partial refund is issued for any unused time on the existing subscription

When a customer chooses to **downgrade** their subscription:

- Access to their new product is granted at the end of the current subscription cycle
- Access to their current product is maintained until the end of the current subscription cycle
- Existing free trials are ended immediately and aren not carried over to the new product
- The customer is charged the full amount for the new product's price at the end of the current subscription cycle
- No refunds are issued

:::info Subscription changes must use same currency

Customers are only able to change to a product that has a price in their existing currency. Products without a price in their currency will not be presented as possible changes.

:::

### Defining subscription change paths

![Subscription changes link](/docs_images/web/web-billing/subscription-changes-link.png)

1. Log in to the RevenueCat dashboard and select your project
1. Go to the **Product catalog** and select the **Products** tab
1. Scroll to your web billing provider, and click the **Subscription changes** button in the table header
1. Click **Edit**
1. In the first dropdown list, select the product you want customers to be able to upgrade from (source product)
1. In the "can be upgraded to" list, select one or more products you want customers to be able to upgrade to (destination products)
1. (Optional) do the same to add rules for downgrades
1. (Optional) add more rules for different products
1. Click **Save rules**

### Testing subscription changes

Customers subscribed to a product that has any upgrade or downgrade paths defined will see a **Change subscription** option in the [customer portal](customer-portal).

To test this:

1. Complete a sandbox purchase for a product that has upgrade or downgrade paths defined
1. Open the sandbox purchase receipt email
1. Click the link to "update or manage your subscription" in the footer
1. In the customer portal, select **Change subscription**
1. Verify that the products shown are intended as upgrades or downgrades
1. Repeat the steps to test changes from any other products
