---
title: Statsig
slug: statsig
excerpt: Integrate in-app subscription events from RevenueCat with Statsig
hidden: false
---
> 👍 
> 
> The Statsig integration is available to all users signed up after September '23, the legacy Grow and Pro plans, and Enterprise plans. If you're on a legacy Free or Starter plan and want to access this integration, migrate to our new pricing via your [billing settings](https://app.revenuecat.com/settings/billing).

Statsig can be a helpful integration for optimizing purchases and revenue, and understanding which features are causing product metrics to move. RevenueCat can automatically send billing, subscription, and revenue metrics to your Statsig project. 

With our Statsig integration, you can:

- Compute how every new product improvement impacts your business metrics
- Simplify setting up Feature Gates and be able to automatically A/B test new features
- Run multiple independent experiments in parallel

With accurate and up-to-date subscription data in Statsig, you'll be set to turbocharge your product analytics ⚡️

## Integration at a Glance
| Includes Revenue | Supports Negative Revenue |  Sends Sandbox Events | Includes Subscriber Attributes | Sends Transfer Events | Optional Event Types |
|:----------------:|:-------------------------:|:---------------------:|:------------------------------:|:---------------------:|:---------------:|
|         ✅        |             ✅             | Toggle on in Settings |                ✅               |           ✅           |        ❌        |

# Events

The Statsig integration tracks the following events:

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
    "1-0": "Renewal",
    "1-1": "`rc_renewal_event`",
    "1-2": "An existing subscription has been renewed or a lapsed user has resubscribed.",
    "1-3": "✅",
    "1-4": "✅",
    "1-5": "✅",
    "1-6": "✅",
    "1-7": "❌",
    "2-0": "Cancellation",
    "2-1": "`rc_cancellation_event`",
    "2-2": "A subscription or non-renewing purchase has been cancelled. See [cancellation reasons](https://www.revenuecat.com/docs/event-types-and-fields#cancellation-and-expiration-reasons) for more details.",
    "2-3": "✅",
    "2-4": "✅",
    "2-5": "✅",
    "2-6": "✅",
    "2-7": "✅",
    "3-0": "Uncancellation",
    "3-1": "`rc_uncancellation_event`",
    "3-2": "A non-expired cancelled subscription has been re-enabled.",
    "3-3": "✅",
    "3-4": "✅",
    "3-5": "✅",
    "3-6": "❌",
    "3-7": "❌",
    "4-0": "Non Subscription Purchase",
    "4-1": "`rc_non_subscription_purchase_event`",
    "4-2": "A customer has made a purchase that will not auto-renew.",
    "4-3": "✅",
    "4-4": "✅",
    "4-5": "✅",
    "4-6": "✅",
    "4-7": "✅",
    "5-0": "Subscription Paused",
    "5-1": "`rc_subscription_paused_event`",
    "5-2": "A subscription has been paused.",
    "5-3": "❌",
    "5-4": "✅",
    "5-5": "❌",
    "5-6": "❌",
    "5-7": "❌",
    "6-0": "Expiration",
    "6-1": "`rc_expiration_event`",
    "6-2": "A subscription has expired and access should be removed.  \n  \nIf you have [Platform Server Notifications](https://www.revenuecat.com/docs/server-notifications) configured, this event will occur as soon as we are notified (within seconds to minutes) of the expiration.  \n  \nIf you do not have notifications configured, delays may be approximately 1 hour.",
    "6-3": "✅",
    "6-4": "✅",
    "6-5": "✅",
    "6-6": "✅",
    "6-7": "✅",
    "7-0": "Billing Issue",
    "7-1": "`rc_billing_issue_event`",
    "7-2": "There has been a problem trying to charge the subscriber. This does not mean the subscription has expired.  \n  \nCan be safely ignored if listening to CANCELLATION event + cancel_reason=BILLING_ERROR.",
    "7-3": "✅",
    "7-4": "✅",
    "7-5": "✅",
    "7-6": "✅",
    "7-7": "❌"
  },
  "cols": 8,
  "rows": 8,
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

# 0. Matching RevenueCat Users with Statsig Users

