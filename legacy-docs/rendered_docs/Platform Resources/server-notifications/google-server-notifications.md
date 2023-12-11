---
title: Google Real-Time Developer Notifications
slug: google-server-notifications
excerpt: Sending Google Play server notifications to RevenueCat
hidden: false
categorySlug: resources
order: 1
parentDoc: 649983b4c31b2e000a3c1885
---
RevenueCat does not require anything further than service credentials to communicate with Google, but setting up [real-time server notifications](https://developer.android.com/google/play/billing/realtime_developer_notifications) is a recommended process that can speed up webhook and integration delivery times and reduce lag time for [Charts](https://www.revenuecat.com/docs/charts). 

# Setup Instructions

## 1. Ensure Google Cloud Pub/Sub is enabled for your project.

- Where: Google Cloud Console

You can enable it [here](https://console.cloud.google.com/flows/enableapi?apiid=pubsub). Make sure that you're in the correct project, the same one that you set up your [service account and credentials](https://www.revenuecat.com/docs/creating-play-service-credentials) in.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/b4cf119-Dev_Step1.gif",
        null,
        "Google Cloud Console"
      ],
      "align": "center",
      "caption": "Google Cloud Console"
    }
  ]
}
[/block]

## 2. Choose a Pub/Sub Topic ID

- Where: RevenueCat Dashboard
- Project Page :fa-arrow-right: Google Play App Settings

Directly beneath where the Service Credentials JSON object is added, a list of possible Pub/Sub topics to use will be visible. You can either choose an existing one, or let RevenueCat create a new one. 

Click '**Connect to Google**'. You should see a generated Google Cloud Pub/Sub Topic ID, as in the image below. If you don’t, try refreshing the page to get it to populate. Copy this topic ID to your clipboard.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/8d0e5d0-Dev_Step2.gif",
        null,
        "RevenueCat Dashboard"
      ],
      "align": "center",
      "caption": "RevenueCat Dashboard"
    }
  ]
}
[/block]

## 3. Add Topic ID to Google Play

- Where: Google Play Console
- Google Play Homepage :fa-arrow-right: App Dashboard :fa-arrow-right: 'Monetize' section of sidebar :fa-arrow-right: Monetization Setup

In Google Play console, head to the dashboard for your app and find the '**Monetize**' section of the sidebar. Choose '**Monetization Setup**'. In the Real-time developer notifications section, paste your copied topic ID next to '**Topic name**'. Be sure to Save Changes at the very bottom right.

If you don't see any errors, your real-time developer notifications should be ready to go!

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/f875306-Dev_Step3.gif",
        null,
        "Google Play Console"
      ],
      "align": "center",
      "caption": "Google Play Console"
    }
  ]
}
[/block]

## Send Test Notification

- Where: Google Play Console & RevenueCat Dashboard
- Google Play Homepage :fa-arrow-right: App Dashboard :fa-arrow-right: 'Monetize' section of sidebar :fa-arrow-right: Monetization Setup
- RevenueCat Project Page :fa-arrow-right: Google Play App Settings

There is an option in Google Play to send a test notification. This is a great way to verify that Google Pub/Sub is correctly connected to your RevenueCat account.

Click the '**Send test notification**' button under the topic name in the '**Monetization Setup**' section.

Once that test notification is sent, you can go back to your app config on the RevenueCat dashboard where you connected to Google to enable real-time notifications. If the configuration was successful, you should see a "Last received" label with a recent timestamp.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/f97e8f5-TestNotif.gif",
        null,
        "Google Play Console / RevenueCat Dashboard"
      ],
      "align": "center",
      "caption": "Google Play Console / RevenueCat Dashboard"
    }
  ]
}
[/block]

# Considerations

> ❗️ Errors when connecting?
> 
> If you're getting an error when connecting to Google for [Platform Server Notifications](doc:google-server-notifications) from the RevenueCat dashboard, use our [Checklist](https://www.revenuecat.com/docs/google-play-checklists#google-real-time-developer-notifications-checklist) to ensure you've hit every step, or use our [error handling guide](https://www.revenuecat.com/docs/creating-play-service-credentials#error-handling) to troubleshoot.

> 🚧 Service Credentials take ~36hrs to go into effect
> 
> If you receive a credentials error, make sure you've waited at least 36hrs after creating your [Google Service Credentials](creating-play-service-credentials) before connecting to Google Real-Time Developer Notifications.

> 📘 
> 
> If you need to use an existing Pub/Sub topic with RevenueCat, [contact support](https://app.revenuecat.com/settings/support).