---
title: Platform Server Notifications
slug: server-notifications
excerpt: Informing RevenueCat of updates to user purchases
hidden: false
---

Platform Server Notifications are notifications sent from **supported platforms _to_ RevenueCat**, and are configured in the dashboards of each store.

Server Notifications not only inform RevenueCat of updates to purchases, but also allow you to track new purchases in RevenueCat immediately, without an SDK implementation.

If you are looking to be notified about subscription purchases on your own server, see [Webhooks](/integrations/webhooks).

## Setup Instructions

- Apple App Store Server Notification: [Setup →](/platform-resources/server-notifications/apple-server-notifications)
- Google Real-Time Developer Notifications: [Setup →](/platform-resources/server-notifications/google-server-notifications)
- Amazon Appstore Real-time Notifications: [Setup →](/platform-resources/server-notifications/amazon-server-notifications)
- Stripe Server Notifications: [Setup →](/platform-resources/server-notifications/stripe-server-notifications) (Required for Stripe)
- Paddle Server Notifications: [Setup →](/platform-resources/server-notifications/paddle-server-notifications.md)

## Confirming Connection

You can confirm the Apple, Google, Stripe, and/or Paddle notifications are being delivered properly to RevenueCat by observing the '_Last received_' timestamp next to the section header.

If you've had subscription activity in your app but this value is missing or stale, double check the configuration steps above.

:::warning 'No notifications received' Message
If a notification is received for a subscription not currently tracked by RevenueCat, we will return a **200** status code indicating we received the event, but this label will not be updated. Once an event is received for a tracked subscription, the label will be updated as expected.
:::

## Billing

Setting up and receiving Platform Server Notifications does not affect RevenueCat billing.
