---
title: Stripe Free Trials
slug: stripe-free-trials
excerpt: Setting up free trials in Stripe or Stripe Checkout
hidden: false
---

## Subscriptions

To add a free trial to a Subscription, navigate to **Billing...Subscriptions...Create subscription**

![Screenshot](/docs_images/products/stripe/create-subscription.png)

In the \*_Create a Subscription_ modal, enter the number of days for your free trial.

![Screenshot](/docs_images/products/stripe/create-subscription-2.png)

:::tip Using Stripe's API
Free trials can be added to a Subscription through Stripe's API. See Stripe's [pre-built Checkout page](https://stripe.com/docs/billing/quickstart#add-trial-toggle) for an example.

Stripe's full trial documentation can be found [here](https://stripe.com/docs/billing/subscriptions/trials).
:::

## Products

Stripe presently allows for free trials to be set per price in **Products...Add product**

RevenueCat will correctly detect these trials, but Stripe recommends against this approach. Trials configured on Products will not be compatible with Stripe Checkout or quotes.

![Screenshot](/docs_images/products/stripe/default-trial-period.png)
