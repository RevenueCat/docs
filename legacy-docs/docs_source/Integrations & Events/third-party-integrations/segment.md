---
title: Segment
slug: segment
excerpt: Integrate in-app subscription events from RevenueCat with Segment
hidden: false
---
> 👍 
> 
> The Segment integration is available to all users signed up after September '23, the legacy Grow and Pro plans, and Enterprise plans. If you're on a legacy Free or Starter plan and want to access this integration, migrate to our new pricing via your [billing settings](https://app.revenuecat.com/settings/billing).

Segment can be a useful integration tool for seeing all events and revenue that occur for your app even if it’s not active for a period of time. You can use Segment to collect data on customer events to create a single view customer portfolio using an API.

With our Segment integration, you can:

- Create an onboarding flow for users who have subscribed but have not yet engaged with the tutorial or first steps of your product.
- Send personalized messages to users who have free trials that are about to expire.

With accurate and up-to-date subscription data in Segment, you'll be set to turbocharge your user engagement ⚡️

## Integration at a Glance
| Includes Revenue | Supports Negative Revenue |  Sends Sandbox Events | Includes Subscriber Attributes | Sends Transfer Events |                                                                   Optional Event Types                                                                   |
|:----------------:|:-------------------------:|:---------------------:|:------------------------------:|:---------------------:|:---------------------------------------------------------------------------------------------------------------------------------------------------:|
|         ✅        |             ✅             | Toggle on in Settings |                ✅               |           ❌           | non_subscription_purchase_event<br>uncancellation_event<br>subscription_paused_event<br>expiration_event<br>billing_issue_event<br>product_change_event |

# Events

The Segment integration tracks the following events:

[block:parameters]
{
  "data": {
    "h-0": "Event Type",
    "h-1": "Default Event Name",
    "h-2": "Description",
    "h-3": "App Store",
    "h-4": "Play Store",
    "h-5": "Amazon",
    "h-6": "Stripe",
    "h-7": "Promo",
    "0-0": "Initial Purchase",
    "0-1": "`rc_initial_purchase_event`",
    "0-2": "A new subscription has been purchased.",
    "0-3": "✅",
    "0-4": "✅",
    "0-5": "✅",
    "0-6": "✅",
    "0-7": "❌",
    "1-0": "Trial Started",
    "1-1": "`rc_trial_started_event`",
    "1-2": "The start of an auto-renewing subscription product free trial.",
    "1-3": "✅",
    "1-4": "✅",
    "1-5": "✅",
    "1-6": "✅",
    "1-7": "❌",
    "2-0": "Trial Converted",
    "2-1": "`rc_trial_converted_event`",
    "2-2": "When an auto-renewing subscription product converts from a free trial to normal paid period.",
    "2-3": "✅",
    "2-4": "✅",
    "2-5": "✅",
    "2-6": "✅",
    "2-7": "❌",
    "3-0": "Trial Cancelled",
    "3-1": "`rc_trial_cancelled_event`",
    "3-2": "When a user turns off renewals for an auto-renewing subscription product during a free trial period.",
    "3-3": "✅",
    "3-4": "✅",
    "3-5": "✅",
    "3-6": "✅",
    "3-7": "❌",
    "4-0": "Renewal",
    "4-1": "`rc_renewal_event`",
    "4-2": "An existing subscription has been renewed or a lapsed user has resubscribed.",
    "4-3": "✅",
    "4-4": "✅",
    "4-5": "✅",
    "4-6": "✅",
    "4-7": "❌",
    "5-0": "Cancellation",
    "5-1": "`rc_cancellation_event`",
    "5-2": "A subscription or non-renewing purchase has been cancelled. See [cancellation reasons](https://www.revenuecat.com/docs/event-types-and-fields#cancellation-and-expiration-reasons) for more details.",
    "5-3": "✅",
    "5-4": "✅",
    "5-5": "✅",
    "5-6": "✅",
    "5-7": "✅",
    "6-0": "Uncancellation",
    "6-1": "`rc_uncancellation_event`",
    "6-2": "A non-expired cancelled subscription has been re-enabled.",
    "6-3": "✅",
    "6-4": "✅",
    "6-5": "✅",
    "6-6": "❌",
    "6-7": "❌",
    "7-0": "Non Subscription Purchase",
    "7-1": "`rc_non_subscription_purchase_event`",
    "7-2": "A customer has made a purchase that will not auto-renew.",
    "7-3": "✅",
    "7-4": "✅",
    "7-5": "✅",
    "7-6": "✅",
    "7-7": "✅",
    "8-0": "Subscription Paused",
    "8-1": "`rc_subscription_paused_event`",
    "8-2": "A subscription has been paused.",
    "8-3": "❌",
    "8-4": "✅",
    "8-5": "❌",
    "8-6": "❌",
    "8-7": "❌",
    "9-0": "Expiration",
    "9-1": "`rc_expiration_event`",
    "9-2": "A subscription has expired and access should be removed.  \n  \nIf you have [Platform Server Notifications](https://www.revenuecat.com/docs/server-notifications) configured, this event will occur as soon as we are notified (within seconds to minutes) of the expiration.  \n  \nIf you do not have notifications configured, delays may be approximately 1 hour.",
    "9-3": "✅",
    "9-4": "✅",
    "9-5": "✅",
    "9-6": "✅",
    "9-7": "✅",
    "10-0": "Billing Issue",
    "10-1": "`rc_billing_issue_event`",
    "10-2": "There has been a problem trying to charge the subscriber. This does not mean the subscription has expired.  \n  \nCan be safely ignored if listening to CANCELLATION event + cancel_reason=BILLING_ERROR.",
    "10-3": "✅",
    "10-4": "✅",
    "10-5": "✅",
    "10-6": "✅",
    "10-7": "❌",
    "11-0": "Product Change",
    "11-1": "`rc_product_change_event`",
    "11-2": "A subscriber has changed the product of their subscription.  \n  \nThis does not mean the new subscription is in effect immediately. See [Managing Subscriptions](doc:managing-subscriptions) for more details on updates, downgrades, and crossgrades.",
    "11-3": "✅",
    "11-4": "✅",
    "11-5": "❌",
    "11-6": "✅",
    "11-7": "❌"
  },
  "cols": 8,
  "rows": 12,
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

For events that have revenue, such as trial conversions and renewals, RevenueCat will automatically record this amount along with the event in Segment.

# Setup

## 1. Set Segment User Identity

If you're using the Segment SDK, you can set the User ID to match the RevenueCat App User Id. This way, events sent from the Segment SDK and events sent from RevenueCat can be synced to the same user.

Use the `.identify()` method on the Segment SDK to set the same App User Id that is set in RevenueCat.

[block:file]
[
  {
    "language": "swift",
    "name": "",
    "file": "code_blocks/🔌 Integrations & Events/third-party-integrations/segment_1.swift"
  },
  {
    "language": "objectivec",
    "name": "",
    "file": "code_blocks/🔌 Integrations & Events/third-party-integrations/segment_2.m"
  },
  {
    "language": "java",
    "name": "",
    "file": "code_blocks/🔌 Integrations & Events/third-party-integrations/segment_3.java"
  }
]
[/block]



## 2. Generate a Segment Write Key

In Segment, add a HTTP API as a source and copy the Write Key.

![](https://files.readme.io/4ae883d-Screen_Shot_2019-04-19_at_12.22.24_PM.png "Screen Shot 2019-04-19 at 12.22.24 PM.png")

## 3. Send RevenueCat events to Segment

After you've set up the _Purchases SDK_ and Segment SDK to have the same user identity, you can "turn on" the integration and configure the event names from the RevenueCat dashboard.

1. Navigate to your project in the RevenueCat dashboard and find the _Integrations_ card in the left menu. Select **+ New**  

![](https://files.readme.io/e8335b8-app.revenuecat.com_projects_85ff18c7_collaborators_1.png)

2. Choose **Segment** from the integrations menu.
3. Choose your Segment region.
4. Add your **Segment Write Key** from step 2.
5. Enter the event names that RevenueCat will send or choose the default event names.
6. Select whether you want sales reported as gross revenue (before app store commission), or after store commission and/or estimated taxes.
7. Select whether you want RevenueCat to send sandbox events into Segment or not. You can check the `environment` key in the `context` property of the event to determine if it was triggered in a sandbox or production environment.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/6e3d114-2023-01-19_22.21.34_app-development.revenuecat.com_b1071b5197f4.png",
        "2023-01-19 22.21.34 app-development.revenuecat.com b1071b5197f4.png",
        1097
      ],
      "align": "center",
      "caption": "Segment configuration screen"
    }
  ]
}
[/block]

