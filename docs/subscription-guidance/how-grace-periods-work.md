---
title: Billing Issues & Grace Periods
slug: how-grace-periods-work
excerpt: What happens when a user encounters a billing issue
hidden: false
---

If a customer is unable to complete their purchase due to an invalid or expired payment method, supported stores offer an optional grace period. Grace periods allow the customer to retain access to their subscription purchase for a short period of time while the store attempts to renew the subscription. This prevents disruption for paid features, and can improve the user experience for your app.

Grace Periods are optional and customizable on certain platforms.

| Store                  | Required?        | Duration                                                                                                                                             |
| :--------------------- | :--------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------- |
| App Store              | Optional         | [Customizable](https://developer.apple.com/help/app-store-connect/manage-subscriptions/enable-billing-grace-period-for-auto-renewable-subscriptions) |
| Google Play            | Optional         | [Customizable](https://developer.android.com/google/play/billing/subscriptions)                                                                      |
| RevenueCat Web Billing | Optional         | Customizable                                                                                                                                         |
| Stripe                 | Optional         | Customizable                                                                                                                                         |
| Amazon                 | ❌ Not supported | N/A                                                                                                                                                  |

## Encountering Billing Issues

As mentioned, billing issues occur when a user is unable to complete a subscription purchase due to an invalid or expired payment method. When this occurs, RevenueCat sends a `BILLING_ISSUE` event to webhooks, integrations, and the customer history page.

RevenueCat will only send **one** billing issue event -- additional payment failures won't trigger additional billing issue events, unless a renewal is successful between payment failures or the subscription ends and is restarted.

In rare cases, if the billing issue occurs immediately during the initial purchase of a product, it may not be detected by RevenueCat and included in the user's purchase history, even though the store indicates that a billing issue occurred on their end. This is because the purchase token was never created by the store, and thus, could not be sent to RevenueCat to be tracked.

### SDK Prompt

Starting in iOS 16.4+, a system-sheet will automatically be displayed if a user encounters a billing issue, with a prompt for the customer to update their payment method. You can test this behavior by following Apple's [instructions](https://developer.apple.com/documentation/storekit/in-app_purchase/testing_in-app_purchases_with_sandbox/testing_failing_subscription_renewals_and_in-app_purchases#4182397).

1. Make a sandbox purchase on a real device using iOS 16.4+
2. Once the purchase is completed, background or close the app
3. Disable renewals in `Settings -> App Store -> Sandbox Account -> Manage`
4. Wait a few minutes ([depending on the product duration](https://www.revenuecat.com/blog/engineering/the-ultimate-guide-to-subscription-testing-on-ios/#h-subscription-renewal-rates-in-the-developer-sandbox)) and allow the subscription to attempt renewal. Renewal will fail.
5. Relaunch or reopen your app, and see the billing issue prompt

### Stripe

Stripe provides some additional options for how to handle what occurs after a customer encounters an issue with their payment. You can find these options in your Stripe dashboard under **Settings > Billing > Subscriptions and email > Manage failed payments**. In each case, we will only generate one billing issue event.

1. cancel the subscription: RevenueCat will **revoke access** and generate a `CANCELLATION` event with the reason set to `BILLING_ERROR`.
2. mark the subscription as unpaid: RevenueCat will **revoke access** but continues generating `RENEWAL` events with a zero price while the invoice remains open.
3. leave the subscription past-due: RevenueCat **will not revoke access** and will continue generating `RENEWAL` events with a zero price. The subscription remains in place but no further payments are attempted.

If you have not made an update to this setting, the default behavior is to cancel the subscription after all retries fail.

## Entering a Grace Period

When a subscription enters a grace period, RevenueCat detects the change automatically. Users will retain access to their subscriptions, but we'll immediately send events indicating the subscription has been **cancelled**. These subscriptions are considered cancelled because they are now past due, but will not be considered expired until the end of their grace period. During this time, a subscription may convert to paid through additional billing attempts from the store or by the customer updating their billing information.

### API, Events, and Webhooks

To detect grace periods in [webhook](/integrations/webhooks) events, watch for the value of `grace_period_expiration_at_ms`. This property is only valid for `BILLING_ISSUE` events.

To detect grace periods in the `GET /subscriber` [endpoint](https://www.revenuecat.com/reference/subscribers), watch for the value of `grace_period_expires_date` on a subscription object and compare it to the current date. This property will be `null` if the subscription is not in a grace period.

Once a user corrects their payment method, RevenueCat will send a renewal event. This will reset the `grace_period_expires_date` property to `null` in the `GET /subscriber` endpoint.

:::info Stripe and Grace Periods
The property `grace_period_expires_date` will always be null for Stripe subscriptions, even those in a billing retry period. This is due to how Stripe creates transactions - when a payment fails, the grace period is already included in the expiration date of the new transaction. If all payment retries fail, `expires_date` will be updated.
:::

### Dashboard

Customers who enter into a grace period will have events added to their [Customer History](/dashboard-and-metrics/customer-history/basic-information).

![Grace Period](/docs_images/products/subscriptions/grace-periods.png)

Additionally, subscriptions that are currently in a grace period will still be considered "active," since the customer retains access to their entitlement throughout their grace period. Distinct customers who are currently in a grace period can be counted through Customer Lists using the "Billing Issue Trial" and "Billing Issue" statuses.
