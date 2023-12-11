---
title: SwiftyStoreKit Migration
slug: swiftystorekit
excerpt: Migrate your SwiftyStoreKit app to RevenueCat
hidden: false
categorySlug: migrating-your-app
order: 2
---
If you use SwiftyStoreKit in your iOS app and are looking for an alternative that includes receipt validation, server-side status tracking, cross-platform support and more - RevenueCat is the ideal choice for your app!

This guide describes how to integrate specific features from SwiftyStoreKit into your app. For basic RevenueCat setup instructions, see the [Quickstart guide](doc:getting-started-1).

If you're app is already live with SwiftyStoreKit, be sure to read the last section on [Migrating active subscriptions](doc:swiftystorekit#section-migrating-active-subscriptions).

-------------------------------------
# App startup

Apple recommends registering an `SKPaymentTransactionObserver` as soon as the app launches. RevenueCat automatically does this when you configure an instance of *Purchases*.

**SwiftyStoreKit:**
```swift AppDelegate.swift
func application(application: UIApplication,
                 didFinishLaunchingWithOptions launchOptions: [NSObject: AnyObject]?) -> Bool {

    SwiftyStoreKit.completeTransactions(atomically: true) { purchases in
	    for purchase in purchases {
	        switch purchase.transaction.transactionState {
	        case .purchased, .restored:
	            if purchase.needsFinishTransaction {
	                // Deliver content from server, then:
	                SwiftyStoreKit.finishTransaction(purchase.transaction)
	            }
	            // Unlock content
	        case .failed, .purchasing, .deferred:
	            break // do nothing
	        }
	    }
	}
    return true
}
```

**RevenueCat:**
```swift AppDelegate.swift
func application(application: UIApplication,
                 didFinishLaunchingWithOptions launchOptions: [NSObject: AnyObject]?) -> Bool {

    Purchases.debugLogsEnabled = true
    Purchases.configure(withAPIKey: <public_sdk_key>, appUserID: <my_app_user_id>)

    return true
}
```
**Migration Steps:**
Remove the SwiftyStoreKit `completeTransactions()` method, and replace it with the *Purchases SDK* `configure()` method.

-------------------------------------
# Purchases

##Retrieve products info

**SwiftyStoreKit:**
```swift 
SwiftyStoreKit.retrieveProductsInfo([<com.RevenueCat.Purchase1>]) { result in
    if let product = result.retrievedProducts.first {
        let priceString = product.localizedPrice!
        print("Product: \(product.localizedDescription), price: \(priceString)")
    } else if let invalidProductId = result.invalidProductIDs.first {
        print("Invalid product identifier: \(invalidProductId)")
    } else {
        print("Error: \(result.error)")
    }
}
```
**RevenueCat:**
```swift 
Purchases.shared.getOfferings { (offerings, error) in
    if let error {
        print(error.localizedDescription)
    }

    guard let offering = offerings?.current else {
        print("No current offering configured")
        return
    }

    for package in offering.availablePackages {
        print("Product: \(package.product.localizedDescription), price: \(package.localizedPriceString())")
    }
}
```
**Migration Steps:**
In RevenueCat, Offerings are [configured in the dashboard](doc:entitlements), and mapped to `SKProduct`s. Once you setup your products in RevenueCat, replace `retrieveProductsInfo()` in SwiftyStoreKit with `offerings()` in *Purchases SDK*.

Products are automatically fetched and cached when the *Purchases SDK* is configured, so in most cases the `offerings()` method will return synchronously. For this reason, it's safe to call `offerings()` as often as needed, knowing it will read from the cache without a network call.


##Purchase a product

**SwiftyStoreKit:**
```swift 
SwiftyStoreKit.purchaseProduct(product, quantity: 1, atomically: true) { result in
    switch result {
    case .success(let purchase):
        print("Purchase Success: \(purchase.productId)")
    case .error(let error):
        switch error.code {
        case .unknown: print("Unknown error. Please contact support")
        case .clientInvalid: print("Not allowed to make the payment")
        case .paymentCancelled: break
        case .paymentInvalid: print("The purchase identifier was invalid")
        case .paymentNotAllowed: print("The device is not allowed to make the payment")
        case .storeProductNotAvailable: print("The product is not available in the current storefront")
        case .cloudServicePermissionDenied: print("Access to cloud service information is not allowed")
        case .cloudServiceNetworkConnectionFailed: print("Could not connect to the network")
        case .cloudServiceRevoked: print("User has revoked permission to use this cloud service")
        default: print((error as NSError).localizedDescription)
        }
    }
}
```
**RevenueCat:**
```swift 
Purchases.shared.purchase(package: package) { (transaction, info, error, cancelled) in
    if cancelled {
        print("User cancelled purchase")
        return
    }

    // Optionally handle specific purchase errors
    if let err = error as NSError? {

        // log error details
        print("RCError: \(err.userInfo[ReadableErrorCodeKey])")
        print("Message: \(err.localizedDescription)")
        print("Underlying Error: \(err.userInfo[NSUnderlyingErrorKey])")

        // handle specific errors from: https://docs.revenuecat.com/docs/errors
        switch PurchasesErrorCode(_nsError: err).code {

        case .purchaseNotAllowedError:
            print("Purchases not allowed on this device.")

        case .purchaseInvalidError:
            print("Purchase invalid, check payment source.")

        case .networkError:
            print("Network error, check your connection and try again.")

        default:
            break
        }
    } else if info?.entitlements.all[<pro>]?.isActive == true {
        print("Unlocked Pro Cats 🎉")
    }

}
```
**Migration Steps:**
In SwiftyStoreKit, purchases can be initiated from a product Id or an `SKProduct`. In *Purchases SDK* the preferred method is to provide a package to purchase. Replace the `purchaseProduct()` method in SwiftyStoreKit with `purchase(package:)`, and pass the package that was included with the RevenueCat Offering.

