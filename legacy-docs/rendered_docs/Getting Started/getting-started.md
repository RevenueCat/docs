---
title: SDK Quickstart
slug: getting-started
excerpt: Get up and running with mobile subscriptions
hidden: false
categorySlug: documentation
order: 1
---
This guide will walk you through how to get up and running with subscriptions and RevenueCat's SDK with only a few lines of code.

# 1. Create a RevenueCat Account

Sign up for a new RevenueCat account [here](https://app.revenuecat.com). 

> 📘 💡 Here's a tip!
> 
> We recommend creating a separate RevenueCat account for each app / project you have, especially if you ever intend on selling the app. This will speed up the transfer process, since you can transfer the entire account rather than waiting for RevenueCat Support to transfer individual projects.

### Organizations / Enterprise

We recommend using a company account when registering for RevenueCat and setting up your app within a project. You'll be able to invite the rest of your team as [collaborators](doc:collaborators) to your project, but **only the project owner can manage billing**. Project collaborators can't manage billing details.

# 2. Project and App Configuration

## ▶️ Create a Project

Navigate to the RevenueCat dashboard and [add a new project ](https://app.revenuecat.com/overview) from the dropdown in the top navigation menu called _Projects_.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/db42095-Screen_Shot_2022-11-16_at_3.28.33_PM.png",
        "Screen Shot 2022-11-16 at 3.28.33 PM.png",
        790
      ],
      "align": "center",
      "sizing": "80",
      "border": true,
      "caption": "The popup modal for creating a new Project"
    }
  ]
}
[/block]

## ▶️ Add an App / Platform

From **Project Settings > Apps** in the left menu of the project dashboard, select the platform for the app you will be adding.  

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/e99ad62-Screen_Shot_2022-11-16_at_3.30.11_PM.png",
        "Screen Shot 2022-11-16 at 3.30.11 PM.png",
        2360
      ],
      "align": "center",
      "sizing": "80",
      "border": true,
      "caption": "Project dashboard for selecting the app platform"
    }
  ]
}
[/block]

The field **App name** is required to add your app to RevenueCat. For iOS apps **In-App Purchase Key**(iOS) is also required. To make test and production purchases, the **Bundle ID** (iOS) / **Package Name** (Android) as well as the **Shared Secret**(iOS) / **Service Credentials** (Android) **must be configured**.

> 📘 
> 
> If you try making purchases without a bundle ID and valid credentials, the SDK will fail with a '[receipt is not valid](https://www.revenuecat.com/docs/errors#---invalid_receipt)' error as RevenueCat will be unable to validate the transaction with the store.

The rest of the configuration fields can be added later. 


[block:image]
{
  "images": [
    {
      "image": [
        "https://github.com/RevenueCat/revenuecat-docs/assets/5860245/7ddfb6e9-d730-4440-baba-d94bef820288",
        "iOS App Creation Form.png",
        1682
      ],
      "align": "center",
      "sizing": "80",
      "border": true,
      "caption": "App configuration page for an Apple App Store app"
    }
  ]
}
[/block]

> 📘 💡 Here's a tip!
> 
> After registering your app, we recommend setting up [Platform Server Notifications](doc:server-notifications). These notifications aren't required but will speed up [webhooks](doc:webhooks) and integration delivery times and reduce lag time updating your subscribers.

> 📘 Staging vs. Production apps and users
> 
> RevenueCat itself does not have separate environments for staging and production. Rather, the underlying transactions for users are differentiated by sandbox and production.
> 
> Any RevenueCat app can make both sandbox and production purchases from the stores. If you do have separate apps for staging and production, you can create multiple projects in RevenueCat to mirror your setup.
> 
> Furthermore, users are not separated by environment, either. The same user can have active sandbox purchases and active production purchases at the same time.

## ▶️ Service Credentials

Service credentials need to be set up for RevenueCat to communicate with the app stores on your behalf. See our guides [App Store Connect Shared Secret](doc:itunesconnect-app-specific-shared-secret), [App Store In-App Purchase Key](doc:in-app-purchase-key-configuration), [Play Service Credentials](doc:creating-play-service-credentials), and [Amazon Appstore Shared Secret](doc:amazon-appstore) for more information. 

Note that Play service credentials can take up to 36 hours to propagate throughout Google's servers.

# 3. Product Configuration

## ▶️ Store Setup

Before you can start using RevenueCat to fetch products, you must configure your products in the respective stores. See the following guides for [App Store Connect](doc:ios-products), [Google Play Console](doc:android-products), [Amazon Appstore](doc:amazon-product-setup), and [Stripe](doc:stripe-products) for help navigating through this process.

If you are selling iOS products, be sure to sign your 'Paid Applications Agreement' and fill out your bank and tax information in **App Store Connect > Agreements, Tax, and Banking**. **This needs to be completed before you can test any purchases**.

