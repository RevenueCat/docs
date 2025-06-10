---
title: Subscriptions
sidebar_label: Subscriptions
slug: subscriptions
hidden: false
---

# Subscriptions

In addition to one-time products, subscriptions can be used to grant virtual currency on a recurring basis, such as a monthly coin pack or weekly credit refill. This model helps drive predictable revenue while encouraging long-term engagement and retention.

With RevenueCat’s virtual currency feature, you can configure subscriptions to automatically deliver currency to customers at regular intervals. These currencies, like tokens, gems, or credits, can then be spent on virtual goods or in-app experiences.

Setting up subscriptions for virtual currency requires careful configuration in each platform to ensure consistent behavior across upgrades, downgrades, and trials. This guide walks through the key setup steps and platform-specific considerations.

:::info Supported Stores
RevenueCat’s subscription support for virtual currency is available for the following stores:

- App Store (Apple)
- Play Store (Google)
- Stripe
- Web Billing

This guide covers how virtual currency works with subscriptions across these stores, including how and when currency is granted during free trials and product changes.
:::

## Subscription Schedules

When using subscriptions to grant virtual currency through RevenueCat, currency is automatically **refilled based on the subscription’s billing cycle**. For example, a **monthly subscription** will deposit the set amount of currency for a customer **every month**. The deposit occurs when RevenueCat detects a successful initial purchase or renewal.

## Free Trials

Free trials support is coming soon. At the moment purchasing a free trial will grant 0 currencies.

## Product Changes

RevenueCat automatically manages subscription product changes and adjusts virtual currency grants accordingly.
When a customer switches between subscription products (e.g: upgrades or downgrades), RevenueCat calculates the virtual currency grants to reflect the actual amount charged, factoring in any prorated refunds during the transition.

This ensures that:

- Customers receive a fair amount of virtual currency that corresponds to what they paid.
- You avoid overgranting currency when the customer did not have an effective charge.
- Balance adjustments are aligned with the billing behavior of each store.

The exact behavior depends on the platform and the type of product change (e.g: replacement modes for Play Store), but the general principle is consistent across stores.

### App Store

#### Setup Requirements ✅