# Sample Events

Below are sample JSONs that are delivered to Segment for each event type.

[block:file]
[
  {
    "language": "json",
    "name": "Initial Purchase",
    "file": "code_blocks/🔌 Integrations & Events/third-party-integrations/segment_4.json"
  },
  {
    "language": "json",
    "name": "Trial Started",
    "file": "code_blocks/🔌 Integrations & Events/third-party-integrations/segment_5.json"
  },
  {
    "language": "json",
    "name": "Trial Converted",
    "file": "code_blocks/🔌 Integrations & Events/third-party-integrations/segment_6.json"
  },
  {
    "language": "json",
    "name": "Trial Cancelled",
    "file": "code_blocks/🔌 Integrations & Events/third-party-integrations/segment_7.json"
  },
  {
    "language": "json",
    "name": "Renewal",
    "file": "code_blocks/🔌 Integrations & Events/third-party-integrations/segment_8.json"
  },
  {
    "language": "json",
    "name": "Cancellation",
    "file": "code_blocks/🔌 Integrations & Events/third-party-integrations/segment_9.json"
  },
  {
    "language": "json",
    "name": "Uncancellation",
    "file": "code_blocks/🔌 Integrations & Events/third-party-integrations/segment_10.json"
  }
]
[/block]



[block:file]
[
  {
    "language": "json",
    "name": "Non Subscription Purchase",
    "file": "code_blocks/🔌 Integrations & Events/third-party-integrations/segment_11.json"
  },
  {
    "language": "json",
    "name": "Subscription Paused",
    "file": "code_blocks/🔌 Integrations & Events/third-party-integrations/segment_12.json"
  },
  {
    "language": "json",
    "name": "Expiration",
    "file": "code_blocks/🔌 Integrations & Events/third-party-integrations/segment_13.json"
  },
  {
    "language": "json",
    "name": "Billing Issue",
    "file": "code_blocks/🔌 Integrations & Events/third-party-integrations/segment_14.json"
  },
  {
    "language": "json",
    "name": "Product Change",
    "file": "code_blocks/🔌 Integrations & Events/third-party-integrations/segment_15.json"
  }
]
[/block]

