---
title: mParticle
slug: mparticle
excerpt: Integrate in-app subscription events from RevenueCat with mParticle
hidden: false
categorySlug: integrations
order: 9
parentDoc: 649983b4c31b2e000a3c18f1
---
> 👍 
> 
> The mParticle integration is available to all users signed up after September '23, the legacy Grow and Pro plans, and Enterprise plans. If you're on a legacy Free or Starter plan and want to access this integration, migrate to our new pricing via your [billing settings](https://app.revenuecat.com/settings/billing).

mParticle can be a useful integration tool for seeing all events and revenue that occur for your app even if it’s not active for a period of time. You can use mParticle to clean up your data infrastructure and collect new customer data, which can then be connected with other tools through mParticle’s powerful API.

With our mParticle integration, you can:

- Use the API to identify users who are at risk of churning and begin a campaign to win them back.
- Set up push notifications and emails to users who have subscribed to your product but do not engage very much.

With accurate and up-to-date subscription data in mParticle, you'll be set to turbocharge your campaigns ⚡️

## Integration at a Glance
| Includes Revenue | Supports Negative Revenue | Sends Sandbox Events | Includes Subscriber Attributes | Sends Transfer Events | Optional Event Types |
|:----------------:|:-------------------------:|:--------------------:|:------------------------------:|:---------------------:|:---------------:|
|         ✅        |             ✅             |           ✅          |    ✅    |           ❌           |        ❌        |

# Events

The mParticle integration tracks the following events:

[block:parameters]
{
  "data": {
    "h-0": "Event",
    "h-1": "Default Event Name",
    "h-2": "Description",
    "h-3": "App Store",
    "h-4": "Play Store",
    "h-5": "Amazon",
    "h-6": "Stripe",
    "h-7": "Promo",
    "0-0": "Initial Purchase",
    "0-1": "initial_purchase",
    "0-2": "A new subscription has been purchased.",
    "0-3": "✅",
    "0-4": "✅",
    "0-5": "✅",
    "0-6": "✅",
    "0-7": "❌",
    "1-0": "Trial Started",
    "1-1": "trial_started",
    "1-2": "The start of an auto-renewing subscription product free trial.",
    "1-3": "✅",
    "1-4": "✅",
    "1-5": "✅",
    "1-6": "✅",
    "1-7": "❌",
    "2-0": "Trial Converted",
    "2-1": "trial_converted",
    "2-2": "When an auto-renewing subscription product converts from a free trial to normal paid period.",
    "2-3": "✅",
    "2-4": "✅",
    "2-5": "✅",
    "2-6": "✅",
    "2-7": "❌",
    "3-0": "Trial Cancelled",
    "3-1": "trial_cancelled",
    "3-2": "When a user turns off renewals for an auto-renewing subscription product during a free trial period.",
    "3-3": "✅",
    "3-4": "✅",
    "3-5": "✅",
    "3-6": "✅",
    "3-7": "❌",
    "4-0": "Renewal",
    "4-1": "renewal",
    "4-2": "An existing subscription has been renewed or a lapsed user has resubscribed.",
    "4-3": "✅",
    "4-4": "✅",
    "4-5": "✅",
    "4-6": "✅",
    "4-7": "❌",
    "5-0": "Cancellation",
    "5-1": "cancellation",
    "5-2": "A subscription or non-renewing purchase has been cancelled. See [cancellation reasons](https://www.revenuecat.com/docs/event-types-and-fields#cancellation-and-expiration-reasons) for more details.",
    "5-3": "✅",
    "5-4": "✅",
    "5-5": "✅",
    "5-6": "✅",
    "5-7": "✅",
    "6-0": "Uncancellation",
    "6-1": "uncancellation",
    "6-2": "A non-expired cancelled subscription has been re-enabled.",
    "6-3": "✅",
    "6-4": "✅",
    "6-5": "✅",
    "6-6": "❌",
    "6-7": "❌",
    "7-0": "Non Subscription Purchase",
    "7-1": "non_renewing_purchase",
    "7-2": "A customer has made a purchase that will not auto-renew.",
    "7-3": "✅",
    "7-4": "✅",
    "7-5": "✅",
    "7-6": "✅",
    "7-7": "✅",
    "8-0": "Subscription paused",
    "8-1": "rc_subscription_paused_event",
    "8-2": "A subscription has been paused.",
    "8-3": "❌",
    "8-4": "✅",
    "8-5": "❌",
    "8-6": "❌",
    "8-7": "❌",
    "9-0": "Expiration",
    "9-1": "expiration",
    "9-2": "A subscription has expired and access should be removed.  \n  \nIf you have [Platform Server Notifications](https://www.revenuecat.com/docs/server-notifications) configured, this event will occur as soon as we are notified (within seconds to minutes) of the expiration.  \n  \nIf you do not have notifications configured, delays may be approximately 1 hour.",
    "9-3": "✅",
    "9-4": "✅",
    "9-5": "✅",
    "9-6": "✅",
    "10-7": "✅",
    "10-0": "Billing Issues",
    "10-1": "billing_issue",
    "10-2": "There has been a problem trying to charge the subscriber. This does not mean the subscription has expired.  \n  \nCan be safely ignored if listening to CANCELLATION event + cancel_reason=BILLING_ERROR.",
    "10-3": "✅",
    "10-4": "✅",
    "10-5": "✅",
    "10-6": "✅",
    "10-7": "❌",
    "11-0": "Product Change",
    "11-1": "product_change",
    "11-2": "A subscriber has changed the product of their subscription.  \n  \nThis does not mean the new subscription is in effect immediately. See [Managing Subscriptions](https://www.revenuecat.com/docs/managing-subscriptions) for more details on updates, downgrades, and crossgrades.",
    "11-3": "✅",
    "11-4": "✅",
    "11-5": "❌",
    "11-6": "✅",
    "11-7": "❌",
    "12-0": "Refund",
    "12-1": "refund",
    "12-2": "When a user canceled their subscription via customer support",
    "12-3": "✅",
    "12-4": "✅",
    "12-5": "✅",
    "12-6": "✅",
    "12-7": "❌"
  },
  "cols": 8,
  "rows": 13,
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

For events that have revenue, such as trial conversions and renewals, RevenueCat will automatically record this amount along with the event in mParticle.

# Setup

## 1. Set mParticle User Identity and Send Device Data to RevenueCat

If you're using the mParticle SDK, you can set the User ID to match the RevenueCat App User Id. This way, events sent from the mParticle SDK and events sent from RevenueCat can be synced to the same user.

The mParticle integration also requires some device-specific data. RevenueCat will only send events into mParticle if the below [Subscriber Attributes](doc:subscriber-attributes) keys have been set for the device.

| Key            | Description                                                                                                                                     | Required        |
| :------------- | :---------------------------------------------------------------------------------------------------------------------------------------------- | :-------------- |
| `$mparticleId` | The unique mParticle user identifier (mpid).                                                                                                    | ✅ (recommended) |
| `$idfa`        | iOS [advertising identifier](https://developer.apple.com/documentation/adsupport/asidentifiermanager/1614151-advertisingidentifier) UUID        | ❌ (optional)    |
| `$idfv`        | iOS [vender identifier](https://developer.apple.com/documentation/uikit/uidevice/1620059-identifierforvendor) UUID                              | ❌ (optional)    |
| `$gpsAdId`     | Google [advertising identifier](https://developers.google.com/android/reference/com/google/android/gms/ads/identifier/AdvertisingIdClient.Info) | ❌ (optional)    |
| `$androidId`   | Android [device identifier](https://developer.android.com/reference/android/provider/Settings.Secure#ANDROID_ID)                                | ❌ (optional)    |
| `$ip`          | The IP address of the device                                                                                                                    | ❌ (optional)    |

These properties can be set manually, like any other [Subscriber Attributes](doc:subscriber-attributes), or through the helper methods `collectDeviceIdentifiers()` and `setMparticleId()`. 

Create an `identityRequest` and add it to the `MParticleOptions` that you pass to the `start()` method on the mParticle SDK to set the same App User Id that is set in RevenueCat.

```swift 
// Configure Purchases SDK
Purchases.configure(withAPIKey: "public_sdk_key", appUserID: "my_app_user_id")

// Set App User Id in mParticle
let options = MParticleOptions(key: "mParticle_app_key",
                               secret: "mParticle_app_secret")
let identityRequest = MPIdentityApiRequest.withEmptyUser()
identityRequest.email = "user@example.com"
identityRequest.customerId = "123456"
options.identifyRequest = identityRequest
options.onIdentifyComplete = { (result: MPIdentityApiResult?, error: Error?) in
    guard error == nil else {
        // handle error
        return
    }
    guard let result else {
        // handle empty result
        return
    }

    // IMPORTANT: user identified successfully, get the mPID and send to RevenueCat
    let mPid = result.user.userId
    Purchases.shared.attribution.collectDeviceIdentifiers()
    Purchases.shared.attribution.setMparticleID(mPid.stringValue)
}

// Start mParticle
MParticle.sharedInstance().start(with: options)
```
```objectivec 
// Configure Purchases SDK
[RCPurchases configureWithAPIKey:@"public_sdk_key" appUserID:@"my_app_user_id"];


// Set App User Id in mParticle
MParticleOptions *options = [MParticleOptions optionsWithKey:@"mParticle_app_key"
                             secret:@"mParticle_app_secret"];
MPIdentityApiRequest *identityRequest = [MPIdentityApiRequest requestWithEmptyUser];
identityRequest.email = @"user@example.com";
identityRequest.customerId = @"123456";
options.identifyRequest = identityRequest;
options.onIdentifyComplete = ^(MPIdentityApiResult *_Nullable apiResult, NSError *_Nullable error) {
    if (error) {
        // handle error
        return;
    }
    if (apiResult == nil) {
        // handle empty result
        return;
    }
    // user identified successfully, get the mPID and send to RevenueCat
    NSNumber *mPid = [apiResult.user userId];
    [[RCPurchases sharedPurchases] collectDeviceIdentifiers];
    [[RCPurchases sharedPurchases] setMparticleID:mPid.stringValue];
};


// Start mParticle
[[MParticle sharedInstance] startWithOptions:options];
```
```java 
// Configure Purchases SDK
Purchases.configure(this, "my_api_key", "my_app_user_id");


// Set App User Id in mParticle
IdentityApiRequest identityRequest = IdentityApiRequest.withEmptyUser()
    .email("user@example.com")
    .customerId("123456")
    .build();

BaseIdentityTask identifyTask = new BaseIdentityTask()
    .addFailureListener(new TaskFailureListener() {
      @Override
      public void onFailure(IdentityHttpResponse identityHttpResponse) {
        // handle failure
      }
    }).addSuccessListener(new TaskSuccessListener() {
      @Override
      public void onSuccess(IdentityApiResult identityApiResult) {
        // user identified successfully, get the mPID and send to RevenueCat
        long mPid = identityApiResult.getUser().getId();
        Purchases.getSharedInstance().collectDeviceIdentifiers();
        Purchases.getSharedInstance().setMparticleID(String.valueOf(mPid));
      }
    });

MParticleOptions options = MParticleOptions.builder(this)
    .credentials("mParticle_app_key", "mParticle_app_secret")
    .identify(identityRequest)
    .identifyTask(identifyTask)
    .build();


// Start mParticle
MParticle.start(options);
```



mParticle also allows you to log a user in after starting the SDK and log a user out; you should handle both of these cases:

```swift 
// handle logging out
MParticle.sharedInstance().identity.logout(completion: { (result: MPIdentityAPIResult?, error: Error?) in
    Purchases.shared().reset()
})
```
```objectivec 
// handle logging out
[[[MParticle sharedInstance] identity] logoutWithCompletion:^(MPIdentityApiResult *_Nullable apiResult, NSError *_Nullable error) {
    [[RCPurchases sharedPurchases] reset];
}];
```
```java 
// handle logging out
MParticle.getInstance().Identity().logout(identityRequest)
    .addFailureListener(new TaskFailureListener() {
        @Override
        public void onFailure(IdentityHttpResponse identityHttpResponse) {
            // handle error
        }
    })
    .addSuccessListener(new TaskSuccessListener() {
        @Override
        public void onSuccess(IdentityApiResult identityApiResult) {
          Purchases.getSharedInstance().reset();
        }
    });
```



```swift 
// handle logging in
MParticle.sharedInstance()
         .identity.login(identityRequest, completion: { (result: MPIdentityAPIResult?, error: Error?) in
    guard error == nil else {
        // handle error
        return
    }
    guard let result else {
        // handle empty result
        return
    }
    // user identified successfully, get the mPID and send to RevenueCat
    let mPid = result.user.userId
    Purchases.shared.attribution.collectDeviceIdentifiers()
    Purchases.shared.attribution.setMparticleID(mPid.stringValue)
})
```
```objectivec 
// handle logging in
[[[MParticle sharedInstance] identity] login:identityRequest
                                  completion:^(MPIdentityApiResult *_Nullable apiResult, NSError *_Nullable error) {
    if (error) {
        // handle error
        return;
    }
    if (apiResult == nil) {
        // handle empty result
        return;
    }
    // user identified successfully, get the mPID and send to RevenueCat
    NSNumber *mPid = [apiResult.user userId];
    [RCPurchases shared] collectDeviceIdentifiers];
    [RCPurchases shared] setMparticleID: [mPid stringValue]];
}];
```
```java 
// handle logging in
MParticle.getInstance().Identity().login(identityRequest)
    .addFailureListener(new TaskFailureListener() {
        @Override
        public void onFailure(IdentityHttpResponse identityHttpResponse) {
            // handle error
        }
    })
    .addSuccessListener(new TaskSuccessListener() {
        @Override
        public void onSuccess(IdentityApiResult identityApiResult) {
          // user identified successfully, get the mPID and send to RevenueCat
        	long mPid = identityApiResult.getUser().getId();
        	Purchases.getSharedInstance().collectDeviceIdentifiers();
          Purchases.getSharedInstance().setMparticleID(String.valueOf(mPid));
        }
    });
```



> ❗️ Device identifiers with iOS App Tracking Transparency (iOS 14.5+)
> 
> If you are requesting the App Tracking permission through ATT to access the IDFA, you can call `.collectDeviceIdentifiers()` _again_ if the customer accepts the permission to update the `$idfa` attribute in RevenueCat.

## 2. Add RevenueCat Feed Inputs in mParticle

In mParticle, add the RevenueCat feed input and create two feeds: one for the Android platform and one for the iOS platform. Copy each feed's Server to Server Key and Server to Server Secret for setup on RevenueCat. Refer to [mParticle's documentation](https://docs.mparticle.com/guides/feeds/) to learn more about feeds.

![](https://files.readme.io/adc36bb-2020-06-17_22.04.49_app.mparticle.com_a4031d73e6bc.png "2020-06-17 22.04.49 app.mparticle.com a4031d73e6bc.png")

![](https://files.readme.io/595280f-mParticle.png "mParticle.png")

## 3. Send RevenueCat events to mParticle

After you've set up the _Purchases SDK_ and mParticle SDK to have the same user identity, you can "turn on" the integration and configure the event names from the RevenueCat dashboard.

1. Navigate to your project in the RevenueCat dashboard and find the _Integrations_ card in the left menu. Select **+ New** 

![](https://files.readme.io/61bd652-app.revenuecat.com_projects_85ff18c7_collaborators_1.png)

2. Choose **mParticle** from the Integrations menu
3. Add your **Server to Server Keys** and **Server to Server Secrets** for each platform from step 2
4. Enter the event names that RevenueCat will send or choose the default event names
5. Select whether you want sales reported as gross revenue (before app store commission), or after store commission and/or estimated taxes.

## 4. Testing the mParticle integration

You can test the mParticle integration end-to-end before going live. It's recommended that you test the integration is working properly for new users, and any existing users that may update their app to a new version.

### Make a sandbox purchase with a new user

Simulate a new user installing your app, and go through your app flow to complete a sandbox purchase.

### Check that the required device data is collected

Navigate the the [Customer View](doc:customers) for the test user that just made a purchase. Make sure that all of the required data from step 1 above is listed as attributes for the user.

![](https://files.readme.io/f7066d9-app.revenuecat.com_activity_777004e5_event_1b2e7407-a1bc-416a-84cf-b65688412bbe_2.png)

### Check that the mParticle event delivered successfully

While still on the Customer View, click into the test purchase event in the [Customer History](doc:customer-history) and make sure that the mParticle integration event exists and was delivered successfully. 

![](https://files.readme.io/b7eef58-app.revenuecat.com_activity_40779aaf_event_92499ad6-350b-455a-a2ec-4c28c4ca0b28_4.png)

> 👍 You've done it!
> 
> You should start seeing events from RevenueCat appear in mParticle

# Sample Events

Below are sample JSONs that are delivered to mParticle for the different event types.

```json Initial Purchase
{
    "events": [
        {
            "data": {
                "source_message_id": "12345678-1234-1234-1234-123456789012",
                "timestamp_unixtime_ms": 1640653937777,
                "custom_attributes": {
                    "revenuecat_product_id": "weekly_sub",
                    "revenuecat_event": "initial_purchase"
                },
                "product_action": {
                    "action": "purchase",
                    "transaction_id": "GPA.1234-5678-9012-34567",
                    "total_amount": 5.99,
                    "products": [
                        {
                            "id": "weekly_sub",
                            "price": 5.99,
                            "quantity": 1,
                            "total_product_amount": 5.99
                        }
                    ]
                },
                "currency_code": "USD",
                "is_non_interactive": false
            },
            "event_type": "commerce_event"
        }
    ],
    "source_request_id": "12345678-1234-1234-1234-123456789012",
    "user_attributes": {
        "$country": "GB",
        "revenuecat_$ip": "123.45.67.89",
        "revenuecat_$appsflyerId": "1234567890123-1234567890123456789",   
        "revenuecat_$onesignalId": "1234567890123-1234567890123456789",   
        "revenuecat_aliases": [
            "12abc345d67e890fgh12j3lm456n7890"
        ],
        "revenuecat_app_user_id": "123456789",
        "revenuecat_original_app_user_id": "$RCAnonymousID:87c6049c58069238dce29853916d624c"
    },
    "device_info": {
        "platform": "Android",
        "android_advertising_id": "12345678-1234-1234-1234-123456789012"
    },
    "application_info": {
        "application_name": "App_Name",
        "package": "co.appname",
        "os": "Android"
    },
    "user_identities": {},
    "schema_version": 2,
    "environment": "production",
    "mpid": "12345678"
}
```
```json Trial Started
{
    "events": [
        {
            "data": {
                "event_name": "trial_started",
                "custom_event_type": "transaction",
                "source_message_id": "12345678-1234-1234-1234-123456789012",
                "timestamp_unixtime_ms": 1593506190000,
                "custom_attributes": {
                    "revenuecat_product_id": "weekly_sub",
                    "revenuecat_event": "trial_started"
                }
            },
            "event_type": "custom_event"
        }
    ],
    "source_request_id": "12345678-1234-1234-1234-123456789012",
    "user_attributes": {
        "$country": "MD",
        "revenuecat_aliases": [
            "12abc345d67e890fgh12j3lm456n7890"
        ],
        "revenuecat_app_user_id": "123456789",
        "revenuecat_original_app_user_id": "$RCAnonymousID:87c6049c58069238dce29853916d624c"
    },
    "device_info": {
        "platform": "iOS",
        "ios_advertising_id": "12345678-1234-1234-1234-123456789012",
    },
    "application_info": {
        "application_name": "App_Name",
        "package": "co.appname",
    },
    "user_identities": {},
    "schema_version": 2,
    "environment": "production",
    "mpid": "12345678"
}
```
```json Trial Converted
{
    "events": [
        {
            "data": {
                "source_message_id": "12345678-1234-1234-1234-123456789012",
                "timestamp_unixtime_ms": 1593505191000,
                "custom_attributes": {
                    "revenuecat_product_id": "weekly_sub",
                    "revenuecat_event": "trial_converted"
                },
                "product_action": {
                    "action": "purchase",
                    "transaction_id": "123456789012345",
                    "total_amount": 5.99,
                    "products": [
                        {
                            "id": "weekly_sub",
                            "price": 5.99,
                            "quantity": 1,
                            "total_product_amount": 5.99
                        }
                    ]
                },
                "currency_code": "USD",
                "is_non_interactive": true
            },
            "event_type": "commerce_event"
        }
    ],
    "source_request_id": "12345678-1234-1234-1234-123456789012",
    "user_attributes": {
        "$country": "DE",
        "revenuecat_aliases": [
            "12abc345d67e890fgh12j3lm456n7890"
        ],
        "revenuecat_app_user_id": "123456789",
        "revenuecat_original_app_user_id": "$RCAnonymousID:87c6049c58069238dce29853916d624c"
    },
    "device_info": {
        "platform": "iOS",
        "ios_advertising_id": "12345678-1234-1234-1234-123456789012"
    },
    "application_info": {
        "application_name": "App_Name",
        "package": "co.appname",
    },
    "user_identities": {},
    "schema_version": 2,
    "environment": "production",
    "mpid": "12345678"
}
```
```json Trial Cancelled
{
    "events": [
        {
            "data": {
                "event_name": "trial_cancelled",
                "custom_event_type": "transaction",
                "source_message_id": "12345678-1234-1234-1234-123456789012",
                "timestamp_unixtime_ms": 1593505162390,
                "custom_attributes": {
                    "revenuecat_product_id": "weekly_sub",
                    "revenuecat_event": "trial_cancelled"
                }
            },
            "event_type": "custom_event"
        }
    ],
    "source_request_id": "12345678-1234-1234-1234-123456789012",
    "user_attributes": {
        "$country": "GB",
        "revenuecat_aliases": [
            "12abc345d67e890fgh12j3lm456n7890"
        ],
        "revenuecat_app_user_id": "123456789",
        "revenuecat_original_app_user_id": "$RCAnonymousID:87c6049c58069238dce29853916d624c"
    },
    "device_info": {
        "platform": "iOS",
        "ios_advertising_id": "12345678-1234-1234-1234-123456789012"
    },
    "application_info": {
        "application_name": "App_Name",
        "package": "co.appname",
    },
    "user_identities": {},
    "schema_version": 2,
    "environment": "production",
    "mpid": "12345678"
}
```
```json Renewal
{
    "events": [
        {
            "data": {
                "source_message_id": "12345678-1234-1234-1234-123456789012",
                "timestamp_unixtime_ms": 1593514136000,
                "custom_attributes": {
                    "revenuecat_product_id": "weekly_sub",
                    "revenuecat_event": "renewal"
                },
                "product_action": {
                    "action": "purchase",
                    "transaction_id": "123456789012345",
                    "total_amount": 5.99,
                    "products": [
                        {
                            "id": "weekly_sub",
                            "price": 5.99,
                            "quantity": 1,
                            "total_product_amount": 5.99
                        }
                    ]
                },
                "currency_code": "USD",
                "is_non_interactive": true
            },
            "event_type": "commerce_event"
        }
    ],
    "source_request_id": "12345678-1234-1234-1234-123456789012",
    "user_attributes": {
        "$country": "FR",
        "revenuecat_aliases": [
            "12abc345d67e890fgh12j3lm456n7890"
        ],
        "revenuecat_app_user_id": "123456789",
        "revenuecat_original_app_user_id": "$RCAnonymousID:87c6049c58069238dce29853916d624c"
    },
    "device_info": {
        "platform": "iOS",
        "ios_advertising_id": "12345678-1234-1234-1234-123456789012"
    },
    "application_info": {
        "application_name": "App_Name",
        "package": "co.appname",
    },
    "user_identities": {},
    "schema_version": 2,
    "environment": "production",
    "mpid": "12345678"
}
```
```json Cancellation
{
    "events": [
        {
            "data": {
                "event_name": "cancellation",
                "custom_event_type": "transaction",
                "source_message_id": "12345678-1234-1234-1234-123456789012",
                "timestamp_unixtime_ms": 1593507675551,
                "custom_attributes": {
                    "revenuecat_product_id": "weekly_sub",
                    "revenuecat_event": "cancellation"
                }
            },
            "event_type": "custom_event"
        }
    ],
    "source_request_id": "12345678-1234-1234-1234-123456789012",
    "user_attributes": {
        "$country": "RU",
        "revenuecat_aliases": [
            "12abc345d67e890fgh12j3lm456n7890"
        ],
        "revenuecat_app_user_id": "123456789",
        "revenuecat_original_app_user_id": "$RCAnonymousID:87c6049c58069238dce29853916d624c"
    },
    "device_info": {
        "platform": "iOS",
        "ios_advertising_id": "12345678-1234-1234-1234-123456789012"
    },
    "application_info": {
        "application_name": "App_Name",
        "package": "co.appname",
    },
    "user_identities": {},
    "schema_version": 2,
    "environment": "production",
    "mpid": "12345678"
}
```
```json Uncancellation
{
    "events": [
        {
            "data": {
                "event_name": "uncancellation",
                "custom_event_type": "transaction",
                "source_message_id": "12345678-1234-1234-1234-123456789012",
                "timestamp_unixtime_ms": 1657090180007,
                "custom_attributes": {
                    "revenuecat_product_id": "weekly_sub",
                    "revenuecat_event": "uncancellation"
                }
            },
            "event_type": "custom_event"
        }
    ],
    "source_request_id": "12345678-1234-1234-1234-123456789012",
    "user_attributes": {
        "$country": "US",
        "revenuecat_$ip": "123.45.67.89",
        "revenuecat_$appsflyerId": "1234567890123-1234567890123456789",   
        "revenuecat_$onesignalId": "1234567890123-1234567890123456789",   
        "revenuecat_aliases": [
            "12abc345d67e890fgh12j3lm456n7890"
        ],
        "revenuecat_app_user_id": "123456789",
        "revenuecat_original_app_user_id": "$RCAnonymousID:87c6049c58069238dce29853916d624c"
    },
    "device_info": {
        "platform": "iOS",
        "ios_advertising_id": "12345678-1234-1234-1234-123456789012"
    },
    "application_info": {
        "application_name": "App_Name",
        "package": "co.appname",
        "os": "IOS"
    },
    "user_identities": {},
    "schema_version": 2,
    "environment": "production",
    "mpid": "12345678"
}
```



```json Expiration
{
    "events": [
        {
            "data": {
                "event_name": "expiration",
                "custom_event_type": "transaction",
                "source_message_id": "12345678-1234-1234-1234-123456789012",
                "timestamp_unixtime_ms": 1643111704000,
                "custom_attributes": {
                    "revenuecat_expiration_reason": "UNSUBSCRIBE",
                    "revenuecat_product_id": "weekly_sub",
                    "revenuecat_event": "expiration"
                }
            },
            "event_type": "custom_event"
        }
    ],
    "source_request_id": "12345678-1234-1234-1234-123456789012",
    "user_attributes": {
        "$country": "AU",
        "revenuecat_$ip": "123.45.67.89",
        "revenuecat_$appsflyerId": "1234567890123-1234567890123456789",   
        "revenuecat_$onesignalId": "1234567890123-1234567890123456789",   
        "revenuecat_aliases": [
            "12abc345d67e890fgh12j3lm456n7890"
        ],
        "revenuecat_app_user_id": "123456789",
        "revenuecat_original_app_user_id": "$RCAnonymousID:87c6049c58069238dce29853916d624c"
    },
    "device_info": {
        "platform": "iOS",
        "ios_advertising_id": "12345678-1234-1234-1234-123456789012"
    },
    "application_info": {
        "application_name": "App_Name",
        "package": "co.appname",
        "os": "iOS"
    },
    "user_identities": {},
    "schema_version": 2,
    "environment": "production",
    "mpid": "12345678"
}
```
```json Billing Issue
{
    "events": [
        {
            "data": {
                "event_name": "billing_issue",
                "custom_event_type": "transaction",
                "source_message_id": "12345678-1234-1234-1234-123456789012",
                "timestamp_unixtime_ms": 1643386961344,
                "custom_attributes": {
                    "revenuecat_product_id": "weekly_sub",
                    "revenuecat_event": "billing_issue"
                }
            },
            "event_type": "custom_event"
        }
    ],
    "source_request_id": "12345678-1234-1234-1234-123456789012",
    "user_attributes": {
        "$country": "US",
        "revenuecat_$ip": "123.45.67.89",
        "revenuecat_$appsflyerId": "1234567890123-1234567890123456789",   
        "revenuecat_$onesignalId": "1234567890123-1234567890123456789",   
        "revenuecat_aliases": [
            "12abc345d67e890fgh12j3lm456n7890"
        ],
        "revenuecat_app_user_id": "123456789",
        "revenuecat_original_app_user_id": "$RCAnonymousID:87c6049c58069238dce29853916d624c"
    },
    "device_info": {
        "platform": "iOS",
        "ios_advertising_id": "12345678-1234-1234-1234-123456789012"
    },
    "application_info": {
        "application_name": "App_Name",
        "package": "co.appname",
        "os": "iOS"
    },
    "user_identities": {},
    "schema_version": 2,
    "environment": "production",
    "mpid": "12345678"
}
```
```json Product Change
{
    "events": [
        {
            "data": {
                "event_name": "product_change",
                "custom_event_type": "transaction",
                "source_message_id": "12345678-1234-1234-1234-123456789012",
                "timestamp_unixtime_ms": 1642376571000,
                "custom_attributes": {
                    "revenuecat_new_product_id": "weekly_sub",
                    "revenuecat_product_id": "monthly_sub",
                    "revenuecat_event": "product_change"
                }
            },
            "event_type": "custom_event"
        }
    ],
    "source_request_id": "12345678-1234-1234-1234-123456789012",
    "user_attributes": {
        "$country": "US",
        "revenuecat_$ip": "123.45.67.89",
        "revenuecat_$appsflyerId": "1234567890123-1234567890123456789",   
        "revenuecat_$onesignalId": "1234567890123-1234567890123456789",   
        "revenuecat_aliases": [
            "12abc345d67e890fgh12j3lm456n7890"
        ],
        "revenuecat_app_user_id": "123456789",
        "revenuecat_original_app_user_id": "$RCAnonymousID:87c6049c58069238dce29853916d624c"
    },
    "device_info": {
        "platform": "iOS",
        "ios_advertising_id": "12345678-1234-1234-1234-123456789012"
    },
    "application_info": {
        "application_name": "App_Name",
        "package": "co.appname",
        "os": "iOS"
    },
    "user_identities": {},
    "schema_version": 2,
    "environment": "production",
    "mpid": "12345678"
}
```
