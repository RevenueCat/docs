---
title: CleverTap
slug: clevertap
excerpt: Integrate in-app subscription events from RevenueCat with CleverTap
hidden: false
---
> 👍 
> 
> The CleverTap integration is available to all users signed up after September '23, the legacy Grow and Pro plans, and Enterprise plans. If you're on a legacy Free or Starter plan and want to access this integration, migrate to our new pricing via your [billing settings](https://app.revenuecat.com/settings/billing).

CleverTap can be a useful integration tool for seeing all events and revenue that occur for your app even if it’s not active for a period of time. You can use CleverTap’s analytics and marketing tools to reach your goal of increasing user engagement and retention.

With our CleverTap integration, you can:

- Create a campaign that triggers when a user completes a certain event; ex. Send a notification with a discount code when they cancel their subscription. 
- Gather metrics on user purchases by tracking events over time.

With accurate and up-to-date subscription data in CleverTap, you'll be set to turbo-charge your user engagement ⚡️

## Integration at a Glance

| Includes Revenue | Supports Negative Revenue |      Sends Sandbox Events     | Includes Subscriber Attributes | Sends Transfer Events |                         Optional Event Types                         |
|:----------------:|:-------------------------:|:-----------------------------:|:------------------------------:|:---------------------:|:---------------------------------------------------------------:|
|         ✅        |             ❌             | Requires ID and Passcode |    ✅    |           ❌           | expiration_event<br>billing_issue_event<br>product_change_event |

# Events

The CleverTap integration tracks the following events:

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
    "6-0": "Uncancellation",
    "6-1": "rc_uncancellation_event",
    "6-2": "A non-expired cancelled subscription has been re-enabled.",
    "6-3": "✅",
    "6-4": "✅",
    "6-5": "✅",
    "6-6": "❌",
    "6-7": "❌",
    "7-0": "Non Subscription Purchase",
    "7-1": "rc_non_subscription_purchase_event",
    "7-2": "A customer has made a purchase that will not auto-renew.",
    "7-3": "✅",
    "7-4": "✅",
    "7-5": "✅",
    "7-6": "✅",
    "7-7": "✅",
    "8-0": "Expiration",
    "8-1": "rc_expiration_event",
    "8-2": "A subscription has expired and access should be removed.  \n  \nIf you have [Platform Server Notifications](https://www.revenuecat.com/docs/server-notifications) configured, this event will occur as soon as we are notified (within seconds to minutes) of the expiration.  \n  \nIf you do not have notifications configured, delays may be approximately 1 hour.",
    "8-3": "✅",
    "8-4": "✅",
    "8-5": "✅",
    "8-6": "✅",
    "8-7": "✅",
    "9-0": "Billing Issues",
    "9-1": "rc_billing_issue_event",
    "9-2": "There has been a problem trying to charge the subscriber. This does not mean the subscription has expired.  \n  \nCan be safely ignored if listening to CANCELLATION event + cancel_reason=BILLING_ERROR.",
    "9-3": "✅",
    "9-4": "✅",
    "9-5": "✅",
    "9-6": "✅",
    "9-7": "❌",
    "10-0": "Product Change",
    "10-1": "rc_product_change_event",
    "10-2": "A subscriber has changed the product of their subscription.  \n  \nThis does not mean the new subscription is in effect immediately. See [Managing Subscriptions](https://www.revenuecat.com/docs/managing-subscriptions) for more details on updates, downgrades, and crossgrades.",
    "10-3": "✅",
    "10-4": "✅",
    "10-5": "❌",
    "10-6": "✅",
    "10-7": "❌"
  },
  "cols": 8,
  "rows": 11,
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

For events that have revenue, such as trial conversions and renewals, RevenueCat will automatically record this amount along with the event in CleverTap.

# Setup

## 1. Send CleverTap Identity to RevenueCat

The CleverTap integration can send the CleverTap ID to CleverTap as the user identity. To do that, you will need to update the following [Subscriber Attribute](doc:subscriber-attributes) for the user.

