---
title: Refunds
sidebar_label: Refunds
slug: refunds
hidden: false
---

# Refunds

This guide explains how RevenueCat handles virtual currency balance adjustments when purchases are refunded, including both subscriptions and one-time purchases. When purchases that grant virtual currency are refunded, RevenueCat adjusts the customer’s balance to maintain fairness, while ensuring balances never fall below zero.

## Balance Floor

By default, customer balances cannot go below 0.

- If a refund would result in a negative balance, RevenueCat caps it at 0.
- This protects against overdrawn balances or “currency debt”.

:::info
We do not currently support negative balances. If this is a use case for you, [feel free to let us know](https://form.typeform.com/to/jI9vpPZq)!
:::

## Subscription Refunds

When a subscription that granted virtual currency is refunded:

- RevenueCat removes a prorated amount of the originally granted currency, based on the refund amount.
- The amount removed is rounded up to the nearest whole number (fractional balances are not supported).
- If the removal would drop the balance below zero, the new balance is capped at 0.

## One-Time Purchase Refunds

When a one-time purchase is refunded:

- RevenueCat removes the full amount of currency originally granted by the purchase.
- If this would drop the balance below 0, we cap the new balance at 0.

## Limitations

### Partial refunds on Google Play

Google Play allows partial refunds, but RevenueCat does not receive the refund amount.

Because of this:

- If a purchase is fully refunded, RevenueCat treats it as such and adjusts the balance accordingly.
- If a purchase is partially refunded, RevenueCat treats it as fully paid and does not remove any currency.
