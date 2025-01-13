---
title: Platform Server Notifications
slug: server-notifications
excerpt: Informing RevenueCat of updates to user purchases
hidden: false
---

Platform Server Notifications are notifications sent from **supported stores _to_ RevenueCat**, and are configured in the dashboards of each store.

Server Notifications not only inform RevenueCat of updates to purchases, but also allow you to track new purchases in RevenueCat immediately, without an SDK implementation.

If you are looking to _consume_ notifications about subscription purchases on your own server, see [Webhooks](/integrations/webhooks).

## Setup Instructions

- Apple App Store Server Notification: [Setup →](/platform-resources/server-notifications/apple-server-notifications)
- Google Real-Time Developer Notifications: [Setup →](/platform-resources/server-notifications/google-server-notifications)
- Amazon Appstore Real-time Notifications: [Setup →](/platform-resources/server-notifications/amazon-server-notifications)
- Stripe Server Notifications: [Setup →](/platform-resources/server-notifications/stripe-server-notifications) (Required for Stripe)

## Confirming Connection

You can confirm the Apple, Google, and/or Stripe notifications are being delivered properly to RevenueCat by observing the '_Last received_' timestamp next to the section header.

If you've had subscription activity in your app but this value is missing or stale, double check the configuration steps above.

:::warning 'No notifications received' Message
If a notification is received for a subscription not currently tracked by RevenueCat, we will return a **200** status code indicating we received the event, but this label will not be updated. Once an event is received for a tracked subscription, the label will be updated as expected.
:::

![](/images/bffdf75-Screen_Shot_2021-12-01_at_11.07.08_AM_c3c82a99fc627ad339c28b95947b6022.png "Screen Shot 2021-12-01 at 11.07.08 AM.png")

## Billing

Setting up and receiving Platform Server Notifications does not affect RevenueCat billing.