| Key            | Description                                                                                                              | Required |
| :------------- | :----------------------------------------------------------------------------------------------------------------------- | :------- |
| `$clevertapId` | The [CleverTap ID](https://developer.clevertap.com/docs/concepts-user-profiles#section-identifying-a-user) for the user. | ✅        |

This property can be set manually, like any other [Subscriber Attribute](doc:subscriber-attributes). If you do not set this property, the [App User ID](doc:user-ids) will be sent as the user identity to CleverTap.

[block:file]
[
  {
    "language": "swift",
    "name": "",
    "file": "code_blocks/🔌 Integrations & Events/third-party-integrations/clevertap_1.swift"
  },
  {
    "language": "objectivec",
    "name": "Objective-C",
    "file": "code_blocks/🔌 Integrations & Events/third-party-integrations/clevertap_2.m"
  },
  {
    "language": "kotlin",
    "name": "",
    "file": "code_blocks/🔌 Integrations & Events/third-party-integrations/clevertap_3.kt"
  },
  {
    "language": "java",
    "name": "Java",
    "file": "code_blocks/🔌 Integrations & Events/third-party-integrations/clevertap_4.java"
  }
]
[/block]



## 2. Send RevenueCat Events to CleverTap

After you've set up the _Purchases SDK_ and CleverTap SDK to have the same user identity, you can "turn on" the integration and configure the event names from the RevenueCat dashboard.

1. Navigate to your project in the RevenueCat dashboard and find the _Integrations_ card in the left menu. Select **+ New** 

![](https://files.readme.io/61990eb-app.revenuecat.com_projects_85ff18c7_collaborators_1.png)

2. Choose **CleverTap** from the Integrations menu
3. Add your [CleverTap Account ID and Passcode](https://developer.clevertap.com/docs/api-quickstart-guide).
4. If you want to test in sandbox, also add your Sandbox Account ID and Passcode from your testing account.
5. Enter the event names that RevenueCat will send or choose the default event names
6. Select whether you want sales reported as gross revenue (before app store commission), or after store commission and/or estimated taxes.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/444dd1c-clevertap_screesnshot.png",
        "clevertap screesnshot.png",
        1710
      ],
      "align": "center",
      "caption": "CleverTap configuration page"
    }
  ]
}
[/block]

> 📘 
> 
> By default, RevenueCat sends data through CleverTap's EU data center. For CleverTap customers who have a regional data center configured, you can change your region in the dropdown selector under 'CleverTap Region'.

# Sample Events

Below are sample JSONs that are delivered to CleverTap for most event types.

[block:file]
[
  {
    "language": "json",
    "name": "Initial Purchase",
    "file": "code_blocks/🔌 Integrations & Events/third-party-integrations/clevertap_5.json"
  },
  {
    "language": "json",
    "name": "Trial Started",
    "file": "code_blocks/🔌 Integrations & Events/third-party-integrations/clevertap_6.json"
  },
  {
    "language": "json",
    "name": "Trial Converted",
    "file": "code_blocks/🔌 Integrations & Events/third-party-integrations/clevertap_7.json"
  },
  {
    "language": "json",
    "name": "Trial Cancelled",
    "file": "code_blocks/🔌 Integrations & Events/third-party-integrations/clevertap_8.json"
  },
  {
    "language": "json",
    "name": "Renewal",
    "file": "code_blocks/🔌 Integrations & Events/third-party-integrations/clevertap_9.json"
  },
  {
    "language": "json",
    "name": "Cancellation",
    "file": "code_blocks/🔌 Integrations & Events/third-party-integrations/clevertap_10.json"
  }
]
[/block]



[block:file]
[
  {
    "language": "json",
    "name": "Uncancellation",
    "file": "code_blocks/🔌 Integrations & Events/third-party-integrations/clevertap_11.json"
  },
  {
    "language": "json",
    "name": "Non Subscription Purchase",
    "file": "code_blocks/🔌 Integrations & Events/third-party-integrations/clevertap_12.json"
  },
  {
    "language": "json",
    "name": "Expiration",
    "file": "code_blocks/🔌 Integrations & Events/third-party-integrations/clevertap_13.json"
  },
  {
    "language": "json",
    "name": "Billing Issue",
    "file": "code_blocks/🔌 Integrations & Events/third-party-integrations/clevertap_14.json"
  },
  {
    "language": "json",
    "name": "Product Change",
    "file": "code_blocks/🔌 Integrations & Events/third-party-integrations/clevertap_15.json"
  }
]
[/block]
