---
title: Troubleshooting the SDKs
slug: troubleshooting-the-sdks
hidden: false
---
Having trouble with our SDKs? This guide covers common issues and solutions. Go through each topic and see if it matches your issue. If you went through this guide and you're still having problems, reach out to us in any of the following channels:

- [RevenueCat Developer Community](https://community.revenuecat.com) for general inquiries about the SDK and best practices
- [StackOverflow](https://stackoverflow.com/questions/tagged/revenuecat) for help on specific questions about your code

# All SDKs

Make sure that you're using the latest version of the SDK for your platform, and have installed the SDK according to our [Installation](doc:installation) guides. 

We update our SDKs very often. If you run into an issue with our SDK, it might already have been fixed in an update. 

You can find the latest version of our SDKs here: 

- [iOS](https://github.com/revenuecat/purchases-ios/releases/latest)
- [Android](https://github.com/revenuecat/purchases-android/releases/latest)
- [Flutter](https://github.com/revenuecat/purchases-flutter/releases/latest)
- [React-Native](https://github.com/revenuecat/react-native-purchases/releases/latest)
- [Cordova](https://github.com/revenuecat/cordova-plugin-purchases/releases/latest)
- [Unity](https://github.com/revenuecat/purchases-unity/releases/latest)
- [Ionic Native](https://ionicframework.com/docs/native/purchases)

# Issues when compiling or archiving

## iOS

** 1. Clean derived data:**  in Xcode, go to Product -> Clean Build Data. 
** 2. Make sure Swift support is enabled in the project:** check that Swift Language Version is defined as at least "Swift 5" in Build Settings for your target. 
![](https://files.readme.io/d483907-Screen_Shot_2021-05-03_at_3.28.13_PM.png "Screen Shot 2021-05-03 at 3.28.13 PM.png")
** 3. Make sure that the deployment target is set correctly:** it should be set to `9.0` or newer for iOS or tvOS, `10.12` or newer for macOS and `6.2` or newer for watchOS. 
** 4. Check the Swift version: ** Check that the value for [`SWIFT_VERSION` isn't overridden by the `Podfile`, if you have one.](https://github.com/RevenueCat/purchases-flutter/issues/168#issuecomment-796468415).
** 5. Enable Swift support: ** If you're getting errors when compiling Swift files after this, try adding a single, empty Swift file to the project. 

### If you're using SPM: 
** 1. ** If you're using the `RevenueCat` Package from a framework and get `(fatal) module 'RevenueCat' not found`, disable [Clang's Module Verifier](https://developer.apple.com/documentation/xcode/identifying-and-addressing-framework-module-issues#Enable-the-module-verifier-build-setting) (`ENABLE_MODULE_VERIFIER`) from build settings. That does not work correctly with SPM as of Xcode 14.3 and 15.0 (this has been reported to Apple as Feedback `FB13048691`):
![](https://user-images.githubusercontent.com/685609/263088397-48938fb6-40bd-436b-a17f-dcf715524531.png "Module Verifier")

### If you're using CocoaPods: 
**1. Make sure you're using the latest version of CocoaPods.** You can see your version by running `pod --version`, and find the [latest version here](https://github.com/CocoaPods/CocoaPods/releases/latest). 
** 2. Re-install pods:** run `pod deintegrate` and then `pod install`, then try running / archiving the project again. 
** 3. Make sure that the deployment target is set correctly:** it should be set to `11.0` or newer for iOS or tvOS, `10.13` or newer for macOS and `6.2` or newer for watchOS. The requirements might be higher if you're using other frameworks, such as React-Native. You should check this value both in the `Podfile`, and by going into the Project settings, then select the target, and look for the value in the general tab: 
![](https://files.readme.io/43c42c6-Screen_Shot_2021-05-03_at_3.43.57_PM.png "Screen Shot 2021-05-03 at 3.43.57 PM.png")
** 4. Check the Swift version: ** Check that the value for [`SWIFT_VERSION` isn't overridden by the `Podfile`](https://github.com/RevenueCat/purchases-flutter/issues/168#issuecomment-796468415).
** 5. Enable Swift support: ** If you're getting errors when compiling Swift files after this, try adding a single, empty Swift file to the project. 
** 6. If that _still_ doesn't work, then make sure that Swift is added to your Library Search Paths. Go to Build Settings, then look for Library Search Paths, and add `$(SDKROOT)/usr/lib/swift` as the **first** item on the list if it's not present. 

### If you're using Carthage: 
** 1. ** Make sure you're using the latest version of Carthage. 
** 2. ** If you're using XCFrameworks with Carthage, make sure you [follow our installation guide](https://docs.revenuecat.com/docs/ios#carthage-with-xcframeworks). 

## Flutter
** 1. ** Upgrade to the latest version of [purchases-flutter](https://github.com/revenuecat/purchases-flutter/releases/latest)
** 2. ** Upgrade to the [latest version of Flutter](https://flutter.dev/docs/development/tools/sdk/upgrading)
** 3. ** Run `pub cache clean`
** 4 **. Follow the [troubleshooting steps for iOS](doc:troubleshooting-the-sdks#ios).
** 5. ** [Check that Flutter doesn't override the minimum deployment version on iOS](https://github.com/RevenueCat/purchases-flutter/issues/189#issuecomment-824189586)

## React-Native
** 1. ** Upgrade to the latest version of [react-native-purchases](https://github.com/revenuecat/react-native-purchases/releases/latest)
** 2. ** Upgrade to the [latest version of React-Native](https://reactnative.dev/docs/upgrading).
** 3. ** If you're setting `BUILD_LIBRARY_FOR_DISTRIBUTION` in your Podfile, ensure RevenueCat's targets are excluded.
[block:file]
[
  {
    "language": "ruby",
    "name": "",
    "file": "code_blocks/🧰 Test - Launch/debugging/troubleshooting-the-sdks_1.ruby"
  }
]
[/block]
** 4. ** Follow the [troubleshooting steps for iOS](doc:troubleshooting-the-sdks#ios).

# Common Issues

- [Products are empty](https://community.revenuecat.com/sdks-51/why-are-offerings-or-products-empty-124)
- [Active entitlements are empty with an active subscription](https://community.revenuecat.com/dashboard-tools-52/why-are-active-entitlements-empty-with-an-active-subscription-125) 
- [I get a "there is a problem with the App store" and nothing else.](https://community.revenuecat.com/sdks-51/there-was-a-problem-with-the-app-store-store-problem-error-80)
- [My app crashes with...](https://community.revenuecat.com/sdks-51/my-app-crashes-with-127)
- **"Purchases / PurchasesHybridCommon required a higher minimum deployment target": ** see [troubleshooting steps for iOS](doc:troubleshooting-the-sdks#ios). 
- ** "ld: symbol(s) not found for architecture x86_64": ** see [troubleshooting steps for iOS](doc:troubleshooting-the-sdks#ios). 
- ** "declaration of 'RCPurchases' must be imported from module 'Purchases' before it is required": ** see [troubleshooting steps for iOS](doc:troubleshooting-the-sdks#ios). 
- ** "Module 'Purchases' not found": ** see [troubleshooting steps for iOS](doc:troubleshooting-the-sdks#ios).
- ** "Couldn't IRGen expression": ** see [How to fix "couldn't IRGen expression"](https://community.revenuecat.com/sdks-51/how-to-fix-couldn-t-irgen-expression-1051)