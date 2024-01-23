---
title: OneSignal
slug: onesignal
excerpt: Integrate RevenueCat subscription status with OneSignal
hidden: false
---
> 👍 
> 
> The OneSignal integration is available to all users signed up after September '23, the legacy Grow and Pro plans, and Enterprise plans. If you're on a legacy Free or Starter plan and want to access this integration, migrate to our new pricing via your [billing settings](https://app.revenuecat.com/settings/billing).

OneSignal can be a useful integration tool for understanding what stage a customer is in to react accordingly. RevenueCat can automatically update user tags in OneSignal with their latest subscription status.

With our OneSignal integration, you can:

- Send an onboarding campaign to a user in a free trial
- Send a push notification to churned users and [offer them a discount](doc:ios-subscription-offers) 

With accurate and up-to-date subscription data in OneSignal, you'll be set to turbocharge your campaigns ⚡️

For every auto-renewing subscription event in RevenueCat, the following tags get added or updated on the user in OneSignal. By leaving the tag blank in the RevenueCat dashboard, you can choose to not send any value for specific tag(s).

[block:parameters]
{
  "data": {
    "h-0": "Tag",
    "h-1": "Description",
    "0-0": "`app_user_id`",
    "0-1": "The RevenueCat App User Id that triggered the event",
    "1-0": "`period_type`",
    "1-1": "The latest period type for the purchase or renewal. Either:  \n- `TRIAL` (for free trials)  \n- `INTRO` (or introductory pricing)  \n- `NORMAL` (standard subscription)",
    "2-0": "`purchased_at`",
    "2-1": "epoch time in seconds of the latest subscription purchase or renewal",
    "3-0": "`expiration_at`",
    "3-1": "epoch time in seconds of the latest subscription expiration date",
    "4-0": "`store`",
    "4-1": "Either `APP_STORE `, `PLAY_STORE`, or `STRIPE`",
    "5-0": "`environment`",
    "5-1": "Either `SANDBOX` or `PRODUCTION`",
    "6-0": "`last_event_type`",
    "6-1": "The latest event type from the user. Either:  \n- `INITIAL_PURCHASE`  \n- `TRIAL_STARTED`  \n- `TRIAL_CONVERTED`  \n- `TRIAL_CANCELLED`  \n- `RENEWAL`  \n- `CANCELLATION `",
    "7-0": "`product_id`",
    "7-1": "The latest subscription product identifier that the user has purchased or renewed",
    "8-0": "`entitlement_ids`",
    "8-1": "Comma separated string of RevenueCat Entitlement identifiers that the user unlocked",
    "9-0": "`active_subscription`",
    "9-1": "The value will be set to `true` on any purchase/renewal event, and `false` on `EXPIRATION`",
    "10-0": "`subscription_status`",
    "10-1": "See Subscription Status Attribute below",
    "11-0": "`grace_period_expiration_at`",
    "11-1": "If a billing issue occurs we will send the date of the grace period expiration."
  },
  "cols": 2,
  "rows": 12,
  "align": [
    "left",
    "left"
  ]
}
[/block]

> 📘 Auto-renewing subscriptions only
> 
> RevenueCat only updates data tags in OneSignal in response to auto-renewing subscription events.

## Integration at a Glance
| Includes Revenue | Supports Negative Revenue | Sends Sandbox Events | Includes Subscriber Attributes | Sends Transfer Events | Optional Event Types |
|:----------------:|:-------------------------:|:--------------------:|:------------------------------:|:---------------------:|:---------------:|
|         ❌        |             ❌             |           ✅          |                ❌               |           ❌           |        ❌        |

# Events

The OneSignal integration tracks the following events:

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
    "0-1": "initial_purchase",
    "0-2": "A new subscription has been purchased.",
    "0-3": "✅",
    "0-4": "✅",
    "0-5": "✅",
    "0-6": "✅",
    "0-7": "❌",
    "1-0": "Trial Started",
    "1-1": "trial_started",
    "1-2": "The start of an auto-renewing subscription product free trial.",
    "1-3": "✅",
    "1-4": "✅",
    "1-5": "✅",
    "1-6": "✅",
    "1-7": "❌",
    "2-0": "Trial Converted",
    "2-1": "trial_converted",
    "2-2": "When an auto-renewing subscription product converts from a free trial to normal paid period.",
    "2-3": "✅",
    "2-4": "✅",
    "2-5": "✅",
    "2-6": "✅",
    "2-7": "❌",
    "3-0": "Trial Cancelled",
    "3-1": "trial_cancelled",
    "3-2": "When a user turns off renewals for an auto-renewing subscription product during a free trial period.",
    "3-3": "✅",
    "3-4": "✅",
    "3-5": "✅",
    "3-6": "✅",
    "3-7": "❌",
    "4-0": "Renewal",
    "4-1": "renewal",
    "4-2": "An existing subscription has been renewed or a lapsed user has resubscribed.",
    "4-3": "✅",
    "4-4": "✅",
    "4-5": "✅",
    "4-6": "✅",
    "4-7": "❌",
    "5-0": "Cancellation",
    "5-1": "cancellation",
    "5-2": "A subscription or non-renewing purchase has been cancelled. See [cancellation reasons](https://www.revenuecat.com/docs/event-types-and-fields#cancellation-and-expiration-reasons) for more details.",
    "5-3": "✅",
    "5-4": "✅",
    "5-5": "✅",
    "5-6": "✅",
    "5-7": "✅",
    "6-0": "Uncancellation",
    "6-1": "uncancellation",
    "6-2": "A non-expired cancelled subscription has been re-enabled.",
    "6-3": "✅",
    "6-4": "✅",
    "6-5": "✅",
    "6-6": "❌",
    "6-7": "❌",
    "7-0": "Non Subscription Purchase",
    "7-1": "non_subscription_purchase",
    "7-2": "A customer has made a purchase that will not auto-renew.",
    "7-3": "✅",
    "7-4": "✅",
    "7-5": "✅",
    "7-6": "✅",
    "7-7": "✅",
    "8-0": "Subscription paused",
    "8-1": "subscription_paused",
    "8-2": "A subscription has been paused.",
    "8-3": "❌",
    "8-4": "✅",
    "8-5": "❌",
    "8-6": "❌",
    "8-7": "❌",
    "9-0": "Expiration",
    "9-1": "expiration",
    "9-2": "A subscription has expired and access should be removed.  \n  \nIf you have [Platform Server Notifications](https://www.revenuecat.com/docs/server-notifications) configured, this event will occur as soon as we are notified (within seconds to minutes) of the expiration.  \n  \nIf you do not have notifications configured, delays may be approximately 1 hour.",
    "9-3": "✅",
    "9-4": "✅",
    "9-5": "✅",
    "9-6": "✅",
    "9-7": "✅",
    "10-0": "Billing Issue",
    "10-1": "billing_issue",
    "10-2": "There has been a problem trying to charge the subscriber. This does not mean the subscription has expired.  \n  \nCan be safely ignored if listening to CANCELLATION event + cancel_reason=BILLING_ERROR.",
    "10-3": "✅",
    "10-4": "✅",
    "10-5": "✅",
    "10-6": "✅",
    "10-7": "❌",
    "11-0": "Product Change",
    "11-1": "product_change",
    "11-2": "A subscriber has changed the product of their subscription.  \n  \nThis does not mean the new subscription is in effect immediately. See [Managing Subscriptions](https://www.revenuecat.com/docs/managing-subscriptions) for more details on updates, downgrades, and crossgrades.",
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

# 1. Send device data to RevenueCat

> 📘 Only device-centric API versions of OneSignal (9.0 and below) are supported.
> 
> Support for user-centric API versions of OneSignal (11.0 and above) coming soon.


The OneSignal integration requires some device-specific data. RevenueCat will only update users in OneSignal if the below data has been added as [Subscriber Attributes](doc:subscriber-attributes) for the user.

| Key            | Description                                                                                       | Required |
| :------------- | :------------------------------------------------------------------------------------------------ | :------- |
| `$onesignalId` | The [OneSignal Player Id](https://documentation.onesignal.com/docs/users#player-id) for the user. | ✅        |

This property can be set manually, like any other [Subscriber Attributes](doc:subscriber-attributes), or through the helper method `setOnesignalID()`. 

You can listen for changes to the OneSignal Id through their SDK, and send the value to RevenueCat. If you already have OneSignal set up, you should make sure that you're also sending the OneSignal Id for users that are updating to the latest version of your app.

[block:file]
[
  {
    "language": "swift",
    "name": "",
    "file": "code_blocks/🔌 Integrations & Events/third-party-integrations/onesignal_1.swift"
  }
]
[/block]



# 2. Send RevenueCat events into OneSignal

After you've set up the _Purchases SDK_ to send device data to RevenueCat, you can "turn on" the integration and configure the tag names from the RevenueCat dashboard.

1. Navigate to your project in the RevenueCat dashboard and find the _Integrations_ card in the left menu. Select **+ New** 

![](https://files.readme.io/c37e1b7-app.revenuecat.com_projects_85ff18c7_collaborators_1.png)

2. Choose **OneSignal** from the Integrations menu.
3. Add your **OneSignal App Id** and **OneSignal API key**.
4. Enter the tag names that RevenueCat should use, or choose the default tag names.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/319d5b4-app.revenuecat.com_projects_85ff18c7_integrations_intercom_2.png",
        null,
        "OneSignal configuration screen"
      ],
      "align": "center",
      "caption": "OneSignal configuration screen"
    }
  ]
}
[/block]

