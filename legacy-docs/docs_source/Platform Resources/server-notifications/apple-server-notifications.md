---
title: Apple App Store Server Notifications
slug: apple-server-notifications
excerpt: Sending App Store server notifications to RevenueCat
hidden: false
---
RevenueCat does not require server notifications from the App Store, however doing so can speed up webhook and integration delivery times and reduce lag time for [Charts](doc:charts).

# Setup Instructions

[Apple server-to-server notifications](https://developer.apple.com/documentation/storekit/in-app_purchase/enabling_server-to-server_notifications) should be set up in App Store Connect with the URL provided in the RevenueCat dashboard.

1. Navigate to your iOS app under ** Project settings > Apps** in the RevenueCat dashboard.
2. Scroll to the **Apple Server to Server notification settings** section, and copy the entire URL provided under **Apple Server Notification URL**.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/61b718f-Screen_Shot_2021-12-01_at_11.34.04_AM.png",
        "Screen Shot 2021-12-01 at 11.34.04 AM.png",
        1208,
        134,
        "#efefef"
      ],
      "sizing": "80"
    }
  ]
}
[/block]
3. Log in to **[App Store Connect](https://appstoreconnect.apple.com/)** and select your app.
4. Under the **App Information > App Store Server Notifications** section, paste the entire URL from RevenueCat in both the **Production Server URL** field and the **Sandbox Server URL** field. You can use either *Version 1* or *Version 2* notifications, but *Version 2* notifications are recommended to use features such as [auto-detecting price changes](https://www.revenuecat.com/docs/price-changes).
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/f870a23-Screen_Shot_2021-11-03_at_10.03.27_AM.png",
        "Screen Shot 2021-11-03 at 10.03.27 AM.png",
        1252,
        940,
        "#eeeeee"
      ],
      "sizing": "80",
      "border": true
    }
  ]
}
[/block]
# Considerations
[block:callout]
{
  "type": "info",
  "title": "Only one server notification URL supported",
  "body": "Apple supports separate URLs for production as well as sandbox purchases, but only allows one of each. You should enter the RevenueCat URL for both of these fields if you don't want to receive these notifications on your own server.\n\nIf you want to also receive these notifications on your own server for one or both environments, see our guide on [setting up RevenueCat to forward the notifications to your server](doc:apple-server-notifications#setting-up-revenuecat-to-forward-apple-notifications-to-your-server) below."
}
[/block]

[block:callout]
{
  "type": "success",
  "title": "Apple S2S notifications update subscriptions for existing users",
  "body": "If RevenueCat receives a notification for a user that doesn't have any purchases in RevenueCat, a 200 code will be sent and the request will be ignored, so the last received notification timestamp won't be updated. Keep this in mind when forwarding events yourself."
}
[/block]
# [Option 1 (recommended)] Setting up RevenueCat to forward Apple notifications to your server

If you still want to receive Apple's notifications to your server, you can configure RevenueCat to forward them to a URL that you specify.

1. Navigate to your iOS app under ** Project settings > Apps** in the RevenueCat dashboard.
2. Scroll to the **Apple Server to Server notification settings** section, and enter your server's URL in **Apple Server Notification Forwarding URL**.
3. Click **Save Changes** in the top right corner.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/43c4fb7-2023-02-06_16.40.29_app-development.revenuecat.com_012d0490f18d.png",
        "2023-02-06 16.40.29 app-development.revenuecat.com 012d0490f18d.png",
        611,
        124,
        "#000000"
      ],
      "caption": "This will forward any Apple's server to server notifications that RevenueCat receives to \"my-server.com\"."
    }
  ]
}
[/block]

[block:callout]
{
  "type": "info",
  "body": "If your server needs to have specific hostnames or IP addresses on its allowlist to receive App Store Server Notifications, you can add the hostname `dps.iso.aple.com` and IP addresses `17.58.0.0/18` and `17.58.192.0/18`. These IP addresses are same for sandbox and production."
}
[/block]
# [Option 2] Forwarding Apple notifications to RevenueCat
[block:callout]
{
  "type": "warning",
  "title": "Use RevenueCat's forwarding functionality instead",
  "body": "While you can forward Apple S2S notifications to RevenueCat, we strongly recommend setting RevenueCat as the S2S notification URL in App Store Connect and letting RevenueCat forward the events to your server to ensure that the events are sent correctly."
}
[/block]
Apple only supports a single server notification URL. If you're already using the notifications on your server and are unable to [set up RevenueCat's forwarding URL](doc:apple-server-notifications#setting-up-revenuecat-to-forward-apple-notifications-to-your-server), you can still forward the payload to the **Apple Server Notification URL** provided in the app settings of your RevenueCat project. 

Here's how we recommend doing this:

## 1. Configure your server to receive Apple notifications

First, make sure your server meets the criteria outlined in Apple's [Enabling App Store Notifications](https://developer.apple.com/documentation/storekit/in-app_purchase/subscriptions_and_offers/enabling_app_store_server_notifications) page or you won't receive notifications.

Then, in your app settings on App Store Connect, enter a subscription status URL that links to your server (see step 4 of the [Setup Instructions](doc:apple-server-notifications#setup-instructions) above).

## 2. Receive Apple notifications on your server

Apple sends notifications as JSON data via an HTTP POST request to the URL you provided on App Store Connect. 

Wherever you handle this POST request in your code, be sure to respond to Apple with a status code. Responding with a 4xx or 5xx status code will permit Apple to retry the post a few more times.

## 3. Forward Apple notifications to RevenueCat

As soon as your server successfully receives a notification, send the payload to RevenueCat. To do this, make an HTTP POST request to the **Apple Server Notification URL** provided in the app settings of your RevenueCat project. 

The payload should be passed along **as-is** in the data value of your request. Any manipulation you want to do with the data should happen after forwarding to RevenueCat.

Here's a basic example of these steps using Node, Express, and Axios:
[block:file]
[
  {
    "language": "javascript",
    "name": "",
    "file": "code_blocks/📙 Platform Resources/server-notifications/apple-server-notifications_1.js"
  }
]
[/block]
