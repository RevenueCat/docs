---
title: Google Real-Time Developer Notifications
sidebar_label: Google RTDN
slug: google-server-notifications
excerpt: Sending Google Play server notifications to RevenueCat
hidden: false
---

RevenueCat does not require anything other than service credentials to communicate with Google, but setting up [real-time server notifications](https://developer.android.com/google/play/billing/realtime_developer_notifications) is a strongly recommended process that can improve price accuracy, speed up webhook and integration delivery times, and reduce lag time for [Charts](/dashboard-and-metrics/charts).

<YouTubeEmbed videoId="hWub02tNdJ0" title="Setting Up Google Real-Time Developer Notifications" />

## Setup Instructions

### 1. Ensure Google Cloud Pub/Sub is enabled for your project.

- Where: Google Cloud Console

You can enable it [here](https://console.cloud.google.com/flows/enableapi?apiid=pubsub). Make sure that you're in the correct project, the same one that you set up your [service account and credentials](/service-credentials/creating-play-service-credentials) in.

![Google Cloud Console](/docs_images/platform-resources/google/rtdn-1.gif)

### 2. Choose a Pub/Sub Topic ID

- Where: RevenueCat Dashboard
- Project Page ➡️ Google Play App Settings

Directly beneath where the Service Credentials JSON object is added, a list of possible Pub/Sub topics to use will be visible. You can either choose an existing one, or let RevenueCat create a new one.

Click '**Connect to Google**'. You should see a generated Google Cloud Pub/Sub Topic ID, as in the image below. If you don’t, try refreshing the page to get it to populate. Copy this topic ID to your clipboard.

![RevenueCat Dashboard](/docs_images/platform-resources/google/rtdn-2.gif)

:::warning Internal Server Error
If you see a server error when clicking "Connect to Google", or see the error `One or more users named in the policy do not belong to a permitted customer` in the logs in Google Cloud Console, "Domain Restricted Sharing" may be on for your Cloud project. This constraint is on by default for organizations created on or after May 3rd, 2024. You can check on this in Google Cloud Console -> "IAM & Admin" -> "Organization Policies" -> "Domain Restricted Sharing". You can choose to turn off this constraint, or make allowances for certain domains, including the service account created to communicate with RevenueCat.
:::

### 3. Add Topic ID to Google Play

- Where: Google Play Console
- Google Play Homepage ➡️ App Dashboard ➡️ 'Monetize' section of sidebar ➡️ Monetization Setup

In Google Play console, head to the dashboard for your app and find the '**Monetize**' section of the sidebar. Choose '**Monetization Setup**'. In the Real-time developer notifications section, paste your copied topic ID next to '**Topic name**' and select 'Subscriptions, voided purchases, and all one-time products' next to **Notification content**. Be sure to Save Changes at the very bottom right.

![Google Play Console Notification Content](/docs_images/platform-resources/google/google-play-real-time-notifications-type-choice.png)

If you don't see any errors, your real-time developer notifications should be ready to go!

![Google Play Console](/docs_images/platform-resources/google/rtdn-3.gif)

### Send Test Notification

- Where: Google Play Console & RevenueCat Dashboard
- Google Play Homepage ➡️ App Dashboard ➡️ 'Monetize' section of sidebar ➡️ Monetization Setup
- RevenueCat Project Page ➡️ Google Play App Settings

There is an option in Google Play to send a test notification. This is a great way to verify that Google Pub/Sub is correctly connected to your RevenueCat account.

Click the '**Send test notification**' button under the topic name in the '**Monetization Setup**' section.

Once that test notification is sent, you can go back to your app config on the RevenueCat dashboard where you connected to Google to enable real-time notifications. If the configuration was successful, you should see a "Last received" label with a recent timestamp. If your test notifications fail, you may need to add and grant the service account `google-play-developer-notifications@system.gserviceaccount.com` the Pub/Sub Publisher role on that specific topic via Permissions -> Add Principal -> add `google-play-developer-notifications@system.gserviceaccount.com` -> give it the role Pub/Sub Publisher. See Google's docs on this [here](https://developer.android.com/google/play/billing/getting-ready#grant-rights).

![Google Play Console / RevenueCat Dashboard](/docs_images/platform-resources/google/rtdn-4.gif)

## Tracking new purchases using Google Cloud Pub/Sub

By default, RevenueCat ignores any Google Cloud Pub/Sub notifications for purchases that have not yet been posted to the RevenueCat API by one of our SDKs or from your own backend. For RevenueCat to track new purchases from Google Cloud Pub/Sub, you can enable the **"Track new purchases from server-to-server notifications"** option in our Dashboard. This allows RevenueCat to process new purchases from server-to-server notifications that are not yet in our system. This ensures all purchases are tracked, even in the case of network issues between your app and RevenueCat’s backend or if your customer was using a version of the app without the RevenueCat SDK.

![](/docs_images/platform-resources/no-code-toggle.png)

### App User ID Detection Methods

RevenueCat provides different ways to detect the App User ID for purchases coming through Google Pub/Sub notifications. The purchase will be associated with the detected App User ID.

1. **Use anonymous App User IDs:** RevenueCat will generate a RevenueCat anonymous App User ID to associate the new purchase with. If you are using the RevenueCat SDK, we **strongly recommend** selecting this option. The RevenueCat SDK automatically sets the `obfuscatedExternalAccountId` as a hashed App User ID, which can cause unintended overwrites.
2. **Use Google's obfuscatedExternalAccountId as App User ID:** RevenueCat will use the [`obfuscatedExternalAccountId`](https://developers.google.com/android-publisher/api-ref/rest/v3/purchases.subscriptionsv2#externalaccountidentifiers) field as the RevenueCat App User ID. Only select this option if you are using both the `obfuscatedExternalAccountId` field as your RevenueCat app user ID **and** are [using RevenueCat without our SDK](/migrating-to-revenuecat/sdk-or-not/sdk-less-integration).

The diagram below will help you determine which App User ID detection method to select based on your setup.

![](/docs_images/platform-resources/google/google_no_code_app_user_id.png)

### Considerations

- If you have selected the "Use Google's obfuscatedExternalAccountId as App User ID" option:
  - If the `obfuscatedExternalAccountId` is set and does not match with an existing subscriber: RevenueCat will create a new subscriber with an app user ID matching the `obfuscatedExternalAccountId` value provided.
  - If the `obfuscatedExternalAccountId` is set and matches with an existing subscriber: The purchase will be linked to that existing subscriber.
  - If the `obfuscatedExternalAccountId` is not set: RevenueCat will generate an anonymous app user ID to associate that purchase with.
- If you are using RevenueCat's SDK to track purchases, we may receive the notification directly from the store before the SDK. When this happens, the App User ID detection method described above will be applied, and then RevenueCat will follow your [restore behavior](/projects/restore-behavior) for the new app user ID sent by the SDK.

:::warning Customer attributes in events
RevenueCat will start processing the purchase as soon as we receive the Google Cloud Pub/Sub notification. If you rely on [RevenueCat customer attributes](/customers/customer-attributes) being attached to the customer before the purchase is created on RevenueCat (e.g: sending customer attributes to your enabled [third-party integrations](/integrations/third-party-integrations) or [webhooks](/integrations/webhooks)), ensure you **send and sync** customer attributes as early as possible. Delays can result in missing attributes for purchases, which may affect third-party integrations or webhook events.
:::

:::warning
If you have enabled [_Keep with original App User ID_](/projects/restore-behavior#keep-with-original-app-user-id) or [_Transfer if there are no active subscriptions_](/projects/restore-behavior#transfer-if-there-are-no-active-subscriptions) transfer behavior or [_Share between App User IDs (legacy)_](/projects/restore-behavior#share-between-app-user-ids-legacy), we highly recommend turning this setting off unless you have selected the "Use anonymous App User IDs" as the App User ID detection method or are [using RevenueCat without our SDK](/migrating-to-revenuecat/sdk-or-not/sdk-less-integration).
:::

## Considerations

:::danger Errors when connecting?
If you're getting an error when connecting to Google for [Platform Server Notifications](/platform-resources/server-notifications/google-server-notifications) from the RevenueCat dashboard, use our [Checklist](/service-credentials/creating-play-service-credentials/google-play-checklists#google-real-time-developer-notifications-checklist) to ensure you've hit every step, or use our [error handling guide](/service-credentials/creating-play-service-credentials#error-handling) to troubleshoot.
:::

:::warning Service Credentials take ~36hrs to go into effect
If you receive a credentials error, make sure you've waited at least 36hrs after creating your [Google Service Credentials](/service-credentials/creating-play-service-credentials) before connecting to Google Real-Time Developer Notifications.
:::

:::info
If you need to use an existing Pub/Sub topic with RevenueCat, [contact support](https://app.revenuecat.com/settings/support).
:::