A convenience property, `userCancelled`, is provided in the callback. This allows you to check if the user cancelled the payment without parsing through the `SKError`. If you would like to handle errors for specific cases, see all of the errors available to you in our [error handling guide](doc:errors).

To check if the subscription has been successfully activated, check if the `customerInfo` object contains an active entitlement for the "pro" content you configured in the RevenueCat dashboard. 

##Handle purchases started on the App Store

**SwiftyStoreKit:**
```swift 
func application(application: UIApplication,
                 didFinishLaunchingWithOptions launchOptions: [NSObject: AnyObject]?) -> Bool {

    // ...

    SwiftyStoreKit.shouldAddStorePaymentHandler = { payment, product in
        // return true if the content can be delivered by your app
        // return false otherwise
    }

    // ...
}
```
**RevenueCat:**
```swift 
func application(application: UIApplication,
                 didFinishLaunchingWithOptions launchOptions: [NSObject: AnyObject]?) -> Bool {

    // ...
    Purchases.shared.delegate = self
    // ...

}

func purchases(_ purchases: Purchases,
               shouldPurchasePromoProduct product: SKProduct,
               defermentBlock makeDeferredPurchase: @escaping RCDeferredPromotionalPurchaseBlock) {

    // Save the deferment block and call it later...
    let defermentBlock = makeDeferredPurchase

    // ...or call it right away to proceed with the purchase
    defermentBlock { (transaction, customerInfo, error, cancelled) in

        if customerInfo?.entitlements.all[<pro>]?.isActive == true {
            // Unlock that great "pro" content
        }
    }
}
```
**Migration Steps:**
RevenueCat handles purchases initiated through the App Store with an optional delegate method. Replace the `shouldAddStorePaymentHandler` in SwiftyStoreKit with the `shouldPurchasePromoProduct` in *Purchases SDK*.

With *Purchases SDK* you have the option of deferring the purchase until a later point in time (maybe after the user logs in). If you need to do this, simply cache the deferment block and call it later, or else call it right away.

##Restore previous purchases

**SwiftyStoreKit:**
```swift 
SwiftyStoreKit.restorePurchases(atomically: true) { results in
    if results.restoreFailedPurchases.count > 0 {
        print("Restore Failed: \(results.restoreFailedPurchases)")
    } else if results.restoredPurchases.count > 0 {
        print("Restore Success: \(results.restoredPurchases)")
    } else {
        print("Nothing to Restore")
    }
}
```
**RevenueCat:**
```swift 
Purchases.shared.restorePurchases { (customerInfo, error) in
    if let error {
        print("Restore Failed: \(error.localizedDescription)")
    } else {
        print("Restore Success: \(customerInfo?.activeEntitlements)")
    }
}
```
**Migration Steps:**
The *Purchases SDK* has a similar method to SwiftyStoreKit to restore transactions - replace `restorePurchases()` in SwiftyStoreKit with `restoreTransactions()`. To check if the subscription has been restored, check if the `customerInfo` object contains an active entitlement for the "pro" content you configured in the RevenueCat dashboard.

-------------------------------------
# Receipt verification

Receipts are automatically verified by RevenueCat. You don't need any local or server-side receipt validation of your own after migration 🎉

# Verifying subscriptions

**SwiftyStoreKit:**
```swift 
let appleValidator = AppleReceiptValidator(service: .production, sharedSecret: <your-shared-secret>)
SwiftyStoreKit.verifyReceipt(using: appleValidator) { result in
    switch result {
    case .success(let receipt):
        let productId = <my_product_identifier>
        // Verify the purchase of Consumable or NonConsumable
        let purchaseResult = SwiftyStoreKit.verifyPurchase(
            productId: productId,
            inReceipt: receipt)

        switch purchaseResult {
        case .purchased(let receiptItem):
            print("\(productId) is purchased: \(receiptItem)")
        case .notPurchased:
            print("The user has never purchased \(productId)")
        }
    case .error(let error):
        print("Receipt verification failed: \(error)")
    }
}
```
**RevenueCat:**
```swift 
Purchases.shared.getCustomerInfo { (customerInfo, error) in
    if customerInfo?.entitlements.all[<pro>]?.isActive == true {
        // Grant user "pro" access
    }
}
```
**Migration Steps:**
RevenueCat keeps a subscribers status up-to-date on the server and shares this information with the *Purchases SDK* to determine what subscriptions are active for the current user. 

Replace the `verifyReceipt()` method in SwiftyStoreKit with `getCustomerInfo()` in *Purchases SDK*. This call will fetch the latest status for that user, and you can check which subscriptions are active for them. 

The latest customer info is automatically fetched and cached when the *Purchases SDK* is configured and throughout the lifecycle of your app, so in most cases the `getCustomerInfo()` method will return synchronously. **For this reason, it's safe to call `getCustomerInfo()` as often as needed, knowing it will read from the cache without a network call.**

# Migrating active subscriptions

If you've already shipped your app with active subscribers using SwiftyStoreKit, those active subscribers need to be migrated to RevenueCat. There are a few options available to make sure these users can still access their subscription on RevenueCat.

Check out our guide on Migrating Subscriptions to learn more about getting existing subscribers into RevenueCat: [Migrating Subscriptions](doc:migrating-existing-subscriptions) 

# Next Steps

* If you haven't already, make sure your products are configured correctly by checking out our [guide on entitlements :fa-arrow-right:](doc:entitlements)
* If you want to use your own user identifiers, read about [setting app user ids :fa-arrow-right:](doc:user-ids)
* Once you're ready to test your integration, you can follow our guides on [testing and debugging :fa-arrow-right:](doc:debugging)