- All interchangeable subscriptions must be in the same subscription group.
  - This means that if a customer can [upgrade, downgrade, or crossgrade](/subscription-guidance/managing-subscriptions#app-store) between two products, those products must belong to the same subscription group in App Store Connect. Apple only supports transitions (e.g: proration, immediate upgrades, deferred downgrades) within a subscription group.
- Subscriptions in the same group should be configured to grant the same amount of virtual currency.
- Use subscription levels within the group to define upgrade/downgrade relationships.
  - Each subscription in a group should be assigned a level that reflects its relative position (usually based on price or feature tier). This ordering tells Apple, and by extension RevenueCat, which products are upgrades, downgrades, or crossgrades.

#### Product Change Behavior 🔄

RevenueCat adjusts virtual currency grants automatically based on how the App Store handles product changes. Here’s how each scenario is handled:

| Product change                  | When customer is charged for new sub                            | When new sub starts | New currency grant behavior                                                                                         |
| ------------------------------- | --------------------------------------------------------------- | ------------------- | ------------------------------------------------------------------------------------------------------------------- |
| Upgrade                         | Immediately, full price of new sub + prorated refund on old sub | Immediately         | RevenueCat grants currency proportionally, based on the amount the customer is effectively charged after proration. |
| Downgrade                       | At next renewal                                                 | At next renewal     | Defer grant until charge occurs                                                                                     |
| Crossgrade (same duration)      | Immediately                                                     | Immediately         | Same as an upgrade                                                                                                  |
| Crossgrade (different duration) | At next renewal                                                 | At next renewal     | Same as a downgrade                                                                                                 |

#### Tips 💡

- Always verify subscription levels in App Store Connect match your intended upgrade/downgrade flow.
- Test product changes to confirm that upgrades and downgrades behave as expected.
- Correct subscription levels allow RevenueCat to apply currency grants accurately.

### Play Store

RevenueCat adjusts virtual currency grants based on the replacement mode used when changing subscriptions. Each mode affects when the new subscription takes effect, how the customer is charged, and therefore when and how much currency should be granted.

RevenueCat determines when to grant virtual currency based on whether and when a charge occurs for the new subscription. No new currency is granted until the customer is actually charged. This helps ensure that customers receive currency in proportion to what they’ve paid.

#### Product Change Behavior 🔄

RevenueCat adjusts virtual currency grants automatically based on how the Play Store handles product changes. Here’s how each scenario is handled:

| Replacement mode        | When customer is charged for new sub     | When new sub starts  | New currency grant behavior                         |
| ----------------------- | ---------------------------------------- | -------------------- | --------------------------------------------------- |
| `WITHOUT_PRORATION`     | At the end of the current billing cycle  | Immediately          | Defer grant until charge occurs                     |
| `WITH_TIME_PRORATION`   | At delayed billing date (pushed forward) | Immediately          | Defer grant until charge occurs                     |
| `CHARGE_FULL_PRICE`     | Immediately                              | Immediately          | Grant full currency upon charge                     |
| `CHARGE_PRORATED_PRICE` | Immediately (partial)                    | Immediately          | Grant prorated currency based on the partial charge |
| `DEFERRED`              | At the end of current billing cycle      | At next renewal date | Defer grant until new sub starts and charge occurs  |

#### Tips 💡

- Don’t rely solely on default replacement modes. The Play Store defaults to `WITH_TIME_PRORATION` when no replacement mode is specified, which pushes out the billing date without charging the customer immediately. This can lead to confusion if a customer expects more currency right away, but hasn’t actually paid yet.
- Recommended modes when using virtual currencies for subscriptions:
  - Use `CHARGE_FULL_PRICE` or `CHARGE_PRORATED_PRICE` for immediate upgrades. These modes trigger a charge, allowing RevenueCat to grant currency right away.
  - Use `DEFERRED` for downgrades, the new subscription takes effect later, and currency is granted only once the customer is charged.
- These modes help ensure that currency is tied to actual payments, providing a clearer and more consistent customer experience, especially if customers associate a subscription change with receiving more in-app value.

### Stripe

Stripe supports different proration modes combined with optional billing cycle resets when customers change subscriptions, which can result in 6 different proration behaviors.

#### Product Change Behavior 🔄

RevenueCat adjusts virtual currency grants automatically based on how Stripe handles product changes. Here’s how each scenario is handled:

| Proration behavior                          | Billing cycle reset | When customer is charged for new sub     | New currency grant behavior                                                                                                                                                                        |
| ------------------------------------------- | ------------------- | ---------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| No proration (none)                         | Now                 | Immediately, full price                  | The full virtual currency amount is granted immediately                                                                                                                                            |
| No proration (none)                         | Unchanged           | At next renewal date                     | The full virtual currency amount will be granted at the next renewal date                                                                                                                          |
| Immediately proration (always_invoice)      | Now                 | Immediately, full price                  | Grants virtual currency immediately, while also taking into account any credits Stripe grants for unused time left on the old subscription. Customers will receive an adjusted amount of currency. |
| Immediately proration (always_invoice)      | Unchanged           | Immediately, partial price               | Grants virtual currency immediately, while also taking into account any credits Stripe grants for unused time left on the old subscription. Customers will receive an adjusted amount of currency. |
| Proration in next cycle (create_prorations) | Now                 | Immediately                              | Same as immediate proration with billing cycle reset, the adjusted virtual currency amount is granted immediately.                                                                                 |
| Proration in next cycle (create_prorations) | Unchanged           | At the end of the currency billing cycle | Grant prorated currency combined with upcoming renewal, may include an additional full grant at renewal.                                                                                           |

#### Tips 💡

- To ensure virtual currency is granted at appropriate times and in amounts that reflect what customers are actually paying, we recommend the following configurations:
  - **Upgrades**: Use any proration mode with a billing cycle reset to now. This charges the customer immediately for the new subscription and allows RevenueCat to grant virtual currency right away.
  - **Downgrades**: Use either `no proration` or `proration in the next cycle` without a billing cycle reset (unchanged). The new (downgraded) subscription will go into effect at the next renewal date.

### Web Billing

Web Billing currently does not support product changes, so customers cannot upgrade or downgrade subscriptions mid-cycle.

RevenueCat will grant virtual currency for the following scenarios:

- Trial starts (if configured to grant currency)
- Initial purchases
- Renewals

Currency is granted in full based on the configuration amount for the active subscription product.

## Refunds

When a subscription that granted virtual currency is refunded, RevenueCat will:

- Remove a prorated amount of the originally granted currency, based on the refund amount.
- Round up to the nearest whole number (fractional balances are not supported).
- Cap the balance at zero if the removal would result in a negative balance.

:::warning Partial refunds on Google Play
Partial refunds are not reliably detected for Google Play and may not affect the currency balance. Learn more in our [refunds doc](/offerings/virtual-currency/refunds).
:::

If you are also using one-time purchases, refer to our [refunds documentation](/offerings/virtual-currency/refunds) for more details on how those are treated.

## Grace Periods and Billing Recovery

When a customer enters a grace period due to an issue with their payment method (such as an expired credit card), RevenueCat will not deposit any currency until the billing issue is successfully resolved.

- **During grace period**: Virtual currency will not be granted since the payment has not gone through yet.
- **Recovery within grace period**: if the subscription recovers (e.g: the payment is completed) within the grace period, RevenueCat will grant the currency for that billing cycle. The deposit behaves as if the renewal occurred on time.
- **Recovery after grace period ends**: If the subscription failed to recover within the grace period, the subscription is considered expired. When a successful purchase occurs afterwards, the virtual currency schedule resets from that new start date.
