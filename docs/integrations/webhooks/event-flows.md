---
title: Common Webhook Flows
slug: event-flows
excerpt: How webhooks are sent from RevenueCat
hidden: false
---

You’ll receive many [Webhooks](/integrations/webhooks) throughout a customer’s journey in your app. We’ve compiled a list of several common event flows to illustrate the events you might receive in some common scenarios.

## Subscription Lifecycle

### Initial Purchase Flow

This flow occurs each time a customer purchases a product for the first time. A single customer may go through this flow multiple times if they purchase multiple products.

![initial purchase flow](/docs_images/integrations/event-flows/initial-purchase.png)

### Cancellation Flow

When a customer cancels their subscription, a `CANCELLATION` webhook is sent. At the end of the billing cycle, an `EXPIRATION` webhook is sent and entitlements are revoked.

![cancellation flow](/docs_images/integrations/event-flows/cancellation.png)

### Uncancellation Flow

Uncancellations occur when a customer cancels their subscription and then resubscribes before the subscription’s expiration occurs. In this scenario, the customer never loses entitlements.

![uncancellation flow](/docs_images/integrations/event-flows/uncancellation.png)

### Resubscribe Flow

A customer can resubscribe to a subscription if they resume a subscription after it has expired. On iOS, the webhook event that is triggered depends on the subscription’s platform and subscription group.

For resubscriptions on Google Play, Google may classify the transaction as a renewal rather than an initial purchase. While we typically mark a resubscription as an `INITIAL_PURCHASE`, there are cases where it may be marked as a `RENEWAL` based on the information provided by Google. This discrepancy is due to Google's timeframe and how they consider the transaction to either be marked as a renewal or an initial purchase.

This can sometimes cause the customer history to appear out of order because we backdate the renewal to the effective renewal date on the customer dashboard however, the actual event will show the original time of the renewal in the `event_timestamp_ms` field.

- `RENEWAL`: If the resubscription occurs during the grace period before expiration.
- `INITIAL_PURCHASE`: If the resubscription occurs after the previous subscription has expired.

![resubscribe flow](/docs_images/integrations/event-flows/resubscribe-flow.png)

### Subscription Paused Flow (Android Only)

