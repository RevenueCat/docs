---
title: Displaying Products
slug: displaying-products
excerpt: Build dynamic paywalls and control available products remotely
hidden: false
categorySlug: documentation
order: 6
---
If you've [configured Offerings](doc:entitlements) in RevenueCat, you can control which products are shown to users without requiring an app update. Building paywalls that are dynamic and can react to different product configurations gives you maximum flexibility to make remote updates.

![](https://files.readme.io/edbe93c-Screen_Shot_2019-09-20_at_8.42.23_AM.png "Screen Shot 2019-09-20 at 8.42.23 AM.png")



> 📘 
> 
> Before products and offerings can be fetched from RevenueCat, be sure to initialize the Purchases SDK by following our [Quickstart](doc:getting-started) guide.

# Fetching Offerings

Offerings are fetched through the SDK based on their [configuration](doc:entitlements) in the RevenueCat dashboard.

The `getOfferings` method will fetch the Offerings from RevenueCat. These are pre-fetched in most cases on app launch, so the completion block to get offerings won't need to make a network request in most cases. 

```swift Swift
Purchases.shared.getOfferings { (offerings, error) in
    if let packages = offerings?.current?.availablePackages {
        self.display(packages)
    }
}
```
```objectivec Objective-C
[[RCPurchases sharedPurchases] getOfferingsWithCompletion:^(RCOfferings *offerings, NSError *error) {
  if (offerings.current && offerings.current.availablePackages.count != 0) {
    // Display packages for sale
  } else if (error) {
    // optional error handling
  }
}];
```
```kotlin 
Purchases.sharedInstance.getOfferingsWith({ error ->
  // An error occurred
}) { offerings ->
  offerings.current?.availablePackages?.takeUnless { it.isNullOrEmpty() }?.let {
    // Display packages for sale
  }
}
```
```java 
Purchases.getSharedInstance().getOfferings(new ReceiveOfferingsCallback() {
  @Override
  public void onReceived(@NonNull Offerings offerings) {
    if (offerings.getCurrent() != null) {
      List<Package> availablePackages = offerings.getCurrent().getAvailablePackages();
      // Display packages for sale
    }
  }
  
  @Override
  public void onError(@NonNull PurchasesError error) {
    // An error occurred
  }
});
```
```javascript Flutter
try {
  Offerings offerings = await Purchases.getOfferings();
  if (offerings.current != null && offerings.current.availablePackages.isNotEmpty) {
    // Display packages for sale
  }
} on PlatformException catch (e) {
	// optional error handling
}
```
```javascript React Native
try {
  const offerings = await Purchases.getOfferings();
  if (offerings.current !== null && offerings.current.availablePackages.length !== 0) {
    // Display packages for sale
  }
} catch (e) {
 
}
```
```javascript Cordova
func displayUpsellScreen() {
  Purchases.getOfferings(
      offerings => {
        if (offerings.current !== null && offerings.current.availablePackages.length !== 0) {  
			    // Display packages for sale
        }
      },
      error => {

      }
  );
}
```
```typescript Capacitor
const displayUpsellScreen = async () => {
  try {
    const offerings = await Purchases.getOfferings();
    if (offerings.current !== null && offerings.current.availablePackages.length !== 0) {  
      // Display packages for sale
    }
  } catch (error) {
    // Handle error
  }
}
```
```csharp Unity
var purchases = GetComponent<Purchases>();
purchases.GetOfferings((offerings, error) =>
{
  if (offerings.Current != null && offerings.Current.AvailablePackages.Count != 0){
    // Display packages for sale
  }
});
```



> 📘 Offerings, products or available packages empty
> 
> If your offerings, products, or available packages are empty, it's due to some configuration issue in App Store Connect or the Play Console. 
> 
> The most common reasons for this in App Store Connect are an out-of-date 'Paid Applications Agreement' or products not at least in the 'Ready To Submit' state. For Google Play, this usually occurs when the app is not published on a closed track and a valid test user added.
> 
> You can find more info about trouble shooting this issue in our [Help Center](https://support.revenuecat.com/hc/en-us/articles/360041793174).

You must choose one Offering that is the "Default Offering" - which can easily be accessed via the `current` property of the returned offerings for a given customer.

> 📘 What's the difference between a current Offering and a default Offering?
>
> The current Offering for a given customer may change based on the experiment they're enrolled in, any targeting rules they match, or the default Offering of your Project. Your Project's default Offering is the Offering that will be served as "current" when no other conditions apply for that customer.

To change the default Offering of your Project, navigate to the Offerings tab for that Project in the RevenueCat dashboard, and find the Offering you'd like to make default. Then, click on the icon in the Actions column of that Offering to reveal the available options, and click **Make Default** to make the change.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/7508f4b-Screenshot_2023-12-05_at_10.17.25_PM.png",
        "",
        ""
      ],
      "align": "center"
    }
  ]
}
[/block]


