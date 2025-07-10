---
title: Active Entitlements
slug: active-entitlements
hidden: false
---

The 'Entitlements' card gives you a quick glance at the current entitlement status for a user. You can see which product(s) or [Entitlement(s)](/getting-started/entitlements) have been purchased, and when they'll renew or cancel.

Like the 'Customer History' view, this card is generated from current purchase receipt saved for the user.

![](/docs_images/customers/customer-entitlements.png)

:::info Grace periods will extend expiration dates
If the expiration date seems further out then you expect, e.g. 16 days past when your monthly subscription should renew, that indicates the user is in a grace period due to a failed payment. The store will attempt to re-charge the user there's no action to take on your part.
:::

## Transferring entitlements

You can manually [transfer entitlements](/getting-started/restoring-purchases#transfer-purchases) from one customer to another via the dashboard.

1. In the Entitlements section of the customer profile, click **Transfer**.

2. Enter the user to whom you want to transfer the entitlements.

3. Click **Find**. After a few moments the user should appear in the **Destination Customer details** section.

4. Review the transfer details and click **Transfer Entitlements** to perform the transfer. If you want to cancel the transfer use the back button in your browser.

5. Click **Transfer Entitlements** in the confirmation dialog.

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

Google Play and Web Billing (formerly RevenueCat Billing) purchases can be refunded directly through the RevenueCat dashboard. Granting a refund will immediately expire the subscription and remove any entitlement access. By refunding directly through RevenueCat you can ensure that refunds are accounted for immediately in all charts and integrations.

Web Billing subscriptions and Google Play subscriptions in the trial period can also be cancelled, which means that they will not renew at the next expiration date.

The entry point for refunding and cancelling purchases is the "..." menu on the subscription in the "Entitlements" card of the customer profile.

![](/docs_images/web/web-billing/refunding-payments.png)

Apple doesn’t allow developers to grant refunds themselves, only through Apple customer support. However, Apple refunds are tracked with RevenueCat and accounted for in all charts and integrations.

## Next Steps

- [Granted entitlements](/dashboard-and-metrics/customer-history/promotionals)