Android customers can pause their subscription, allowing them to halt subscription billing. Their entitlement is revoked at the end of the subscription term. If the customer unpauses their subscription, they regain entitlements and the subscription’s billing cycle resumes. If you’d like to disable pausing for your subscriptions, you can do so through the [Google Play Store Console.](https://developer.android.com/google/play/billing/subscriptions#pause)

![subscription paused flow](/docs_images/integrations/event-flows/subscription-pause-flow.png)

### Billing Issue Flow

If a customer with an active subscription encounters a billing issue, RevenueCat will immediately dispatch a `BILLING_ISSUE` event and a `CANCELLATION` event with a `cancel_reason` of `BILLING_ERROR`.

If you do not have grace periods enabled, you’ll immediately receive an `EXPIRATION` webhook and the customer’s entitlements will be revoked.

If you do have grace periods enabled, the customer will retain entitlements as the app store retries the customer’s billing method. At the end of the grace period, if billing has not been successful, an `EXPIRATION` event will be sent and entitlements will be revoked. If billing succeeds at any point during the grace period, you’ll receive a `RENEWAL` event and entitlements won’t be revoked. (This `RENEWAL` event may show up before the billing issue in the Customer History timeline. Be sure to check the timestamps on the event pages.)

It’s important to note that the `BILLING_ISSUE`, `CANCELLATION`, and `EXPIRATION` (if no grace period is involved) webhooks are dispatched in order at the same time, so it is unlikely but possible to receive these events in a different order than described here due to network irregularities.

![billing issue flow](/docs_images/integrations/event-flows/billing-issue.png)

### Subscription Extended Flow

If a subscription gets extended, when its expiration changes from a future date to a greater future date, RevenueCat will immediately dispatch a `SUBSCRIPTION_EXTENDED` event.

This event is fired when a Apple App Store or Google Play Store subscription is extended through the store's API. On the Google Play Store, this event can also sometimes fire when Google defers charging for a renewal by less than 24 hours (for unknown reasons). In this case, you will receive a `SUBSCRIPTION_EXTENDED` webhook, followed by either a `RENEWAL` or `BILLING_ISSUE` webhook within the next 24 hours.

![subscription extended flow](/docs_images/integrations/event-flows/subscription-extended.png)

## Trial Flows

### Trial Flow (Successful Conversion)

When a user initially signs up for a subscription with a trial, an `INITIAL_PURCHASE` webhook is sent with a `period_type` of `TRIAL`. If the trial period for a subscription lapses without the customer canceling the subscription, the trial converts into an active subscription. At this point, a `RENEWAL` event is dispatched and the user is billed for the subscription for the first time.

![successful conversion flow](/docs_images/integrations/event-flows/successful-conversion.png)

### Trial Flow (Unsuccessful Conversion)

When a user initially signs up for a subscription with a trial, an `INITIAL_PURCHASE` webhook is dispatched. If the customer cancels their subscription at any point during the trial period, a `CANCELLATION` event is sent, but the user will retain entitlement access for the remainder of the trial’s duration. Once the trial duration elapses, an `EXPIRATION` event will be sent and the customer's entitlements will be revoked.

If a user cancels their subscription and the trial expires, but they sign up for the subscription at a later date, this will be considered a trial conversion and a `RENEWAL` event will be dispatched.

Note: Apple requires customers to cancel within 24 hours of the trial’s expiration. If a user cancels less than 24 hours before the trial expires, you may unexpectedly receive a `CANCELLATION` event followed by a `RENEWAL` event.

![unsuccessful conversion flow](/docs_images/integrations/event-flows/unsuccessful-conversion.png)

## Product Changes

### Immediate Product Change

In the case of an immediate product change, both a `PRODUCT_CHANGE` and `RENEWAL` event will be dispatched and the customer will immediately have access to the new entitlements. Depending on the store and the proration setting, the customer might be charged the full or prorated amount for the new product, and/or be refunded a prorated amount for the remainder of the lower tier subscription’s term, and/or the period for the new product might have a prorated duration.

Immediate changes occur:

- For upgrades on the Apple App Store (new product is in a higher tier of the same subscription group)
- For crossgrades of the same term length on the Apple App Store (new product is in the same tier of the same subscription group)
- On the Google Play Store, for all proration modes except `DEFERRED` (ie. all proration modes starting with `IMMEDIATE`)
- For immediate product changes in Stripe. Please note: The `RENEWAL` event may show the same `purchased_at_ms` as the original subscription (ie. t₀), because that is how Stripe represents the status of the subscription after the product change.

![immediate product change flow](/docs_images/integrations/event-flows/product-change-immediate.png)

### Product Change at Period End

In the case of a product change at period end, a `PRODUCT_CHANGE` event will immediately be sent informing of the upcoming product change. The customer will retain their entitlement based on the original product. When the customer encounters their next renewal, a `RENEWAL` event will be dispatched, the user will be billed at the new product's price, and the user’s entitlements will be replaced by the entitlements from the new product.

Changes at period end occur:

- For downgrades on the Apple App Store (new product is in a lower tier of the same subscription group)
- For crossgrades of a different term length on the Apple App Store (new product is in the same tier of the same subscription group)
- On the Google Play Store, for the proration mode `DEFERRED`
- For scheduled product changes in Stripe

![product change at end of period flow](/docs_images/integrations/event-flows/product-change-period-end.png)

## Other

### Transfer Flow

If user 1 logs in to your app, makes a purchase and logs out, and then user 2 logs in on the same device with the same underlying App/Play Store account and restores their purchases, you’ll receive a `TRANSFER `event and the entitlements will be removed from user 1 and added to user 2. This behavior only occurs if your project’s restore behavior is set to transfer.

![transfer flow](/docs_images/integrations/event-flows/transfer.png)