In order to associate RevenueCat data with Statsig feature gate and/or experiment, the RevenueCat app user ID must match the Statsig User ID. You can read more about Statsig user IDs in their documentation [here](https://docs.statsig.com/server/pythonSDK#statsiguser). You can set up a custom app user ID in RevenueCat by following the instructions in our [Identifying Users](doc:user-ids#provided-app-user-id) documentation. 

# 1. Enable RevenueCat integration with Statsig

On the Statsig [Integration page](https://console.statsig.com/integrations) enable the RevenueCat integration.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/af93af9-enableStatSig.png",
        "enableStatSig.png",
        676
      ],
      "align": "center",
      "caption": "Enable RevenueCat in Statsig integration page"
    }
  ]
}
[/block]

# 2. Send RevenueCat events into Statsig

After you enabled the RevenueCat integration in Statsig's dashboard, you can "turn on" the integration from the RevenueCat dashboard.

1. Navigate to your project in the RevenueCat dashboard and find the _Integrations_ card in the left menu. Select **+ New** 

![](https://files.readme.io/fa5ab45-app.revenuecat.com_projects_85ff18c7_collaborators_1.png)

2. Choose **Statsig** from the Integrations menu.
3. Add your ['statsig-server-secret'](https://docs.statsig.com/feature-gates/implement/server#step-1-get-the-statsig-server-secret-key)

Remember to select **Add Integration**

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/ceb1a77-app.revenuecat.com_projects_85ff18c7_integrations_intercom_4.png",
        null,
        "Statsig configuration page"
      ],
      "align": "center",
      "caption": "Statsig configuration page"
    }
  ]
}
[/block]

# 3. Testing the Statsig integration

Ingesting sandbox events into Statsig can be enabled in the RevenueCat configuration in the Statsig [Integration page](https://console.statsig.com/integrations).

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/bbd8c17-enable_sandbox.png",
        "enable_sandbox.png",
        1542
      ],
      "align": "center",
      "caption": "Include Sandbox Events in Statsig integration page"
    }
  ]
}
[/block]

## Make a sandbox purchase with a new user

Simulate a new user installing your app, and go through your app flow to complete a sandbox purchase.

## Check that the Statsig event delivered successfully

While still on the Customer View, select test purchase event in the [Customer History](doc:customer-history) page and make sure that the Statsig integration event exists and was delivered successfully.

![](https://files.readme.io/7632c3b-statsig_customer_history.png "statsig_customer_history.png")

## Check Statsig dashboard for the delivered event

Navigate to your Statsig app > Metrics. You will see events RevenueCat has dispatched to Statsig under 'Log Stream'.

![](https://files.readme.io/8afcbd5-statsig_events.png "statsig_events.png")

# Sample Events

Below are sample JSONs that are delivered to Statsig for each event type.

[block:file]
[
  {
    "language": "json",
    "name": "Initial Purchase",
    "file": "code_blocks/🔌 Integrations & Events/third-party-integrations/statsig_1.json"
  },
  {
    "language": "json",
    "name": "Renewal",
    "file": "code_blocks/🔌 Integrations & Events/third-party-integrations/statsig_2.json"
  },
  {
    "language": "json",
    "name": "Cancellation",
    "file": "code_blocks/🔌 Integrations & Events/third-party-integrations/statsig_3.json"
  },
  {
    "language": "json",
    "name": "Uncancellation",
    "file": "code_blocks/🔌 Integrations & Events/third-party-integrations/statsig_4.json"
  },
  {
    "language": "json",
    "name": "Non Subscription Purchase",
    "file": "code_blocks/🔌 Integrations & Events/third-party-integrations/statsig_5.json"
  },
  {
    "language": "json",
    "name": "Subscription Paused",
    "file": "code_blocks/🔌 Integrations & Events/third-party-integrations/statsig_6.json"
  }
]
[/block]



[block:file]
[
  {
    "language": "json",
    "name": "Expiration",
    "file": "code_blocks/🔌 Integrations & Events/third-party-integrations/statsig_7.json"
  },
  {
    "language": "json",
    "name": "Billing Issue",
    "file": "code_blocks/🔌 Integrations & Events/third-party-integrations/statsig_8.json"
  },
  {
    "language": "json",
    "name": "Product Change",
    "file": "code_blocks/🔌 Integrations & Events/third-party-integrations/statsig_9.json"
  }
]
[/block]



> 👍 You've done it!
> 
> You should start seeing subscription data from RevenueCat appear in Statsig.
