---
title: Deleting Users
slug: manage-users
hidden: false
---

You can delete a user under the 'Manage' card at the bottom of the page. Deleting a user will also remove all their purchase history for sandbox and production data which could change how charts and reports appear. Deleting users should only be used to remove accounts you may have set up for testing or if the user requests their data to be deleted.

![Careful, this can't be undone!](/images/b42278c-app.revenuecat.com_customers_aec1bada_15343510_2_9f9dfb6021b4afcf7d50c3fe40f8a0ea.png)

Deleting users through the RevenueCat dashboard or API clears out all of their data and is sufficient for GDPR erasure requests.

:::danger Be careful!
Deleting a user with live purchases may have downstream effects on charts and reporting.
:::

:::info Deleting a user from RevenueCat won't cancel mobile or Stripe Web Payments subscriptions
- You can cancel a user's Google Play subscription before deleting them via our [API](https://docs.revenuecat.com/reference#revoke-a-google-subscription).
- It's not possible for you to cancel a user's Apple subscription; this is a limitation of the App Store.
- Stripe Web Payments subscriptions are not canceled automatically, and should be canceled directly in the [Stripe Dashboard](https://support.stripe.com/questions/how-to-pause-payment-collection-or-cancel-subscriptions).
- RevenueCat Billing (web) subscriptions are always canceled immediately when the user is deleted.
:::
