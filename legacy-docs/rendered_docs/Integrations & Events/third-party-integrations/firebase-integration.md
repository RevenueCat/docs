---
title: Firebase
slug: firebase-integration
excerpt: Integrate in-app purchase events from RevenueCat with Firebase
hidden: false
categorySlug: integrations
order: 5
parentDoc: 649983b4c31b2e000a3c18f1
---
> 👍 
> 
> The Firebase integration is available to all users signed up after September '23, the legacy Starter and Pro plans, and Enterprise plans. If you're on a legacy Free plan and want to access this integration, migrate to our new pricing via your [billing settings](https://app.revenuecat.com/settings/billing).

This extension uses Firebase services as your RevenueCat backend for in-app purchases on Apple App Store, Google Play Store, and Amazon Appstore to control access to premium content and sync customer purchase information to Firestore. For example, you might want to:

- Store purchase lifecycle events (e.g., trial starts, purchases, subscription renewals, billing issues) in Firestore and react to them.
- Store and update information about customers and their purchases in Firestore.
- Update information about customers' entitlements as Firebase Authentication [Custom Claims](https://firebase.google.com/docs/auth/admin/custom-claims).

This Firebase integration has 2 parts that can be used independently of each other: Google Analytics and Firebase Extension. The Google Analytics portion of this integration allows RevenueCat to send subscription lifecycle events to Firebase Analytics / Google Analytics. The Firebase Extension allows RevenueCat to store and update customer information in a Cloud Firestore collection and set custom claims on a user's auth token to check active entitlement status. 

Each part of the integration requires additional setup, which you can see outlined in the table below.

[block:parameters]
{
  "data": {
    "h-0": "Integration",
    "h-1": "What's required",
    "0-0": "Google Analytics",
    "0-1": "✅  `$firebaseAppInstanceId` subscriber attribute  \n❌  (optional, but highly recommended) Setting Firebase user identity",
    "1-0": "Firebase Extension",
    "1-1": "✅  Setting Firebase user identity"
  },
  "cols": 2,
  "rows": 2,
  "align": [
    "left",
    "left"
  ]
}
[/block]

## Integration at a Glance 
| Includes Revenue | Supports Negative Revenue | Sends Sandbox Events | Includes Subscriber Attributes | Sends Transfer Events | Optional Event Types |
|:----------------:|:-------------------------:|:--------------------:|:------------------------------:|:---------------------:|:---------------:|
|         ✅        |             ❌             |           ✅          |                ❌               |           ✅           |        ❌        |


# 1. Set up Firebase services in your project

Before installing this extension, set up the following Firebase services in your Firebase project.

- (optional) [Cloud Firestore](https://firebase.google.com/docs/firestore) to store In-App Purchases & Subscriptions details.
  - Follow the steps in the [documentation](https://firebase.google.com/docs/firestore/quickstart#create) to create a Cloud Firestore database.
- (optional) [Firebase Authentication](https://firebase.google.com/docs/auth) to enable different sign-up options for your users to enable Custom Claims management.
  - Enable the sign-in methods in the [Firebase console](https://console.firebase.google.com/project/_/authentication/providers) that you want to offer your users.

> 🚧 Invalid API Version
> 
> When connecting to Firebase, it's possible that you may see an error like:
> 
> "Invalid API Version", with a couple of different version numbers. This is fixed as part of an automatic upgrade process when installing the extension, and generally doesn't indicate there being an issue with your setup.

# 2. Set Firebase User Identity in RevenueCat

You should make sure to use the Firebase UID as the RevenueCat app user ID when setting the Firebase user identity in RevenueCat. This step is optional, but highly recommended as a best practice for the Google Analytics portion of this integration. The Firebase Extension portion **requires** this step to be completed.

```swift 
import FirebaseAuth
import RevenueCat

func application(_ application: UIApplication,
                 didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {

    // Configure Purchases before Firebase
    Purchases.configure(withAPIKey: "public_sdk_key")
    Purchases.shared.delegate = self

    // Add state change listener for Firebase Authentication
    Auth.auth().addStateDidChangeListener { (auth, user) in

        if let uid = user?.uid {

            // identify Purchases SDK with new Firebase user
            Purchases.shared.logIn(uid, { (info, created, error) in
                if let error {
                    print("Sign in error: \(error.localizedDescription)")
                } else {
                    print("User \(uid) signed in")
                }
            })
        }
    }
    return true
}
```



# 3. Send analytics events to Google Analytics

In order to send subscriber lifecycle events to Google Analytics, you must set the `$firebaseAppInstanceId` as a subscriber attribute for your users and enable the integration from the RevenueCat integration settings page.

## Set `$firebaseAppInstanceId` as a subscriber attribute

Please ensure you're getting the app instance ID from the [Firebase Analytics](https://firebase.google.com/docs/analytics/get-started) package.

```swift 
import FirebaseAuth
import RevenueCat

func application(_ application: UIApplication,
                 didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {

    // Configure Purchases before Firebase
    Purchases.configure(withAPIKey: "public_sdk_key")
    Purchases.shared.delegate = self

    // Set the reserved $firebaseAppInstanceId subscriber attribute from Firebase Analytics
    let instanceID = Analytics.appInstanceID()
    if let unwrapped = instanceID {
        print("Instance ID -> " + unwrapped)
        print("Setting Attributes")
        Purchases.shared.attribution.setFirebaseAppInstanceID(unwrapped)
    } else {
        print("Instance ID -> NOT FOUND!")
    }

    return true
}
```



> 🚧 
> 
> Setting an incorrect app instance ID will prevent events from displaying in Google Analytics.

## Enable Google Analytics

You can "turn on" the integration from the RevenueCat dashboard.

1. Navigate to your project in the RevenueCat dashboard and find the _Integrations_ card in the left menu. Select **+ New**

![](https://files.readme.io/2e171f1-app.revenuecat.com_projects_85ff18c7_collaborators_1.png)

2. Choose **Firebase** from the integrations menu

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/44d871d-app.revenuecat.com_projects_85ff18c7_integrations_branch_11.png",
        null,
        "Firebase Google Analytics configuration screen"
      ],
      "align": "center",
      "caption": "Firebase Google Analytics configuration screen"
    }
  ]
}
[/block]

3. Add your Firebase App ID and API secret for your iOS app and/or Android app

To set up your Firebase App ID, navigate to Google Analytics > Admin > Data Streams > iOS/Android > Add Stream. Open the App Stream to find your Firebase App ID. Copy and paste into the RevenueCat settings page.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/a4ad055-Screen_Shot_2022-04-05_at_11.03.48.png",
        "Screen Shot 2022-04-05 at 11.03.48.png",
        2557
      ],
      "align": "center",
      "caption": "Data stream details page"
    }
  ]
}
[/block]

