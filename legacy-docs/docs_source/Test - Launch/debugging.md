---
title: Debugging
slug: debugging
excerpt: View and understand Purchases logs
hidden: false
---
> 👍 
> 
> This section assumes you've followed our [Quickstart](doc:getting-started) section of our Getting Started guide to install and configure our SDK.

RevenueCat's SDK will log important information and errors to help you understand what is going on behind the scenes. You can enable more detailed debug logs with the `logLevel` property. You can set this immediately in your app while testing, **before you configure Purchases**.

[block:file]
[
  {
    "language": "swift",
    "name": "",
    "file": "code_blocks/🧰 Test - Launch/debugging_1.swift"
  },
  {
    "language": "objectivec",
    "name": "",
    "file": "code_blocks/🧰 Test - Launch/debugging_2.m"
  },
  {
    "language": "kotlin",
    "name": "",
    "file": "code_blocks/🧰 Test - Launch/debugging_3.kt"
  },
  {
    "language": "java",
    "name": "",
    "file": "code_blocks/🧰 Test - Launch/debugging_4.java"
  },
  {
    "language": "javascript",
    "name": "React Native",
    "file": "code_blocks/🧰 Test - Launch/debugging_5.js"
  },
  {
    "language": "javascript",
    "name": "Flutter",
    "file": "code_blocks/🧰 Test - Launch/debugging_6.js"
  },
  {
    "language": "javascript",
    "name": "Unity",
    "file": "code_blocks/🧰 Test - Launch/debugging_7.js"
  },
  {
    "language": "javascript",
    "name": "Cordova",
    "file": "code_blocks/🧰 Test - Launch/debugging_8.js"
  },
  {
    "language": "javascript",
    "name": "Capacitor",
    "file": "code_blocks/🧰 Test - Launch/debugging_9.js"
  }
]
[/block]

> 📘 OS_ACTIVITY_MODE
> 
> On iOS, disabling `OS_ACTIVITY_MODE` in your Xcode scheme will block debug logs from printing in the console. If you have debug logs enabled, but don't see any output, go to `Product -> Scheme -> Edit Scheme...` in Xcode and uncheck the `OS_ACTIVITY_MODE` environment variable.
> 


# Debug UI

RevenueCat's iOS 4.22.0+ and Android 6.9.2+ SDKs provide an overlay for your app that displays relevant details of the SDK configuration. The debug overlay includes each of your configured Offerings, with the option to purchase any of the products and validate access to entitlements.

## iOS / macOS / visionOS

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/03f4de1-simulator_screenshot_0e51e44b-dd33-41f6-9c26-ca3bed754b34.png",
        null,
        "RevenueCat iOS Debug UI"
      ],
      "align": "center",
      "sizing": "240px",
      "border": true
    }
  ]
}
[/block]

[block:file]
[
  {
    "language": "swift",
    "name": "SwiftUI",
    "file": "code_blocks/🧰 Test - Launch/debugging_9.swift"
  },
  {
    "language": "swift",
    "name": "UIKit",
    "file": "code_blocks/🧰 Test - Launch/debugging_10.swift"
  }
]
[/block]

You can export your configuration details in JSON format to share with RevenueCat support if you need to open a support ticket.

Note: The debug UI won't compile for release builds, so you'll need to disable the behavior before archiving for release.

## Android

[block:image]
{
  "images": [
    {
      "image": [
        "https://github.com/RevenueCat/revenuecat-docs/assets/808417/108f3d64-96d1-4bd7-b926-70c6676931be",
        null,
        "RevenueCat Android Debug UI"
      ],
      "align": "center",
      "sizing": "240px",
      "border": true
    }
  ]
}
[/block]

In order to use the overlay, you need to include the debug view library which is available on Maven and can be included via Gradle. Currently, this is only available as a Jetpack Compose Composable.

