---
title: iOS Subscription Offers
slug: ios-subscription-offers
excerpt: Implementing iOS Subscription Offers with Purchases SDK
hidden: false
categorySlug: offers-lifecycle-guidance
order: 0
parentDoc: 649983b4c31b2e000a3c18f5
---
[block:callout]
{
  "type": "success",
  "body": "This guide assumes you already have your iOS products set up in App Store Connect.",
  "title": ""
}
[/block]
Subscription Offers allow developers to apply custom pricing and trials to new customers and to existing and lapsed subscriptions.

Subscription Offers are supported in the *Purchases SDK*, but require some additional setup first in App Store Connect and the RevenueCat dashboard. 

# Types of Subscription Offers
[block:parameters]
{
  "data": {
    "h-0": "Offer Type",
    "h-1": "Applies To",
    "0-0": "Introductory Offers",
    "1-0": "Promotional Offers",
    "h-2": "Subscription Key Required",
    "h-3": "Notes",
    "2-0": "Offer Codes",
    "0-1": "New Users",
    "1-1": "Existing and Lapsed Users",
    "1-2": "🔑 Required",
    "0-2": "Not required",
    "2-2": "🔑 Required",
    "0-3": "Applied to eligible purchases automatically. [How to check eligibility](https://www.revenuecat.com/docs/subscription-offers#checking-eligibility).",
    "2-1": "New and Existing Users",
    "1-3": "Not applied automatically, see implementation guide below",
    "2-3": "Requires iOS SDK 3.8.0+, see implementation guide below",
    "3-0": "⚠️ **Not recommended**\n[In-App Purchase Promo Codes](https://help.apple.com/app-store-connect/#/dev50869de4a)",
    "3-1": "New and Existing Users",
    "3-2": "Not Required",
    "3-3": "Treated as a regular purchase, revenue will not be accurate in [Charts](doc:charts) and [Integrations](doc:webhooks) due to Apple/StoreKit limitations. Codes don't auto-renew, aren't compatible with `presentCodeRedemptionSheet`, restricted to non-commercial use, and restricted to [1,000 codes every 6 months](https://help.apple.com/app-store-connect/#/dev50869de4a).",
    "h-4": "Auto-Renewal",
    "0-4": "✅",
    "1-4": "✅",
    "2-4": "✅",
    "3-4": "❌"
  },
  "cols": 5,
  "rows": 4
}
[/block]
# In-App Purchase Keys

For RevenueCat to securely authenticate and validate a Subscription Offer request with Apple, you'll need to upload an In-App Purchase Key following our [guide](https://docs.revenuecat.com/docs/in-app-purchase-key-configuration).
[block:callout]
{
  "type": "info",
  "title": "Introductory Offers",
  "body": "An In-App Purchase Key is not required for Introductory Offers, only for Promotional Offers and Offer Codes. The Purchases SDK will automatically apply an introductory offer to a purchase. [Documentation](https://docs.revenuecat.com/docs/ios-products#adding-introductory-offers-and-free-trials) for reference."
}
[/block]
# Promotional Offers

In iOS 12.2, Apple announced a new feature for subscription developers called “Promotional Offers.” 

## 1. Configure the Offer in App Store Connect

