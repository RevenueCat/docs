---
title: Deleting Users
slug: manage-users
hidden: false
---

You can delete a user under the 'Manage' card at the bottom of the page. Deleting a user will also remove all their purchase history for sandbox and production data which could change how charts and reports appear. Deleting users should only be used to remove accounts you may have set up for testing or if the user requests their data to be deleted.

![Delete customer](/docs_images/customers/manage-customer.png)

Deleting users through the RevenueCat dashboard or API clears out all of their data and is sufficient for GDPR erasure requests.

:::danger Be careful!
Deleting a user with live purchases may have downstream effects on charts and reporting.
:::

:::info Deleting a user from RevenueCat won't cancel mobile or Stripe Web Payments subscriptions

- You can cancel a user's Google Play subscription before deleting them via our [API](https://docs.revenuecat.com/reference#revoke-a-google-subscription).
- It's not possible for you to cancel a user's Apple subscription; this is a limitation of the App Store.
- Stripe Web Payments subscriptions are not canceled automatically, and should be canceled directly in the [Stripe Dashboard](https://support.stripe.com/questions/how-to-pause-payment-collection-or-cancel-subscriptions).
- Web Billing (formerly RevenueCat Billing) subscriptions are always canceled immediately when the user is deleted.
  :::