> 📘 Want to skip the store setup while testing?
> 
> On iOS, you can delay configuring products in App Store Connect by testing with StoreKit Configuration files instead. These config files require minimal setup and are configurable via Xcode directly.
> 
> Read more about setting up StoreKit Configuration files in our [Sandbox Testing](https://www.revenuecat.com/docs/apple-app-store#ios-14-only-testing-on-the-simulator) guide.

## ▶️ Configure Products and Entitlements in RevenueCat

Once your in-app products have been configured in  [App Store Connect](doc:ios-products), [Google Play Console](doc:android-products), [Amazon Appstore](doc:amazon-product-setup), or [Stripe](doc:stripe-products), you'll need to copy that configuration into the RevenueCat dashboard. RevenueCat uses an Entitlements system to control access to premium features, and Offerings to manage the set of products you offer to customers. 

Entitlements are the level of access that a customer is "entitled" to after purchasing a specific product, and Offerings is a simple way for you to organize the in-app products you wish to "offer" on your paywall and configure them remotely. We **recommend** utilizing these features to simplify your code and enable you to change products without releasing an app update.

See [Configuring Products](doc:entitlements) to set up your products and then organize them into Offerings or Entitlements.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/55e2667-1628274-Entitlements_2.0.png",
        "1628274-Entitlements_2.0.png",
        1154
      ],
      "align": "center",
      "sizing": "80"
    }
  ]
}
[/block]

# 4. Using RevenueCat's Purchases SDK

Our SDK seamlessly implements purchases and subscriptions across platforms while syncing tokens with the RevenueCat server.

## ▶️ Installation

Install the SDK on your preferred platform with our installation guides below.

- [iOS/watchOS/tvOS Installation](doc:ios) 
- [Android Installation ](doc:android)
- [React Native Installation ](doc:reactnative) 
- [Flutter Installation ](doc:flutter)
- [Capacitor / Ionic Installation ](doc:ionic)
- [Cordova Installation ](doc:cordova) 
- [Unity Installation ](doc:unity) 
- [macOS / Catalyst Installation ](doc:macos)

If you run into issues with the SDK, see [Troubleshooting the SDKs](doc:troubleshooting-the-sdks) for guidance.

## ▶️ Initialize and Configure the SDK

> 📘 Only use your public SDK key to configure Purchases
> 
> You can get your public SDK key from the **API keys** tab under **Project settings** in the dashboard.

You should only configure the shared instance of _Purchases_ once, usually on app launch. After that, the same instance is shared throughout your app by accessing the `.shared` instance in the SDK.

