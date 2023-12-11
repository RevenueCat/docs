---
title: Slack
slug: slack
excerpt: Send in-app subscription events to Slack
hidden: false
categorySlug: integrations
order: 12
parentDoc: 649983b4c31b2e000a3c18f1
---
> 👍 
> 
> The Slack integration is available to all users signed up after September '23, the legacy Starter and Pro plans, and Enterprise plans. If you're on a legacy Free plan and want to access this integration, migrate to our new pricing via your [billing settings](https://app.revenuecat.com/settings/billing).

RevenueCat can send you Slack message to a channel any time an event happens in your app. This lets you keep a close pulse on your app and celebrate those money making moments!

## Integration at a Glance
| Includes Revenue | Supports Negative Revenue |  Sends Sandbox Events | Includes Subscriber Attributes | Sends Transfer Events | Optional Event Types |
|:----------------:|:-------------------------:|:---------------------:|:------------------------------:|:---------------------:|:---------------:|
|         ✅        |             ❌             | Toggle on in Settings |                ❌               |           ❌           |        ❌        |

# Events

The Slack integration tracks the following events:

[block:parameters]
{
  "data": {
    "h-0": "Event Type",
    "h-1": "Default Event Name (Fallback)",
    "h-2": "Description",
    "h-3": "App Store",
    "h-4": "Play Store",
    "h-5": "Amazon",
    "h-6": "Stripe",
    "h-7": "Promo",
    "0-0": "Initial Purchase",
    "0-1": "Customer \\<user_id> just started a subscription of \\<product_id>",
    "0-2": "A new subscription has been purchased.",
    "0-3": "✅",
    "0-4": "✅",
    "0-5": "✅",
    "0-6": "✅",
    "0-7": "❌",
    "1-0": "Trial Started",
    "1-1": "Customer \\<user_id> just started a free trial of \\<product_id>",
    "1-2": "The start of an auto-renewing subscription product free trial.",
    "1-3": "✅",
    "1-4": "✅",
    "1-5": "✅",
    "1-6": "✅",
    "1-7": "❌",
    "2-0": "Trial Converted",
    "2-1": "Customer \\<user_id> just converted from a free trial of \\<product_id>",
    "2-2": "When an auto-renewing subscription product converts from a free trial to normal paid period.",
    "2-3": "✅",
    "2-4": "✅",
    "2-5": "✅",
    "2-6": "✅",
    "2-7": "❌",
    "3-0": "Trial Cancelled",
    "3-1": "Customer \\<user_id> just cancelled their free trial of \\<product_id>",
    "3-2": "When a user turns off renewals for an auto-renewing subscription product during a free trial period.",
    "3-3": "✅",
    "3-4": "✅",
    "3-5": "✅",
    "3-6": "✅",
    "3-7": "❌",
    "4-0": "Renewal",
    "4-1": "Customer \\<user_id> just renewed their subscription of \\<product_id>",
    "4-2": "An existing subscription has been renewed or a lapsed user has resubscribed.",
    "4-3": "✅",
    "4-4": "✅",
    "4-5": "✅",
    "4-6": "✅",
    "4-7": "❌",
    "5-0": "Cancellation",
    "5-1": "Customer \\<user_id> just cancelled their subscription of \\<product_id>",
    "5-2": "A subscription or non-renewing purchase has been cancelled. See [cancellation reasons](https://www.revenuecat.com/docs/event-types-and-fields#cancellation-and-expiration-reasons) for more details.",
    "5-3": "✅",
    "5-4": "✅",
    "5-5": "✅",
    "5-6": "✅",
    "5-7": "✅",
    "6-0": "Non Subscription Purchase",
    "6-1": "Customer \\<user_id> just purchased \\<product_id>",
    "6-2": "A customer has made a purchase that will not auto-renew.",
    "6-3": "✅",
    "6-4": "✅",
    "6-5": "✅",
    "6-6": "✅",
    "6-7": "✅",
    "7-0": "Billing Issue",
    "7-1": "Customer \\<user_id> got a billing issue on \\<product_id>",
    "7-2": "There has been a problem trying to charge the subscriber. This does not mean the subscription has expired.  \n  \nCan be safely ignored if listening to CANCELLATION event + cancel_reason=BILLING_ERROR.",
    "7-3": "✅",
    "7-4": "✅",
    "7-5": "✅",
    "7-6": "✅",
    "7-7": "❌",
    "8-0": "Product Change",
    "8-1": "Customer \\<user_id> got a product change from \\<old_product_id> to \\<new_product_id>",
    "8-2": "A subscriber has changed the product of their subscription.  \n  \nThis does not mean the new subscription is in effect immediately. See [Managing Subscriptions](doc:managing-subscriptions) for more details on updates, downgrades, and crossgrades.",
    "8-3": "✅",
    "8-4": "✅",
    "8-5": "❌",
    "8-6": "✅",
    "8-7": "❌"
  },
  "cols": 8,
  "rows": 9,
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

# Configure Slack Workspace

Before RevenueCat can post to your Slack channel, you need to authorize a webhook to post to your workspace. Slack has a more [detailed article](https://get.slack.help/hc/en-us/articles/115005265063-Incoming-WebHooks-for-Slack) on their website explaining how to set this up if you have trouble.

## 1. Create a **Slack app**

- Navigate to [https://api.slack.com/apps](https://api.slack.com/apps?new_app=1) and create a new app. Give it a name like "RevenueCat" and select your workspace.

![](https://files.readme.io/a85a3f1-Screen_Shot_2018-12-13_at_4.15.50_PM.png "Screen Shot 2018-12-13 at 4.15.50 PM.png")

- Click **Create App**

## 2. Enable **Incoming Webhooks** from the settings page

![](https://files.readme.io/58be14f-Screen_Shot_2018-12-13_at_4.17.51_PM.png "Screen Shot 2018-12-13 at 4.17.51 PM.png")

- Select **Incoming Webhooks** under _Add features and functionality_

![](https://files.readme.io/14fd367-Screen_Shot_2018-12-13_at_4.21.05_PM.png "Screen Shot 2018-12-13 at 4.21.05 PM.png")

- Enable the Incoming Webhooks toggle
- After the settings page refreshes, click **Add New Webhook to Workspace**

## 3. Pick a channel that the app will post to, then click **Authorize**

![](https://files.readme.io/f5c317c-Screen_Shot_2018-12-13_at_4.23.27_PM.png "Screen Shot 2018-12-13 at 4.23.27 PM.png")

# Configure RevenueCat Integration

Once you've set up a webhook in your Slack workspace. Enter the details into the Slack Integration section of your [dashboard](https://app.revenuecat.com).

![](https://files.readme.io/b1cf4cb-app.revenuecat.com_projects_85ff18c7_integrations_intercom_3.png)

> 👍 
> 
> You're all set! RevenueCat will start sending events into Slack!

![](https://files.readme.io/f1167d6-unnamed.png "unnamed.png")

# Sample Events

Below are sample JSONs that are delivered to Slack for each event type.

```json Initial Purchase
{
    "product_identifier": "monthly_1",
    "app_id": "12345678-1234-1234-1234-123456789012",
    "payload": {
        "channel": "purchases",
        "username": "RevenueCat",
        "icon_url": "https://app.revenuecat.com/favicon-96x96.png",
        "attachments": [
            {
                "fallback": "Customer 12345 just started a subscription of monthly_1",
                "color": "#30B296",
                "fields": [
                    {
                        "value": ":smiley_cat: Customer <https://app.revenuecat.com/activity/123abcd45/12345|12345> just started a subscription."
                    },
                    {
                        "title": "Product",
                        "value": "monthly_1",
                        "short": false
                    },
                    {
                        "title": "Revenue",
                        "value": "$5.99",
                        "short": false
                    }
                ],
                "ts": 1588335655
            }
        ]
    }
}
```
```json Trial Started
{
    "product_identifier": "monthly_3d_trial",
    "app_id": "12345678-1234-1234-1234-123456789012",
    "payload": {
        "channel": "purchases",
        "username": "RevenueCat",
        "icon_url": "https://app.revenuecat.com/favicon-96x96.png",
        "attachments": [
            {
                "fallback": "Customer 12345 just started a free trial of monthly_3d_trial",
                "color": "#30B296",
                "fields": [
                    {
                        "value": ":smiley_cat: Customer <https://app.revenuecat.com/activity/123abcd45/12345|12345> just started a free trial."
                    },
                    {
                        "title": "Product",
                        "value": "monthly_3d_trial",
                        "short": false
                    }
                ],
                "ts": 1553805130
            }
        ]
    }
}
```
```json Trial Converted
{
    "product_identifier": "monthly_1",
    "app_id": "12345678-1234-1234-1234-123456789012",
    "payload": {
        "channel": "purchases",
        "username": "RevenueCat",
        "icon_url": "https://app.revenuecat.com/favicon-96x96.png",
        "attachments": [
            {
                "fallback": "Customer 12345 just converted from a free trial of monthly_1",
                "color": "#30B296",
                "fields": [
                    {
                        "value": ":smiley_cat: Customer <https://app.revenuecat.com/activity/123abcd45/12345|12345> just converted from a free trial."
                    },
                    {
                        "title": "Product",
                        "value": "monthly_1",
                        "short": false
                    },
                    {
                        "title": "Revenue",
                        "value": "$5.99",
                        "short": false
                    }
                ],
                "ts": 1554466423
            }
        ]
    }
}
```
```json Trial Cancelled
{
    "product_identifier": "monthly_3d_trial",
    "app_id": "12345678-1234-1234-1234-123456789012",
    "payload": {
        "channel": "purchases",
        "username": "RevenueCat",
        "icon_url": "https://app.revenuecat.com/favicon-96x96.png",
        "attachments": [
            {
                "fallback": "Customer 12345 just cancelled their free trial of monthly_3d_trial",
                "color": "#F2545B",
                "fields": [
                    {
                        "value": ":pouting_cat: Customer <https://app.revenuecat.com/activity/123abcd45/12345|12345> just cancelled their free trial."
                    },
                    {
                        "title": "Product",
                        "value": "monthly_3d_trial",
                        "short": false
                    }
                ],
                "ts": 1554502133
            }
        ]
    }
}
```
```json Renewal
{
    "product_identifier": "monthly_1",
    "app_id": "12345678-1234-1234-1234-123456789012",
    "payload": {
        "channel": "purchases",
        "username": "RevenueCat",
        "icon_url": "https://app.revenuecat.com/favicon-96x96.png",
        "attachments": [
            {
                "fallback": "Customer 12345 just renewed their subscription of monthly_1",
                "color": "#30B296",
                "fields": [
                    {
                        "value": ":smiley_cat: Customer <https://app.revenuecat.com/activity/123abcd45/12345|12345> just renewed their subscription."
                    },
                    {
                        "title": "Product",
                        "value": "monthly_1",
                        "short": false
                    },
                    {
                        "title": "Revenue",
                        "value": "$5.99",
                        "short": false
                    }
                ],
                "ts": 1554091875
            }
        ]
    }
}
```
```json Cancellation
{
    "product_identifier": "annual",
    "app_id": "12345678-1234-1234-1234-123456789012",
    "payload": {
        "channel": "purchases",
        "username": "RevenueCat",
        "icon_url": "https://app.revenuecat.com/favicon-96x96.png",
        "attachments": [
            {
                "fallback": "Customer 12345 just cancelled their subscription of annual",
                "color": "#F2545B",
                "fields": [
                    {
                        "value": ":crying_cat_face: Customer <https://app.revenuecat.com/activity/123abcd45/12345|12345> just cancelled their subscription."
                    },
                    {
                        "title": "Product",
                        "value": "annual",
                        "short": false
                    }
                ],
                "ts": 1553810169
            }
        ]
    }
}
```



```json Non Subscription Purchase
{
    "product_identifier": "500_coins",
    "app_id": "12345678-1234-1234-1234-123456789012",
    "payload": {
        "channel": "purchases",
        "username": "RevenueCat",
        "icon_url": "https://app.revenuecat.com/favicon-96x96.png",
        "attachments": [
            {
                "fallback": "Customer 12345 just purchased 500_coins",
                "color": "#30B296",
                "fields": [
                    {
                        "value": ":smiley_cat: Customer <https://app.revenuecat.com/activity/123abcd45/12345|12345> just made a purchase."
                    },
                    {
                        "title": "Product",
                        "value": "500_coins",
                        "short": false
                    },
                    {
                        "title": "Revenue",
                        "value": "$4.99",
                        "short": false
                    }
                ],
                "ts": 1590390293
            }
        ]
    }
}
```
```json Billing Issue
{
    "product_identifier": "annual_trial",
    "app_id": "12345678-1234-1234-1234-123456789012",
    "payload": {
        "channel": "purchases",
        "username": "RevenueCat",
        "icon_url": "https://app.revenuecat.com/favicon-96x96.png",
        "attachments": [
            {
                "fallback": "Customer 12345 got a billing issue on annual_trial",
                "color": "#F2545B",
                "fields": [
                    {
                        "value": ":scream_cat: Customer <https://app.revenuecat.com/activity/123abcd45/12345|12345> got a billing issue."
                    },
                    {
                        "title": "Product",
                        "value": "annual_trial",
                        "short": false
                    }
                ],
                "ts": 1663976618
            }
        ]
    }
}
```
```json Product Change
{
    "product_identifier": "annual",
    "app_id": "12345678-1234-1234-1234-123456789012",
    "payload": {
        "channel": "purchases",
        "username": "RevenueCat",
        "icon_url": "https://app.revenuecat.com/favicon-96x96.png",
        "attachments": [
            {
                "fallback": "Customer 12345 got a product change from annual to monthly",
                "color": "#30B296",
                "fields": [
                    {
                        "value": ":smiley_cat: Customer <https://app.revenuecat.com/activity/123abcd45/12345|12345> just changed the product of their subscription."
                    },
                    {
                        "title": "Product",
                        "value": "monthly",
                        "short": false
                    }
                ],
                "ts": 1663976617
            }
        ]
    }
}
```
