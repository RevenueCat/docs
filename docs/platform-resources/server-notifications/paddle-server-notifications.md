---
title: Paddle Server Notifications
slug: paddle-server-notifications
excerpt: Sending Paddle server notifications to RevenueCat
hidden: false
---

RevenueCat does not require server notifications from Paddle, however doing so can speed up webhook and integration delivery times and reduce lag time for [Charts](/dashboard-and-metrics/charts).

## Setup Instructions

1. Navigate to your **app settings** in the RevenueCat dashboard by selecting your app from **Project Settings > Apps**.
2. Expand the **Webhook Configuration** section and cick on **Apply in Paddle**.



## Tracking new purchases using Paddle Server Notifications

By default, RevenueCat will not process Paddle Server Notifications for any purchases that have not yet been posted to the RevenueCat API from your own backend. For RevenueCat to track new purchases from Paddle Server Notifications, you can enable the **"Track new purchases from server-to-server notifications"** option in our Dashboard. This allows RevenueCat to process new purchases from server-to-server notifications that are not yet in our system. This ensures all purchases are tracked, even in the case of network issues between your server's and RevenueCat's.

![](/images/paddle/no-code-integration.png)

### App User ID Detection Methods

RevenueCat provides flexible ways to detect the App User ID for purchases coming through Paddle Server Notifications. The Paddle purchase will be associated with the detected App User ID.

1. **Use anonymous App User IDs**: RevenueCat will generate a RevenueCat anonymous App User ID to associate the purchase with.
2. **Read App User ID from a Paddle metadata field**: If you are storing your customer's RevenueCat App User ID through [Paddle custom data](https://developer.paddle.com/api-reference/about/custom-data), you can specify the metadata field name in the `Metadata field key` textbox. Ensure that the metadata value will exactly match your RevenueCat App User ID. If the transaction does not have a metadata field, the purchase will be associated with an anonymous App User ID.


### Considerations

- If your setup involves you [manually sending us the Paddle token](/web/integrations/paddle#5-send-paddle-tokens-to-revenuecat), RevenueCat may receive the notification from Paddle before your server's request. In this case:
  - The App User ID detection method described above will be applied.
  - RevenueCat will then follow your [transfer behavior](/getting-started/restoring-purchases) for the App User ID provided in your request.

:::warning Customer attributes in events
RevenueCat will start processing the purchase as soon as we receive Paddle's server notification. If you rely on [RevenueCat customer attributes](/customers/customer-attributes) being attached to the customer before the purchase is created on RevenueCat (e.g: sending customer attributes to your enabled [third-party integrations](/integrations/third-party-integrations) or [webhooks](/integrations/webhooks)), you should make sure to **send and sync** the customer attributes as soon as you have them or before the purchase is completed.
:::