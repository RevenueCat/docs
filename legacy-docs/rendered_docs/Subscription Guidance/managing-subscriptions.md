---
title: Upgrades, Downgrades, & Management
slug: managing-subscriptions
excerpt: Making changes to a customer's subscription
hidden: false
categorySlug: offers-lifecycle-guidance
order: 2
---
Some parts of a customer's subscription can be managed directly through RevenueCat, other parts can only be managed by the customer directly in the respective stores (Apple, Google, Stripe, and Amazon). Learn how to upgrade/downgrade, cancel, and refund subscriptions here! 

For information about Stripe, you can read more about working with web payments [here](doc:stripe#working-with-web-payments).

# Upgrade or Downgrade a Subscription

> 📘 Developers cannot change a customer's subscription directly
> 
> The app stores do not allow developers (you) to upgrade or downgrade a subscription on behalf of a customer. Only a customer can change their subscription.

## App Store

There are no code changes required to support upgrades, downgrades, and crossgrades for iOS subscriptions in your app. A customer can choose to upgrade, downgrade, or crossgrade between subscriptions as often as they like. 

According to [Apple](https://developer.apple.com/app-store/subscriptions#ranking), when a customer changes their subscription level, access to the new product can vary depending on the change:

> **Upgrade**. A user purchases a subscription that offers a higher level of service than their current subscription. They are immediately upgraded and receive a refund of the prorated amount of their original subscription. If you’d like users to immediately access more content or features, rank the subscription higher to make it an upgrade.
>
> **Downgrade**. A user selects a subscription that offers a lower level of service than their current subscription. The subscription continues until the next renewal date, then is renewed at the lower level and price.
>
> **Crossgrade**. A user switches to a new subscription of the equivalent level. If the subscriptions are the same duration, the new subscription begins immediately. If the durations are different, the new subscription goes into effect at the next renewal date.

You can refer to this [blog post](https://www.revenuecat.com/blog/ios-subscription-groups-explained) for more information on how to set up subscription groups in App Store Connect.

> 📘 Upgrades during introductory periods
> 
> When a customer upgrades products during an introductory period (including a free trial), Apple does not cancel the introductory offer but instead keeps the introductory offer active in addition to the upgraded product. So in these cases you can expect two products in the same Subscription Group to be active simultaneously.

## Google Play

In order to perform upgrades and downgrades for Google Play subscriptions, you will need to set the old product ID on `PurchaseParams.Builder`. Proration mode is optional and will default to `IMMEDIATE_WITHOUT_TIME_PRORATION`.

```kotlin Kotlin
Purchases.sharedInstance.purchase(
    PurchaseParams.Builder(requireActivity(), pkg)
        .oldProductId("old_product_id")
        .googleProrationMode(GoogleProrationMode.IMMEDIATE_WITHOUT_PRORATION)
        .build(),
    object : PurchaseCallback {
        override fun onCompleted(storeTransaction: StoreTransaction, customerInfo: CustomerInfo) {
            val entitlement = customerInfo.entitlements["my_entitlement_identifier"]
            if (entitlement != null && entitlement.isActive) {
                // Unlock that great "pro" content
            }
        }

        override fun onError(purchasesError: PurchasesError, b: Boolean) {
            // No purchase
        }
    }
)
```
```java Java
Purchases.getSharedInstance().purchase(
	new PurchaseParams.Builder(activity, pkg)
		.oldProductId("old_product_id")
		.googleProrationMode(GoogleProrationMode.IMMEDIATE_WITHOUT_PRORATION)
		.build(),
	new PurchaseCallback() {
		@Override
		public void onCompleted(@NonNull StoreTransaction storeTransaction, @NonNull CustomerInfo customerInfo) {
			if (customerInfo.getEntitlements().get("my_entitlement_identifier").isActive()) {
				// Unlock that great "pro" content
			}
		}

		@Override
		public void onError(@NonNull PurchasesError purchasesError, boolean b) {
			// No purchase
		}
	}
);
```

Google documentation provides [examples of each proration mode](https://developer.android.com/google/play/billing/subscriptions#proration), behavior when [upgrading with free trial or intro price offers](https://developer.android.com/google/play/billing/subscriptions#upgrade-free-trial), and [recommendations](https://developer.android.com/google/play/billing/subscriptions#proration-recommendations) for which proration mode to use in different scenarios.

[block:parameters]
{
  "data": {
    "h-0": "Mode",
    "h-1": "Description",
    "0-0": "**IMMEDIATE_WITHOUT_PRORATION**",
    "0-1": "Old subscription is cancelled, and new subscription takes effect immediately.  \nUser is charged for the full price of the new subscription on the old subscription's expiration date.  \nThis is the default behavior.  \n  \nGoogle recommends this mode for upgrading while in a free trial.",
    "1-0": "**IMMEDIATE_WITH_TIME_PRORATION**",
    "1-1": "Old subscription is cancelled, and new subscription takes effect immediately.  \nAny time remaining on the old subscription is used to push out the first payment date for the new subscription.  \nUser is charged the full price of new subscription once that prorated time has passed.  \nThe purchase will fail if this mode is used when switching between  `SubscriptionOption`s of the same `StoreProduct`",
    "2-0": "**IMMEDIATE_AND_CHARGE_FULL_PRICE**",
    "2-1": "Replacement takes effect immediately, and the user is charged full price of new plan and is given a full billing cycle of subscription, plus remaining prorated time from the old plan.",
    "3-0": "**IMMEDIATE_AND_CHARGE_PRORATED_PRICE**",
    "3-1": "Replacement takes effect immediately, and the billing cycle remains the same. The price difference for the remaining period is then charged to the user.  \n  \nNote: This option is available only for a subscription upgrade, where the price per unit of time increases.  \n  \nGoogle recommends this mode for upgrading to a more expensive tier, and for upgrading while in a free trial which will end access to the free trial.",
    "4-0": "**DEFERRED**",
    "4-1": "Replacement takes effect when the old plan expires, and the new price will be charged at the same time.  \n  \nGoogle recommends this mode for downgrading to a less expensive tier, and for changing recurring period on the same tier (from monthly to annual).  \n  \n**Important**: [Google Server Notifications](doc:google-server-notifications) are required to be configured for `DEFERRED` mode to work properly."
  },
  "cols": 2,
  "rows": 5,
  "align": [
    "left",
    "left"
  ]
}
[/block]

## Amazon Appstore

Amazon does not support changing products. Customers will need to cancel their existing subscription and re-subscribe to a different product.

## Considerations

### [PRODUCT_CHANGE](doc:customer-history#event-types) events and webhooks

- The `expiration_at_ms` will always be for the product the customer is changing from (old product). 
- The `PRODUCT_CHANGE` webhook should be considered informative, and does not mean that the product change has gone into effect. When the product change goes into effect you will receive a `RENEWAL` event on Apple and Stripe or a `INITIAL_PURCHASE` event on Google Play. 

# Prorations and Revenue Metrics

## App Store

For Apple transactions,  prorated revenue **will not** be shown in the [Customer History](doc:customer-history) page. However, prorated revenue **will** be calculated for your chart and overview data.

## Google Play

For Google transactions, prorated revenue will be shown in the [Customer History](doc:customer-history) page and will be calculated for your chart and overview data.

# Cancelling Subscriptions

Cancelling (or unsubscribing) from subscriptions is handled differently on each platform. Cancellations are automatically detected by RevenueCat within a few hours of occurring. This detection time can be increased to near real-time by enabling [Platform Server Notifications](doc:server-notifications).

[block:parameters]
{
  "data": {
    "h-0": "Store",
    "h-1": "Behavior",
    "0-0": "Apple",
    "0-1": "Apple does not allow developers to manage subscriptions on behalf of users. Your customers have to manually opt-out of renewal. The [Apple subscription terms](https://support.apple.com/en-us/HT202039) require users to cancel subscriptions at least 24 hours before the next renewal.",
    "1-0": "Google Play",
    "1-1": "Google allows developers to cancel auto-renewing subscriptions on behalf of customers via Google Play Console or Google's API. For prepaid subscriptions, neither the customer nor the developer can cancel the subscription as it already has an expiration date.  \n  \nIf you're looking to refund and revoke a subscription via RevenueCat's dashboard, see [Refunds](doc:refunds).",
    "2-0": "Stripe",
    "2-1": "Subscriptions can be cancelled on behalf of customers via the Stripe dashboard or REST API. Refer to Stripe documentation for more info.",
    "3-0": "Amazon",
    "3-1": "Amazon does not allow developers to cancel subscriptions on behalf of users. Once a subscription is purchased for a period, it is valid through that period and cannot be cancelled."
  },
  "cols": 2,
  "rows": 4,
  "align": [
    "left",
    "left"
  ]
}
[/block]

## Using the `managementURL` to Help Customers Cancel a Subscription

Google requires developers to allow customers to cancel a subscription within apps. You can do this by displaying a link in your app that takes the user directly to Google Play's subscription management screen where they can immediately cancel their subscription. RevenueCat helps you do this by providing a `managementURL` property on the CustomerInfo object in the SDK and in our [REST API](https://docs.revenuecat.com/reference/subscribers#the-subscriber-object).

> 📘 Include the `managementURL` on iOS
> 
> The `managementURL` is a great way to allow customers to check the status of and manage their subscriptions on both iOS and Android. RevenueCat will automatically provide your app with the correct `managementURL` based on the platform of the customer's device and original store they purchased their subscription through.

> ❗️ 
> 
> `managementURL` is not supported on Amazon or Stripe.

```swift 
Purchases.shared.getCustomerInfo { (customerInfo, error) in
    let managementURL = customerInfo.managementURL
    // display the managementURL in your app
}
```
```kotlin 
Purchases.sharedInstance.getCustomerInfo({ error -> /* Optional error handling */ }) { customerInfo ->
    val managementURL = customerInfo.managementURL
    // display the managementURL in your app
}
```

> 🚧 Deleting a User
> 
> Deleting a user from RevenueCat **WILL NOT** cancel their subscription. The user can still trigger the [Restore Purchases](doc:making-purchases#restoring-purchases) method to re-sync their transactions with RevenueCat servers.