See our guide on [Configuring SDK](https://docs.revenuecat.com/docs/configuring-sdk) for more information and best practices.

Make sure you configure _Purchases_ with your public SDK key only. You can read more about the different API keys available in our [Authentication guide](doc:authentication).

```swift 
// on iOS and tvOS, use `application:didFinishLaunchingWithOptions:`
// on macOS and watchOS use `applicationDidFinishLaunching:` 

func application(_ application: UIApplication,
                 didFinishLaunchingWithOptions launchOptions: [UIApplicationLaunchOptionsKey: Any]?) -> Bool {

    Purchases.logLevel = .debug
    Purchases.configure(withAPIKey: <revenuecat_api_key>, appUserID: <app_user_id>)

}
```
```objectivec 
// on iOS and tvOS, use `application:didFinishLaunchingWithOptions:`
// on macOS and watchOS use `applicationDidFinishLaunching:` 

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
    // Override point for customization after application launch.
    
    RCPurchases.logLevel = RCLogLevelDebug;
    [RCPurchases configureWithAPIKey:@<revenuecat_api_key> appUserID:<app_user_id>];
    
    return YES;
}
```
```kotlin 
// If you're targeting only Google Play Store
class MainApplication: Application() {
    override fun onCreate() {
        super.onCreate()
        Purchases.logLevel = LogLevel.DEBUG
        Purchases.configure(PurchasesConfiguration.Builder(this, <public_google_sdk_key>).build())
    }
}

// If you're building for the Amazon Appstore, you can use flavors to determine which keys to use
// In your build.gradle:
flavorDimensions "store"
productFlavors {
    amazon {
        buildConfigField "String", "STORE", "\"amazon\""
    }

    google {
        buildConfigField "String", "STORE", "\"google\""
    }       
}

///...

class MainApplication: Application() {
    override fun onCreate() {
        super.onCreate()
        Purchases.logLevel = LogLevel.DEBUG
          
        if (BuildConfig.STORE.equals("amazon")) {
            Purchases.configure(AmazonConfiguration.Builder(this, <public_amazon_sdk_key>).build())
        } else if (BuildConfig.STORE.equals("google")) {
            Purchases.configure(PurchasesConfiguration.Builder(this, <public_google_sdk_key>).build())
        }
    }
}
```
```java 
// If you're targeting only Google Play Store
public class MainApplication extends Application {
    @Override
    public void onCreate() {
        super.onCreate();
        Purchases.setLogLevel(LogLevel.DEBUG);
        Purchases.configure(new PurchasesConfiguration.Builder(this, <public_google_sdk_key>).build());
    }
}

// If you're building for the Amazon Appstore, 
// click the Kotlin tab to see how to set up flavors in your build.gradle:
///...

public class MainApplication extends Application {
    @Override
    public void onCreate() {
        super.onCreate();
        Purchases.setLogLevel(LogLevel.DEBUG);
      
        PurchasesConfiguration.Builder builder = null;
      
        if (BuildConfig.STORE.equals("amazon")) {
            builder = new AmazonConfiguration.Builder(this, <public_amazon_sdk_key>);
        } else if (BuildConfig.STORE.equals("google")) {
            builder = new PurchasesConfiguration.Builder(this, <public_google_sdk_key>);
        }
      
        Purchases.configure(builder.build());
    }
}
```
```javascript Flutter
import 'dart:io' show Platform;

//...

Future<void> initPlatformState() async {
  await Purchases.setDebugLogsEnabled(true);
  
  PurchasesConfiguration configuration;
  if (Platform.isAndroid) {
    configuration = PurchasesConfiguration(<public_google_sdk_key>);
    if (buildingForAmazon) { 
      // use your preferred way to determine if this build is for Amazon store
      // checkout our MagicWeather sample for a suggestion
      configuration = AmazonConfiguration(<public_amazon_sdk_key>);
    }
  } else if (Platform.isIOS) {
    configuration = PurchasesConfiguration(<public_ios_sdk_key>);
  }
  await Purchases.configure(configuration);
}
```
```typescript React Native
import { Platform } from 'react-native';

//...

export default class App extends React.Component {
 
  componentDidMount() {
    Purchases.setLogLevel(LOG_LEVEL.VERBOSE);
    
    if (Platform.OS === 'ios') {
       Purchases.configure({apiKey: <public_ios_sdk_key>});
    } else if (Platform.OS === 'android') {
       Purchases.configure({apiKey: <public_google_sdk_key>});
      
      // OR: if building for Amazon, be sure to follow the installation instructions then:
       Purchases.configure({ apiKey: <public_amazon_sdk_key>, useAmazon: true });
    }
    
  }
}
```
```typescript Capacitor
const onDeviceReady = async () => {
  await Purchases.setLogLevel(LOG_LEVEL.DEBUG);
  if (Capacitor.getPlatform() === 'ios') {
    await Purchases.configure({ apiKey: <public_apple_api_key> });
  } else if (Capacitor.getPlatform() === 'android') {
    await Purchases.configure({ apiKey: <public_google_api_key> });
  }
  // OR: if building for Amazon, be sure to follow the installation instructions then:
  await Purchases.configure({ apiKey: <public_amazon_api_key>, useAmazon: true });
}
```
```javascript Cordova
document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
  Purchases.setLogLevel(LOG_LEVEL.DEBUG);
  if (window.cordova.platformId === 'ios') {
    Purchases.configure(<public_ios_sdk_key>);
  } else if (window.cordova.platformId === 'android') {
    Purchases.configure(<public_google_sdk_key>);
    // OR: if building for Amazon, be sure to follow the installation instructions then:
    await Purchases.configure({apiKey: <public_amazon_sdk_key>, useAmazon: true});
  }
}
```
```text Unity
See Unity installation instructions https://docs.revenuecat.com/docs/unity
```

The `app_user_id` field in `.configure` is how RevenueCat identifies users of your app. You can provide a custom value here or omit it for us to generate an anonymous id. For more information, see our [Identifying Users](https://www.revenuecat.com/docs/user-ids) guide.

When in development, we recommend enabling more verbose debug logs. For more information about these logs, see our [Debugging](doc:debugging) guide.  

If you're planning to use RevenueCat alongside your existing purchase code, check out our guide on [Observer Mode](doc:observer-mode).

> 📘 Configuring Purchases with User IDs
> 
> If you have a user authentication system in your app, you can provide a user identifier at the time of configuration or at a later date with a call to `.logIn()`. To learn more, check out our guide on [Identifying Users](user-ids).

## ▶️ Fetch and Display Available Products

The SDK will automatically fetch the [configured Offerings](doc:entitlements#offerings) and retrieve the product information from Apple, Google, or Amazon. Thus, available products will already be loaded when customers launch your purchase screen.

Below is an example of fetching Offerings. You can utilize Offerings to organize your paywall screen. See our guide on [Displaying Products](doc:displaying-products) for more information and best practices.

```swift 
// Using Swift Concurrency
do {
    let offerings = try await Purchases.shared.offerings()
    // Display current offering with offerings.current
} catch let error {
    // handle error
}
// Using Completion Blocks
Purchases.shared.getOfferings { (offerings, error) in
	if let offerings {
	  // Display current offering with offerings.current
  }
}
```
```objectivec 
[[RCPurchases sharedPurchases] getOfferingsWithCompletion:^(RCOfferings *offerings, NSError *error) {
  if (offerings) {
		// Display current offering with offerings.current
  } else if (error) {
    // optional error handling
  }
}];
```
```kotlin 
Purchases.sharedInstance.getOfferingsWith(
	onError = { error ->
    /* Optional error handling */ 
  },
  onSuccess = { offerings ->  
  	// Display current offering with offerings.current
	}
}
```
```java 
Purchases.getSharedInstance().getOfferings(new ReceiveOfferingsCallback() {

     @Override
     public void onReceived(@NonNull Offerings offerings) {
     }

     @Override
     public void onError(@NonNull PurchasesError error) {
        /* Optional error handling */
     }
});
```
```javascript Flutter
try {
  Offerings offerings = await Purchases.getOfferings();
  if (offerings.current != null) {
    // Display current offering with offerings.current
  }
} on PlatformException catch (e) {
	// optional error handling
}
```
```javascript React Native
try {
  const offerings = await Purchases.getOfferings();
  if (offerings.current !== null) {  
	  // Display current offering with offerings.current
  }
} catch (e) {

}
```
```typescript Capacitor
func displayUpsellScreen() {
  try {
    const offerings = await Purchases.getOfferings();
    if (offerings.current !== null) {  
      // Display current offering with offerings.current
    }
  } catch (error) {
    // Handle error
  }
}
```
```javascript Cordova
func displayUpsellScreen() {
  Purchases.getOfferings(
      offerings => {
        if (offerings.current !== null) {  
          // Display current offering with offerings.current
        }
      },
      error => {

      }
  );
}
```
```csharp Unity
var purchases = GetComponent<Purchases>();
purchases.GetOfferings((offerings, error) =>
{
  if (error != null) {
    LogError(error);
  } else if (offerings.Current != null {
    // Display current offering with offerings.current
  }
});
```
```curl Web
curl --request GET \
  --url https://api.revenuecat.com/v1/subscribers/<app_user_id>/offerings \
  --header 'Accept: application/json' \
  --header 'Authorization: Bearer REVENUECAT_API_KEY' \
  --header 'Content-Type: application/json' \
  --header 'X-Platform: stripe'
```

### See it in action

[block:html]
{
  "html": "<body>\n  <a href=\"https://github.com/RevenueCat/purchases-ios/blob/main/Examples/MagicWeather/MagicWeather/Sources/Controllers/PaywallViewController.swift#L24-L35\" target=\"_blank\" class=\"button-text\">Swift</a>\n  <a href=\"https://github.com/RevenueCat/purchases-android/blob/main/examples/MagicWeather/app/src/main/java/com/revenuecat/sample/ui/paywall/PaywallFragment.kt#L48-L53\" target=\"_blank\" class=\"button-text\">Kotlin</a>\n  <a href=\"https://github.com/RevenueCat/purchases-flutter/blob/main/revenuecat_examples/MagicWeather/lib/src/views/weather.dart#L41-L79\" target=\"_blank\" class=\"button-text\">Flutter</a>\n  <a href=\"https://github.com/RevenueCat/react-native-purchases/blob/main/examples/MagicWeather/src/screens/PaywallScreen/index.js#L24-L33\" target=\"_blank\"  class=\"button-text\">React Native</a>\n</body>"
}
[/block]

If fetching your [Offerings](doc:entitlements#offerings), [products](doc:entitlements#products), or available [packages](doc:entitlements#adding-packages) are empty, it's due to some configuration issue in the respective store. 

The most common reasons for this in App Store Connect are an out-of-date 'Paid Applications Agreement' or products not at least in the 'Ready To Submit' state. In Google Play this usually occurs when the app is not published on a closed track and a valid test user added.

You can find more info about troubleshooting this issue in our [Help Center](https://support.revenuecat.com/hc/en-us/articles/360041793174).

## ▶️ Make a Purchase

The SDK includes a simple method for facilitating purchases. The `purchase:package` takes a package from the fetched Offering and processes the transaction with the respective app store.

The code sample below shows the process of purchasing a package and confirming it unlocks the "your_entitlement_id" content. More detail about the `purchase:package` method can be found in our guide on [Making Purchases](doc:making-purchases).

```swift 
Purchases.shared.purchase(package: package) { (transaction, customerInfo, error, userCancelled) in
    if customerInfo?.entitlements.all[<your_entitlement_id>]?.isActive == true {
        // Unlock that great "pro" content
    }
}
```
```objectivec 
[[RCPurchases sharedPurchases] purchasePackage:package withCompletion:^(RCStoreTransaction *transaction, RCCustomerInfo *customerInfo, NSError *error, BOOL cancelled) {
    if (customerInfo.entitlements.all[@<your_entitlement_id>].isActive) {
    // User is "premium"
	}
}];
```
```kotlin 
Purchases.sharedInstance.purchaseWith(
  PurchaseParams.Builder(this, package).build(),
  onError = { error, userCancelled -> /* No purchase */ },
  onSuccess = { storeTransaction, customerInfo ->
    if (customerInfo.entitlements[<my_entitlement_identifier>]?.isActive == true) {
    // Unlock that great "pro" content
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
  CustomerInfo customerInfo = await Purchases.purchasePackage(package);
  var isPro = customerInfo.entitlements.all[<my_entitlement_identifier>].isActive;
  if (isPro) {
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
// Using packages
try {
  const purchaseMade = await Purchases.purchasePackage(package);
  if (typeof purchaseMade.customerInfo.entitlements.active[<my_entitlement_identifier>] !== "undefined") {
    // Unlock that great "pro" content
  }
} catch (e) {
  if (!e.userCancelled) {
  	showError(e);
  }
}

// Note: if you are using purchaseProduct to purchase Android In-app products, an optional third parameter needs to be provided when calling purchaseProduct. You can use the package system to avoid this
await Purchases.purchaseProduct(<product_id>, null, Purchases.PURCHASE_TYPE.INAPP);
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
```javascript Cordova
Purchases.purchasePackage(package, ({ productIdentifier, customerInfo }) => {
    if (typeof customerInfo.entitlements.active[<my_entitlement_identifier>] !== "undefined") {
      // Unlock that great "pro" content
    }
  },
  ({error, userCancelled}) => {
    // Error making purchase
  }
);

// Note: if you are using purchaseProduct to purchase Android In-app products, an optional third parameter needs to be provided when calling purchaseProduct. You can use the package system to avoid this.

Purchases.purchaseProduct(<product_id>, ({ productIdentifier, customerInfo }) => {
}, ({error, userCancelled}) => {
    // Error making purchase
}, null, Purchases.PURCHASE_TYPE.INAPP);
```
```csharp Unity
Purchases purchases = GetComponent<Purchases>();
purchases.PurchasePackage(package, (productIdentifier, purchaserInfo, userCancelled, error) =>
{
  if (purchaserInfo.Entitlements.Active.ContainsKey(<my_entitlement_identifier>)) {
    // Unlock that great "pro" content
  }
});
```
```curl Web
curl -X POST \
  https://api.revenuecat.com/v1/receipts \
  -H 'Content-Type: application/json' \
  -H 'X-Platform: stripe' \
  -H 'Authorization: Bearer YOUR_REVENUECAT_API_KEY' \
  -d '{ "app_user_id": "my_app_user_id",
  "fetch_token": "sub_xxxxxxxxxx"
  }'
```

### See it in action

[block:html]
{
  "html": "<body>\n  <a href=\"https://github.com/RevenueCat/purchases-ios/blob/main/Examples/MagicWeather/MagicWeather/Sources/Controllers/PaywallViewController.swift#L78-L95\" target=\"_blank\" class=\"button-text\">Swift</a>\n  <a href=\"https://github.com/RevenueCat/purchases-android/blob/main/examples/MagicWeather/app/src/main/java/com/revenuecat/sample/ui/paywall/PaywallFragment.kt#L55-L66\" target=\"_blank\" class=\"button-text\">Kotlin</a>\n  <a href=\"https://github.com/RevenueCat/purchases-flutter/blob/main/revenuecat_examples/MagicWeather/lib/src/views/paywall.dart#L53-L61\" target=\"_blank\" class=\"button-text\">Flutter</a>\n  <a href=\"https://github.com/RevenueCat/react-native-purchases/blob/main/examples/MagicWeather/src/components/PackageItem/index.js#L15-L31\" target=\"_blank\"  class=\"button-text\">React Native</a>\n</body>\n"
}
[/block]

> 📘 💡 Here's a tip!
> 
> `purchase:package` handles the underlying framework interaction and automatically validates purchases with the respective store through our secure servers. This helps reduce in-app purchase fraud and decreases the complexity of your app. Receipt tokens are stored remotely and always kept up to date by RevenueCat.

## ▶️ Check Subscription Status

The SDK makes it easy to check what active subscriptions the current customer has, too. This can be done by checking a user's CustomerInfo object to see if a specific Entitlement is active, or by checking if the active Entitlements array contains a specific Entitlement ID.

If you're not using Entitlements (you probably should be!) you can check the array of active subscriptions to see what product IDs from the respective store it contains.

```swift 
// Using Swift Concurrency
let customerInfo = try await Purchases.shared.customerInfo()
if customerInfo.entitlements.all[<your_entitlement_id>]?.isActive == true {
    // User is "premium"
}
// Using Completion Blocks
Purchases.shared.getCustomerInfo { (customerInfo, error) in
    if customerInfo?.entitlements.all[<your_entitlement_id>]?.isActive == true {
        // User is "premium"
    }
}
```
```objectivec 
[[RCPurchases sharedPurchases] getCustomerInfoWithCompletion:^(RCPurchaserInfo * customerInfo, NSError * error) {
    if (customerInfo.entitlements.all[@<your_entitlement_id>].isActive) {
    // User is "premium"
	}
}];
```
```kotlin 
Purchases.sharedInstance.getCustomerInfo({ error -> /* Optional error handling */ }) { customerInfo ->
  if (customerInfo.entitlements[<my_entitlement_identifier>]?.isActive == true) {
    // Grant user "pro" access
  }
}
```
```java 
Purchases.getSharedInstance().getCustomerInfo(new ReceiveCustomerInfoCallback() {
    @Override
    public void onReceived(@NonNull CustomerInfo customerInfo) {
        if (customerInfo.getEntitlements().get(<my_entitlement_identifier>).isActive()) {
            // Grant user "pro" access
        }
    }

    @Override
    public void onError(@NonNull PurchasesError purchasesError) {
    }
});
```
```javascript Flutter
try {
  CustomerInfo customerInfo = await Purchases.getCustomerInfo();
  if (customerInfo.entitlements.all[<my_entitlement_identifier>].isActive) {
    // Grant user "pro" access
  }
} on PlatformException catch (e) {
  // Error fetching purchaser info
}
```
```javascript React Native
try {
  const customerInfo = await Purchases.getCustomerInfo();
  if(typeof customerInfo.entitlements.active[<my_entitlement_identifier>] !== "undefined") {
    // Grant user "pro" access
  }
} catch (e) {
 // Error fetching purchaser info
}
```
```typescript Capacitor
try {
  const customerInfo = await Purchases.getCustomerInfo();
  // access latest customerInfo
} catch (error) {
  // Error fetching customer info
}
```
```javascript Cordova
Purchases.getCustomerInfo(
  info => {
    const isPro = typeof customerInfo.entitlements.active[<my_entitlement_identifier>] !== "undefined";
  },
  error => {
    // Error fetching customer info
  }
);
```
```csharp Unity
var purchases = GetComponent<Purchases>();
purchases.GetPurchaserInfo((info, error) =>
{
   if (purchaserInfo.Entitlements.Active.ContainsKey(<my_entitlement_identifier>)) {
    // Unlock that great "pro" content
  }
});
```
```curl Web
curl --request GET \
  --url https://api.revenuecat.com/v1/subscribers/<app_user_id> \
  --header 'Accept: application/json' \
  --header 'Authorization: Bearer REVENUECAT_API_KEY' \
  --header 'Content-Type: application/json'
```

### See it in action

[block:html]
{
  "html": "<body>\n  <a href=\"https://github.com/RevenueCat/purchases-ios/blob/main/Examples/MagicWeather/MagicWeather/Sources/Controllers/UserViewController.swift#L37-L45\" target=\"_blank\" class=\"button-text\">Swift</a>\n  <a href=\"https://github.com/RevenueCat/purchases-android/blob/main/examples/MagicWeather/app/src/main/java/com/revenuecat/sample/ui/weather/WeatherFragment.kt#L69-L84\" target=\"_blank\" class=\"button-text\">Kotlin</a>\n  <a href=\"https://github.com/RevenueCat/purchases-flutter/blob/main/revenuecat_examples/MagicWeather/lib/src/views/weather.dart#L31-L39\" target=\"_blank\" class=\"button-text\">Flutter</a>\n  <a href=\"https://github.com/RevenueCat/react-native-purchases/blob/main/examples/MagicWeather/src/screens/WeatherScreen/index.js#L29-L46\" target=\"_blank\"  class=\"button-text\">React Native</a>\n</body>\n"
}
[/block]

You can use this method whenever you need to get the latest status, and it's safe to call this repeatedly throughout the lifecycle of your app. _Purchases_ automatically caches the latest <<glossary:CustomerInfo>> whenever it updates — so in most cases, this method pulls from the cache and runs very fast.

It's typical to call this method when deciding which UI to show the user and whenever the user performs an action that requires a certain entitlement level.

> 📘 💡 Here's a tip!
> 
> You can access a lot more information about a subscription than simply whether it's active or not. See our guide on [Subscription Status](doc:customer-info) to learn if subscription is set to renew, if there's an issue detected with the user's credit card, and more.

## ▶️ Restore Purchases

RevenueCat enables your users to restore their in-app purchases, reactivating any content that they previously purchased from the **same store account** (Apple, Google, or Amazon account). We recommend that all apps have some way for users to trigger the restore method. Note that Apple does require a restore mechanism in the event a user loses access to their purchases (e.g: uninstalling/reinstalling the app, losing their account information, etc).

```swift 
Purchases.shared.restorePurchases { (customerInfo, error) in
    // ... check customerInfo to see if entitlement is now active
}
```
```objectivec 
[[RCPurchases sharedPurchases] restorePurchasesWithCompletion:^(RCCustomerInfo *customerInfo, NSError *error) {
    //... check customerInfo to see if entitlement is now active
}];
```
```kotlin 
Purchases.sharedInstance.restorePurchasesWith(::showError) { customerInfo ->
    //... check customerInfo to see if entitlement is now active
}
```
```java 
Purchases.getSharedInstance().restorePurchases(new ReceiveCustomerInfoCallback() {
    @Override
    public void onReceived(@NonNull CustomerInfo customerInfo) {
        //... check purchaserInfo to see if entitlement is now active 	
    }

    @Override
    public void onError(@NonNull PurchasesError purchasesError) {

    }
});
```
```javascript Flutter
try {
  CustomerInfo restoredInfo = await Purchases.restoreTransactions();
  // ... check restored customerInfo to see if entitlement is now active
} on PlatformException catch (e) {
  // Error restoring purchases
}
```
```javascript React Native
try {
  const restore = await Purchases.restorePurchases();
  // ... check restored customerInfo to see if entitlement is now active
} catch (e) {

}
```
```typescript Capacitor
try {
  const customerInfo = await Purchases.restorePurchases();
  //... check customerInfo to see if entitlement is now active
} catch (error) {
  // Error restoring purchases
}
```
```javascript Cordova
Purchases.restoreTransactions(
  info => {
    //... check customerInfo to see if entitlement is now active
  },
  error => {
    // Error restoring purchases
  }
);
```
```csharp Unity
var purchases = GetComponent<Purchases>();
purchases.RestoreTransactions((info, error) =>
{
    //... check purchaserInfo to see if entitlement is now active
});
```

### See it in action

[block:html]
{
  "html": "<body>\n  <a href=\"https://github.com/RevenueCat/purchases-ios/blob/main/Examples/MagicWeather/MagicWeather/Sources/Controllers/UserViewController.swift#L107-L123\" target=\"_blank\" class=\"button-text\">Swift</a>\n  <a href=\"https://github.com/RevenueCat/purchases-android/blob/main/examples/MagicWeather/app/src/main/java/com/revenuecat/sample/ui/user/UserFragment.kt#L78-L85\" target=\"_blank\" class=\"button-text\">Kotlin</a>\n  <a href=\"https://github.com/RevenueCat/purchases-flutter/blob/main/revenuecat_examples/MagicWeather/lib/src/views/user.dart#L29-L55\" target=\"_blank\" class=\"button-text\">Flutter</a>\n  <a href=\"https://github.com/RevenueCat/react-native-purchases/blob/main/examples/MagicWeather/src/components/RestorePurchasesButton/index.js#L11-L18\" target=\"_blank\"  class=\"button-text\">React Native</a>\n</body>\n"
}
[/block]

If two different [App User IDs](doc:user-ids) restore transactions from the same underlying store account (Apple, Google, or Amazon account) RevenueCat may attempt to create an alias between the two App User IDs and count them as the same user going forward. See our guide on [Restoring Purchases](doc:restoring-purchases) for more information on the different configurable restore behaviors.

## ▶️ Reacting to Subscription Status Changes

Since the SDK works seamlessly on any platform, changes to a user's purchase info may come from a variety of sources. You can respond to any changes in a customer's <<glossary:CustomerInfo>> by conforming to an optional delegate method, `purchases:receivedUpdated:`. 

This method will fire whenever the SDK receives an updated CustomerInfo object from calls to `getCustomerInfo()`, `purchase(package:)`, `purchase(product:)`, or `restorePurchases()`. 

<<glossary:CustomerInfo>> updates are _not_ pushed to your app from the RevenueCat backend, updates can only happen from an outbound network request to RevenueCat, as mentioned above.

Depending on your app, it may be sufficient to ignore the delegate and simply handle changes to customer information the next time your app is launched or in the completion blocks of the SDK methods.

```swift 
// Additional configure setup
// on iOS and tvOS, use `application:didFinishLaunchingWithOptions:`
// on macOS and watchOS use `applicationDidFinishLaunching:` 

func application(_ application: UIApplication,
                 didFinishLaunchingWithOptions launchOptions: [UIApplicationLaunchOptionsKey: Any]?) -> Bool {

    Purchases.logLevel = .debug
    Purchases.configure(withAPIKey: <revenuecat_api_key>)
    Purchases.shared.delegate = self // make sure to set this after calling configure

    return true
}

extension AppDelegate: PurchasesDelegate {
    func purchases(_ purchases: Purchases, receivedUpdated customerInfo: CustomerInfo) {
        /// - handle any changes to the user's CustomerInfo
    }
}
```
```objectivec 
// Additional configure setup
// on iOS and tvOS, use `application:didFinishLaunchingWithOptions:`
// on macOS and watchOS use `applicationDidFinishLaunching:`

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
    // Override point for customization after application launch.
    RCPurchases.logLevel = RCLogLevelDebug;
    [RCPurchases configureWithAPIKey:@<revenuecat_api_key>];
    RCPurchases.sharedPurchases.delegate = self;

    return YES;
}

- (void)purchases:(nonnull RCPurchases *)purchases receivedUpdatedCustomerInfo:(nonnull RCCustomerInfo *)customerInfo {
    // handle any changes to purchaserInfo
}
```
```kotlin 
class UpsellActivity : AppCompatActivity(), UpdatedCustomerInfoListener {
		override fun onReceived(customerInfo: CustomerInfo) {
        // handle any changes to purchaserInfo
    }
}
```
```java 
public class UpsellActivity extends AppCompatActivity implements UpdatedCustomerInfoListener {
		@Override
    public void onReceived(CustomerInfo customerInfo) {
        // handle any changes to customerInfo
    }
}
```
```javascript Flutter
Purchases.addPurchaserInfoUpdateListener((purchaserInfo) => {
  // handle any changes to purchaserInfo
});
```
```javascript React Native
Purchases.addCustomerInfoUpdateListener(info => {
	// handle any changes to purchaserInfo
});
```
```typescript Capacitor
await Purchases.addCustomerInfoUpdateListener((customerInfo) => {
  // handle any changes to customerInfo
});
```
```javascript Cordova
// subscribe to the window event onCustomerInfoUpdated to get any changes that happen in the customerInfo
window.addEventListener("onCustomerInfoUpdated", onCustomerInfoUpdated, false);

//...

onCustomerInfoUpdated: function(info) {
    // handle any changes to customerInfo
}
```
```csharp Unity
public override void PurchaserInfoReceived(Purchases.PurchaserInfo purchaserInfo)
{
    // handle any changes to purchaserInfo
}
```

### See it in action

[block:html]
{
  "html": "<body>\n  <a href=\"https://github.com/RevenueCat/purchases-ios/blob/main/Examples/MagicWeather/MagicWeather/Sources/Lifecycle/AppDelegate.swift#L49-L59\" target=\"_blank\" class=\"button-text\">Swift</a>\n  <a href=\"https://github.com/RevenueCat/purchases-android/blob/main/examples/MagicWeather/app/src/main/java/com/revenuecat/sample/MainApplication.kt#L26-L51\" target=\"_blank\" class=\"button-text\">Kotlin</a>\n  <a href=\"https://github.com/RevenueCat/purchases-flutter/blob/main/revenuecat_examples/MagicWeather/lib/src/views/home.dart#L40-L50\" target=\"_blank\" class=\"button-text\">Flutter</a>\n  <a href=\"https://github.com/RevenueCat/react-native-purchases/blob/main/examples/MagicWeather/src/screens/UserScreen/index.js#L35-L41\" target=\"_blank\"  class=\"button-text\">React Native</a>\n</body>\n"
}
[/block]

> 👍 You did it!
> 
> You have now implemented a fully-featured subscription purchasing system without spending a month writing server code. Congrats!

# Sample Apps

To download more complete examples of integrating the SDK, head over to our sample app resources.

**[View Samples ](doc:sample-apps)**

# Next Steps

- If you haven't already, make sure your products are configured correctly by checking out our [guide on entitlements ](doc:entitlements).
- If you want to use your own user identifiers, read about [setting app user IDs ](doc:user-ids).
- If you're moving to RevenueCat from another system, see our guide on [migrating your existing subscriptions ](doc:migrating-existing-subscriptions).
- Once you're ready to test your integration, you can follow our guides on [testing and debugging ](doc:debugging).
- If you qualify for the App Store Small Business Program, check out our guide on [how to apply and inform RevenueCat ](doc:app-store-small-business-program)
