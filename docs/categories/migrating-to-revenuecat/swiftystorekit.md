---
title: SwiftyStoreKit Migration
slug: swiftystorekit
excerpt: Migrate your SwiftyStoreKit app to RevenueCat
hidden: false
---

# SwiftyStoreKit Migration

If you use SwiftyStoreKit in your iOS app and are looking for an alternative that includes receipt validation, server-side status tracking, cross-platform support and more - RevenueCat is the ideal choice for your app!

This guide describes how to integrate specific features from SwiftyStoreKit into your app. For basic RevenueCat setup instructions, see the [Quickstart guide](doc:getting-started-1).

If you're app is already live with SwiftyStoreKit, be sure to read the last section on [Migrating active subscriptions](doc:swiftystorekit#section-migrating-active-subscriptions).

---

## App startup

Apple recommends registering an `SKPaymentTransactionObserver` as soon as the app launches. RevenueCat automatically does this when you configure an instance of _Purchases_.

**SwiftyStoreKit:**

<!-- [block:file]
[
  {
    "language": "swift",
    "name": "AppDelegate.swift",
    "file": "code_blocks/➡️ Migrating To RevenueCat/swiftystorekit_1.swift"
  }
]
[/block] -->

**RevenueCat:**

<!-- [block:file]
[
  {
    "language": "swift",
    "name": "AppDelegate.swift",
    "file": "code_blocks/➡️ Migrating To RevenueCat/swiftystorekit_2.swift"
  }
]
[/block] -->

**Migration Steps:**
Remove the SwiftyStoreKit `completeTransactions()` method, and replace it with the _Purchases SDK_ `configure()` method.

---

## Purchases

### Retrieve products info

**SwiftyStoreKit:**

<!-- [block:file]
[
  {
    "language": "swift",
    "name": "",
    "file": "code_blocks/➡️ Migrating To RevenueCat/swiftystorekit_3.swift"
  }
]
[/block] -->

**RevenueCat:**

<!-- [block:file]
[
  {
    "language": "swift",
    "name": "",
    "file": "code_blocks/➡️ Migrating To RevenueCat/swiftystorekit_4.swift"
  }
]
[/block] -->

**Migration Steps:**
In RevenueCat, Offerings are [configured in the dashboard](doc:entitlements), and mapped to `SKProduct`s. Once you setup your products in RevenueCat, replace `retrieveProductsInfo()` in SwiftyStoreKit with `offerings()` in _Purchases SDK_.

Products are automatically fetched and cached when the _Purchases SDK_ is configured, so in most cases the `offerings()` method will return synchronously. For this reason, it's safe to call `offerings()` as often as needed, knowing it will read from the cache without a network call.

### Purchase a product

**SwiftyStoreKit:**

<!-- [block:file]
[
  {
    "language": "swift",
    "name": "",
    "file": "code_blocks/➡️ Migrating To RevenueCat/swiftystorekit_5.swift"
  }
]
[/block] -->

**RevenueCat:**

<!-- [block:file]
[
  {
    "language": "swift",
    "name": "",
    "file": "code_blocks/➡️ Migrating To RevenueCat/swiftystorekit_6.swift"
  }
]
[/block] -->

**Migration Steps:**
In SwiftyStoreKit, purchases can be initiated from a product Id or an `SKProduct`. In _Purchases SDK_ the preferred method is to provide a package to purchase. Replace the `purchaseProduct()` method in SwiftyStoreKit with `purchase(package:)`, and pass the package that was included with the RevenueCat Offering.

A convenience property, `userCancelled`, is provided in the callback. This allows you to check if the user cancelled the payment without parsing through the `SKError`. If you would like to handle errors for specific cases, see all of the errors available to you in our [error handling guide](doc:errors).

To check if the subscription has been successfully activated, check if the `customerInfo` object contains an active entitlement for the "pro" content you configured in the RevenueCat dashboard.

### Handle purchases started on the App Store

**SwiftyStoreKit:**

<!-- [block:file]
[
  {
    "language": "swift",
    "name": "",
    "file": "code_blocks/➡️ Migrating To RevenueCat/swiftystorekit_7.swift"
  }
]
[/block] -->

**RevenueCat:**

<!-- [block:file]
[
  {
    "language": "swift",
    "name": "",
    "file": "code_blocks/➡️ Migrating To RevenueCat/swiftystorekit_8.swift"
  }
]
[/block] -->

**Migration Steps:**
RevenueCat handles purchases initiated through the App Store with an optional delegate method. Replace the `shouldAddStorePaymentHandler` in SwiftyStoreKit with the `shouldPurchasePromoProduct` in _Purchases SDK_.

With _Purchases SDK_ you have the option of deferring the purchase until a later point in time (maybe after the user logs in). If you need to do this, simply cache the deferment block and call it later, or else call it right away.

### Restore previous purchases

**SwiftyStoreKit:**

<!-- [block:file]
[
  {
    "language": "swift",
    "name": "",
    "file": "code_blocks/➡️ Migrating To RevenueCat/swiftystorekit_9.swift"
  }
]
[/block] -->

**RevenueCat:**

<!-- [block:file]
[
  {
    "language": "swift",
    "name": "",
    "file": "code_blocks/➡️ Migrating To RevenueCat/swiftystorekit_10.swift"
  }
]
[/block] -->

**Migration Steps:**
The _Purchases SDK_ has a similar method to SwiftyStoreKit to restore transactions - replace `restorePurchases()` in SwiftyStoreKit with `restoreTransactions()`. To check if the subscription has been restored, check if the `customerInfo` object contains an active entitlement for the "pro" content you configured in the RevenueCat dashboard.

---

## Receipt verification

Receipts are automatically verified by RevenueCat. You don't need any local or server-side receipt validation of your own after migration 🎉

## Verifying subscriptions

**SwiftyStoreKit:**

<!-- [block:file]
[
  {
    "language": "swift",
    "name": "",
    "file": "code_blocks/➡️ Migrating To RevenueCat/swiftystorekit_11.swift"
  }
]
[/block] -->

**RevenueCat:**

<!-- [block:file]
[
  {
    "language": "swift",
    "name": "",
    "file": "code_blocks/➡️ Migrating To RevenueCat/swiftystorekit_12.swift"
  }
]
[/block] -->

**Migration Steps:**
RevenueCat keeps a subscribers status up-to-date on the server and shares this information with the _Purchases SDK_ to determine what subscriptions are active for the current user.

Replace the `verifyReceipt()` method in SwiftyStoreKit with `getCustomerInfo()` in _Purchases SDK_. This call will fetch the latest status for that user, and you can check which subscriptions are active for them.

The latest customer info is automatically fetched and cached when the _Purchases SDK_ is configured and throughout the lifecycle of your app, so in most cases the `getCustomerInfo()` method will return synchronously. **For this reason, it's safe to call `getCustomerInfo()` as often as needed, knowing it will read from the cache without a network call.**

## Migrating active subscriptions

If you've already shipped your app with active subscribers using SwiftyStoreKit, those active subscribers need to be migrated to RevenueCat. There are a few options available to make sure these users can still access their subscription on RevenueCat.

Check out our guide on Migrating Subscriptions to learn more about getting existing subscribers into RevenueCat: [Migrating Subscriptions](doc:migrating-existing-subscriptions)

## Next Steps

- If you haven't already, make sure your products are configured correctly by checking out our [guide on entitlements :fa-arrow-right:](doc:entitlements)
- If you want to use your own user identifiers, read about [setting app user ids :fa-arrow-right:](doc:user-ids)
- Once you're ready to test your integration, you can follow our guides on [testing and debugging :fa-arrow-right:](doc:debugging)
