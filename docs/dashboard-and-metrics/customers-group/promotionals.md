---
title: Promotionals
slug: promotionals
hidden: false
---

:::info Promotional subscriptions won't affect billing
Promotional subscriptions are a RevenueCat specific feature and work independently of App Store or Play Store billing and will never: cancel a user's subscription, charge a user, issue a refund, or convert to a paid subscription.

Promotionals don't stack on top of store subscriptions, and are applied alongside them instead.
:::

Promotional subscriptions allow you to give a user access to premium content for a specific amount of time without requiring them to make a purchase or redeem a promo code. This can be useful for allowing beta users to preview content for free or resolving customer support issues.

![Image](/images/71a69eb-app.revenuecat.com_customers_c41ee56e_RCAnonymousID_d624590ed522430fa1065c498a46c4ea_5a7054e5411bb75a770d1d3c498a5460.png)

## Granting Promotionals

:::info Looking for the REST API endpoint?
Grant and revoke promotional entitlements via our REST API as described [here](https://docs.revenuecat.com/reference/grant-a-promotional-entitlement).
:::

To give a user promotional access to an entitlement choose the [entitlement name](/getting-started/entitlements) and duration and click 'Grant'. You can grant multiple entitlements if you have different levels of access. You must be using RevenueCat [Entitlements](/getting-started/entitlements) to grant promotionals.

![](/images/5014886-Screenshot_2023-03-27_at_2.05.51_PM_8b5058a6c31dbdc51f0552225a5fd7d8.png "Screenshot 2023-03-27 at 2.05.51 PM.png")

Granting an entitlement from the customer page will go into effect immediately, but you may need to [refresh CustomerInfo](/getting-started#section-get-subscription-status) on the client to get the latest active entitlements. The promotional access will automatically be revoked after the selected duration. Note that promotional entitlements in the customer timeline will not show as "sandbox" transactions.

:::info
Promotional entitlements will be prefixed with "rc_promo" in the customer dashboard and in SDKs.
:::

## Removing Promotional Subscriptions

Granted entitlements will automatically be removed after expiration. To remove access to an entitlement early, click the :fa-times-circle: icon next to the **Granted Entitlement** name.

## Next Steps

- [Attributes ➡️](/dashboard-and-metrics/customers-group/attributes)
