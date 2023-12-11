---
title: Common Webhook Flows
slug: event-flows
excerpt: How webhooks are sent from RevenueCat
hidden: false
---
You’ll receive many [Webhooks](doc:webhooks) throughout a subscriber’s journey in your app. We’ve compiled a list of several common event flows to illustrate the events you might receive in some common scenarios.

# Subscription Lifecycle

## Initial Purchase Flow

This flow occurs each time a subscriber purchases a product for the first time. A single subscriber may go through this flow multiple times if they purchase multiple products.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/df3afa4-initial-purchase.png",
        null,
        "initial purchase flow"
      ],
      "align": "center",
      "sizing": "500px"
    }
  ]
}
[/block]



## Cancellation Flow

When a subscriber cancels their subscription, a `CANCELLATION` webhook is sent. At the end of the billing cycle, an `EXPIRATION` webhook is sent and entitlements are revoked.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/610bed1-cancellation.png",
        null,
        "cancellation flow"
      ],
      "align": "center",
      "sizing": "500px"
    }
  ]
}
[/block]



## Uncancellation Flow

Uncancellations occur when a subscriber cancels their subscription and then resubscribes before the subscription’s expiration occurs. In this scenario, the subscriber never loses entitlements.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/867ad7f-uncancellation.png",
        null,
        "uncancellation flow"
      ],
      "align": "center",
      "sizing": "500px"
    }
  ]
}
[/block]



## Resubscribe Flow

A subscriber can resubscribe to a subscription if they resume a subscription after it has expired. The webhook event that is triggered depends on the subscription’s platform and subscription group.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/fd75ee9-resubscribe.png",
        null,
        "resubscribe flow"
      ],
      "align": "center",
      "sizing": "500px"
    }
  ]
}
[/block]



## Subscription Paused Flow (Android Only)

Android subscribers can pause their subscription, allowing them to halt subscription billing. Their entitlement is revoked at the end of the subscription term. If the subscriber unpauses their subscription, they regain entitlements and the subscription’s billing cycle resumes. If you’d like to disable pausing for your subscriptions, you can do so through the [Google Play Store Console.](https://developer.android.com/google/play/billing/subscriptions#pause)

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/0900f59-pause.png",
        null,
        "subscription paused flow"
      ],
      "align": "center",
      "sizing": "500px"
    }
  ]
}
[/block]



## Billing Issue Flow

If a subscriber with an active subscription encounters a billing issue, RevenueCat will immediately dispatch a `BILLING_ISSUE` event and a `CANCELLATION` event with a `cancel_reason` of `BILLING_ERROR`.

If you do not have grace periods enabled, you’ll immediately receive an `EXPIRATION` webhook and the subscriber’s entitlements will be revoked.

If you do have grace periods enabled, the subscriber will retain entitlements as the app store retries the subscriber’s billing method. At the end of the grace period, if billing has not been successful, an `EXPIRATION` event will be sent and entitlements will be revoked. If billing succeeds at any point during the grace period, you’ll receive a `RENEWAL` event and entitlements won’t be revoked. (This `RENEWAL` event may show up before the billing issue in the Customer History timeline. Be sure to check the timestamps on the event pages.)

It’s important to note that the `BILLING_ISSUE`, `CANCELLATION`, and `EXPIRATION` (if no grace period is involved) webhooks are dispatched in order at the same time, so it is unlikely but possible to receive these events in a different order than described here due to network irregularities.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/5838053-billing-issue.png",
        null,
        "billing issue flow"
      ],
      "align": "center",
      "sizing": "500px"
    }
  ]
}
[/block]



## Subscription Extended Flow

If a subscription gets extended, when its expiration changes from a future date to a greater future date, RevenueCat will immediately dispatch a `SUBSCRIPTION_EXTENDED` event.

This event is fired when a Apple App Store or Google Play Store subscription is extended through the store's API. On the Google Play Store, this event can also sometimes fire when Google defers charging for a renewal by less than 24 hours (for unknown reasons). In this case, you will receive a `SUBSCRIPTION_EXTENDED` webhook, followed by either a `RENEWAL` or `BILLING_ISSUE` webhook within the next 24 hours.