Offerings can be updated at any time, and the changes will go into effect for all users right away.

## Custom Offering identifiers

It's also possible to access other Offerings besides the Default Offering directly by its identifier.

```swift Swift
Purchases.shared.getOfferings { (offerings, error) in
    if let packages = offerings?.offering(identifier: "experiment_group")?.availablePackages {
        self.display(packages)
    }
}
```
```objectivec Objective-C
[[RCPurchases sharedPurchases] offeringsWithCompletionBlock:^(RCOfferings *offerings, NSError *error) {
	NSArray<RCPackage *> *availablePackages = [offerings offeringWithIdentifier:"experiment_group"].availablePackages;
  if (availablePackages) {
    // Display packages for sale
  }
}];
```
```kotlin 
Purchases.sharedInstance.getOfferingsWith({ error ->
  // An error occurred
}) { offerings ->
  offerings["experiment_group"]?.availablePackages?.takeUnless { it.isNullOrEmpty() }?.let {
    // Display packages for sale
  }
}
```
```java 
Purchases.getSharedInstance().getOfferings(new ReceiveOfferingsCallback() {
  @Override
  public void onReceived(@NonNull Offerings offerings) {
    if (offerings.get("experiment_group") != null) {
      List<Package> availablePackages = offerings.get("experiment_group").getAvailablePackages();
      // Display packages for sale
    }
  }
  
  @Override
  public void onError(@NonNull PurchasesError error) {
    // An error occurred
  }
});
```
```javascript Flutter
try {
  Offerings offerings = await Purchases.getOfferings();
  if (offerings.getOffering("experiment_group").availablePackages.isNotEmpty) {
    // Display packages for sale
  }
} on PlatformException catch (e) {
	// optional error handling
}
```
```javascript React Native
try {
  const offerings = await Purchases.getOfferings();
  if (offerings.all["experiment_group"].availablePackages.length !== 0) {
    // Display packages for sale
  }
} catch (e) {
 
}
```
```javascript Cordova
Purchases.getOfferings(
      offerings => {
        if (offerings.all["experiment_group"].availablePackages.length !== 0) {
			    // Display packages for sale
        }
      },
      error => {

      }
  );
```
```typescript Capacitor
try {
  const offerings = await Purchases.getOfferings();
  if (offerings.all["experiment_group"].availablePackages.length !== 0) {  
    // Display packages for sale
  }
} catch (error) {
  // Handle error
}
```
```csharp Unity
var purchases = GetComponent<Purchases>();
purchases.GetOfferings((offerings, error) =>
{
  if (offerings.All.ContainsKey("experiment_group") && offerings.All["experiment_group"].AvailablePackages.Count != 0) {
  	// Display packages for sale
  }
});
```



# Displaying Packages

Packages help abstract platform-specific products by grouping equivalent products across iOS, Android, and web. A package is made up of three parts: identifier, type, and underlying store product.

