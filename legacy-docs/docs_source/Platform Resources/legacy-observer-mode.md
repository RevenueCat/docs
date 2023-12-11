---
title: "[Legacy] Observer Mode"
slug: legacy-observer-mode
excerpt: Using RevenueCat without changing existing purchase code
hidden: true
---
Observer Mode enables you to do a partial implementation of RevenueCat's SDK, giving you access to the advanced charting, webhooks, and attribution that RevenueCat provides—without affecting your existing purchase code. This is useful if you already have a functioning subscription system to manage your purchases and have infrastructure or code policy restrictions that prevent you from fully integrating third-party software.

When you set up and instantiate *Purchases* in Observer Mode, your receipts will be recorded and stored in the RevenueCat backend without interfering with any of your existing code. On iOS, your receipts will be recorded automatically. On Android, use `syncPurchases` after purchases and restores to record your receipts in RevenueCat.
[block:callout]
{
  "type": "danger",
  "title": "Amazon Appstore not supported",
  "body": "Observer Mode isn't currently supported for Amazon Appstore apps."
}
[/block]
# Requirements

## Android
Google Play Billing Library: 2.0+ (Android only)

## iOS
No special requirements
[block:callout]
{
  "type": "info",
  "body": "Older versions of Google Play Billing Library are supported in [version 2.4.1](https://docs.revenuecat.com/v2.3/docs/android) or the Android SDK"
}
[/block]
# 1. Configure the SDK
[block:file]
[
  {
    "language": "swift",
    "name": "Swift",
    "file": "code_blocks/📙 Platform Resources/legacy-observer-mode_1.swift"
  },
  {
    "language": "objectivec",
    "name": "Objective-C",
    "file": "code_blocks/📙 Platform Resources/legacy-observer-mode_2.m"
  },
  {
    "language": "kotlin",
    "name": "Kotlin",
    "file": "code_blocks/📙 Platform Resources/legacy-observer-mode_3.kt"
  },
  {
    "language": "java",
    "name": "Java",
    "file": "code_blocks/📙 Platform Resources/legacy-observer-mode_4.java"
  },
  {
    "language": "javascript",
    "name": "Flutter",
    "file": "code_blocks/📙 Platform Resources/legacy-observer-mode_5.js"
  },
  {
    "language": "text",
    "name": "Unity",
    "file": "code_blocks/📙 Platform Resources/legacy-observer-mode_6.txt"
  }
]
[/block]

[block:callout]
{
  "type": "danger",
  "body": "On Android, RevenueCat won't consume or acknowledge any purchase in Observer Mode so be sure your app is handling that. **Failure to do so will result in your purchases being refunded after 3 days.**",
  "title": "Important (Android only)"
}
[/block]
## Enable Observer Mode in Unity configuration (Unity Only)
![](https://files.readme.io/399c9ad-Screen_Shot_2019-05-31_at_12.07.34_PM.png "Screen Shot 2019-05-31 at 12.07.34 PM.png")

[block:callout]
{
  "type": "danger",
  "title": "Important note regarding InAppBillingService (Android Unity only)",
  "body": "If using RevenueCat alongside Unity IAP or other plugin that includes the Android InAppBillingService class, follow [this instructions :fa-arrow-right:](doc:unity#installation-with-unity-iap-side-by-side)"
}
[/block]
# 2. Sync purchases with RevenueCat (Android only)

On Android (or cross-platform SDKs), any time a purchase or restore occurs in your app you should call the `syncPurchases` method to record it in RevenueCat. 
[block:file]
[
  {
    "language": "kotlin",
    "name": "",
    "file": "code_blocks/📙 Platform Resources/legacy-observer-mode_7.kt"
  },
  {
    "language": "java",
    "name": "",
    "file": "code_blocks/📙 Platform Resources/legacy-observer-mode_8.java"
  },
  {
    "language": "javascript",
    "name": "React Native",
    "file": "code_blocks/📙 Platform Resources/legacy-observer-mode_9.js"
  }
]
[/block]

[block:callout]
{
  "type": "warning",
  "title": "Important",
  "body": "Failing to call `syncPurchases` after purchases and restores in Observer Mode will prevent any transactions from being recorded."
}
[/block]

[block:callout]
{
  "type": "success",
  "title": "You've done it!",
  "body": "That's all there is to it to enable RevenueCat in your app! At this point, RevenueCat is tracking purchases and granting access to any entitlements attached to tracked product identifiers. However it's important to note that there are certain features that can only be enabled with a deeper SDK integration. When that time comes, head back to our [Quickstart guide](doc:getting-started-1) to get set up."
}
[/block]