# Subscription Status Attribute

Whenever RevenueCat sends an event to Segment, we'll update the `rc_subscription_status` user attribute with any applicable changes, using one of the following values:

| Status              | Description                                                                                                                        |
| :------------------ | :--------------------------------------------------------------------------------------------------------------------------------- |
| active              | The customer has an active, paid subscription which is set to renew at their next renewal date.                                    |
| intro               | The customer has an active, paid subscription through a paid introductory offer.                                                   |
| cancelled           | The customer has a paid subscription which is set to expire at their next renewal date.                                            |
| grace_period        | The customer has a paid subscription which has entered a grace period after failing to renew successfully.                         |
| trial               | The customer is in a trial period which is set to convert to paid at the end of their trial period.                                |
| cancelled_trial     | The customer is in a trial period which is set to expire at the end of their trial period.                                         |
| grace_period_trial  | The customer was in a trial period and has now entered a grace period after failing to renew successfully.                         |
| expired             | The customer's subscription has expired.                                                                                           |
| promotional         | The customer has access to an entitlement through a granted RevenueCat promotional subscription.                                   |
| expired_promotional | The customer previously had access to an entitlement through a granted RevenueCat promotional subscription that has since expired. |
| paused              | The customer has a paid subscription which has been paused and is set to resume at some future date.       

For customers with multiple active subscriptions, this attribute will represent the status of only the subscription for which the most recent event occurred.

Please note that since this attribute is set and updated when events are delivered, subscribers with events prior to our release of this attribute (during November 2023) will not have this attribute set until/unless a future event (renewal, cancellation, etc) occurs.
