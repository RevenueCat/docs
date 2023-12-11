---
title: Making Purchases
slug: making-purchases
excerpt: Process a transaction with Apple or Google
hidden: false
categorySlug: documentation
order: 7
---
The SDK has a simple method, `purchase(package:)`, that takes a package from the fetched Offering and purchases the underlying product with Apple, Google, or Amazon. 
```swift 
Purchases.shared.purchase(package: package) { (transaction, customerInfo, error, userCancelled) in
  if customerInfo.entitlements["your_entitlement_id"]?.isActive == true {
    // Unlock that great "pro" content              
  }
}
```
```objectivec 
[[RCPurchases sharedPurchases] purchasePackage:package withCompletion:^(RCStoreTransaction *transaction, RCCustomerInfo *customerInfo, NSError *error, BOOL cancelled) {
  if (customerInfo.entitlements[@"your_entitlement_id"].isActive) {
    // Unlock that great "pro" content
  }
}];
```
```kotlin 
Purchases.sharedInstance.purchaseWith(
  PurchaseParams.Builder(this, aPackage).build(),
  onError = { error, userCancelled -> /* No purchase */ },
  onSuccess = { storeTransaction, customerInfo ->
    if (customerInfo.entitlements["my_entitlement_identifier"]?.isActive == true) {
      // Unlock that great "pro" content
    }
  }
)
```
```java 
Purchases.getSharedInstance().purchase(
	new PurchaseParams.Builder(this, aPackage).build(), 
	new PurchaseCallback() {
    @Override
    public void onCompleted(@NonNull StoreTransaction storeTransaction, @NonNull CustomerInfo customerInfo) {
			if (customerInfo.getEntitlements().get(<my_entitlement_identifier>).isActive()) {
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
```javascript Flutter
try {
  PurchaserInfo purchaserInfo = await Purchases.purchasePackage(package);
  if (purchaserInfo.entitlements.all["my_entitlement_identifier"].isActive) {
    // Unlock that great "pro" content
  }
} on PlatformException catch (e) {
  var errorCode = PurchasesErrorHelper.getErrorCode(e);
  if (errorCode != PurchasesErrorCode.purchaseCancelledError) {
    showError(e);  	          
  }
}
```
```javascript React Native
// Using Offerings/Packages
try {
  const {customerInfo, productIdentifier} = await Purchases.purchasePackage(package);
  if (typeof customerInfo.entitlements.active.my_entitlement_identifier !== "undefined") {
    // Unlock that great "pro" content
  }
} catch (e) {
  if (!e.userCancelled) {
  	showError(e);
  }
}

// -----
// If you are NOT using Offerings/Packages:
await Purchases.purchaseProduct("product_id");

// Or, optionally provide the product type as the third parameter. Defaults to PURCHASE_TYPE.SUBS
// The `null` second parameter is the `upgradeInfo` object discussed here: https://www.revenuecat.com/docs/managing-subscriptions#google-play
await Purchases.purchaseProduct("product_id", null, Purchases.PURCHASE_TYPE.INAPP);
```
```javascript Cordova
Purchases.purchasePackage(package, ({ productIdentifier, customerInfo }) => {
    if (typeof customerInfo.entitlements.active.my_entitlement_identifier !== "undefined") {
      // Unlock that great "pro" content
    }
  },
  ({error, userCancelled}) => {
    // Error making purchase
  }
);

// Note: if you are using purchaseProduct to purchase Android In-app products, an optional third parameter needs to be provided when calling purchaseProduct. You can use the package system to avoid this.

Purchases.purchaseProduct("product_id", ({ productIdentifier, customerInfo }) => {
}, ({error, userCancelled}) => {
    // Error making purchase
}, null, Purchases.PURCHASE_TYPE.INAPP);
```
```typescript Capacitor
try {
  const purchaseResult = await Purchases.purchasePackage({ aPackage: packageToBuy });
  if (typeof purchaseResult.customerInfo.entitlements.active['my_entitlement_identifier'] !== "undefined") {
    // Unlock that great "pro" content
  }
} catch (error: any) {
  if (error.code === PURCHASES_ERROR_CODE.PURCHASE_CANCELLED_ERROR) {
    // Purchase cancelled
  } else {
    // Error making purchase
  }
}

// Note: if you are not using offerings/packages to purchase In-app products, you can use purchaseStoreProduct and getProducts

try {
  const purchaseResult = await Purchases.purchaseStoreProduct({
    product: productToBuy
  });
  if (typeof purchaseResult.customerInfo.entitlements.active['my_entitlement_identifier'] !== "undefined") {
    // Unlock that great "pro" content
  }
} catch (error: any) {
  if (error.code === PURCHASES_ERROR_CODE.PURCHASE_CANCELLED_ERROR) {
    // Purchase cancelled
  } else {
    // Error making purchase
  }
}
```
```csharp Unity
Purchases purchases = GetComponent<Purchases>();
purchases.PurchasePackage(package, (productIdentifier, customerInfo, userCancelled, error) =>
{
  if (customerInfo.Entitlements.Active.ContainsKey("my_entitlement_identifier")) {
    // Unlock that great "pro" content
  }
});
```
The `purchase(package:)` completion block will contain an updated [CustomerInfo](doc:purchaserinfo) object if successful, along with some details about the transaction.

If the `error `object is present, then the purchase failed. See our guide on [Error Handling](doc:errors) for the specific error types.

The `userCancelled` boolean is a helper for handling user cancellation errors. There will still be an error object if the user cancels, but you can optionally check the boolean instead of unwrapping the error completely. 
[block:callout]
{
  "type": "warning",
  "title": "Warning: Automatic Transaction Finishing/Acknowledgement/Consumption",
  "body": "Transactions (new and previous transactions that are synced) will be automatically finished (acknowledged and consumed in Android), and will be made available through the RevenueCat SDK / Dashboard / ETL Exports. \n\nYou can use [observer mode](https://docs.revenuecat.com/docs/observer-mode) if you don't wish to have transactions finished (or consumed, in Android) automatically, but you will have to make sure that you finish/consume them yourself."
}
[/block]

[block:api-header]
{
  "title": "Next Steps"
}
[/block]
* Don't forget to provide some way for customers to [restore their purchases :fa-arrow-right:](doc:restoring-purchases)
* With purchases coming through, make sure they're [linked to the correct user Id :fa-arrow-right:](doc:user-ids)
* If you're ready to test, start with our guides on [sandbox testing :fa-arrow-right:](doc:sandbox)