---
title: Active Entitlements
slug: active-entitlements
hidden: false
---

The 'Entitlements' card gives you a quick glance at the current entitlement status for a user. You can see which product(s) or [Entitlement(s)](/docs/entitlements) have been purchased, and when they'll renew or cancel.

Like the 'Customer History' view, this card is generated from current purchase receipt saved for the user.

![2023-02-28 20.40.48 app.revenuecat.com 1030bde9f564.png](https://files.readme.io/765a617-2023-02-28_20.40.48_app.revenuecat.com_1030bde9f564.png)

:::info Grace periods will extend expiration dates
If the expiration date seems further out then you expect, e.g. 16 days past when your monthly subscription should renew, that indicates the user is in a grace period due to a failed payment. The store will attempt to re-charge the user there's no action to take on your part.
:::

## Transferring entitlements

You can manually [transfer entitlements](/docs/restoring-purchases#transfer-purchases) from one customer to another via the dashboard.

1. In the Entitlements section of the customer profile, click **Transfer**.

![](https://files.readme.io/6f6e842-2023-02-28_20.48.12_app.revenuecat.com_1a547ce96b7e.png "2023-02-28 20.48.12 app.revenuecat.com 1a547ce96b7e.png")

2. Enter the user to whom you want to transfer the entitlements.

![](https://files.readme.io/6f6d71e-2023-02-28_20.52.04_app.revenuecat.com_3e979e697aa5.png "2023-02-28 20.52.04 app.revenuecat.com 3e979e697aa5.png")

3. Click **Find**. After a few moments the user should appear in the **Destination Customer details** section.

![](https://files.readme.io/01a530e-2023-02-28_20.53.56_app.revenuecat.com_3eb512a438a0.png "2023-02-28 20.53.56 app.revenuecat.com 3eb512a438a0.png")

4. Review the transfer details and click **Transfer Entitlements** to perform the transfer. If you want to cancel the transfer use the back button in your browser.

![](https://files.readme.io/8806692-2023-02-28_20.57.19_docs-origin.revenuecat.com_f88e0b13997d.png "2023-02-28 20.57.19 docs-origin.revenuecat.com f88e0b13997d.png")

5. Click **Transfer Entitlements** in the confirmation dialog.

![](https://files.readme.io/4c88578-2023-02-28_20.59.13_app.revenuecat.com_3183fb3aa62f.png "2023-02-28 20.59.13 app.revenuecat.com 3183fb3aa62f.png")

6. If the transfer is successful, you will be redirected to the destination customer's profile.

:::info
Transferring an entitlement will:

1. Generate a transfer event in both customer profiles.
2. Send a transfer event to any integrations and webhooks you have configured.

:::

:::info
Transferring entitlements works with the block-restore behavior
:::

## Next Steps

- [Promotionals ](/docs/promotionals)
