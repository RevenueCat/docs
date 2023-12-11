---
title: Discord
slug: discord
excerpt: Send in-app subscription events to Discord
hidden: false
categorySlug: integrations
order: 4
parentDoc: 649983b4c31b2e000a3c18f1
---
> 👍 
> 
> The Discord integration is available to all users signed up after September '23, the legacy Starter and Pro plans, and Enterprise plans. If you're on a legacy Free plan and want to access this integration, migrate to our new pricing via your [billing settings](https://app.revenuecat.com/settings/billing).

Receive instant updates on your Discord server from RevenueCat whenever a new purchase event occurs in your app.

# Events

The Discord integration tracks the following events:

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

# Configure Discord server

You need to configure your Discord server to authorize a webhook to post to your workspace. Please follow this Discord [article](https://support.discord.com/hc/en-us/articles/228383668-Intro-to-Webhooks) on their website explaining how to set this up.

# Configure RevenueCat Integration

Once you've set up a webhook in your Discord server. Enter the details into the Discord Integration section of your [dashboard](https://app.revenuecat.com).

![](https://github.com/RevenueCat/revenuecat-docs/assets/287089/7764e4de-b9ea-4060-9a59-af0c959bebb0 "Discord integration setup")

> 👍 
> 
> You're all set! RevenueCat will start sending events into Discord!
>

![](https://github.com/RevenueCat/revenuecat-docs/assets/287089/07cde5bd-e440-47d0-a219-aceaac4fd516 "Discord message example")

# Sample Events

Below are sample JSONs that are delivered to Discord for each event type.

```json Initial Purchase
{
    "product_identifier": "monthly_1",
    "app_id": "12345678-1234-1234-1234-123456789012",
    "payload": {
        "username": "RevenueCat",
        "avatar_url": "https://app.revenuecat.com/favicon-96x96.png",
        "embeds": [
            {
                "description": ":smiley_cat: Customer <https://app.revenuecat.com/activity/123abcd45/12345|12345> just started a subscription.",
                "color": 5763719,
                "fields": [
                    {
                        "name": "Product",
                        "value": "monthly_1",
                        "inline": true
                    },
                    {
                        "name": "Revenue",
                        "value": "$5.99",
                        "inline": true
                    }
                ],
                "timestamp": "2023-10-26T17:21:32Z"
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
        "username": "RevenueCat",
        "avatar_url": "https://app.revenuecat.com/favicon-96x96.png",
        "embeds": [
            {
                "description": ":smiley_cat: Customer <https://app.revenuecat.com/activity/123abcd45/12345|12345> just started a free trial.",
                "color": 5763719,
                "fields": [
                    {
                        "name": "Product",
                        "value": "monthly_3d_trial",
                        "inline": true
                    }
                ],
                "timestamp": "2023-10-26T17:21:32Z"
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
        "username": "RevenueCat",
        "avatar_url": "https://app.revenuecat.com/favicon-96x96.png",
        "embeds": [
            {
                "description": ":smiley_cat: Customer <https://app.revenuecat.com/activity/123abcd45/12345|12345> just converted from a free trial.",
                "color": 5763719,
                "fields": [
                    {
                        "name": "Product",
                        "value": "monthly_1",
                        "inline": true
                    },
                    {
                        "name": "Revenue",
                        "value": "$5.99",
                        "inline": true
                    }
                ],
                "timestamp": "2023-10-26T17:21:32Z"
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
        "username": "RevenueCat",
        "avatar_url": "https://app.revenuecat.com/favicon-96x96.png",
        "embeds": [
            {
                "description": ":pouting_cat: Customer <https://app.revenuecat.com/activity/123abcd45/12345|12345> just cancelled their free trial.",
                "color": 15548997,
                "fields": [
                    {
                        "name": "Product",
                        "value": "monthly_3d_trial",
                        "inline": true
                    }
                ],
                "timestamp": "2023-10-26T17:21:32Z"
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
        "username": "RevenueCat",
        "avatar_url": "https://app.revenuecat.com/favicon-96x96.png",
        "embeds": [
            {
                "description": ":smiley_cat: Customer <https://app.revenuecat.com/activity/123abcd45/12345|12345> just renewed their subscription.",
                "color": 5763719,
                "fields": [
                    {
                        "name": "Product",
                        "value": "monthly_1",
                        "inline": true
                    },
                    {
                        "name": "Revenue",
                        "value": "$5.99",
                        "inline": true
                    }
                ],
                "timestamp": "2023-10-26T17:21:32Z"
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
        "username": "RevenueCat",
        "avatar_url": "https://app.revenuecat.com/favicon-96x96.png",
        "embeds": [
            {
                "description": ":crying_cat_face: Customer <https://app.revenuecat.com/activity/123abcd45/12345|12345> just cancelled their subscription.",
                "color": 15548997,
                "fields": [
                    {
                        "name": "Product",
                        "value": "annual",
                        "inline": true
                    }
                ],
                "timestamp": "2023-10-26T17:21:32Z"
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
        "username": "RevenueCat",
        "avatar_url": "https://app.revenuecat.com/favicon-96x96.png",
        "embeds": [
            {
                "description": ":smiley_cat: Customer <https://app.revenuecat.com/activity/123abcd45/12345|12345> just made a purchase.",
                "color": 5763719,
                "fields": [
                    {
                        "name": "Product",
                        "value": "500_coins",
                        "inline": true
                    },
                    {
                        "name": "Revenue",
                        "value": "$5.99",
                        "inline": true
                    }
                ],
                "timestamp": "2023-10-26T17:21:32Z"
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
        "username": "RevenueCat",
        "avatar_url": "https://app.revenuecat.com/favicon-96x96.png",
        "embeds": [
            {
                "description": ":scream_cat: Customer <https://app.revenuecat.com/activity/123abcd45/12345|12345> got a billing issue.",
                "color": 15548997,
                "fields": [
                    {
                        "name": "Product",
                        "value": "annual_trial",
                        "inline": true
                    }
                ],
                "timestamp": "2023-10-26T17:21:32Z"
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
        "username": "RevenueCat",
        "avatar_url": "https://app.revenuecat.com/favicon-96x96.png",
        "embeds": [
            {
                "description": ":smiley_cat: Customer <https://app.revenuecat.com/activity/123abcd45/12345|12345> just changed the product of their subscription.",
                "color": 5763719,
                "fields": [
                    {
                        "name": "Product",
                        "value": "monthly",
                        "inline": true
                    }
                ],
                "timestamp": "2023-10-26T17:21:32Z"
            }
        ]
    }
}
```
