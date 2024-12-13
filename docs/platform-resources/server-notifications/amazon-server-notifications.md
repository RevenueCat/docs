---
title: Amazon Appstore Real-time Notifications
slug: amazon-server-notifications
excerpt: Sending Amazon Appstore real-time notifications to RevenueCat
hidden: false
---

RevenueCat does not require server notifications from Amazon Appstore, however doing so can speed up webhook and integration delivery times and reduce lag time for [Charts](/dashboard-and-metrics/charts).

:::warning Receipt must exist in RevenueCat
Amazon Appstore Real-time Notifications only work if the receipt exists in RevenueCat when the event is dispatched from Amazon Appstore. If the receipt doesn't exist, the notification will be ignored.
:::

## Setup Instructions

1. Navigate to your **Amazon app settings** in the RevenueCat dashboard by selecting your app from **Project Settings > Apps**.
2. Expand the **Amazon Real-time Notifications settings** section and copy the endpoint provided under **Amazon Real-time Notifications URL**.

![Copy the Amazon Real-time Notifications URL from RevenueCat](/images/amazon/amazon_s2s_copy_url.png "Copy the Amazon Real-time Notifications URL from RevenueCat")

3. Go to the [Amazon Appstore Console](https://developer.amazon.com/apps-and-games/console/apps/list.html) and select your app.

4. Click **App Services** in the left sidebar and under **Real-time Notifications**, expand **Add an Endpoint**.

![Navigate to App Services in the Amazon Appstore Console](/images/amazon/amazon_s2s_appstore_menu.png "Navigate to App Services in the Amazon Appstore Console")

5. **Paste** the URL of the endpoint you copied from the RevenueCat dashboard and click **Submit**.

![Submit the endpoint URL in Amazon Appstore Console](/images/amazon/amazon_s2s_appstore_submit_url.png "Submit the endpoint URL in Amazon Appstore Console")

6. In a few seconds, a label should appear saying **Verified**, confirming that the endpoint was added successfully.

![Endpoint verification status in Amazon Appstore Console](/images/amazon/amazon_s2s_appstore_verified.png "Endpoint verification status in Amazon Appstore Console")

7. In the RevenueCat dashboard, you should see a **Last received at** timestamp for the endpoint too.

![Last received timestamp in RevenueCat dashboard](/images/amazon/amazon_s2s_last_received_at.png "Last received timestamp in RevenueCat dashboard")

## Troubleshooting

If you don't see the **Verified** label in the Amazon Appstore Console, confirm that you copied the correct URL from the RevenueCat dashboard and click **resend** to try again.

![Resend notifications option in Amazon Appstore Console](/images/amazon/amazon_s2s_appstore_resend.png "Resend notifications option in Amazon Appstore Console")

If the issue persists, contact [support](https://app.revenuecat.com/settings/support).
