---
title: Stripe Server Notifications
slug: stripe-server-notifications
excerpt: Sending Stripe server notifications to RevenueCat
hidden: false
---

RevenueCat does not require server notifications from Stripe, however doing so can speed up webhook and integration delivery times and reduce lag time for [Charts](/dashboard-and-metrics/charts).

:::warning Send Stripe token to RevenueCat
Stripe Server Notifications only work if the receipt exists in RevenueCat when the event is dispatched from Stripe. If the receipt doesn't exist, the event will fail. This includes test events from Stripe.

You'll need to follow our [Stripe Web Payments](/web/integrations/stripe) guide and send your purchase tokens to RevenueCat before proceeding with this guide.
:::

![Required and optional notifications from Stripe](/images/98a0f1c-stripe_notifications_aec74502997f2c0b977a7e6477cb5adf.png)

## Setup Instructions

1. Navigate to your **app settings** in the RevenueCat dashboard by selecting your app from **Project Settings > Apps**.
2. Expand the **Webhook Configuration** section and copy the endpoint provided under **Stripe Webhook Endpoint**.

![Screen Shot 2021-12-01 at 6.01.02 PM.png](/images/85899d3-Screen_Shot_2021-12-01_at_6.01.02_PM_9ba4504cff9f16070175a69d10392592.png)

3. Log in to Stripe and go to the [Webhooks dashboard](https://dashboard.stripe.com/webhooks).
4. Click **Add endpoint**, paste the URL in the **Endpoint URL** field and select the following events:

- customer.subscription.updated
- customer.subscription.deleted
- charge.refunded
- invoice.updated

If you plan to enable the ["Track new purchases from server-to-server notifications"](/platform-resources/server-notifications/stripe-server-notifications#tracking-new-purchases-using-stripe-server-notifications) feature, you should also select the following events:

- customer.subscription.created
- checkout.session.completed

It's important to only select these events.

![Screen Shot 2022-08-08 at 2.24.58 PM.png](/images/c1f3542-Screen_Shot_2022-08-08_at_2.24.58_PM_4d2f0f228412b78eeb63c6255d15d5cf.png)

:::warning
If you choose other events besides what's listed above, our API will respond with an error, and Stripe will eventually disable the webhook.
:::

5. Click **Add endpoint**. You might be asked to enter your password.
6. Copy the **Signing Secret** value and go back to your app settings in the **RevenueCat Dashboard** (select your app under **Project Settings > Apps**).

![Screen Shot 2020-09-23 at 17.44.04.png](/images/3a87ff5-8db7d64-Screen_Shot_2020-09-23_at_17.44.04_fdf72a0e6e4db1ed5f06048c64fb5e55.png)

7. Paste it in the **Stripe Webhook Secret** input field and save. The input field should now look like this:

![](/images/44eb66c-Screen_Shot_2021-12-01_at_5.57.29_PM_47e00510cc368278d0798009e6685cd8.png "Screen Shot 2021-12-01 at 5.57.29 PM.png")

## Tracking new purchases using Stripe Server Notifications

By default, RevenueCat will not process Stripe Server Notifications for any purchases that have not yet been posted to the RevenueCat API from your own backend. For RevenueCat to track new purchases from Stripe Server Notifications, you can enable the **"Track new purchases from server-to-server notifications"** option in our Dashboard. This allows RevenueCat to process new purchases from server-to-server notifications that are not yet in our system. This ensures all purchases are tracked, even in the case of network issues between your server's and RevenueCat's.

![](/images/stripe_no_code_configuration.png)

### App User ID Detection Methods

RevenueCat provides flexible ways to detect the App User ID for purchases coming through Stripe Server Notifications. The Stripe purchase will be associated with the detected App User ID.

1. **Use anonymous App User IDs**: RevenueCat will generate a RevenueCat anonymous App User ID to associate the purchase with.
2. **Use Stripe Customer ID as App User ID**: RevenueCat will use the [Stripe Customer ID field](https://docs.stripe.com/api/customers/object#customer_object-id) as the RevenueCat App User ID. Only select this option if you plan on using Stripe's Customer ID as your customer's App User ID throughout your system.
3. **Read App User ID from a Stripe metadata field**: If you are storing your customer's RevenueCat App User ID through [Stripe metadata](https://docs.stripe.com/metadata), you can specify the metadata field name in the `Metadata field key` textbox. RevenueCat will look for this field in the Checkout Session metadata for checkout sessions and in the Subscription metadata for subscriptions. Ensure that the metadata value will exactly match your RevenueCat App User ID.

:::info Additional information about using Stripe Customer ID as App User ID
In some cases, a Stripe Checkout Session may have a `NULL` value for the Stripe Customer ID. This can happen when a purchase is made by a "guest customer". In these instances, RevenueCat will associate the purchase with an anonymous App User ID.
:::

### Considerations

- If your setup involves you [manually sending us the Stripe token](/web/integrations/stripe#5-send-stripe-tokens-to-revenuecat), RevenueCat may receive the notification from Stripe before your server's request. In this case:
  - The App User ID detection method described above will be applied.
  - RevenueCat will then follow your [transfer behavior](/getting-started/restoring-purchases) for the App User ID provided in your request.

:::warning Customer attributes in events
RevenueCat will start processing the purchase as soon as we receive Stripe's server notification. If you rely on [RevenueCat customer attributes](/customers/customer-attributes) being attached to the customer before the purchase is created on RevenueCat (e.g: sending customer attributes to your enabled [third-party integrations](/integrations/third-party-integrations) or [webhooks](/integrations/webhooks)), you should make sure to **send and sync** the customer attributes as soon as you have them or before the purchase is completed.
:::

## Stripe Webhook 400 Errors

Sometimes you may experience 400 errors when connecting to Stripe. Generally these happen when there is something wrong with your configuration or your Stripe account is not properly connected to RevenueCat.

**Configuration**

Two common configuration errors are with events and the webhook secret.  
One webhook endpoint should contain all of the events, not one endpoint per event, and the only events supported are those listed above in step 4. The Stripe Webhook Secret should be properly set in your RevenueCat project settings in the Stripe Webhook Secret field. If this field is missing or not identical to the secret generated in Stripe, 400 errors will occur.

**Reconnecting Stripe**

When debugging connection issues with Stripe, it may be necessary to reconnect Stripe and RevenueCat. Make sure to use the email that owns RevenueCat project. To reconnect, follow these steps:

1. Disconnect from Stripe in the RevenueCat dashboard
2. Uninstall the app from your Stripe account in the [Stripe Dashboard](https://dashboard.stripe.com/settings/apps/com.revenuecat.customer)
3. In the RevenueCat dashboard, click 'Connect to Stripe'
4. Install the RevenueCat app in the Stripe dashboard
5. Ensure the 'test mode' switch is off in Stripe
6. Click 'Sign in with RevenueCat' in Stripe in the RevenueCat app's settings

:::warning
When reconnecting to Stripe, the webhook secret can change so make sure it is the same in both Stripe and RevenueCat.
:::
