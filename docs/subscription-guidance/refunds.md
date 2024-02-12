---
title: Handling Refunds
slug: refunds
excerpt: Handling and reacting to refunded purchases
hidden: false
---

Refunds are handled differently on each platform. It's recommended to set up [Platform Server Notifications](/platform-resources/server-notifications) for the best performance.

## Platforms

### Apple

**Subscriptions**

✅ RevenueCat will automatically detect when a refund has been issued by Apple, but Apple does not allow developers to issue refunds on behalf of customers\n\nIf a customer requests a refund, you can direct them to the Apple support page: https://support.apple.com/en-us/HT204084

**Non-subscriptions**

🚧 RevenueCat requires [Platform Server Notifications](/platform-resources/server-notifications) to be enabled in order to detect when a non-subscription refund has been issued by Apple. Apple does not allow developers to issue refunds on behalf of customers.\n\nIf a customer requests a refund, you can direct them to the Apple support page: https://support.apple.com/en-us/HT204084\n\nConsumable refunds are not currently detected in RevenueCat.

### Google Play

**Subscriptions**

✅ Active Google Play subscriptions may be refunded directly through the RevenueCat dashboard. Click on the respective transaction event on the customer page and hit \"Refund\" in the upper right. [Documentation](/dashboard-and-metrics/customers-group/customer-history#refunding-purchases) for reference.\n\nRefunds can also be granted programmatically through the RevenueCat [REST API](https://docs.revenuecat.com/reference#revoke-a-google-subscription). This will immediately revoke access to the Google subscription and issue a refund for the last purchase.\n\nIf a refund is granted by Google or initiated through the Google Play console, it **may take up to 24 hours** to be detected by RevenueCat.

**Non-subscriptions**

✅ Google Play non-subscriptions can be refunded directly through the RevenueCat dashboard or REST API (see refunding Google Play Subscriptions for more info on how to do this).\n\nIf a non-subscription refund is granted by Google or initiated through the Google Play console, it **may take up to 24 hours** to be detected by RevenueCat.

### Stripe

✅ RevenueCat will automatically detect when a refund has been issued through Stripe. Note that you have the option in Stripe to refund, or refund and revoke access. See Stripe's docs for more info.

### Amazon Appstore

❌ Amazon does not allow developers to issue refunds on behalf of users. \n\nIf a user has a valid reason for a pro-rated refund, they should contact Amazon customer service through the Contact Us link at [amazon.com](https://amazon.com).\n\nRefunds granted through Amazon customer service **will not** be detected as a refund in RevenueCat and the subscription will remain active until the end of the current billing period (or indefinitely, for a non-subscription purchase).

## RevenueCat Dashboard

**Android** purchases can be refunded directly through the RevenueCat dashboard. Granting a refund will immediately expire the subscription and remove any entitlement access. By refunding directly through RevenueCat you can ensure that refunds are accounted for immediately in all charts and integrations.

Apple doesn’t allow developers to grant refunds themselves, only through Apple customer support. However, Apple refunds are tracked with RevenueCat and accounted for in all charts and integrations.

![](/images/9def41e-app.revenuecat.com_activity_270f6f8f_event_909c784d-ba27-4e33-8e7c-020e4db714ef_2_3560069cb19e697a1a52ada4d71c641c.png "app.revenuecat.com_activity_270f6f8f_event_909c784d-ba27-4e33-8e7c-020e4db714ef (2).png")