[block:parameters]
{
  "data": {
    "h-0": "Name",
    "h-1": "Description",
    "0-0": "Identifier",
    "0-1": "The package identifier (e.g. `com.revenuecat.app.monthly`)",
    "1-0": "Type",
    "1-1": "The type of the package:  \n- `UNKNOWN`  \n- `CUSTOM`  \n- `LIFETIME`  \n- `ANNUAL`  \n- `SIX_MONTH`  \n- `THREE_MONTH`  \n- `TWO_MONTH`  \n- `MONTHLY`  \n- `WEEKLY`",
    "2-0": "Product",
    "2-1": "The underlying product that is mapped to this package which includes details about the price and duration."
  },
  "cols": 2,
  "rows": 3,
  "align": [
    "left",
    "left"
  ]
}
[/block]

Packages can be access in a few different ways:

1. via the `.availablePackages` property on an Offering.
2. via the duration convenience property on an Offering
3. via the package identifier directly

```swift Swift
let packages = offerings.offering(identifier: "experiment_group")?.availablePackages
// --
let monthlyPackage = offerings.offering(identifier: "experiment_group")?.monthly
// --
let packageById = offerings.offering(identifier: "experiment_group")?.package(identifier: "<package_id>")
```
```objectivec 
[offerings offeringWithIdentifier:"experiment_group"].availablePackages
// --
[offerings offeringWithIdentifier:"experiment_group"].monthly
// --
[[offerings offeringWithIdentifier:"experiment_group"] packageWithIdentifier:@"<package_id>"]
```
```kotlin 
offerings["experiment_group"]?.availablePackages
// --
offerings["experiment_group"]?.monthly
// --
offerings["experiment_group"]?.getPackage("<package_id>")
```
```javascript Flutter
offerings.getOffering("experiment_group").availablePackages
// --
offerings.getOffering("experiment_group").monthly
// --
offerings.getOffering("experiment_group").getPackage("<package_id>")
```
```javascript React Native
offerings.all["experiment_group"].availablePackages
// --
offerings.all["experiment_group"].monthly
// --
offerings.all["experiment_group"].availablePackages.find(package => package === "<package_id>")
```
```javascript Capacitor/Cordova
offerings.all["experiment_group"].availablePackages
// --
offerings.all("experiment_group").monthly
// --
offerings.all("experiment_group").package("<package_id>")
```
```csharp Unity
offerings.All["experiment_group"].AvailablePackages
// --
offerings.All["experiment_group"].Monthly
// --
// Manually filter AvailablePackages by the custom package identifier
```



### Getting the Product from the Package

Each Package includes an underlying product that includes more information about the price, duration, and other metadata. You can access the product via the `storeProduct` property:

```swift Swift
Purchases.shared.getOfferings { (offerings, error) in
    // Accessing the monthly product
    if let product = offerings?.current?.monthly?.storeProduct {
        // Display the product information (like price and introductory period)
        self.display(product)
    }
}
```
```objectivec Objective-C
// Accessing the monthly product

[[RCPurchases sharedPurchases] offeringsWithCompletionBlock:^(RCOfferings *offerings, NSError *error) {
  if (offerings.current && offerings.current.monthly) {
    SKProduct *product = offerings.current.monthly.storeProduct;
    // Get the price and introductory period from the StoreProduct
  } else if (error) {
    // optional error handling
  }
}];
```
```kotlin Kotlin
// Accessing the monthly product

Purchases.sharedInstance.getOfferingsWith({ error ->
  // An error occurred
}) { offerings ->
  val product = offerings.current?.monthly?.product?.also {
    // Get the price and introductory period from the SkuDetails
  }
}
```
```java Java
// Accessing the monthly product

Purchases.getSharedInstance().getOfferings(new ReceiveOfferingsCallback() {
  @Override
  public void onReceived(@NonNull Offerings offerings) {
    if (offerings.getCurrent() != null && offerings.getCurrent().getMonthly() != null) {
      StoreProduct product = offerings.getCurrent().getMonthly().getProduct();
      // Get the price and introductory period from the StoreProduct
    }
  }
  
  @Override
  public void onError(@NonNull PurchasesError error) {
    // An error occurred
  }
});
```
```javascript Flutter
// Accessing the monthly product// Displaying the monthly product

try {
  Offerings offerings = await Purchases.getOfferings();
  if (offerings.current != null && offerings.current.monthly != null) {
    Product product = offerings.current.monthly.product;
    // Get the price and introductory period from the Product
  }
} on PlatformException catch (e) {
	// optional error handling
}
```
```javascript React Native
// Accessing the monthly product// Displaying the monthly product

try {
  const offerings = await Purchases.getOfferings();
  if (offerings.current && offerings.current.monthly) {
    const product = offerings.current.monthly;
    // Get the price and introductory period from the PurchasesProduct
  }
} catch (e) {
 
}
```
```javascript Cordova
// Accessing the monthly product

func displayUpsellScreen() {
  Purchases.getOfferings(
      offerings => {
        if (offerings.current && offerings.current.monthly) {  
          const product = offerings.current.monthly;
			    // Get the price and introductory period from the PurchasesProduct
        }
      },
      error => {

      }
  );
}
```
```typescript Capacitor
// Accessing the monthly product

const displayUpsellScreen = async () => {
  try {
    const offerings = await Purchases.getOfferings();
    if (offerings.current && offerings.current.monthly) {
      const product = offerings.current.monthly;  
      // Get the price and introductory period from the PurchasesProduct
    }
  } catch (error) {
    // Handle error
  }
}
```
```csharp Unity
// Accessing the monthly product

var purchases = GetComponent<Purchases>();
purchases.GetOfferings((offerings, error) =>
{
  if (offerings.Current != null && offerings.Current.Monthly != null){
    var product = offerings.Current.Monthly.Product;
    // Get the price and introductory period from the Product
  }
});
```



# Choosing which Offering to display

In practice, you may not want to display the default current Offering to every user and instead have a specific cohort that see a different Offering.

