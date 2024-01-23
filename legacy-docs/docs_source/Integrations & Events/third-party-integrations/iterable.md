---
title: Iterable
slug: iterable
excerpt: Integrate in-app purchase events from RevenueCat with Iterable
hidden: false
---
> 👍 
> 
> The Iterable integration is available to all users signed up after September '23, the legacy Grow and Pro plans, and Enterprise plans. If you're on a legacy Free or Starter plan and want to access this integration, migrate to our new pricing via your [billing settings](https://app.revenuecat.com/settings/billing).

Iterable can be a helpful integration tool in understanding what stage a customer is in and reacting accordingly. Iterable is a cross-channel platform that powers unified customer experiences and empowers marketers to create, optimize and measure every interaction taking place throughout the customer journey. With Iterable, brands create individualized marketing touch points that earn engagement, solidify trust and galvanize loyal consumer-brand relationships.

With our Iterable integration, you can:

- Create an event to track unsubscribes that automatically triggers an email to users who cancel.
- Start a campaign to send users who have been with you for over a certain length of time a discount code for being a loyal customer.

With accurate and up-to date subscription data in Iterable, you’ll be set to turbocharge your users’ engagement  ⚡️

## Integration at a Glance
| Includes Revenue | Supports Negative Revenue |  Sends Sandbox Events | Includes Subscriber Attributes | Sends Transfer Events |                                                                   Optional Event Types                                                                   |
|:----------------:|:-------------------------:|:---------------------:|:------------------------------:|:---------------------:|:---------------------------------------------------------------------------------------------------------------------------------------------------:|
|         ✅        |             ✅             | Requires API Key |    ✅    |           ❌           | non_subscription_purchase_event<br>uncancellation_event<br>subscription_paused_event<br>expiration_event<br>billing_issue_event<br>product_change_event |

# Events

The Iterable integration tracks the following events:

[block:parameters]
{
  "data": {
    "h-0": "RevenueCat Event Type",
    "h-1": "Iterable Event Type",
    "h-2": "Default Event Name",
    "h-3": "Description",
    "h-4": "App Store",
    "h-5": "Play Store",
    "h-6": "Amazon",
    "h-7": "Stripe",
    "h-8": "Promo",
    "0-0": "Initial Purchase",
    "0-1": "Purchase",
    "0-2": "rc_initial_purchase_event",
    "0-3": "A new subscription has been purchased.",
    "0-4": "✅",
    "0-5": "✅",
    "0-6": "✅",
    "0-7": "✅",
    "0-8": "❌",
    "1-0": "Trial Started",
    "1-1": "Purchase",
    "1-2": "rc_trial_started_event",
    "1-3": "The start of an auto-renewing subscription product free trial.",
    "1-4": "✅",
    "1-5": "✅",
    "1-6": "✅",
    "1-7": "✅",
    "1-8": "❌",
    "2-0": "Trial Converted",
    "2-1": "Purchase",
    "2-2": "rc_trial_converted_event",
    "2-3": "When an auto-renewing subscription product converts from a free trial to normal paid period.",
    "2-4": "✅",
    "2-5": "✅",
    "2-6": "✅",
    "2-7": "✅",
    "2-8": "❌",
    "3-0": "Trial Cancelled",
    "3-1": "Custom",
    "3-2": "rc_trial_cancelled_event",
    "3-3": "When a user turns off renewals for an auto-renewing subscription product during a free trial period.",
    "3-4": "✅",
    "3-5": "✅",
    "3-6": "✅",
    "3-7": "✅",
    "3-8": "❌",
    "4-0": "Renewal",
    "4-1": "Purchase",
    "4-2": "rc_renewal_event",
    "4-3": "An existing subscription has been renewed or a lapsed user has resubscribed.",
    "4-4": "✅",
    "4-5": "✅",
    "4-6": "✅",
    "4-7": "✅",
    "4-8": "❌",
    "5-0": "Cancellation",
    "5-1": "Custom",
    "5-2": "rc_cancellation_event",
    "5-3": "A subscription or non-renewing purchase has been cancelled. See [cancellation reasons](https://www.revenuecat.com/docs/event-types-and-fields#cancellation-and-expiration-reasons) for more details.",
    "5-4": "✅",
    "5-5": "✅",
    "5-6": "✅",
    "5-7": "✅",
    "5-8": "✅",
    "6-0": "Uncancellation",
    "6-1": "Custom",
    "6-2": "rc_uncancellation_event",
    "6-3": "A non-expired cancelled subscription has been re-enabled.",
    "6-4": "✅",
    "6-5": "✅",
    "6-6": "✅",
    "6-7": "❌",
    "6-8": "❌",
    "7-0": "Non Subscription Purchase",
    "7-1": "Purchase",
    "7-2": "rc_non_subscription_purchase_event",
    "7-3": "A customer has made a purchase that will not auto-renew.",
    "7-4": "✅",
    "7-5": "✅",
    "7-6": "✅",
    "7-7": "✅",
    "7-8": "✅",
    "8-0": "Subscription Paused",
    "8-1": "Custom",
    "8-2": "rc_subscription_paused_event",
    "8-3": "A subscription has been paused.",
    "8-4": "❌",
    "8-5": "✅",
    "8-6": "❌",
    "8-7": "❌",
    "8-8": "❌",
    "9-0": "Expiration",
    "9-1": "Custom",
    "9-2": "rc_expiration_event",
    "9-3": "A subscription has expired and access should be removed.  \n  \nIf you have [Platform Server Notifications](https://www.revenuecat.com/docs/server-notifications) configured, this event will occur as soon as we are notified (within seconds to minutes) of the expiration.  \n  \nIf you do not have notifications configured, delays may be approximately 1 hour.",
    "9-4": "✅",
    "9-5": "✅",
    "9-6": "✅",
    "9-7": "✅",
    "9-8": "✅",
    "10-0": "Billing Issue",
    "10-1": "Custom",
    "10-2": "rc_billing_issue_event",
    "10-3": "There has been a problem trying to charge the subscriber. This does not mean the subscription has expired.  \n  \nCan be safely ignored if listening to CANCELLATION event + cancel_reason=BILLING_ERROR.",
    "10-4": "✅",
    "10-5": "✅",
    "10-6": "✅",
    "10-7": "✅",
    "10-8": "❌",
    "11-0": "Product Change",
    "11-1": "Custom",
    "11-2": "rc_product_change_event",
    "11-3": "A subscriber has changed the product of their subscription.  \n  \nThis does not mean the new subscription is in effect immediately. See [Managing Subscriptions](https://www.revenuecat.com/docs/managing-subscriptions) for more details on updates, downgrades, and crossgrades.",
    "11-4": "✅",
    "11-5": "✅",
    "11-6": "❌",
    "11-7": "✅",
    "11-8": "❌"
  },
  "cols": 9,
  "rows": 12,
  "align": [
    "left",
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

For events that have revenue, such as trial conversions and renewals, RevenueCat will automatically record this amount along with the event in Iterable. 

# Setup

## 1. Set Iterable User Identity

In order to associate RevenueCat data with the Iterable User Profile, either the RevenueCat `$email` or `$iterableUserId` [Subscriber Attributes](doc:subscriber-attributes) should be set in RevenueCat. The preferred method is to send the `$email` attribute. If neither of these fields exist, RevenueCat will fallback to the RevenueCat app user ID. You can read more about Iterable user profiles in Iterable's [Identifying the User](https://support.iterable.com/hc/en-us/articles/360035402531-Identifying-the-User-) documentation. 

> 📘 $iterableUserId character limit
> 
> The `$iterableUserId` can be up to 52 characters long.

## (optional) Set Iterable Campaign ID and/or Template ID

To attribute an event to an Iterable Campaign ID and/or Template ID, set the `$iterableCampaignId` and/or `$iterableTemplateId` subscriber attributes through the RevenueCat SDK or [REST API](https://docs.revenuecat.com/reference/update-subscriber-attributes).

[block:file]
[
  {
    "language": "swift",
    "name": "",
    "file": "code_blocks/🔌 Integrations & Events/third-party-integrations/iterable_1.swift"
  },
  {
    "language": "objectivec",
    "name": "",
    "file": "code_blocks/🔌 Integrations & Events/third-party-integrations/iterable_2.m"
  },
  {
    "language": "java",
    "name": "",
    "file": "code_blocks/🔌 Integrations & Events/third-party-integrations/iterable_3.java"
  },
  {
    "language": "javascript",
    "name": "React Native",
    "file": "code_blocks/🔌 Integrations & Events/third-party-integrations/iterable_4.js"
  },
  {
    "language": "curl",
    "name": "",
    "file": "code_blocks/🔌 Integrations & Events/third-party-integrations/iterable_5.curl"
  }
]
[/block]



## 2. Send RevenueCat Events to Iterable

After you've set up the Purchase SDK and Iterable SDK to have the same user identity, you can "turn on" the integration and configure the event names from the RevenueCat dashboard.

1. Navigate to your app in the RevenueCat and find the _Integrations_ card in the left menu. Select **+ New**

![](https://files.readme.io/82692c7-app.revenuecat.com_projects_85ff18c7_collaborators_1.png)

2. Choose **Iterable** from the Integrations menu
3. Add your Iterable [Server-side API key](https://support.iterable.com/hc/en-us/articles/360043464871-API-Keys-#creating-api-keys) to the **API key** field in RevenueCat
4. Enter the event names that RevenueCat will send or choose the default event names
5. Select whether you want sales reported as gross revenue (before app store commission), or after store commission and/or estimated taxes.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/519b30e-app.revenuecat.com_projects_85ff18c7_integrations_intercom.png",
        null,
        "Iterable configuration page"
      ],
      "align": "center",
      "caption": "Iterable configuration page"
    }
  ]
}
[/block]

> 📘 Iterable sandbox environment
> 
> Iterable recommends having a production and sandbox project to separate live and testing environments. You can input both keys in the RevenueCat Iterable settings page.

# Testing the Iterable integration

## Make a sandbox purchase with a new user

Simulate a new user installing your app, and go through your app flow to complete the [sandbox purchase](doc:sandbox).

## Check that the Iterable event delivered successfully

While still on the Customer View, select the purchase event in the [Customer History](doc:customer-history) page and make sure that the Iterable integration event exists and was delivered successfully.

![](https://files.readme.io/470e07f-Screen_Shot_2022-02-11_at_4.36.22_PM.png "Screen Shot 2022-02-11 at 4.36.22 PM.png")

## Check Iterable dashboard for the delivered event

Navigate to your Iterable dashboard > Insights > Logs. To find Purchase events navigate to 'Purchases' and to find Custom events navigate to 'Events'. You will see events RevenueCat has dispatched to the Iterable under 'Purchase Log' and 'Events log'  respectively. 

![](https://files.readme.io/2b00ee8-Screen_Shot_2022-02-11_at_4.34.52_PM.png "Screen Shot 2022-02-11 at 4.34.52 PM.png")

![](https://files.readme.io/666b2e3-Screen_Shot_2022-02-11_at_4.35.04_PM.png "Screen Shot 2022-02-11 at 4.35.04 PM.png")

# Sample Events

Below are sample JSONs that are delivered to Iterable for events.

[block:file]
[
  {
    "language": "json",
    "name": "Initial Purchase",
    "file": "code_blocks/🔌 Integrations & Events/third-party-integrations/iterable_6.json"
  },
  {
    "language": "json",
    "name": "Trial Started",
    "file": "code_blocks/🔌 Integrations & Events/third-party-integrations/iterable_7.json"
  },
  {
    "language": "json",
    "name": "Trial Converted",
    "file": "code_blocks/🔌 Integrations & Events/third-party-integrations/iterable_8.json"
  },
  {
    "language": "json",
    "name": "Trial Cancelled",
    "file": "code_blocks/🔌 Integrations & Events/third-party-integrations/iterable_9.json"
  },
  {
    "language": "json",
    "name": "Renewal",
    "file": "code_blocks/🔌 Integrations & Events/third-party-integrations/iterable_10.json"
  },
  {
    "language": "json",
    "name": "Cancellation",
    "file": "code_blocks/🔌 Integrations & Events/third-party-integrations/iterable_11.json"
  },
  {
    "language": "json",
    "name": "Uncancellation",
    "file": "code_blocks/🔌 Integrations & Events/third-party-integrations/iterable_12.json"
  }
]
[/block]



[block:file]
[
  {
    "language": "json",
    "name": "Non Subscription Purchase",
    "file": "code_blocks/🔌 Integrations & Events/third-party-integrations/iterable_13.json"
  },
  {
    "language": "json",
    "name": "Subscription Paused",
    "file": "code_blocks/🔌 Integrations & Events/third-party-integrations/iterable_14.json"
  },
  {
    "language": "json",
    "name": "Expiration",
    "file": "code_blocks/🔌 Integrations & Events/third-party-integrations/iterable_15.json"
  },
  {
    "language": "json",
    "name": "Billing Issues",
    "file": "code_blocks/🔌 Integrations & Events/third-party-integrations/iterable_16.json"
  },
  {
    "language": "json",
    "name": "Product Change",
    "file": "code_blocks/🔌 Integrations & Events/third-party-integrations/iterable_17.json"
  }
]
[/block]



# Considerations

## Refunds

Revenue for Iterable campaign reporting will not be accurate due to refund events. You can build custom workflows around a "refund" event and independently calculate the total revenue refunded for your campaigns.

## Purchase event tracking
Iterable provides two event-tracking APIs:

* [Track Purchase API](https://api.iterable.com/api/docs#commerce_trackPurchase): This aggregates all purchase-related events into a single purchase event for tracking overall revenue. However, it does not distinguish between the types of purchase events (like initial purchases, trials, renewals, etc.).
* [Track Custom Event API](https://api.iterable.com/api/docs#events_track): While it allows for detailed tracking of individual purchase events, it doesn't support revenue tracking as that is exclusive to the Track Purchase API.

You have the flexibility to use one or both APIs depending on whether you need detailed insights into specific events or an aggregate revenue perspective.

Ensure [Allow new custom events into the system](https://support.iterable.com/hc/en-us/articles/115002065083-Managing-Custom-Events-#event-handling-for-newly-encountered-events) is enabled in your Iterable project settings, or manually add all the event names you want to track as custom events to the Iterable project settings.

Learn more about tracking events with this integration in Iterable RevenueCat's [documentation](https://support.iterable.com/hc/en-us/articles/5167223724436-RevenueCat-Iterable-Integration-#in-iterable) or Iterable's [tracking docs](https://support.iterable.com/hc/en-us/articles/205480285-Tracking-Conversions-Purchases-and-Revenue-#step-4-track-custom-events-and-purchases).
