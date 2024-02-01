---
title: Customer History
slug: customer-history
hidden: false
---

The 'Customer History' card shows a timeline of transactions and activity for the selected customer. These can be useful for debugging and triaging support issues by understanding when critical events happened for the customer.

The timeline events are generated from changes to the user's purchase receipt. This is the raw purchase data from Apple/Google presented in a more readable form and enhanced with RevenueCat price estimates. If there's no purchase history present, then the user either never sent RevenueCat a receipt or the receipt is empty.

:::info
If the Customer History is empty, it means we haven't received a purchase receipt for the user. If you think this may be a mistake, check out our [community article](https://community.revenuecat.com/dashboard-tools-52/when-a-purchase-isn-t-showing-up-in-revenuecat-105) on re-syncing a user's purchases.
:::

![](https://files.readme.io/30a3f7f-Screen_Shot_2020-06-01_at_7.32.36_AM.png "Screen Shot 2020-06-01 at 7.32.36 AM.png")

## Event Types

Below is a table with all the event types you can expect in the customer history and a description of what they mean.

| Name                                              | User Description                                                                                            | Webhook Event                   |
| :------------------------------------------------ | :---------------------------------------------------------------------------------------------------------- | :------------------------------ |
| Made a purchase                                   | Purchased a non-renewing product                                                                            | `NON_RENEWING_PURCHASE`         |
| Started a subscription                            | Started a subscription without any free trial period.                                                       | `INITIAL_PURCHASE`              |
| Started a trial                                   | Started a subscription with a $0 introductory price.                                                        | `INITIAL_PURCHASE`              |
| Converted from a trial                            | Entered a paid subscription period after previously starting a trial.                                       | `RENEWAL`                       |
| Renewed                                           | Entered a paid subscription period after previously being in a paid period.                                 | `RENEWAL`                       |
| Changed renewal preference                        | Changed the product identifier of an existing subscription.                                                 | `PRODUCT_CHANGE`                |
| Opted out of renewal                              | Disabled the auto-renew status for an active subscription.                                                  | `CANCELLATION`                  |
| Resubscribed                                      | Re-enabled the auto-renew status for an active subscription after previously cancelling.                    | `UNCANCELLATION`                |
| Had a billing issue                               | Apple / Google received an error when attempting to charge the user's credit card.                          | `BILLING_ISSUE`                 |
| Was issued a refund                               | Apple customer support cancelled and refunded a user's subscription, or a Google subscription was refunded. | `CANCELLATION`                  |
| Cancelled due to not agreeing to a price increase | Did not agree to a price increase.                                                                          | `CANCELLATION`                  |
| Cancelled due to a billing error                  | Apple / Google was not able to charge the user's credit card and their subscription failed to renew.        | `CANCELLATION`                  |
| Cancelled due to unknown reasons                  | Apple cancelled the user's subscription and did not provide a cancellation reason.                          | `CANCELLATION`                  |
| Created a new alias                               | Was aliased with another App User Id.                                                                       | `SUBSCRIBER_ALIAS` (deprecated) |

:::info Missing or incorrect prices
It is possible for prices to be missing or incorrect, especially for apps that have migrated from a different system to RevenueCat. The stores provide very minimal pricing information for developers, so RevenueCat estimates the transaction price based off the data that is available - if you have old products that are no longer available for sale or changed the price of your products before using RevenueCat, you can expect some prices to be missing or incorrect. We do our best to backfill prices over time if more up-to-date information becomes available.
:::

## Event Details

You can click into events in the Customer History to view additional details about the event, including any integrations that may have been triggered as a result of the event.

![](https://files.readme.io/703caac-Screen_Shot_2020-06-01_at_7.46.05_AM.png "Screen Shot 2020-06-01 at 7.46.05 AM.png")

### Event Timestamps and Ordering

There are a couple important timestamps to pay attention to in events: `purchase_at_ms` and `event_timestamp_ms`.

The `purchase_at_ms` field refers to the time when the transaction was purchased. This is how events on the Customer History overview are ordered.

Ex: Billing issues appear to happen after the renewal

The `event_timestamp_ms` field refers to the time that the event was generated, which is when RevenueCat detects changes to a user's purchase history. This does not necessarily coincide with when the action that triggered the event occurred (purchased, cancelled, etc). You should base when events were received on this value, so if there is any confusion on event order, checking `event_timestamp_ms` is recommended.

Ex: Checking the event_timestamp_ms will show that the renewal occurs after the billing issue. This value gets updated after the app stores backdate this in the receipt

## Refunding Purchases

Android purchases can be refunded directly through the RevenueCat dashboard. Granting a refund will immediately expire the subscription and remove any entitlement access. By refunding directly through RevenueCat you can ensure that refunds are accounted for immediately in all charts and integrations.

![](https://files.readme.io/e2cb2fe-Screenshot_2023-06-12_at_15.01.32.png)

In case of subscriptions in trial period, you have the option to cancel the subscription and prevent the user from converting to a paid subscription.

![](https://files.readme.io/07fe246-Screenshot_2023-06-12_at_14.58.30.png)

Apple doesn’t allow developers to grant refunds themselves, only through Apple customer support. However, Apple refunds are tracked with RevenueCat and accounted for in all charts and integrations.

## Next Steps

- [Active Subscriptions Chart](/docs/dashboard-and-metrics/charts/active-subscriptions-chart)
