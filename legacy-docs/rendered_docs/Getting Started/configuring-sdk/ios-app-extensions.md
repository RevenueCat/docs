---
title: iOS App Extensions
slug: ios-app-extensions
hidden: false
categorySlug: documentation
order: 0
parentDoc: 649983b4c31b2e000a3c18a6
---
[App Extensions](https://developer.apple.com/app-extensions/) in iOS are an important component of the iOS ecosystem that are supported by RevenueCat. The most popular use of App Extensions for subscription apps are Today Widgets and iMessage apps.

# Configuring for App Extensions

To enable data sharing between the main app and extensions, you'll need to use Xcode or the Developer portal to [enable app groups for the containing app and its contained app extensions](https://developer.apple.com/library/archive/documentation/General/Conceptual/ExtensibilityPG/ExtensionScenarios.html#//apple_ref/doc/uid/TP40014214-CH21-SW1). Then, [register the app group in the portal](https://developer.apple.com/library/archive/documentation/Miscellaneous/Reference/EntitlementKeyReference/Chapters/EnablingAppSandbox.html#//apple_ref/doc/uid/TP40011195-CH4-SW19) and specify the app group to use in the containing app.

After you enable app groups, you will be able to access a user's active subscriptions in your App Extension by configuring _Purchases_ with a custom UserDefaults that's shared across your App Extension.

```swift 
Purchases.configure(
  with: Configuration.Builder(withAPIKey: <your_api_key)
    .with(appUserID: <app_user_id>)
    .with(userDefaults: .init(suiteName: <group.your.bundle.here>))
    .build()
)
```



Now the app extension and parent app can both use the a shared UserDefaults suite.