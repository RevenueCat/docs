---
title: Active Entitlements
slug: active-entitlements
hidden: false
---

The 'Entitlements' card gives you a quick glance at the current entitlement status for a user. You can see which product(s) or [Entitlement(s)](/getting-started/entitlements) have been purchased, and when they'll renew or cancel.

Like the 'Customer History' view, this card is generated from current purchase receipt saved for the user.

![](/images/customer-history-entitlements-card.png)

:::info Grace periods will extend expiration dates
If the expiration date seems further out then you expect, e.g. 16 days past when your monthly subscription should renew, that indicates the user is in a grace period due to a failed payment. The store will attempt to re-charge the user there's no action to take on your part.
:::

## Transferring entitlements

You can manually [transfer entitlements](/getting-started/restoring-purchases#transfer-purchases) from one customer to another via the dashboard.

1. In the Entitlements section of the customer profile, click **Transfer**.

![](/images/customer-history-transfer.png)

2. Enter the user to whom you want to transfer the entitlements.

![](/images/6f6d71e-2023-02-28_20.52.04_app.revenuecat.com_3e979e697aa5_09180602aa5ba237ce864b8b9b3de582.png "2023-02-28 20.52.04 app.revenuecat.com 3e979e697aa5.png")

3. Click **Find**. After a few moments the user should appear in the **Destination Customer details** section.

![](/images/01a530e-2023-02-28_20.53.56_app.revenuecat.com_3eb512a438a0_c0df32d4b3720736d86186a06a76eec0.png "2023-02-28 20.53.56 app.revenuecat.com 3eb512a438a0.png")

4. Review the transfer details and click **Transfer Entitlements** to perform the transfer. If you want to cancel the transfer use the back button in your browser.

![](/images/8806692-2023-02-28_20.57.19_docs-origin.revenuecat.com_f88e0b13997d_d61978df15e08ee6f135f546ad1addc2.png "2023-02-28 20.57.19 docs-origin.revenuecat.com f88e0b13997d.png")

5. Click **Transfer Entitlements** in the confirmation dialog.

![](/images/4c88578-2023-02-28_20.59.13_app.revenuecat.com_3183fb3aa62f_1c3b9e4eb41c514f878e2533ce097462.png "2023-02-28 20.59.13 app.revenuecat.com 3183fb3aa62f.png")

6. If the transfer is successful, you will be redirected to the destination customer's profile.

:::info
Transferring an entitlement will:

1. Generate a transfer event in both customer profiles.
2. Send a transfer event to any integrations and webhooks you have configured.

:::

:::info
Transferring entitlements works with the block-restore behavior
:::

## Refunding and Cancelling Purchases

Google Play and Web Billing purchases can be refunded directly through the RevenueCat dashboard. Granting a refund will immediately expire the subscription and remove any entitlement access. By refunding directly through RevenueCat you can ensure that refunds are accounted for immediately in all charts and integrations.

Web Billing subscriptions and Google Play subscriptions in the trial period can also be cancelled, which means that they will not renew at the next expiration date.

The entry point for refunding and cancelling purchases is the "..." menu on the subscription in the "Entitlements" card of the customer profile.

![](/images/refunding-and-cancelling.png)

Apple doesn’t allow developers to grant refunds themselves, only through Apple customer support. However, Apple refunds are tracked with RevenueCat and accounted for in all charts and integrations.

## Next Steps

- [Granted entitlements](/dashboard-and-metrics/customer-history/promotionals)
