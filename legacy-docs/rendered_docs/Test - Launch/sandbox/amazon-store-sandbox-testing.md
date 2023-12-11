---
title: Amazon Appstore
slug: amazon-store-sandbox-testing
hidden: false
categorySlug: testing
order: 2
parentDoc: 649983b4c31b2e000a3c186e
---
[block:callout]
{
  "type": "success",
  "body": "This section assumes you've followed our [Quickstart](doc:getting-started-1) section of our Getting Started guide to install and configure our SDK."
}
[/block]
There are two options for sandbox testing: an Android device with the Amazon Appstore installed (which can be downloaded [here](https://www.amazon.com/gp/mas/get/amazonapp)), or on an Amazon device running Fire OS, like a Fire TV.

There are three different testing environments in Amazon ([official docs](https://developer.amazon.com/docs/in-app-purchasing/iap-testing-overview.html)):
- App Tester. There's an app called App Tester that can be installed in your testing device and configured with a JSON to load testing products.
- Live App Testing. This is similar to a beta or TestFlight release. You create an APK, upload it to the Amazon Appstore, add testers and start the test.
- Production.
[block:callout]
{
  "type": "warning",
  "body": "While Offerings will load in the App Tester environment, **RevenueCat will only validate purchases in the Live App Testing environment**.",
  "title": "Purchase testing only available in the Live App Testing environment"
}
[/block]
We recommend starting by configuring the App Tester with the same products configured in the RevenueCat dashboard, which will let you get offerings and test how your paywall screen looks. 

When you're ready to test purchasing the products, start a Live App test with a debug APK and download the app in the device via the Amazon Appstore. The installed app should be able to process the purchases and you can test the whole integration. You can also attach the Android Studio debugger to that debug APK downloaded from the Amazon Appstore if needed.

## App Tester

When using Amazon's App Tester app, you'll need to enable sandbox mode. You can enable sandbox mode by following Amazon's guide [here](https://developer.amazon.com/docs/in-app-purchasing/iap-app-tester-user-guide.html#installtester).

## Live App Testing (LAT)

1. Submit your app to the [App Testing Service](https://developer.amazon.com/apps-and-games/test).
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/7ab44b1-f701287-app_testing.png",
        "f701287-app_testing.png",
        820,
        544,
        "#000000"
      ],
      "border": true,
      "sizing": "80"
    }
  ]
}
[/block]
* Submit the APK for your app to LAT.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/b4dbe03-93bdcaa-drop_APK.png",
        "93bdcaa-drop_APK.png",
        562,
        440,
        "#000000"
      ],
      "border": true,
      "sizing": "80"
    }
  ]
}
[/block]
2. Have your group of testers test your app via LAT:
* Go back to your developer dashboard and select your app from the **'App List'**. Here you will select **'Live App Testing'**.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/78caa45-cbab3b9-LAT.png",
        "cbab3b9-LAT.png",
        544,
        574,
        "#000000"
      ],
      "border": true,
      "sizing": "80"
    }
  ]
}
[/block]

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/b540d1a-ed38e3b-start_test.png",
        "ed38e3b-start_test.png",
        2004,
        896,
        "#000000"
      ],
      "border": true,
      "sizing": "80"
    }
  ]
}
[/block]

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/e5712be-70b62c2-confirm_test.png",
        "70b62c2-confirm_test.png",
        718,
        374,
        "#000000"
      ],
      "border": true,
      "sizing": "80"
    }
  ]
}
[/block]
* Click on **'Live App Testing'** in the sidebar again, then click **'Manage testers'** to add your testers.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/28e3256-d8b8f65-manage_testers.png",
        "d8b8f65-manage_testers.png",
        764,
        516,
        "#000000"
      ],
      "border": true,
      "sizing": "80"
    }
  ]
}
[/block]

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/5bf4765-5993e21-add_new_testers.png",
        "5993e21-add_new_testers.png",
        1924,
        446,
        "#000000"
      ],
      "border": true,
      "sizing": "80"
    }
  ]
}
[/block]

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/8277436-ef6f896-add_testers_button.png",
        "ef6f896-add_testers_button.png",
        2082,
        324,
        "#000000"
      ],
      "border": true,
      "sizing": "80"
    }
  ]
}
[/block]

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/70a8930-6ef789e-new_tester.png",
        "6ef789e-new_tester.png",
        1104,
        668,
        "#000000"
      ],
      "border": true,
      "sizing": "80"
    }
  ]
}
[/block]
* Fill out the relevant details and click **'Save'**.

3. Return to **'Live App Testing'** and select **'Edit Testers'**.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/3c31ea7-7487072-edit_testers.png",
        "7487072-edit_testers.png",
        1898,
        436,
        "#000000"
      ],
      "border": true,
      "sizing": "80"
    }
  ]
}
[/block]
* Select the testers you want to test this app and hit **'Save'**.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/09efbc3-0524ef2-add_testers_1.png",
        "0524ef2-add_testers_1.png",
        1936,
        1120,
        "#000000"
      ],
      "border": true,
      "sizing": "80"
    }
  ]
}
[/block]
4. After adding testers, select the three dots, and then click **'Submit'**.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/ba4459c-ed5a521-submit_testing.png",
        "ed5a521-submit_testing.png",
        1914,
        640,
        "#000000"
      ],
      "border": true,
      "sizing": "80"
    }
  ]
}
[/block]
Once this is completed, testers will receive an email containing a link to your app's test page with instructions on how to download and install your app.