Promotional Offers are created from within App Store Connect and are included as a pricing option to an existing subscription product. When you click the "+" option next to Subscription Prices, you'll see an option to Create Promotional Offer.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/fd483c8-Screen_Shot_2019-04-17_at_3.32.04_PM.png",
        "Screen Shot 2019-04-17 at 3.32.04 PM.png",
        431,
        454,
        "#f9f8f8"
      ],
      "caption": "Subscription Offers are created as new pricing options in App Store Connect"
    }
  ]
}
[/block]
To create the offer there are two fields that you need to specify: Reference Name, which is just used for your reference, and the Promotional Offer Product Code, which is what you will actually use to activate a specific offer in your app.
![](https://files.readme.io/7c62bd9-Screen_Shot_2019-04-17_at_3.39.20_PM.png "Screen Shot 2019-04-17 at 3.39.20 PM.png")
On the next screen you'll select the type of offer you wish to provide. Just like introductory offers, there are three types of Promotional Offers:

1. Pay-up-front — The customer pays once for a period of time, e.g. $0.99 for 3 months. Allowed durations are 1, 2, 3, 6 and 12 months.
2. Pay-as-you-go — The customer pays a reduced rate, each period, for a number of periods, e.g. $0.99 per month for 3 months. Allowed durations are 1-12 months. Can only be specified in months.
3. Free — This is analogous to a free trial, the user receives 1 of a specified period free. The allowed durations are 3 days, 1 week, 2 weeks, 1 month, 2 months, 3 months, 6 months, and 1 year.
![](https://files.readme.io/5bf1bca-Screen_Shot_2019-04-17_at_3.44.39_PM.png "Screen Shot 2019-04-17 at 3.44.39 PM.png")

[block:callout]
{
  "type": "info",
  "body": "Don't forget to click Save in the upper right after you configure the offer."
}
[/block]
## 2. Show the Promotional Offer to Desired Users

It's up to you to decide which users you want to present a Promotional Offer to. The only eligibility requirements are that the user had (or currently has) an active subscription. Apple automatically enforces this requirement for you - if it's not met users will be shown the regular product regardless of the offer you try to present.

### Fetch the PromoOffer

Before you can present a Promotional Offer to a user, you first need to fetch the `PromoOffer`. This is done by passing the `StoreProduct` and a `StoreProductDiscount` to the `.getPromotionalOffer` method, which uses the Subscription Key from above to validate the discount and to provide a valid `PromoOffer`:
```swift 
if let discount = package.storeProduct.discounts.first {
    Purchases.shared.getPromotionalOffer(forProductDiscount: discount,
                                         product: package.storeProduct) { (promoOffer, error) in
        if let promoOffer {
            // Promotional Offer validated, show terms of your offer to your customers
        } else {
            // Promotional Offer was not validated, default to normal package terms
        }
    }
}

// OR: if using async/await
let promoOffers = await package.storeProduct.getEligiblePromotionalOffers()
```
```objectivec Objective-C
[RCPurchases.sharedPurchases getPromotionalOfferForProductDiscount:product.discounts[0]
                                                       withProduct:product
                                                    withCompletion:^(RCPromotionalOffer * _Nullable discount, NSError * _Nullable error) {
	if (discount) {
  	// Payment discount fetched
  }
}];
```
```javascript React Native
const paymentDiscount = await Purchases.getPromotionalOffer(product, product.discounts[0]);
if (paymentDiscount) {
  	// Payment discount fetched
}
```
### Purchase the Product with the Promotional Offer

After successfully fetching the `PromoOffer`, you can now display the Promotional Offer to the user however you'd like. If the user chooses to purchase, pass a `Package` and `PromoOffer` to the `.purchase(package:promotionalOffer:)` method.
```swift 
Purchases.shared.purchase(package: package,
                          promotionalOffer: promoOffer) { transaction, customerInfo, error, userCancelled in
    if customerInfo?.entitlements.all[<your_entitlement_id>]?.isActive == true {
        // Unlock that entitlements content
    }
}
```
```objectivec Objective-C
[RCPurchases.sharedPurchases purchasePackage:package withDiscount:discount
                             completionBlock:^(RCStoreTransacction * _Nullable transaction, RCCustomerInfo * _Nullable purchaserInfo, NSError * _Nullable error, BOOL userCancelled) {
  if (purchaserInfo.entitlements[<your_entitlement_id>].isActive) {
    // Unlock that great "pro" content    
  }
}];
```
```javascript React Native
const purchaseMade = await Purchases.purchaseDiscountedPackage(package, paymentDiscount);
```
# Offer Codes

With iOS 14, Apple announced a new feature for subscription developers called “Offer Codes.” Offer Codes allow developers to offer custom pricing and trials, in the form of a redeemable code, to their customers.

## 1. Configuring an Offer Code

Offer Codes are configured similarly to Subscription Offers in App Store Connect. 
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/4a0ab13-Screen_Shot_2020-12-01_at_10.02.15_AM.png",
        "Screen Shot 2020-12-01 at 10.02.15 AM.png",
        1044,
        432,
        "#f8f9f9"
      ],
      "sizing": "80",
      "border": true
    }
  ]
}
[/block]
## 2. Redeeming an Offer Code
### Option 1: In-app Redemption Sheet
[block:callout]
{
  "type": "danger",
  "title": "Note",
  "body": "Since launch, Apple's in-app Offer Code redemption sheet has proven to be extremely unstable. For example, the sheet may not connect, may not dismiss after a successful redemption, and may not accept valid codes. Additionally, sandbox and TestFlight behavior has been seen to be inconsistent.\n\nA workaround may be to instead redirect customers to the App Store app to redeem codes as described below."
}
[/block]
To allow your users to redeem Offer Codes, you'll need to present the Offer Code redemption sheet. In *Purchases SDK* 3.8.0, you can call the `presentCodeRedemptionSheet` method.
```swift Swift
Purchases.shared.presentCodeRedemptionSheet()
```
Apple does not provide a callback to determine if the code redemption was successful. Since the Purchases SDK will automatically pick up on new transactions that enter the underlying transaction queue, you should implement the `receivedUpdated` [delegate or listener](doc:configuring-sdk) to respond to changes in `CustomerInfo`. Once we sync the Offer Code transaction, we'll automatically refresh CustomerInfo.
[block:callout]
{
  "type": "warning",
  "body": "The Offer Code redemption sheet may not display on a device if you haven't yet launched the App Store app and accepted the terms agreement."
}
[/block]
### Option 2: Redirect to App Store app

You can link to the App Store with a prefilled code for redemption with the following URL format:
```https://apps.apple.com/redeem?ctx=offercodes&id={apple_app_id}&code={code}```

You can find your Apple App ID in your app settings in App Store Connect (General -> App Information).

When users click your link within your app to redeem the offer code, it will take them outside of the app to complete the purchase. It is important to call [syncPurchases](https://www.revenuecat.com/docs/restoring-purchases#syncpurchases) when the user returns back to your app to retrieve their purchase. This may be done by recording when the user leaves the app due to the link, and calling `syncPurchases` when the user returns to the app. If not, the user may need to [trigger a restore](https://www.revenuecat.com/docs/restoring-purchases) within your app when they come back.

## Considerations

- In order for RevenueCat to accurately track revenue for offer codes, you will need to upload an in-app purchase key. See our guide on [In-App Purchase Key Configuration](doc:in-app-purchase-key-configuration) for step-by-step instructions.

# Next Steps

* For a guided walkthrough of implementing Subscription Offers into a Swift app [check out our blog :fa-arrow-right:](https://www.revenuecat.com/blog/signing-ios-subscription-offers)