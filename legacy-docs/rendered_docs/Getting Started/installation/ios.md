---
title: iOS
slug: ios
excerpt: Instructions for installing RevenueCat SDK for iOS
hidden: false
categorySlug: documentation
order: 0
parentDoc: 649983b4c31b2e000a3c1864
---
# What is RevenueCat?

RevenueCat provides a backend and a wrapper around StoreKit and Google Play Billing to make implementing in-app purchases and subscriptions easy. With our SDK, you can build and manage your app business on any platform without having to maintain IAP infrastructure. You can read more about [how RevenueCat fits into your app](https://www.revenuecat.com/blog/growth/where-does-revenuecat-fit-in-your-app/) or you can [sign up free](https://app.revenuecat.com/signup) to start building.

# Requirements

Xcode 14.0.0+

# Supported Platforms

| Platform | Minimum target |
| --- | --- |
| iOS | 11.0+ |
| tvOS | 11.0+ |
| macOS | 10.13+ |
| watchOS | 6.2+ |
| visionOS | 1.0+ |

# Installation

RevenueCat for iOS can be installed either via [CocoaPods](doc:ios#section-install-via-cocoapods), [Carthage](ios#section-install-via-carthage), or [Swift Package Manager](doc:ios#section-install-via-swift-package-manager). 
[block:callout]
{
  "type": "info",
  "body": "Already have 3.x installed? View our [migration guide to 4.x :fa-arrow-right:](https://docs.revenuecat.com/docs/ios-native-3x-to-4x-migration)"
}
[/block]

[block:embed]
{
  "html": "<iframe class=\"embedly-embed\" src=\"//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FQS7BTorY4-U%3Fstart%3D12%26feature%3Doembed%26start%3D12&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DQS7BTorY4-U&image=https%3A%2F%2Fi.ytimg.com%2Fvi%2FQS7BTorY4-U%2Fhqdefault.jpg&key=f2aa6fc3595946d0afc3d76cbbd25dc3&type=text%2Fhtml&schema=youtube\" width=\"854\" height=\"480\" scrolling=\"no\" title=\"YouTube embed\" frameborder=\"0\" allow=\"autoplay; fullscreen\" allowfullscreen=\"true\"></iframe>",
  "url": "https://www.youtube.com/watch?v=QS7BTorY4-U&feature=youtu.be&t=12",
  "title": "Set up RevenueCat Purchases SDK for iOS",
  "favicon": "https://www.youtube.com/s/desktop/c57d8126/img/favicon.ico",
  "image": "https://i.ytimg.com/vi/QS7BTorY4-U/hqdefault.jpg"
}
[/block]
## Install via Swift Package Manager

You can use Swift Package Manager to add RevenueCat to your Xcode project. Select `File » Add Packages... ` and enter the repository URL `https://github.com/RevenueCat/purchases-ios.git` into the search bar (top right). Set the Dependency Rule to `Up to next major`, and the version number to `4.0.0 < 5.0.0`. Check `RevenueCat` when a prompt for "Choose Package Products for purchases-ios" appears. Finally, choose the target where you want to use it. 

The library should have been added to the Swift Package Dependencies section and you should be able to import it now.
![](https://files.readme.io/bd6e034-Screen_Shot_2022-06-23_at_10.03.57.png "Screen Shot 2022-06-23 at 10.03.57.png")
## Install via Swift Package Manager with Xcode 15

Select `File » Add Packages Dependencies... ` and enter the repository URL `https://github.com/RevenueCat/purchases-ios.git` into the search bar (top right). Set the Dependency Rule to `Up to next major`, and the version number to `4.0.0 < 5.0.0`. When "Choose Package Products for purchases-ios" appears, Xcode adds all libraries to your target by default. Select "None" for `RevenueCat_CustomEntitlementComputation` and `ReceiptParser`.

![](https://github.com/RevenueCat/purchases-ios/assets/685609/0ddf0c35-5681-4d38-b4dc-d2ebdae24988 "Screenshot 2023-08-29 at 08 37 25")
## Install via CocoaPods

To always use the latest release, add the following to your Podfile:
```ruby Podfile
pod 'RevenueCat'
```
Alternatively, pin to a specific minor version:
```ruby 
pod 'RevenueCat', '~> 4.15'
```
And then run:
```ruby Terminal
pod install
```
This will add `RevenueCat.framework` to your workspace.


## Install via Carthage

To always use the latest release, add the following to your Cartfile:
```text Cartfile
github "revenuecat/purchases-ios"
```
Alternatively, pin to a specific minor version:
```text 
github "revenuecat/purchases-ios" ~> 4.15.0
```
### Carthage with XCFrameworks

If you're using Carthage version >= 0.37, you can use RevenueCat as an XCFramework instead of a Universal Framework. This makes setup easier, since you don't have to set up build phases at all. 
To use XCFrameworks with Carthage, you need to pass in `--use-xcframeworks`.
```shell Terminal
carthage update --use-xcframeworks
```
More information on using XCFrameworks with Carthage is available at https://github.com/carthage/Carthage/#building-platform-independent-xcframeworks-xcode-12-and-above
[block:callout]
{
  "type": "warning",
  "body": "Under certain configurations, when debugging your app, using `po` to print objects to the console might result in an error `\"Couldn't IRGen Expression\"`. If you run into this, one workaround is to add a single, empty Objective-C file to your project, and create a bridging header. There's more information on this issue [here](https://steipete.com/posts/couldnt-irgen-expression/)"
}
[/block]
### Carthage with regular frameworks

Run:
```text 
carthage update
```
# Import the SDK
[block:callout]
{
  "type": "info",
  "title": "Objective-C Only Projects",
  "body": "You may need to add an empty Swift file and a bridging header to your project before compiling."
}
[/block]
You should now be able to `import RevenueCat`.
```swift 
import RevenueCat
```
```objectivec 
@import RevenueCat;

// or

#import "Purchases.h"
```

[block:callout]
{
  "type": "info",
  "title": "Enable In-App Purchase capability for your project",
  "body": "Don't forget to enable the In-App Purchase capability for your project under `Project Target -> Capabilities -> In-App Purchase`"
}
[/block]

![](https://files.readme.io/65db383-Screen_Shot_2018-12-18_at_9.15.09_AM.png "Screen Shot 2018-12-18 at 9.15.09 AM.png")
# Next Steps

* Now that you've installed the SDK in your iOS app, get started by [configuring an instance of Purchases :fa-arrow-right:](https://www.revenuecat.com/docs/getting-started#4-using-revenuecats-purchases-sdk)