[block:image]
{
  "images": [
    {
      "image": [
        "https://user-images.githubusercontent.com/2571283/275552420-88fa2dfa-3dd5-49e7-a6e0-9391e25453a2.png",
        null,
        "subscription extended flow"
      ],
      "align": "center",
      "sizing": "500px"
    }
  ]
}
[/block]



# Trial Flows

## Trial Flow (Successful Conversion)

When a user initially signs up for a subscription with a trial, an `INITIAL_PURCHASE` webhook is sent with a `period_type` of `TRIAL`. If the trial period for a subscription lapses without the subscriber canceling the subscription, the trial converts into an active subscription. At this point, a `RENEWAL` event is dispatched and the user is billed for the subscription for the first time.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/6a5edb1-successful-conversion.png",
        null,
        "successful conversion flow"
      ],
      "align": "center",
      "sizing": "500px"
    }
  ]
}
[/block]



## Trial Flow (Unsuccessful Conversion)

When a user initially signs up for a subscription with a trial, an `INITIAL_PURCHASE` webhook is dispatched. If the subscriber cancels their subscription at any point during the trial period, a `CANCELLATION` event is sent, but the user will retain entitlement access for the remainder of the trial’s duration. Once the trial duration elapses, an `EXPIRATION` event will be sent and the subscriber's entitlements will be revoked.

Note: Apple requires subscribers to cancel within 24 hours of the trial’s expiration. If a user cancels less than 24 hours before the trial expires, you may unexpectedly receive a `CANCELLATION` event followed by a `RENEWAL` event.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/3458b49-unsuccessful-conversion.png",
        null,
        "unsuccessful conversion flow"
      ],
      "align": "center",
      "sizing": "500px"
    }
  ]
}
[/block]



# Product Changes

## Product Upgrade Flow

If a subscriber upgrades to a higher tier subscription, both a `PRODUCT_CHANGE` and `RENEWAL` event will be dispatched and the subscriber will immediately have access to the new entitlements. The subscriber will then be refunded a prorated amount for the remainder of the lower tier subscription’s term.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/64d9f5b-upgrade.png",
        null,
        "upgrade flow"
      ],
      "align": "center",
      "sizing": "500px"
    }
  ]
}
[/block]



## Product Downgrade Flow

If a subscriber downgrades from a higher tier product to a lower tier product, a `PRODUCT_CHANGE` event will immediately be sent, and the user will retain their higher tier entitlements. When the subscriber encounters their next renewal, a `RENEWAL` event will be dispatched, the user will be billed at the lower product tier’s price, and the user’s entitlements will be replaced by the entitlements from the lower tier product.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/ffd1487-downgrade.png",
        null,
        "downgrade flow"
      ],
      "align": "center",
      "sizing": "500px"
    }
  ]
}
[/block]



## Crossgrade Flow, Same Term Length

If a subscriber crossgrades from one product to another product on the same tier and with the same subscription period, you’ll immediately receive both a `PRODUCT_CHANGE` and a `RENEWAL` event. The subscriber will receive the entitlements from the second product, will be billed for the second product, and will receive a prorated refund for the remainder of the first product’s billing period.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/598a7f4-crossgrade-same-term.png",
        null,
        "crossgrade same term flow"
      ],
      "align": "center",
      "sizing": "500px"
    }
  ]
}
[/block]



## Crossgrade Flow, Different Term Length

If a subscriber crossgrades from one product to another product on the same tier and with different subscription periods, you’ll immediately receive a `PRODUCT_CHANGE` event. At the end of the first subscription’s billing period, you’ll receive a `RENEWAL` event and the user will be switched to the second product.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/d924a85-crossgrade-different-term.png",
        null,
        "crossgrade different term flow"
      ],
      "align": "center",
      "sizing": "500px"
    }
  ]
}
[/block]



# Other

## Transfer Flow

If user 1 logs in to your app, makes a purchase and logs out, and then user 2 logs in on the same device with the same underlying App/Play Store account and restores their purchases, you’ll receive a `TRANSFER `event and the entitlements will be removed from user 1 and added to user 2. This behavior only occurs if your project’s restore behavior is set to transfer.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/2482a1a-transfer.png",
        null,
        "transfer flow"
      ],
      "align": "center",
      "sizing": "500px"
    }
  ]
}
[/block]