# 3. Testing the OneSignal integration

You can test the OneSignal integration end-to-end before going live. It's recommended that you test the integration is working properly for new users, and any existing users that may update their app to a new version.

## Make a sandbox purchase with a new user

Simulate a new user installing your app, and go through your app flow to complete a sandbox purchase.

## Check that the required device data is collected

Navigate the the [Customer View](doc:customers) for the test user that just made a purchase. Make sure that all of the required data from step 1 above is listed as attributes for the user.

## Check that the OneSignal event delivered successfully

While still on the Customer View, click into the test purchase event in the [Customer History](doc:customer-history) and make sure that the OneSignal integration event exists and was delivered successfully. 

![](https://files.readme.io/f052d26-app.revenuecat.com_activity_40779aaf_event_92499ad6-350b-455a-a2ec-4c28c4ca0b28_5.png)

# Sample Events

Below are sample JSONs that are delivered to OneSignal for events.

[block:file]
[
  {
    "language": "json",
    "name": "Initial Purchase",
    "file": "code_blocks/🔌 Integrations & Events/third-party-integrations/onesignal_2.json"
  },
  {
    "language": "json",
    "name": "Trial Started",
    "file": "code_blocks/🔌 Integrations & Events/third-party-integrations/onesignal_3.json"
  },
  {
    "language": "json",
    "name": "Trial Converted",
    "file": "code_blocks/🔌 Integrations & Events/third-party-integrations/onesignal_4.json"
  },
  {
    "language": "json",
    "name": "Trial Cancelled",
    "file": "code_blocks/🔌 Integrations & Events/third-party-integrations/onesignal_5.json"
  },
  {
    "language": "json",
    "name": "Renewal",
    "file": "code_blocks/🔌 Integrations & Events/third-party-integrations/onesignal_6.json"
  },
  {
    "language": "json",
    "name": "Cancellation",
    "file": "code_blocks/🔌 Integrations & Events/third-party-integrations/onesignal_7.json"
  },
  {
    "language": "json",
    "name": "Uncancellation",
    "file": "code_blocks/🔌 Integrations & Events/third-party-integrations/onesignal_8.json"
  },
  {
    "language": "json",
    "name": "Non Subscription Purchase",
    "file": "code_blocks/🔌 Integrations & Events/third-party-integrations/onesignal_12.json"
  },
  {
    "language": "json",
    "name": "Subscription Paused",
    "file": "code_blocks/🔌 Integrations & Events/third-party-integrations/onesignal_13.json"
  },
  {
    "language": "json",
    "name": "Expiration",
    "file": "code_blocks/🔌 Integrations & Events/third-party-integrations/onesignal_9.json"
  },
  {
    "language": "json",
    "name": "Billing Issue",
    "file": "code_blocks/🔌 Integrations & Events/third-party-integrations/onesignal_10.json"
  },
  {
    "language": "json",
    "name": "Product Change",
    "file": "code_blocks/🔌 Integrations & Events/third-party-integrations/onesignal_11.json"
  }
]
[/block]



> 🚧 Why are tags not working?
> 
> If your tags aren't working and RevenueCat is sending events successfully with 200 codes, check out [OneSignal's troubleshooting guide](https://documentation.onesignal.com/docs/add-user-data-tags#why-are-tags-not-working).

> 👍 You've done it!
> 
> You should start seeing subscription data from RevenueCat appear on users in OneSignal.

# Subscription Status Attribute

Whenever RevenueCat sends an event to OneSignal, we'll send a `subscription_status` user attribute with any applicable changes, using one of the following values:

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
