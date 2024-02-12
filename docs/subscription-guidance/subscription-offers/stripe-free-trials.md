---
title: Stripe Free Trials
slug: stripe-free-trials
excerpt: Setting up free trials in Stripe or Stripe Checkout
hidden: false
---

## Subscriptions

To add a free trial to a Subscription, navigate to **Billing...Subscriptions...Create subscription**

![Screenshot](/images/2cb9959-Screenshot_2023-03-06_at_1.03.34_PM_c449f199e6ec3915c5b2307a005985f2.png)

In the \*_Create a Subscription_ modal, enter the number of days for your free trial.

![Screenshot](/images/6c10157-Screenshot_2023-03-06_at_12.56.29_PM_5556d5a181fe29528f5a1eec26f15203.png)

:::tip Using Stripe's API
Free trials can be added to a Subscription through Stripe's API. See Stripe's [pre-built Checkout page](https://stripe.com/docs/billing/quickstart#add-trial-toggle) for an example.

Stripe's full trial documentation can be found [here](https://stripe.com/docs/billing/subscriptions/trials).
:::

## Products

Stripe presently allows for free trials to be set per price in **Products...Add product**

RevenueCat will correctly detect these trials, but Stripe recommends against this approach. Trials configured on Products will not be compatible with Stripe Checkout or quotes.

![Screenshot](/images/4bf4ef3-Screenshot_2023-03-06_at_12.53.54_PM_09fb64c8e7f4bc0f95323518e113f2c6.png)
