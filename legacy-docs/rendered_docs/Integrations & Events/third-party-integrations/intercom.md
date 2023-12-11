---
title: Intercom
slug: intercom
excerpt: Send in-app subscription events from RevenueCat to Intercom
hidden: false
categorySlug: integrations
order: 6
parentDoc: 649983b4c31b2e000a3c18f1
---
> 👍 
> 
> The Intercom integration is available to all users signed up after September '23, the legacy Grow and Pro plans, and Enterprise plans. If you're on a legacy Free or Starter plan and want to access this integration, migrate to our new pricing via your [billing settings](https://app.revenuecat.com/settings/billing).

Intercom can be a helpful integration tool in understanding what stage a customer is in and reacting accordingly. You can use Intercom’s comprehensive communication and engagement system to retain customers.

With our Intercom integration, you can:

- Create Intercom filters for users that canceled free trials.
- Allow customer support to communicate with loyal users with access to all the information they need to solve their problem or even grant them a promotional subscription.
- Send an onboarding campaign to a user in a free trial

With accurate and up-to-date subscription data in Intercom, you'll be set to turbocharge your customer support ⚡️

## Integration at a Glance
| Includes Revenue | Supports Negative Revenue |       Sends Sandbox Events       | Includes Subscriber Attributes | Sends Transfer Events |                                         Optional Event Types                                        |
|:----------------:|:-------------------------:|:--------------------------------:|:------------------------------:|:---------------------:|:----------------------------------------------------------------------------------------------:|
|         ❌        |             ❌             | Toggle on in Settings |                ❌               |           ❌           | non_subscription_purchase_event<br>expiration_event<br>billing_issue_event<br>product_change_event |

# Events

The Intercom integration tracks the following events:

[block:parameters]
{
  "data": {
    "h-0": "Event",
    "h-1": "Default Event Name",
    "h-2": "Description",
    "h-3": "App Store",
    "h-4": "Play Store",
    "h-5": "Amazon",
    "h-6": "Stripe",
    "h-7": "Promo",
    "0-0": "Initial Purchase",
    "0-1": "rc_initial_purchase_event",
    "0-2": "A new subscription has been purchased.",
    "0-3": "✅",
    "0-4": "✅",
    "0-5": "✅",
    "0-6": "✅",
    "0-7": "❌",
    "1-0": "Trial Started",
    "1-1": "rc_trial_started_event",
    "1-2": "The start of an auto-renewing subscription product free trial.",
    "1-3": "✅",
    "1-4": "✅",
    "1-5": "✅",
    "1-6": "✅",
    "1-7": "❌",
    "2-0": "Trial Converted",
    "2-1": "rc_trial_converted_event",
    "2-2": "When an auto-renewing subscription product converts from a free trial to normal paid period.",
    "2-3": "✅",
    "2-4": "✅",
    "2-5": "✅",
    "2-6": "✅",
    "2-7": "❌",
    "3-0": "Trial Cancelled",
    "3-1": "rc_trial_cancelled_event",
    "3-2": "When a user turns off renewals for an auto-renewing subscription product during a free trial period.",
    "3-3": "✅",
    "3-4": "✅",
    "3-5": "✅",
    "3-6": "✅",
    "3-7": "❌",
    "4-0": "Renewal",
    "4-1": "rc_renewal_event",
    "4-2": "An existing subscription has been renewed or a lapsed user has resubscribed.",
    "4-3": "✅",
    "4-4": "✅",
    "4-5": "✅",
    "4-6": "✅",
    "4-7": "❌",
    "5-0": "Cancellation",
    "5-1": "rc_cancellation_event",
    "5-2": "A subscription or non-renewing purchase has been cancelled. See [cancellation reasons](https://www.revenuecat.com/docs/event-types-and-fields#cancellation-and-expiration-reasons) for more details.",
    "5-3": "✅",
    "5-4": "✅",
    "5-5": "✅",
    "5-6": "✅",
    "5-7": "✅",
    "6-0": "Non Subscription Purchase",
    "6-1": "rc_non_subscription_purchase_event",
    "6-2": "A customer has made a purchase that will not auto-renew.",
    "6-3": "✅",
    "6-4": "✅",
    "6-5": "✅",
    "6-6": "✅",
    "6-7": "✅",
    "7-0": "Expiration",
    "7-1": "rc_expiration_event",
    "7-2": "A subscription has expired and access should be removed.  \n  \nIf you have [Platform Server Notifications](https://www.revenuecat.com/docs/server-notifications) configured, this event will occur as soon as we are notified (within seconds to minutes) of the expiration.  \n  \nIf you do not have notifications configured, delays may be approximately 1 hour.",
    "7-3": "✅",
    "7-4": "✅",
    "7-5": "✅",
    "7-6": "✅",
    "7-7": "✅",
    "8-0": "Billing Issue",
    "8-1": "rc_billing_issue_event",
    "8-2": "There has been a problem trying to charge the subscriber. This does not mean the subscription has expired.  \n  \nCan be safely ignored if listening to CANCELLATION event + cancel_reason=BILLING_ERROR.",
    "8-3": "✅",
    "8-4": "✅",
    "8-5": "✅",
    "8-6": "✅",
    "8-7": "❌",
    "9-0": "Product Change",
    "9-1": "rc_product_change_event",
    "9-2": "rc_product_change_event\tA subscriber has changed the product of their subscription.  \n  \nThis does not mean the new subscription is in effect immediately. See [Managing Subscriptions](https://www.revenuecat.com/docs/managing-subscriptions) for more details on updates, downgrades, and crossgrades.",
    "9-3": "✅",
    "9-4": "✅",
    "9-5": "❌",
    "9-6": "✅",
    "9-7": "❌"
  },
  "cols": 8,
  "rows": 10,
  "align": [
    "left",
    "left",
    "left",
    "left",
    "left",
    "left",
    "left",
    "left"
  ]
}
[/block]

# Setup

## 1. Connect with Intercom

1. Navigate to your project in the RevenueCat dashboard and find the _Integrations_ card in the left menu. Select **+ New** 

![](https://files.readme.io/29eadd0-app.revenuecat.com_projects_85ff18c7_collaborators_1.png)

2. Choose **Intercom** from the Integrations menu
3. Click the **Connect with Intercom** button in your project settings.

![](https://files.readme.io/25cc36c-Screen_Shot_2019-01-25_at_1.46.51_PM.png "Screen Shot 2019-01-25 at 1.46.51 PM.png")

## 2. Set Event Names

Once your account is connected, you can configure the event names that we'll send to Intercom. If you leave any field blank, we'll just use our default names.

![](https://files.readme.io/1046464-intercom.png "intercom.png")

> 👍 You're all set!
> 
> That's all there is to it! You'll now be seeing subscription events in Intercom. Woohoo!

## Sample Events

Below are sample JSONs that are delivered to Intercom for each event.

```json Initial Purchase
{
  "product_identifier": "one_week_premium",
  "app_id": "app1234567890",
  "user_payload": {
    "user_id": "$RCAnonymousID:87c6049c58069238dce29853916d624c",
    "custom_attributes": {
      "latest_store": "PLAY_STORE",
      "latest_entitlement": "pro",
      "expires_at": 1663252169
    }
  },
  "event_payload": {
    "event_name": "rc_initial_purchase_event",
    "user_id": "$RCAnonymousID:87c6049c58069238dce29853916d624c",
    "created_at": 1662992969,
    "metadata": {
      "product_identifier": "one_week_premium",
      "entitlement": "pro",
      "store": "PLAY_STORE",
      "expires_at": 1663252169
    }
  }
}
```
```json Trial Started
{
  "app_id": "app1234567890",
  "event_payload": {
    "created_at": 1662992969,
    "event_name": "rc_trial_started_event",
    "metadata": {
      "app_id": "app1234567890",
      "entitlement": "premium",
      "environment": "production",
      "expires_at": 1663252169,
      "product_identifier": "one_week_premium",
      "store": "APP_STORE"
    },
    "user_id": "$RCAnonymousID:87c6049c58069238dce29853916d624c",
  },
  "product_identifier": "one_week_premium",
  "user_payload": {
    "custom_attributes": {
      "expires_at": 1663252169,
      "latest_entitlement": "premium",
      "latest_store": "APP_STORE"
    },
    "user_id": "$RCAnonymousID:87c6049c58069238dce29853916d624c",
  }
}
```
```json Trial Converted
{
  "app_id": "app1234567890",
  "event_payload": {
    "created_at": 1663021598,
    "event_name": "rc_trial_converted_event",
    "metadata": {
      "app_id": "app1234567890",
      "entitlement": "premium",
      "environment": "production",
      "expires_at": 1663626398,
      "product_identifier": "one_week_premium",
      "store": "APP_STORE"
    },
    "user_id": "$RCAnonymousID:87c6049c58069238dce29853916d624c",
  },
  "product_identifier": "one_week_premium",
  "user_payload": {
    "custom_attributes": {
      "expires_at": 1663626398,
      "latest_entitlement": "premium",
      "latest_store": "APP_STORE"
    },
    "user_id": "$RCAnonymousID:87c6049c58069238dce29853916d624c",
  }
}
```
```json Trial Cancelled
{
  "app_id": "app1234567890",
  "event_payload": {
    "created_at": 1662993211,
    "event_name": "rc_trial_cancelled_event",
    "metadata": {
      "app_id": "app1234567890",
      "cancellation_reason": "UNSUBSCRIBE",
      "entitlement": "premium",
      "environment": "production",
      "expires_at": 1663252169,
      "product_identifier": "premium_sub",
      "store": "APP_STORE"
    },
    "user_id": "$RCAnonymousID:87c6049c58069238dce29853916d624c",
  },
  "product_identifier": "premium_sub",
  "user_payload": {
    "custom_attributes": {
      "expires_at": 1663252169,
      "latest_entitlement": "premium",
      "latest_store": "APP_STORE"
    },
    "user_id": "$RCAnonymousID:87c6049c58069238dce29853916d624c",
  }
}
```
```json Renewal
{
  "app_id": "app1234567890",
  "event_payload": {
    "created_at": 1663021649,
    "event_name": "rc_renewal_event",
    "metadata": {
      "app_id": "app1234567890",
      "entitlement": "premium",
      "environment": "production",
      "expires_at": 1663626449,
      "product_identifier": "one_week_premium",
      "store": "APP_STORE"
    },
    "user_id": "$RCAnonymousID:87c6049c58069238dce29853916d624c",
  },
  "product_identifier": "one_week_premium",
  "user_payload": {
    "custom_attributes": {
      "expires_at": 1663626449,
      "latest_entitlement": "premium",
      "latest_store": "APP_STORE"
    },
    "user_id": "$RCAnonymousID:87c6049c58069238dce29853916d624c",
  }
}
```
```json Cancellation
{
  "app_id": "app1234567890",
  "event_payload": {
    "created_at": 1662993557,
    "event_name": "rc_cancellation_event",
    "metadata": {
      "app_id": "app1234567890",
      "cancellation_reason": "UNSUBSCRIBE",
      "entitlement": "premium",
      "environment": "production",
      "expires_at": 1663529651,
      "product_identifier": "one_week_premium",
      "store": "APP_STORE"
    },
    "user_id": "$RCAnonymousID:87c6049c58069238dce29853916d624c",
  },
  "product_identifier": "one_week_premium",
  "user_payload": {
    "custom_attributes": {
      "expires_at": 1663529651,
      "latest_entitlement": "premium",
      "latest_store": "APP_STORE"
    },
    "user_id": "$RCAnonymousID:87c6049c58069238dce29853916d624c",
  }
}
```
```json Non Subscription Purchase
{
  "product_identifier": "100_tokens",
  "app_id": "app1234567890",
  "user_payload": {
    "user_id": "$RCAnonymousID:87c6049c58069238dce29853916d624c",
    "custom_attributes": {
      "latest_store": "PLAY_STORE",
      "latest_entitlement": null,
      "expires_at": null
    }
  },
  "event_payload": {
    "event_name": "rc_non_subscription_purchase_event",
    "user_id": "$RCAnonymousID:87c6049c58069238dce29853916d624c",
    "created_at": 1607569472,
    "metadata": {
      "product_identifier": "100_tokens",
      "entitlement": null,
      "store": "PLAY_STORE",
      "expires_at": null,
      "environment": "production"
    }
  }
}
```
```json Expiration
{
  "product_identifier": "one_month_pro",
  "app_id": "app1234567890",
  "user_payload": {
    "user_id": "$RCAnonymousID:87c6049c58069238dce29853916d624c",
    "custom_attributes": {
      "latest_store": "APP_STORE",
      "latest_entitlement": "pro",
      "expires_at": 1652444925
    }
  },
  "event_payload": {
    "event_name": "rc_expiration_event",
    "user_id": "$RCAnonymousID:87c6049c58069238dce29853916d624c",
    "created_at": 1652444925,
    "metadata": {
      "product_identifier": "one_month_pro",
      "entitlement": "pro",
      "store": "APP_STORE",
      "expires_at": 1652444925,
      "environment": "production",
      "expiration_reason": "UNSUBSCRIBE"
    }
  }
}
```