[![Release](https://img.shields.io/github/release/RevenueCat/purchases-android.svg?style=flat)](https://github.com/RevenueCat/purchases-android/releases)

[block:file]
[
  {
    "language": "groovy",
    "name": "build.gradle",
    "file": "code_blocks/🧰 Test - Launch/debugging_13.groovy"
  }
]
[/block]

Then, you can use it from your own `@Composable`'s like this:

[block:file]
[
  {
    "language": "kotlin",
    "name": "Jetpack Compose",
    "file": "code_blocks/🧰 Test - Launch/debugging_14.kt"
  }
]
[/block]

## Reference

| Debug Section | Details                                                                                                                                                                                        |
| :------------ | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Diagnostics   | The status of your configuration based on access to the RevenueCat API with your API key                                                                                                       |
| Configuration | SDK configuration based on your `configure` parameters                                                                                                                                         |
| Customer Info | The configured users’ IDs as well as entitlement details                                                                                                                                       |
| Offerings     | Each of your configured Offerings, packages, and products. Only includes Offerings with products accessible via StoreKit. See our guide on Empty Offerings if your Offerings aren’t populating |

# Debug Logs

All logs from the SDK are prepended with "`[Purchases]`", you can use this string as a filter in your log output to clearly see the logs that are from _Purchases_.

## Reference

Emojis currently available on the following platforms:

- Android version >= 4.0.2
- iOS version >= 3.10.1

[block:parameters]
{
  "data": {
    "h-0": "Icon(s)",
    "h-1": "Log Level",
    "h-2": "Description",
    "h-3": "Required Actions",
    "0-0": "🍎 ‼️",
    "0-1": "Error  \nWarn",
    "0-2": "Error/warning messages generated from Apple",
    "0-3": "View [error handling doc](doc:errors) if on Error level",
    "1-0": "🤖 ‼️",
    "1-1": "Error  \nWarn",
    "1-2": "Error/warning messages generated from Google",
    "1-3": "View [error handling doc](doc:errors) if on Error level",
    "2-0": "📦 ‼️",
    "2-1": "Error  \nWarn",
    "2-2": "Error/warning messages generated from Amazon",
    "2-3": "View [error handling doc](doc:errors) if on Error level",
    "3-0": "😿 ‼️",
    "3-1": "Error",
    "3-2": "Error messages generated from RevenueCat",
    "3-3": "View [error handling doc](doc:errors)",
    "4-0": "😻",
    "4-1": "Debug",
    "4-2": "Success messages generated from RevenueCat",
    "4-3": "No action required, for informational purposes.",
    "5-0": "😻💰",
    "5-1": "Info",
    "5-2": "RevenueCat received purchase information",
    "5-3": "No action required, for informational purposes.",
    "6-0": "💰",
    "6-1": "Debug",
    "6-2": "Messages related to your products",
    "6-3": "No action required, for informational purposes.",
    "7-0": "ℹ️",
    "7-1": "Debug  \nInfo",
    "7-2": "Messages detailing events that occur in your app cycle",
    "7-3": "No action required, for informational purposes.",
    "8-0": "👤",
    "8-1": "Debug",
    "8-2": "Messages related to a user's App User ID",
    "8-3": "No action required, for informational purposes.",
    "9-0": "⚠️",
    "9-1": "Warn",
    "9-2": "Warning messages about implementation",
    "9-3": "View log message for additional information."
  },
  "cols": 4,
  "rows": 10,
  "align": [
    "left",
    "left",
    "left",
    "left"
  ]
}
[/block]

Messages that have the double red exclamation marks prefix (‼️) attached provides important information regarding your implementation and may require your attention. Paying attention to the source of the message will assist you during the development process. Be sure to address these logs before shipping your app. 

## Sample Output

Below are sample logs generated when setting `debugLogsEnabled = true`. Keep an eye out for any `ERROR` level logs, status codes other than `200`, or any `Invalid Product Identifiers`.

[block:file]
[
  {
    "language": "text",
    "name": "",
    "file": "code_blocks/🧰 Test - Launch/debugging_11.txt"
  },
  {
    "language": "text",
    "name": "With emojis",
    "file": "code_blocks/🧰 Test - Launch/debugging_12.txt"
  }
]
[/block]

# Debugging with Hybrids

Xcode and Android Studio are our recommended IDEs for debugging. If you are a developer who works primarily with one of our hybrid SDKs and have not encountered either before, you can follow these instructions to open your app and find the debug logs to share with RevenueCat Support or your internal team.

## Xcode

[Install Xcode from the App Store.](https://apps.apple.com/us/app/xcode/id497799835?mt=12). Within the main folder of your app, you should have a folder titled `ios` that contains an Xcode project file, ending in `.xcodeproj`. Open this with Xcode from your file finder or from Xcode itself. You should be able to build and run your app in Xcode without additional editing but if you are getting an error, check that all General and Build Settings are filled out. Your debugger output will open automatically upon building within the Xcode window, and from here you can follow the instructions above.

## Android Studio

[Install Android Studio from the Google Developers website.](https://developer.android.com/studio/install) You can open the main folder of your app in Android Studio either from the main menu or from your file finder. There shouldn't be any additional editing needed to build and run your app, although you most likely need to set up a [virtual Android device](https://developer.android.com/studio/run/managing-avds) when running your app for the first time. The debugging output will open automatically upon building within the Android Studio window, and from here you can follow the instructions above. 

## No and Low Code App Builders

When debugging with No and Low Code App Builders, it's important to remember that you'll still need to utilize the specific IDE associated with the device you're targeting. For instance, if you're trying to access debug logs for an app you created using FlutterFlow and you're running it on an iOS device, you'll need to build and run the app through XCode. If you're trying to run it on an Android device, you would need to run it through Android Studio. The process for retrieving debug logs remains the same as explained above.

## Considerations

- You can open your Xcode project directly from Google - to do so, right click on the `ios` folder, hover over Flutter, and click "OpenIOS module in Xcode". 
- You can also run and debug your iOS project inside Android Studio itself by adding an iOS simulator and choosing it as the device before building. To do this however, you will still need Xcode installed. 
- Flutter projects using Swift may fail to show debug logs in the console if you are using Android Studio. We recommend running your Flutter iOS project using Xcode to view debug logs from the Purchases SDK.
- If using Flutterflow or another low to no code app builder, it may not be possible for you to see debug logs. We recommend reaching out to the app builder's support team directly to help troubleshoot. 
- Expo apps for iOS can use Console.app on Mac to view debug logs, while Android projects are still recommended to use Android Studio. For specific help on debugging your React Native Expo project, feel free to reach out to [RevenueCat support](https://app.revenuecat.com/settings/support).

# Next Steps

- If you spotted any errors while debugging, make sure you're [handling errors correctly ](doc:errors)
- You've verified that _Purchases_ is running correctly, time to start [making purchases in sandbox ](doc:sandbox)
