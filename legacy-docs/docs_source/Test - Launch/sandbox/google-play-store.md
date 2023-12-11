---
title: Google Play Store
slug: google-play-store
excerpt: Testing purchases in Play Store Sandbox
hidden: false
---
[block:callout]
{
  "type": "success",
  "body": "This section assumes you've followed our [Quickstart](doc:getting-started-1) section of our Getting Started guide to install and configure our SDK."
}
[/block]
# Use a real device

We have been testing on emulators successfully but Google recommends using a real device. If you are using an emulator, make sure it has Google Play Services installed.

# Create a test user and configure licensing testing

In order to be able to test the app in the next steps of the development you are going to need to use a test user. This test user will be the user that you logged in first in your Android testing device. Note that the only way to changing the primary account on a device is to do a factory reset. 

In the sidebar, click on **Settings** > **License testing**.  Add here the account you are using in your real device (the account you are logged in with).
![](https://files.readme.io/4de80ce-2020-10-08_21.47.36_play.google.com_9b79b3809c7c.png "2020-10-08 21.47.36 play.google.com 9b79b3809c7c.png")
# Create a closed track and add a tester to it

You are going to need to publish a signed version of the app into a closed track. If you haven’t created a closed track yet, you can create one in the **Closed testing** section of the Testing menu. 
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/f5e66e8-2020-10-08_21.49.39_play.google.com_f16e0da2a615.png",
        "2020-10-08 21.49.39 play.google.com f16e0da2a615.png",
        2148,
        1061,
        "#f9f9fa"
      ],
      "border": false,
      "sizing": "smart"
    }
  ]
}
[/block]
When creating the closed track, you are given the chance to create a list of testers. Go ahead and create a list and name it Testers.
![](https://files.readme.io/a1cd5a9-2020-10-08_22.02.36_play.google.com_683d7b040a55.png "2020-10-08 22.02.36 play.google.com 683d7b040a55.png")
Add again the email account you are using in your testing device to the list of tester emails, press Enter, and click **Save changes** 
![](https://files.readme.io/ce8da10-2020-10-08_22.05.12_play.google.com_5bea8ef91d72.png "2020-10-08 22.05.12 play.google.com 5bea8ef91d72.png")
Open the Opt-in URL in your testing device (or any browser that’s logged in with that testing user) to make the user a tester. You can send the URL to your device via email, for example. 
[block:callout]
{
  "type": "warning",
  "title": "You Must Open the Opt-in URL",
  "body": "Opening the opt-in URL marks your Play account for testing. If you don't complete this step, products will not load."
}
[/block]

[block:callout]
{
  "type": "warning",
  "title": "Check Your Application ID",
  "body": "Often developers will use a different application ID for their test builds. This will cause you problems since Google Play Services uses the application ID to find your in-app purchases."
}
[/block]

[block:callout]
{
  "type": "warning",
  "title": "Add a PIN to the test device if needed",
  "body": "There are cases where a test user may be allowed to purchase consumables, but not subscriptions, if the test device does not have a PIN. This may manifest in a cryptic \"Something went wrong\" message. \nMake sure that the test device has a PIN, and that the device is logged into Google Play Store."
}
[/block]

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/b366b77-2020-10-08_22.09.01_play.google.com_e5789268ce83.png",
        "2020-10-08 22.09.01 play.google.com e5789268ce83.png",
        1550,
        1529,
        "#fbfafb"
      ],
      "caption": "You must open one of these urls while signed in with the Play account you're testing with."
    }
  ]
}
[/block]
Opening the link in the browser will show a web similar to this, with a become tester button. Press that button and your user will be able to make testing purchases on your testing device.
![](https://files.readme.io/c233a46-2020-10-08_22.14.44_play.google.com_2ebda75bfc29.png "2020-10-08 22.14.44 play.google.com 2ebda75bfc29.png")
If you need more help setting this up, you can refer to Googles guide on creating testers [here](https://developer.android.com/google/play/billing/billing_testing#testing-purchases).
[block:callout]
{
  "type": "info",
  "title": "Make the release available in at least one country",
  "body": "If your app is completely new, you may need to make your app available to your country/region. To do this, go to **Testing** > **Closed testing**, click on your test track, and go to **Countries / regions** to add countries and regions."
}
[/block]
# Upload a signed apk to the closed track

Generate a signed APK or use Android App Bundle to upload a signed APK to the alpha track you just created. You don’t even need to roll out the release. Just upload the APK. You can find more information about this in this support article [https://support.google.com/googleplay/android-developer/answer/7159011](https://support.google.com/googleplay/android-developer/answer/7159011) 

# Make a purchase

Before you can make a purchase, make sure your release has been approved and  available.
![](https://files.readme.io/08a3ebd-Screen_Shot_2020-10-22_at_12.43.43_AM.png "Screen Shot 2020-10-22 at 12.43.43 AM.png")
Build and run your app on your test device (you don't need to sign it). You should be able to complete all purchases.

# Verify transaction appears in dashboard

After a purchase is successful, you should be able to view the transaction immediately in the RevenueCat dashboard. If the purchase does not appear in the dashboard, it's **not** being tracked by RevenueCat.
![](https://files.readme.io/f12eaf9-2020-10-08_22.25.12_app.revenuecat.com_1a76f7a72226.png "2020-10-08 22.25.12 app.revenuecat.com 1a76f7a72226.png")

[block:callout]
{
  "type": "info",
  "body": "Make sure the the *View Sandbox Data* toggle is enabled in the navigation bar.",
  "title": "Make sure Sandbox Data is enabled"
}
[/block]
# Working with subscriptions

In the the sandbox environment, subscription renewals happen at an accelerated rate, and auto-renewable subscriptions renew a maximum of six times. This enables you to test how your app handles a subscription renewal, a subscription lapse, and a subscription history that includes gaps.

Because of the accelerated expiration and renewal rates, sometimes not all renewals are reflected in the RevenueCat customer dashboard.
[block:parameters]
{
  "data": {
    "h-0": "Production subscription period",
    "h-1": "Sandbox subscription renewal",
    "0-0": "1 week",
    "1-0": "1 month",
    "3-0": "6 months",
    "2-0": "3 months",
    "4-0": "1 year",
    "0-1": "5 minutes",
    "1-1": "5 minutes",
    "2-1": "10 minutes",
    "3-1": "15 minutes",
    "4-1": "30 minutes"
  },
  "cols": 2,
  "rows": 5
}
[/block]
# Testing Cards
While testing, you can configure your test users to either use the test cards provided by Google or test on a real card.
[block:parameters]
{
  "data": {
    "h-0": "Debug/release build",
    "h-1": "Added as tester on closed track",
    "h-2": "Added as license tester",
    "h-3": "Card Selection",
    "0-0": "Debug",
    "1-0": "Release",
    "2-0": "Debug",
    "3-0": "Debug",
    "4-0": "Release",
    "5-0": "Release",
    "0-1": "✅",
    "1-1": "✅",
    "3-1": "✅",
    "5-1": "✅",
    "2-1": "❌",
    "4-1": "❌",
    "5-2": "❌",
    "3-2": "❌",
    "0-2": "✅",
    "1-2": "✅",
    "2-2": "✅",
    "4-2": "✅",
    "0-3": "Test card",
    "1-3": "Test card",
    "2-3": "Item attempting to purchase could not be found",
    "3-3": "Add new card (real purchase)",
    "4-3": "Unable to download app",
    "5-3": "Add new card (real purchase)"
  },
  "cols": 4,
  "rows": 6
}
[/block]
# Deleting test users

When testing, it may be helpful to delete a customer and all their receipts from RevenueCat to simulate a new installation. You can delete a specific user from the customer dashboard in RevenueCat. 

Note: Deleting users in RevenueCat does not delete underlying store account purchases.

See our [docs on deleting users](doc:customers#section-delete-users) for more information.

# Next Steps

For more information, take a look at the official Google documentation:
**[Google Play Store: Testing Google Play Billing](https://developer.android.com/google/play/billing/billing_testing)**