For example, displaying a higher priced Offering to users that came from [paid acquisition](doc:attribution) to help recover ad costs, or a specific Offering designed to show [iOS Subscription Offers](doc:ios-subscription-offers) when a user has [cancelled their subscription](doc:purchaserinfo#section-get-entitlement-information). 

This can be accomplished with custom Offering identifiers for each of these "cohorts".

```swift Swift
Purchases.shared.getOfferings { (offerings, error) in
    var packages: [Package]?

    if user.isPaidDownload {
        packages = offerings?.offering(identifier: "paid_download_offer")?.availablePackages
    } else if user.signedUpOver30DaysAgo {
        packages = offerings?.offering(identifier: "long_term_offer")?.availablePackages
    } else if user.recentlyChurned {
        packages = offerings?.offering(identifier: "ios_subscription_offer")?.availablePackages
    }

    // Present your paywall
    self.display(packages)
}
```
```objectivec Objective-C
[[RCPurchases sharedPurchases] offeringsWithCompletionBlock:^(RCOfferings *offerings, NSError *error) {
  NSArray<RCPackage *> *packages;
  
  if (user.isPaidDownload) {
    packages = [offerings offeringWithIdentifier:"paid_download_offer"].availablePackages;
  } else if (user.signedUpOver30DaysAgo) {
    packages = [offerings offeringWithIdentifier:"long_term_offer"].availablePackages;
  } else if (user.recentlyChurned) {
    packages = [offerings offeringWithIdentifier:"ios_subscription_offer"].availablePackages;
  }
  
  [self presentPaywallWithPackages:packages];
}];
```
```kotlin 
Purchases.sharedInstance.getOfferingsWith({ error ->
  // An error occurred
}) { offerings ->
  val packages: Package? = when {
    user.isPaidDownload -> offerings["paid_download_offer"]?.availablePackages
    user.signedUpOver30DaysAgo -> offerings["long_term_offer"]?.availablePackages
    user.recentlyChurned -> offerings["ios_subscription_offer"].availablePackages
    else -> null
  }
	presentPaywall(packages)
}
```
```java 
Purchases.getSharedInstance().getOfferings(new ReceiveOfferingsCallback() {
  @Override
  public void onReceived(@NonNull Offerings offerings) {
    List<Package> packages = null;
    if (user.isPaidDownload) {
      if (offerings.get("paid_download_offer") != null) {
        packages = offerings.get("paid_download_offer").getAvailablePackages();
      }
    } else if (user.signedUpOver30DaysAgo) {
      if (offerings.get("long_term_offer") != null) {
        packages = offerings.get("long_term_offer").getAvailablePackages();
      }
    }
    presentPaywall(packages);
  }
  
  @Override
  public void onError(@NonNull PurchasesError error) {
    // An error occurred
  }
});
```
```javascript Flutter
try {
  Offerings offerings = await Purchases.getOfferings();
  var packages;
  if (user.isPaidDownload) {
    packages = offerings?.getOffering("paid_download_offer")?.availablePackages;
  } else if (user.signedUpOver30DaysAgo) {
    packages = offerings?.getOffering("long_term_offer")?.availablePackages;
  } else if (user.recentlyChurned) {
    packages = offerings?.getOffering("ios_subscription_offer")?.availablePackages;
  }
  presentPaywall(packages);
} on PlatformException catch (e) {
	// optional error handling
}
```
```javascript React Native
try {
  const offerings = await Purchases.getOfferings();
  let packages;
  if (user.isPaidDownload) {
    packages = offerings.all["paid_download_offer"].availablePackages;
  } else if (user.signedUpOver30DaysAgo) {
    packages = offerings.all["long_term_offer"].availablePackages;
  } else if (user.recentlyChurned) {
    packages = offerings.all["ios_subscription_offer"].availablePackages;
  }
  presentPaywall(packages);
} catch (e) {
 
}
```
```javascript Cordova
Purchases.getOfferings(
      offerings => {
        let packages;
        if (user.isPaidDownload) {
          packages = offerings.all["paid_download_offer"].availablePackages;
        } else if (user.signedUpOver30DaysAgo) {
          packages = offerings.all["long_term_offer"].availablePackages;
        } else if (user.recentlyChurned) {
          packages = offerings.all["ios_subscription_offer"].availablePackages;
        }
        presentPaywall(packages);
      },
      error => {

      }
  );
```
```typescript Capacitor
Purchases.getOfferings(
      offerings => {
        let packages;
        if (user.isPaidDownload) {
          packages = offerings.all["paid_download_offer"].availablePackages;
        } else if (user.signedUpOver30DaysAgo) {
          packages = offerings.all["long_term_offer"].availablePackages;
        } else if (user.recentlyChurned) {
          packages = offerings.all["ios_subscription_offer"].availablePackages;
        }
        presentPaywall(packages);
      },
      error => {

      }
  );
```
```csharp Unity
var purchases = GetComponent<Purchases>();
purchases.GetOfferings((offerings, error) =>
{
  List<Purchases.Package> packages;
  if (user.isPaidDownload) {
    packages = offerings.All["paid_download_offer"].AvailablePackages;
  } else if (user.signedUpOver30DaysAgo) {
    packages = offerings.All["long_term_offer"].AvailablePackages;
  } else if (user.recentlyChurned) {
    packages = offerings.All["ios_subscription_offer"].AvailablePackages;
  }
  presentPaywall(packages);
});
```



> 📘 
> 
> As of now, cohort logic needs to be managed outside of RevenueCat.

# Best Practices

| Do                                                                         | Don't                                                         |
| :------------------------------------------------------------------------- | :------------------------------------------------------------ |
| ✅ Make paywalls dynamic by minimizing or eliminating any hardcoded strings | ❌ Make static paywalls hardcoded with specific product IDs    |
| ✅ Use default package types                                                | ❌ Use custom package identifiers in place of a default option |
| ✅ Allow for any number of product choices                                  | ❌ Support only a fixed number of products                     |
| ✅ Support for different free trial durations, or no free trial             | ❌ Hardcode free trial text                                    |

# Next Steps

- Now that you've shown the correct products to users, time to [make a purchase ](doc:making-purchases)
- Check out our [sample apps ](doc:sample-apps) for examples of how to display products.