To find your API secret, in the same _App stream details_ page select "Measure Protocol API secrets". Create an API secret. Copy and paste into the RevenueCat settings page. 

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/1f83e41-app.revenuecat.com_projects_85ff18c7_integrations_branch_11.png",
        null,
        "Measurement Protocol API secrets page"
      ],
      "align": "center",
      "caption": "Measurement Protocol API secrets page"
    }
  ]
}
[/block]

4. Select whether you want RevenueCat to report sales in purchased currency (original currency or in US dollar)
5. Select whether you want sales reported as gross revenue (before app store commission), or after store commission and/or estimated taxes.

Remember to select 'Add Integration'. 

## Events

The Google Analytics portion of the Firebase integration tracks the following events:

[block:parameters]
{
  "data": {
    "h-0": "Event Type",
    "h-1": "Default Event Name",
    "h-2": "Description",
    "h-3": "App Store",
    "h-4": "Play Store",
    "h-5": "Amazon",
    "h-6": "Stripe",
    "h-7": "Promo",
    "0-0": "Initial Purchase",
    "0-1": "purchase",
    "0-2": "A new subscription has been purchased.",
    "0-3": "✅",
    "0-4": "✅",
    "0-5": "✅",
    "0-6": "✅",
    "0-7": "❌",
    "1-0": "Trial Started",
    "1-1": "rc_trial_start",
    "1-2": "The start of an auto-renewing subscription product free trial.",
    "1-3": "✅",
    "1-4": "✅",
    "1-5": "✅",
    "1-6": "✅",
    "1-7": "❌",
    "2-0": "Renewal (incl. trial conversion)",
    "2-1": "purchase",
    "2-2": "An existing subscription has been renewed or a lapsed user has resubscribed.",
    "2-3": "✅",
    "2-4": "✅",
    "2-5": "✅",
    "2-6": "✅",
    "2-7": "❌",
    "3-0": "Cancellation (incl. during trial)",
    "3-1": "rc_cancellation",
    "3-2": "A subscription or non-renewing purchase has been cancelled. See [cancellation reasons](https://www.revenuecat.com/docs/event-types-and-fields#cancellation-and-expiration-reasons) for more details.",
    "3-3": "✅",
    "3-4": "✅",
    "3-5": "✅",
    "3-6": "✅",
    "3-7": "✅",
    "4-0": "Uncancellation",
    "4-1": "rc_uncancellation",
    "4-2": "A non-expired cancelled subscription has been re-enabled.",
    "4-3": "✅",
    "4-4": "✅",
    "4-5": "✅",
    "4-6": "❌",
    "4-7": "❌",
    "5-0": "Non Subscription Purchase",
    "5-1": "purchase",
    "5-2": "A customer has made a purchase that will not auto-renew.",
    "5-3": "✅",
    "5-4": "✅",
    "5-5": "✅",
    "5-6": "✅",
    "5-7": "✅",
    "6-0": "Subscription Paused",
    "6-1": "rc_subscription_paused",
    "6-2": "A subscription has been paused.",
    "6-3": "❌",
    "6-4": "✅",
    "6-5": "❌",
    "6-6": "❌",
    "6-7": "❌",
    "7-0": "Expiration",
    "7-1": "rc_expiration",
    "7-2": "A subscription has expired and access should be removed.  \n  \nIf you have [Platform Server Notifications](https://www.revenuecat.com/docs/server-notifications) configured, this event will occur as soon as we are notified (within seconds to minutes) of the expiration.  \n  \nIf you do not have notifications configured, delays may be approximately 1 hour.",
    "7-3": "✅",
    "7-4": "✅",
    "7-5": "✅",
    "7-6": "✅",
    "7-7": "✅",
    "8-0": "Billing Issue",
    "8-1": "rc_billing_issue",
    "8-2": "There has been a problem trying to charge the subscriber. This does not mean the subscription has expired.  \n  \nCan be safely ignored if listening to CANCELLATION event + cancel_reason=BILLING_ERROR.",
    "8-3": "✅",
    "8-4": "✅",
    "8-5": "✅",
    "8-6": "✅",
    "8-7": "❌",
    "9-0": "Product Change",
    "9-1": "rc_product_change",
    "9-2": "A subscriber has changed the product of their subscription.  \n  \nThis does not mean the new subscription is in effect immediately. See [Managing Subscriptions](https://www.revenuecat.com/docs/managing-subscriptions) for more details on updates, downgrades, and crossgrades.",
    "9-3": "✅",
    "9-4": "✅",
    "9-5": "❌",
    "9-6": "✅",
    "9-7": "❌",
    "10-0": "Transfer",
    "10-1": "rc_transfer_event",
    "10-2": "A transfer of transactions and entitlements was initiated between one App User ID(s) to another.",
    "10-3": "✅",
    "10-4": "✅",
    "10-5": "✅",
    "10-6": "✅",
    "10-7": "❌"
  },
  "cols": 8,
  "rows": 11,
  "align": [
    "left",
    "left",
    "left",
    "left",
    "left",
    "left",
    "left",
    "left"
  ]
}
[/block]

