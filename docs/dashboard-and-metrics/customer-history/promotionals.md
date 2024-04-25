---
title: Promotionals
slug: promotionals
hidden: false
---

Promotional subscriptions allow you to give a user access to premium content for a specific amount of time without requiring them to make a purchase or redeem a promo code. This can be useful for allowing beta users to preview content for free or resolving customer support issues. You must be using RevenueCat [Entitlements](/getting-started/entitlements) to grant promotionals.

![Image](/images/71a69eb-app.revenuecat.com_customers_c41ee56e_RCAnonymousID_d624590ed522430fa1065c498a46c4ea_5a7054e5411bb75a770d1d3c498a5460.png)

:::info Promotional subscriptions won't affect billing
Promotional subscriptions are a RevenueCat specific feature and work independently of App Store or Play Store billing and will never cancel a user's subscription, charge a user, issue a refund, or convert to a paid subscription.

Promotionals don't stack on top of store subscriptions, and are applied alongside them instead.
:::

## Granting Promotionals

To give a user promotional access to an entitlement, first choose the [entitlement name](/getting-started/entitlements). Next select a preset duraction or **Until date** to choose a custom end date. Finally, click **Grant**. You can grant multiple entitlements if you have different levels of access.

![](/images/Screenshot_2024-03-28_at_10.13.14_AM.png "Screenshot 2023-03-27 at 2.05.51 PM.png")

Granting an entitlement from the customer page will go into effect immediately, but you may need to [refresh CustomerInfo](/customers/customer-info) on the client to get the latest active entitlements. The promotional access will automatically be revoked after the selected duration. Note that promotional entitlements will work in sandbox and production apps, but the transactions they generate are always considered "production".

:::info
Promotional entitlements will be prefixed with "rc_promo" in the customer dashboard and in SDKs.
:::

## Removing Promotional Subscriptions

Granted entitlements will automatically be removed after expiration. To remove access to an entitlement early, click the :fa-times-circle: icon next to the **Granted Entitlement** name.

## Promotionals through the REST API

Looking to programatically grant promotional entitlements? View the REST API documentation [here](https://docs.revenuecat.com/reference/grant-a-promotional-entitlement).

## Next Steps

- [Attributes ➡️](/dashboard-and-metrics/customer-history/attributes)
