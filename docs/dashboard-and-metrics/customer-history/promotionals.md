---
title: Granted Entitlements
slug: promotionals
hidden: false
---

Granted Entitlements allow you to give a user access to premium content for a specific amount of time without requiring them to make a purchase or redeem a promo code. This can be useful for allowing beta users to preview content for free or resolving customer support issues. You must be using RevenueCat [Entitlements](/getting-started/entitlements) to use this functionality.

:::info Granted entitlements won't affect billing
Granted entitlements are a RevenueCat specific feature and work independently of the App Store, Play Store, Amazon, and Stripe billing and will never cancel a user's subscription, charge a user, issue a refund, or convert to a paid subscription.

Granted entitlements don't stack on top of store subscriptions, and are applied alongside them instead.
:::

## Granting Entitlement access

To grant a customer access to an entitlement, start by clicking the "Grant" button in the "Entitlements" card in the right hand column of the Customer profile.

![Image](/docs_images/customers/grant-entitlement.png)

First choose the [entitlement name](/getting-started/entitlements). Next select a preset duration or **Until date** to choose a custom end date. Finally, click **Grant**. You can grant multiple entitlements if you have different levels of access.

Granting an entitlement from the customer page will go into effect immediately, but you may need to [refresh CustomerInfo](/customers/customer-info) on the client to get the latest active entitlements. The access to the entitlement will automatically be revoked after the selected duration. Note that granted entitlements will work in sandbox and production apps, but the transactions they generate are always considered "production".

:::info
Granted entitlements will be prefixed with `rc_promo` in the customer dashboard and in SDKs. For webhooks, they will be sent as production `NON_RENEWING_PURCHASE` events with their store and period type set to `PROMOTIONAL`.
:::

## Removing Granted Entitlements

Granted entitlements will automatically be removed after expiration. To remove access to an entitlement early, use the menu next to the granted entitlement in the Entitlements card on the Customer Profile.

![](/images/customer-history-remove-granted-entitlement.png)

:::info
Please note that the "Sandbox data" toggle should be unchecked to remove entitlements for both production and sandbox users.
:::

## Granting Entitlements through the REST API

Looking to programmatically grant entitlements? View the REST API documentation [here](https://docs.revenuecat.com/reference/grant-a-promotional-entitlement).

## Next Steps

- [Attributes →](/dashboard-and-metrics/customer-history/attributes)