## Testing Google Analytics

### Make a sandbox purchase with a new user

Simulate a new user installing your app, and go through your app flow to complete the [sandbox purchase](doc:sandbox).

### Check Google Analytics Dashboard

Navigate to Google Analytics > Reports > Realtime. Here you will be able to confirm events have been successfully dispatched to Google Analytics. It can take up to a few seconds or minutes for your events to appear. 

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/7940d21-Screen_Shot_2022-07-25_at_1.50.22_PM.png",
        "Screen Shot 2022-07-25 at 1.50.22 PM.png",
        1071
      ],
      "align": "center",
      "caption": "Google Analytics dashboard"
    }
  ]
}
[/block]

## Firebase A/B Testing

While these events will appear in Firebase, Google does not allow events that are submitted via the Google Analytics 4 Measurement Protocol API to be used with Firebase A/B testing at this time. Since the integration uses this API, these events are not yet compatible with Firebase A/B Testing.

> 👍 
> 
> You have completed the Google Analytics setup! You can stop here or continue with the rest of the documentation to learn how to set up the Firebase Extension.

# 4. Send customer information to Firestore

## Prerequisites

This section outlines steps that need to be completed in order to enable the Firebase Extension portion of this integration. 

### Billing

Your Firebase project must be on the Blaze (pay-as-you-go) plan to install an extension.

You will be charged a small amount (typically around $0.01/month) for the Firebase resources required by this extension (even if it is not used). In addition, this extension uses the following Firebase services, which may have associated charges if you exceed the service's free tier for low-volume use ([Learn more about Firebase billing](https://firebase.google.com/pricing)):

- Cloud Firestore
- Cloud Functions

### Set your Cloud Firestore security rules

Set your security rules so that only authenticated users can access customer information, and that each user can only access their own information. 

```text 
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /${param:REVENUECAT_CUSTOMERS_COLLECTION}/{uid} {
      allow read: if request.auth.uid == uid;
    }

    match /${param:REVENUECAT_EVENTS_COLLECTION}/{id} {
      allow read: if request.auth.uid == resource.app_user_id
    }
  }
}
```



## Enable Firebase Extension

