---
title: macOS / Catalyst
slug: macos
excerpt: Instructions for installing Purchases SDK for macOS / Catalyst
hidden: false
categorySlug: documentation
order: 7
parentDoc: 649983b4c31b2e000a3c1864
---
# What is RevenueCat?

RevenueCat provides a backend and a wrapper around StoreKit and Google Play Billing to make implementing in-app purchases and subscriptions easy. With our SDK, you can build and manage your app business on any platform without having to maintain IAP infrastructure. You can read more about [how RevenueCat fits into your app](https://www.revenuecat.com/blog/growth/where-does-revenuecat-fit-in-your-app/) or you can [sign up free](https://app.revenuecat.com/signup) to start building.

As of March 2020, RevenueCat only supports [universal purchases](https://developer.apple.com/support/universal-purchase/) for macOS apps. This allows you to seamlessly share purchases between iOS, iPadOS, tvOS, watchOS, and macOS versions of your apps. If you need support for the legacy Mac App Store purchases, contact support. 

# Requirements

Xcode 13.3.1+
Minimum target: iOS 11.0+

# Installation

The Purchases iOS SDK is also compatible with macOS, and can be installed either via [CocoaPods](doc:macos#section-install-via-cocoapods) or [Swift Package Manager](macos#section-install-via-swift-package-manager). 
[block:callout]
{
  "type": "warning",
  "title": "Carthage is currently incompatible with Catalyst",
  "body": "Once Carthage is updated to support Catalyst, installing with Carthage will be restored. The recommended way to install the Purchases iOS SDK for Catalyst projects is to use [Swift Package Manager](macos#section-install-via-swift-package-manager)."
}
[/block]
## Install via CocoaPods

To always use the latest release, add the following to your Podfile:
```ruby Podfile
pod 'RevenueCat'
```
Alternatively, pin to a specific minor version (e.g. 3.10):
```ruby 
pod 'RevenueCat', '~> 4.15'
```
And then run:
```ruby Terminal
pod install
```
This will add `RevenueCat.framework` to your workspace.

## Install via Swift Package Manager

You can use Swift Package Manager to add Purchases to your Xcode project. Select `File » Swift Packages » Add Package Dependency...` and specify the repository URL of the `Purchases` library: https://github.com/RevenueCat/purchases-ios.git. Set the version to `Up to next major` and choose the target where you want to use it. The library should have been added to the Swift Package Dependencies section and you should be able to import it now.

# Import Purchases

You should now be able to `import RevenueCat`.
```swift 
import RevenueCat
```
```objectivec 
#import "RCPurchases.h"
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

* Now that you've installed the Purchases SDK in your macOS app, get started by [configuring an instance of Purchases :fa-arrow-right:](https://www.revenuecat.com/docs/getting-started#4-using-revenuecats-purchases-sdk)