You can install this extension either through the [Firebase Console](doc:firebase-integration#install-firebase-extension-through-firebase-console) or [CLI](doc:firebase-integration#install-firebase-extension-through-cli) on your OS.

### Install Firebase Extension through Firebase Console

Follow [this installation link](https://console.firebase.google.com/project/_/extensions/install?ref=revenuecat/firestore-revenuecat-purchases) to start the installation prompts on Firebase Console. 

1. Select 'I acknowledge'

![](https://files.readme.io/0480fb7-1.png "1.png")

2. If your account is not set up for billing yet, select 'Upgrade project to continue'

![](https://files.readme.io/a11cefc-2.png "2.png")

3. Enable Authentication and Secret Manager by selecting 'Enable', then select 'Next'

![](https://files.readme.io/f0a1273-3.png "3.png")

4. Select 'Next' 

![](https://files.readme.io/f1021a5-4.png "4.png")

5. Configure the extension

![](https://files.readme.io/99fe4d8-5.png "5.png")

- Select a Cloud Functions location 
- (optional) Give a name to the Firestore collection where "events" will be stored
- (optional) Give a name to the Firestore collection where "customers" will be stored
- Enable or disable custom claims set in Firebase Auth with user's active entitlements. If set to “ENABLED”, the extension will consider the `app_user_id` of the user to match the user’s Firebase Authentication UID and set a “Custom Claim” with their current active entitlements
- Enter your RevenueCat Firebase Integration Shared Secret. This can be found in the RevenueCat Firebase Extension settings page. Select 'Generate shared secret' and copy it. Paste the generated shared secret in the installation prompt.

![](https://files.readme.io/41e22f5-Screenshot_2023-03-28_at_3.05.07_PM.png)

- (optional) Enable events to write custom event handlers via [Eventarc](https://firebase.google.com/docs/extensions/install-extensions?authuser=0&hl=en&platform=console#eventarc) 

![](https://files.readme.io/2265dfc-enable_events.png "enable_events.png")

#### Available Events:

| Event                  | Description                                                                                                                |
| :--------------------- | :------------------------------------------------------------------------------------------------------------------------- |
| `test`                 | Occurs whenever a test event issued through the RevenueCat dashboard.                                                      |
| `initial_purchase`     | Occurs whenever a new subscription has been purchased or a lapsed user has resubscribed.                                   |
| `non_renewing_puchase` | Occurs whenever a customer has made a purchase that will not auto-renew.                                                   |
| `renewal `             | Occurs whenever an existing subscription has been renewed.                                                                 |
| `product_change`       | Occurs whenever a subscriber has changed the product of their subscription.                                                |
| `cancellation`         | Occurs whenever a subscription or non-renewing purchase has been cancelled. See cancellation reasons for more details.     |
| `uncancellation `      | Occurs whenever an auto-renew status has been re-enabled for a subscription.                                               |
| `billing_issue`        | Occurs whenever there has been a problem trying to charge the subscriber. This does not mean the subscription has expired. |
| `subscriber_alias`     | Deprecated. Occurs whenever a new app_user_id has been registered for an existing subscriber.                              |
| `subscription_paused`  | Occurs whenever a subscription has been paused.                                                                            |
| `transfer `            | Occurs whenever a transfer of transactions and entitlements was initiated between one App User ID(s) to another.           |
| `expiration `          | Occurs whenever a subscription has expired and access should be removed.                                                   |

- Select 'Install extension'. This will take about 3-5 minutes to complete

6. Once the extension is installed, navigate to Firebase > Functions in the sidebar. Copy the 'Trigger URL' and paste this into the RevenueCat Firebase Extension settings page.

![](https://files.readme.io/4416a89-Screen_Shot_2022-04-14_at_11.18.59.png "Screen Shot 2022-04-14 at 11.18.59.png")

![](https://files.readme.io/a8c5e19-Screen_Shot_2022-04-15_at_2.08.18_PM.png "Screen Shot 2022-04-15 at 2.08.18 PM.png")

Remember to select 'Save' 

> 👍 
> 
> You have successfully installed your instance of Enable In-App Purchases with RevenueCat! Skip to [Testing Firebase Extension](doc:firebase-integration#testing-firebase-extension) section of the docs.

### Install Firebase Extension through CLI

If you installed the Firebase Extension through the Firebase Console, skip to [Testing Firebase Extension](doc:firebase-integration#testing-firebase-extension) of the docs. 

This portion of the installation is done through the command-line interface (CLI). Clone this [Github repo](https://github.com/RevenueCat/firestore-revenuecat-purchases) and open the CLI for your respective operating system.

1. Run `firebase ext:install . --project [project-id]`  
   To find your `project-id`, go to your [Firebase console](https://console.firebase.google.com/u/0/). Select your project and navigate to Project settings to copy the ID and replace `[project-id]` in the command. 

![](https://files.readme.io/5a32c66-Screen_Shot_2022-04-14_at_11.30.52.png "Screen Shot 2022-04-14 at 11.30.52.png")

![](https://files.readme.io/9ab4401-Screen_Shot_2022-04-14_at_11.31.32.png "Screen Shot 2022-04-14 at 11.31.32.png")

![](https://files.readme.io/3f08828-unnamed.png "unnamed.png")

2. For the next 2 `Do you wish to continue?` prompts, press `y`

![](https://files.readme.io/6dc5e66-2.png "2.png")

3. `Please enter a new name for this instance:` Give the extension a name of your choice

![](https://files.readme.io/e107a6d-3.png "3.png")

4. `Which option do you want enabled for this parameter (Cloud Functions location)?` Select your desired location

![](https://files.readme.io/01786f5-4.png "4.png")

5. `Enter a value for RevenueCat Webhook Events Firestore collection:` Give a name to the Firestore collection where "events" will be stored. If left blank, RevenueCat will not save events.

![](https://files.readme.io/b9cfb9a-5.png "5.png")

6. `Enter a value for location of the customers collection:` Give a name to the Firestore collection where the customer information will be stored. If left blank, RevenueCat will not save customer information.

![](https://files.readme.io/5260f64-6.png "6.png")

7. `Which option do you want enabled for this parameter (custom claims set in Firebase Auth with the user's active entitlements):` If you want to use the custom claims feature, which allows for automatic checking for Entitlements, select `ENABLED`.

![](https://files.readme.io/42cb394-7.png "7.png")

8. `Enter a value for RevenueCat Firebase Integration Shared Secret:` This can be found in the RevenueCat Firebase Extension settings page. Select 'Generate shared secret' and copy it. Paste the generated shared secret in the installation prompt.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/21aa4cf-Screenshot_2023-03-28_at_3.05.07_PM.png",
        null,
        "RevenueCat Firebase Extension page"
      ],
      "align": "center",
      "caption": "RevenueCat Firebase Extension page"
    }
  ]
}
[/block]

![](https://files.readme.io/32e8934-8.png "8.png")

9. Wait about 3 to 5 minutes for the installation

![](https://files.readme.io/2caa47a-9.png "9.png")

10. Once the extension is installed, navigate to Firebase > Functions in the sidebar. Copy the 'Trigger URL' and paste this into the RevenueCat Firebase Extension settings page.

![](https://files.readme.io/4416a89-Screen_Shot_2022-04-14_at_11.18.59.png "Screen Shot 2022-04-14 at 11.18.59.png")

#### Note about the App User ID's in the Customers collection

The document ID's in the Customers collection will always be an App User ID. Specifically, it will be the customer's most recently active alias. This means that the document ID for each customer may switch between [anonymous ID's](https://www.revenuecat.com/docs/user-ids#anonymous-app-user-ids) and [custom ID's](https://www.revenuecat.com/docs/user-ids#logging-in-with-a-custom-app-user-id), if they are both used in your app. If you would like to only use custom ID's, you can [learn more about that here](https://www.revenuecat.com/docs/user-ids#how-to-never-see-anonymous-app-user-ids).

![](https://files.readme.io/a8c5e19-Screen_Shot_2022-04-15_at_2.08.18_PM.png "Screen Shot 2022-04-15 at 2.08.18 PM.png")

Remember to select 'Save'. 

> 👍 
> 
> You have successfully installed your instance of Enable In-App Purchases with RevenueCat!

## Testing Firebase Extension

### Make a sandbox purchase with a new user

Simulate a new user installing your app, and go through your app flow to complete the [sandbox purchase](doc:sandbox).

### Check that the Firebase event delivered successfully

While still on the Customer View, select the purchase event in the [Customer History](doc:customer-history) page and make sure that the Firebase (Firebase function) integration event exists and was delivered successfully.

![](https://files.readme.io/02ff787-Screen_Shot_2022-05-09_at_7.09.39_PM.png "Screen Shot 2022-05-09 at 7.09.39 PM.png")

### Check Firestore Database Collections

Navigate to your Firebase dashboard > Firestore Database to find events sent for your collections.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/6e4ad8e-Screen_Shot_2022-04-25_at_13.19.54.png",
        "Screen Shot 2022-04-25 at 13.19.54.png",
        2561
      ],
      "align": "center",
      "caption": "Customers collection"
    }
  ]
}
[/block]

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/8d67ecd-Screen_Shot_2022-04-25_at_13.20.16.png",
        "Screen Shot 2022-04-25 at 13.20.16.png",
        2563
      ],
      "align": "center",
      "caption": "Events collection"
    }
  ]
}
[/block]

## Sample Events

Below are sample JSONs that are delivered to Firestore Database for each event type. 

```json Initial Purchase
{
    "app_instance_id": "1234567ab8901cd234e56f789gh0i123",
    "user_id": "1234567890",
    "events": [
        {
            "name": "purchase",
            "params": {
                "event_id": "12345678-1234-56a7-b8c9-012defg3h4i5",
                "product_id": "com.tokens.1000",
                "period_type": "NORMAL",
                "purchased_at": 1658338961415000,
                "environment": "PRODUCTION",
                "presented_offering_id": "",
                "transaction_id": "GPA.1234-5678-9012-34567",
                "affiliation": "PLAY_STORE",
                "original_transaction_id": "GPA.1234-5678-9012-34567",
                "original_app_user_id": "$RCAnonymousID:87c6049c58069238dce29853916d624c",
                "currency": "USD",
                "value": 1.99,
                "coupon": "",
                "is_trial_conversion": false,
                "is_renewal": false,
                "items": [
                    {
                        "item_id": "com.tokens.1000",
                        "affiliation": "PLAY_STORE"
                    }
                ]
            }
        }
    ]
}
```
```json Trial Started
{
    "app_instance_id": "1234567ab8901cd234e56f789gh0i123",
    "user_id": "1234567890",
    "events": [
        {
            "name": "rc_trial_start",
            "params": {
                "event_id": "12345678-1234-56a7-b8c9-012defg3h4i5",
                "product_id": "com.subscription.weekly.2",
                "period_type": "TRIAL",
                "purchased_at": 1660393525000000,
                "environment": "PRODUCTION",
                "presented_offering_id": "",
                "transaction_id": "123456789012345",
                "affiliation": "APP_STORE",
                "original_transaction_id": "123456789012345",
                "original_app_user_id": "$RCAnonymousID:87c6049c58069238dce29853916d624c",
                "expiration_at": 1660652725000000,
                "app_id": "app1234567890"
            }
        }
    ]
}
```
```json Trial Cancelled
{
    "app_instance_id": "1234567ab8901cd234e56f789gh0i123",
    "user_id": "1234567890",
    "events": [
        {
            "name": "rc_cancellation",
            "params": {
                "event_id": "12345678-1234-56a7-b8c9-012defg3h4i5",
                "product_id": "com.subscription.monthly1",
                "period_type": "TRIAL",
                "purchased_at": 1660161398000000,
                "environment": "PRODUCTION",
                "presented_offering_id": "default",
                "transaction_id": "123456789012345",
                "affiliation": "APP_STORE",
                "original_transaction_id": "123456789012345",
                "original_app_user_id": "$RCAnonymousID:87c6049c58069238dce29853916d624c",
                "expiration_at": 1662839798000000,
                "cancel_reason": "UNSUBSCRIBE",
                "app_id": "app1234567890"
            }
        }
    ]
}
```
```json Trial Converted
{
    "app_instance_id": "1234567ab8901cd234e56f789gh0i123",
    "user_id": "1234567890",
    "events": [
        {
            "name": "purchase",
            "params": {
                "event_id": "12345678-1234-56a7-b8c9-012defg3h4i5",
                "product_id": "com.subscription.1year",
                "period_type": "NORMAL",
                "purchased_at": 1660422876000000,
                "environment": "PRODUCTION",
                "presented_offering_id": "instantOffer",
                "transaction_id": "123456789012345",
                "affiliation": "APP_STORE",
                "original_transaction_id": "123456789012345",
                "original_app_user_id": "$RCAnonymousID:87c6049c58069238dce29853916d624c",
                "expiration_at": 1691958876000000,
                "app_id": "app1234567890",
                "currency": "USD",
                "value": 59.99,
                "coupon": "",
                "is_trial_conversion": true,
                "is_renewal": false,
                "items": [
                    {
                        "item_id": "com.subscription.1year",
                        "affiliation": "APP_STORE"
                    }
                ]
            }
        }
    ]
}
```
```json Renewal
{
    "app_instance_id": "1234567ab8901cd234e56f789gh0i123",
    "user_id": "1234567890",
    "events": [
        {
            "name": "purchase",
            "params": {
                "event_id": "12345678-1234-56a7-b8c9-012defg3h4i5",
                "product_id": "monthly_sub_pro",
                "period_type": "NORMAL",
                "purchased_at": 1647907092000000,
                "expiration_at": 1647907392000000,
                "environment": "SANDBOX",
                "presented_offering_id": null,
                "transaction_id": "123456789012345",
                "affiliation": "APP_STORE",
                "original_transaction_id": "123456789012345",
                "original_app_user_id": "$RCAnonymousID:87c6049c58069238dce29853916d624c",
                "currency": "USD",
                "value": 4.99,
                "coupon": null,
                "is_trial_conversion": false,
                "is_renewal": true,
                "items": [
                    {
                        "item_id": "monthly_sub_pro",
                        "affiliation": "APP_STORE"
                    }
                ]
            }
        }
    ]
}
```
```json Cancellation
{
    "app_instance_id": "1234567ab8901cd234e56f789gh0i123",
    "user_id": "1234567890",
    "events": [
        {
            "name": "rc_cancellation",
            "params": {
                "event_id": "12345678-1234-56a7-b8c9-012defg3h4i5",
                "product_id": "monthly_sub_pro",
                "period_type": "NORMAL",
                "purchased_at": 1647908709000000,
                "expiration_at": 1647909009000000,
                "environment": "SANDBOX",
                "presented_offering_id": null,
                "transaction_id": "123456789012345",
                "affiliation": "APP_STORE",
                "original_transaction_id": "123456789012345",
                "original_app_user_id": "$RCAnonymousID:87c6049c58069238dce29853916d624c",
                "cancel_reason": "UNSUBSCRIBE"
            }
        }
    ]
}
```



```json Uncancellation
{
    "app_instance_id": "1234567ab8901cd234e56f789gh0i123",
    "user_id": "1234567890",
    "events": [
        {
            "name": "rc_uncancellation",
            "params": {
                "event_id": "12345678-1234-56a7-b8c9-012defg3h4i5",
                "product_id": "yearly_sub",
                "period_type": "TRIAL",
                "purchased_at": 1653559391000000,
                "environment": "PRODUCTION",
                "presented_offering_id": null,
                "transaction_id": "123456789012345",
                "affiliation": "APP_STORE",
                "original_transaction_id": "123456789012345",
                "original_app_user_id": "$RCAnonymousID:87c6049c58069238dce29853916d624c",
                "expiration_at": 1653818591000000
            }
        }
    ]
}
```
```json Non Subscription Purchase
{
    "app_instance_id": "1234567ab8901cd234e56f789gh0i123",
    "user_id": "1234567890",
    "events": [
        {
            "name": "purchase",
            "params": {
                "event_id": "12345678-1234-56a7-b8c9-012defg3h4i5",
                "product_id": "com.tokens.1000",
                "period_type": "NORMAL",
                "purchased_at": 1658338961415000,
                "environment": "PRODUCTION",
                "presented_offering_id": "",
                "transaction_id": "GPA.1234-5678-9012-34567",
                "affiliation": "PLAY_STORE",
                "original_transaction_id": "GPA.1234-5678-9012-34567",
                "original_app_user_id": "$RCAnonymousID:87c6049c58069238dce29853916d624c",
                "currency": "USD",
                "value": 1.99,
                "coupon": "",
                "is_trial_conversion": false,
                "is_renewal": false,
                "items": [
                    {
                        "item_id": "com.tokens.1000",
                        "affiliation": "PLAY_STORE"
                    }
                ]
            }
        }
    ]
}
```
```json Subscription Paused
{
    "app_instance_id": "1234567ab8901cd234e56f789gh0i123",
    "user_id": "1234567890",
    "events": [
        {
            "name": "rc_subscription_paused",
            "params": {
                "event_id": "12345678-1234-56a7-b8c9-012defg3h4i5",
                "product_id": "sub_month_2",
                "period_type": "NORMAL",
                "purchased_at": 1652038237835000,
                "environment": "PRODUCTION",
                "presented_offering_id": "2",
                "transaction_id": "GPA.1234-5678-9012-34567",
                "affiliation": "PLAY_STORE",
                "original_transaction_id": "GPA.1234-5678-9012-34567",
                "original_app_user_id": "$RCAnonymousID:87c6049c58069238dce29853916d624c",
                "expiration_at": 1654723837835000,
                "auto_resumes_at": 1662665437835000
            }
        }
    ]
}
```
```json Expiration
{
    "app_instance_id": "1234567ab8901cd234e56f789gh0i123",
    "user_id": "1234567890",
    "events": [
        {
            "name": "rc_expiration",
            "params": {
                "event_id": "12345678-1234-56a7-b8c9-012defg3h4i5",
                "product_id": "monthly_pro",
                "period_type": "NORMAL",
                "purchased_at": 1647908709000000,
                "expiration_at": 1647909009000000,
                "environment": "SANDBOX",
                "presented_offering_id": null,
                "transaction_id": "123456789012345",
                "affiliation": "APP_STORE",
                "original_transaction_id": "123456789012345",
                "original_app_user_id": "$RCAnonymousID:87c6049c58069238dce29853916d624c",
                "expiration_reason": "UNSUBSCRIBE"
            }
        }
    ]
}
```
```json Billing Issues
{
    "app_instance_id": "1234567ab8901cd234e56f789gh0i123",
    "user_id": "1234567890",
    "events": [
        {
            "name": "rc_billing_issue",
            "params": {
                "event_id": "12345678-1234-56a7-b8c9-012defg3h4i5",
                "product_id": "com.subscription_weekly_trial",
                "period_type": "NORMAL",
                "purchased_at": 1657734228000000,
                "environment": "PRODUCTION",
                "presented_offering_id": "",
                "transaction_id": "123456789012345",
                "affiliation": "APP_STORE",
                "original_transaction_id": "123456789012345",
                "original_app_user_id": "$RCAnonymousID:87c6049c58069238dce29853916d624c",
                "expiration_at": 1658857428000000,
                "grace_period_expires_at": 1658857428000000
            }
        }
    ]
}
```
```json Product Change
{
    "app_instance_id": "1234567ab8901cd234e56f789gh0i123",
    "user_id": "1234567890",
    "events": [
        {
            "name": "rc_product_change",
           "params": {
                "event_id": "12345678-1234-56a7-b8c9-012defg3h4i5",
                "product_id": "annual_sub",
                "period_type": "NORMAL",
                "purchased_at": 1652866828000000,
                "environment": "SANDBOX",
                "presented_offering_id": null,
                "transaction_id": "123456789012345",
                "affiliation": "APP_STORE",
                "original_transaction_id": "123456789012345",
                "original_app_user_id": "$RCAnonymousID:87c6049c58069238dce29853916d624c",
                "expiration_at": 1652868988000000
            }
        }
    ]
}
```
```json,json Transfer
{
    "app_instance_id": "1234567ab8901cd234e56f789gh0i123",
    "user_id": "1234567890",
    "events": [
        {
            "name": "rc_transfer",
            "params": {
                "event_id": "12345678-1234-56a7-b8c9-012defg3h4i5",
                "product_id": "com.subscription.weekly.2",
                "period_type": "NORMAL",
                "purchased_at": 1660393525000000,
                "environment": "PRODUCTION",
                "presented_offering_id": "",
                "transaction_id": "123456789012345",
                "affiliation": "APP_STORE",
                "original_transaction_id": "123456789012345",
                "original_app_user_id": "$RCAnonymousID:87c6049c58069238dce29853916d624c",
                "expiration_at": 1660652725000000,
                "app_id": "app1234567890"
                "transferred_from": "$RCAnonymousID:12345678912345678912345678912345",
                "transferred_to": "$RCAnonymousID:87c6049c58069238dce29853916d624c",
            }
        }
    ]
}
```



## Using the Extension

### Checking Entitlement access

To check access to entitlements, you can either [use the RevenueCat SDK](https://docs.revenuecat.com/docs/getting-started#10-get-subscription-status) or use Firebase Authentication custom claims. For example, to check whether the current user has access to an entitlement called `premium`, you could use the following Firebase code:

```javascript 
getAuth().currentUser.getIdTokenResult()
  .then((idTokenResult) => {
     // Confirm the user has a premium entitlement.
     if (!!idTokenResult.claims.activeEntitlements.includes("premium")) {
       // Show premium UI.
       showPremiumUI();
     } else {
       // Show regular user UI.
       showFreeUI();
     }
  })
  .catch((error) => {
    console.log(error);
  });
```



### List a user's active subscriptions

To list a user's active subscriptions, you could use the following Firebase code:

```javascript 
getDoc(doc(db, "${param:REVENUECAT_CUSTOMERS_COLLECTION}", getAuth().currentUser.uid))
  .then((snapshot) => {
    if (snapshot.exists()) {
      snapshot.subscriptions
        .filter(subscription => new Date(subscription.expires_date) >= new Date())
        .forEach(subscription => console.log(JSON.stringify(subscription)));
    }
  });
```



### React to subscription lifecycle events

Subscription lifecycle events get stored as events in the Firestore collection `${param:REVENUECAT_EVENTS_COLLECTION}`. By listening to changes in this collection, for example, through [Cloud Firestore triggered Firebase Cloud Functions](https://firebase.google.com/docs/functions/firestore-events), you can trigger any custom behavior that you want. An example could be sending push notifications to customers with billing issues to prompt them to update their credit cards. To do that, you would:

- Store a push notification token for each of your app users, e.g., using [Firebase Cloud Messaging](https://firebase.google.com/docs/cloud-messaging)
- Create a new Cloud Function triggered whenever a new document is created in the `${param:REVENUECAT_EVENTS_COLLECTION}` collection
- In the Cloud Function, determine if the `type` field of the new document is `"BILLING_ISSUE"`
- If so, look up the app user ID from the `app_user_id` field of the new document
- Look up the push token for that app user ID and send a push notification

# Troubleshooting your Firebase integration

## 403 Permission denied to enable service [eventarcpublishing.googleapis.com]

If you get a 403 error in DeploymentManager when trying to install or uninstall the Firebase extensions, Navigate to [Google Cloud IAM Settings](https://console.cloud.google.com/iam-admin/iam) and follow these steps:

1. Near the top left corner of the page, click **Grant Access**.
2. Once the "Grant Access" popup shows up on the right side of the page, set `<PROJECT_NUMBER>@cloudservices.gserviceaccount.com` as the principal (replacing \<PROJECT_NUMBER> with your actual project number.)
3. Select the **Editor** role.
4. Click Save.

Now try uninstalling and/or reinstalling the extension.

![](https://files.readme.io/d93b3ea-2023-04-18_21.56.29_console.cloud.google.com_c3436c460f71.png)

## InvalidApiVersionError: The version of this extension is not the same.

This is fixed as part of an automatic upgrade process when installing the extension, and generally doesn't indicate there being an issue with your setup. The error should not affect your integration. This is usually not necessary but if you continue seeing this error you may try to uninstall and reinstall the extension.
