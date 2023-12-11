---
title: Airship
slug: airship
excerpt: Integrate in-app purchase events from RevenueCat with Airship
hidden: false
categorySlug: integrations
order: 0
parentDoc: 649983b4c31b2e000a3c18f1
---
> 👍 
> 
> The Airship integration is available to all users signed up after September '23, the legacy Grow and Pro plans, and Enterprise plans. If you're on a legacy Free or Starter plan and want to access this integration, migrate to our new pricing via your [billing settings](https://app.revenuecat.com/settings/billing).

Airship can be a helpful integration tool in understanding what stage a customer is in and reacting accordingly. You can design and trigger personalized Airship messages to customers based on purchase behavior.  

Use your RevenueCat events to send Custom Events to trigger messages with Airship. This means you can design personalized Airship [Journeys](https://docs.airship.com/guides/messaging/user-guide/journeys/about/) and [Automations](https://docs.airship.com/guides/messaging/user-guide/messages/automation/about/) based on purchase behavior.

With our Airship Integration, you can:

- Send a message to a user whose subscription experienced a billing issue.
- Send reminders to your app's message center when a user's trial is about to expire.

With accurate and up-to-date subscription data in Airship, you'll be set to turbocharge your users' engagement ⚡️

## Integration at a Glance
| Includes Revenue | Supports Negative Revenue |       Sends Sandbox Events      | Includes Subscriber Attributes | Sends Transfer Events |                                                                   Optional Event Types                                                                   |
|:----------------:|:-------------------------:|:-------------------------------:|:------------------------------:|:---------------------:|:---------------------------------------------------------------------------------------------------------------------------------------------------:|
|         ✅        |             ✅             | Requires Token and App key |    ✅    |           ❌           | non_subscription_purchase_event<br> uncancellation_event<br> subscription_paused_event<br> expiration_event<br>billing_issue_event<br> product_change_event<br> |


# Events

The Airship integration tracks the following events:

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
    "0-1": "`rc_initial_purchase_event`",
    "0-2": "A new subscription has been purchased.",
    "0-3": "✅",
    "0-4": "✅",
    "0-5": "✅",
    "0-6": "✅",
    "0-7": "❌",
    "1-0": "Trial Started",
    "1-1": "`rc_trial_started_event`",
    "1-2": "The start of an auto-renewing subscription product free trial.",
    "1-3": "✅",
    "1-4": "✅",
    "1-5": "✅",
    "1-6": "✅",
    "1-7": "❌",
    "2-0": "Trial Converted",
    "2-1": "`rc_trial_converted_event`",
    "2-2": "When an auto-renewing subscription product converts from a free trial to normal paid period.",
    "2-3": "✅",
    "2-4": "✅",
    "2-5": "✅",
    "2-6": "✅",
    "2-7": "❌",
    "3-0": "Trial Cancelled",
    "3-1": "`rc_trial_cancelled_event`",
    "3-2": "When a user turns off renewals for an auto-renewing subscription product during a free trial period.",
    "3-3": "✅",
    "3-4": "✅",
    "3-5": "✅",
    "3-6": "✅",
    "3-7": "❌",
    "4-0": "Renewal",
    "4-1": "`rc_renewal_event`",
    "4-2": "An existing subscription has been renewed or a lapsed user has resubscribed.",
    "4-3": "✅",
    "4-4": "✅",
    "4-5": "✅",
    "4-6": "✅",
    "4-7": "❌",
    "5-0": "Cancellation",
    "5-1": "`rc_cancellation_event`",
    "5-2": "A subscription or non-renewing purchase has been cancelled. See [cancellation reasons](https://www.revenuecat.com/docs/event-types-and-fields#cancellation-and-expiration-reasons) for more details.",
    "5-3": "✅",
    "5-4": "✅",
    "5-5": "✅",
    "5-6": "✅",
    "5-7": "✅",
    "6-0": "Uncancellation",
    "6-1": "`rc_uncancellation_event`",
    "6-2": "A non-expired cancelled subscription has been re-enabled.",
    "6-3": "✅",
    "6-4": "✅",
    "6-5": "✅",
    "6-6": "❌",
    "6-7": "❌",
    "7-0": "Non Subscription Purchase",
    "7-1": "`rc_non_subscription_purchase_event`",
    "7-2": "A customer has made a purchase that will not auto-renew.",
    "7-3": "✅",
    "7-4": "✅",
    "7-5": "✅",
    "7-6": "✅",
    "7-7": "✅",
    "8-0": "Subscription Paused",
    "8-1": "`rc_subscription_paused_event`",
    "8-2": "A subscription has been paused.",
    "8-3": "❌",
    "8-4": "✅",
    "8-5": "❌",
    "8-6": "❌",
    "8-7": "❌",
    "9-0": "Expiration",
    "9-1": "`rc_expiration_event`",
    "9-2": "A subscription has expired and access should be removed.  \n  \nIf you have [Platform Server Notifications](https://www.revenuecat.com/docs/server-notifications) configured, this event will occur as soon as we are notified (within seconds to minutes) of the expiration.  \n  \nIf you do not have notifications configured, delays may be approximately 1 hour.",
    "9-3": "✅",
    "9-4": "✅",
    "9-5": "✅",
    "9-6": "✅",
    "9-7": "✅",
    "10-0": "Billing Issue",
    "10-1": "`rc_billing_issue_event`",
    "10-2": "There has been a problem trying to charge the subscriber. This does not mean the subscription has expired.  \n  \nCan be safely ignored if listening to CANCELLATION event + cancel_reason=BILLING_ERROR.",
    "10-3": "✅",
    "10-4": "✅",
    "10-5": "✅",
    "10-6": "✅",
    "10-7": "❌",
    "11-0": "Product Change",
    "11-1": "`rc_product_change_event`",
    "11-2": "A subscriber has changed the product of their subscription.  \n  \nThis does not mean the new subscription is in effect immediately. See [Managing Subscriptions](doc:managing-subscriptions) for more details on updates, downgrades, and crossgrades.",
    "11-3": "✅",
    "11-4": "✅",
    "11-5": "❌",
    "11-6": "✅",
    "11-7": "❌"
  },
  "cols": 8,
  "rows": 12,
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

For events that have revenue, such as trial conversions and renewals, RevenueCat will automatically record this amount along with the event in Airship.

# Setup

## 1. Set Airship User Identity

If you're using the Airship SDK, you can either send the channel ID to RevenueCat or set an Airship Named User to match the RevenueCat app user ID. The preferred method is to send the channel ID to RevenueCat. Either method you use will allow events sent from the Airship SDK and events sent from RevenueCat to be synced to the same user.

### Set Airship User Identity Using Channel ID

Setting the Airship channel ID in RevenueCat is the preferred way for identifying users in Airship. Call `setAirshipChannelID` on the Purchases SDK to have RevenueCat use the channel ID to send events to Airship.

```swift 
func application(application: UIApplication,
                 didFinishLaunchingWithOptions launchOptions: [UIApplicationLaunchOptionsKey: Any]?) -> Bool {

  // Configure Purchases
  Purchases.configure(withAPIKey: "public_sdk_key", appUserID: "my_app_user_id")

  // Initialize Airship
  Airship.takeOff(launchOptions: launchOptions)

  // Set the Airship channel ID in Purchases
  let channelID = Airship.channel.identifier
  Purchases.shared.attribution.setAirshipChannelID(channelID)

  // ...

  return true
}
```
```objectivec 
- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {

  // Configure Purchases
  [RCPurchases configureWithAPIKey:@"public_sdk_key" appUserID:@"my_app_user_id"];

  // Initialize Airship
  [UAirship takeOffWithLaunchOptions:launchOptions];
  
  // Set the Airship channel ID in Purchases
  NSString *channelID = UAirship.channel.identifier;
  [[RCPurchases sharedPurchases] setAirshipChannelID:channelID];
  
  // ...

  return YES;
}
```
```kotlin 
override fun onCreate(savedInstanceState: Bundle?) {

  super.onCreate(savedInstanceState)

  // Configure Purchases SDK
  Purchases.configure(this, "public_sdk_key", "my_app_user_id")

  // Airship should already be initialized using Autopilot
  // https://docs.airship.com/platform/android/getting-started/#takeoff

  // Set the Airship channel ID in Purchases
  val channelId = UAirship.shared().channel.id
  Purchases.sharedInstance.setAirshipChannelID(channelId)

  // ...
}
```
```java 
@Override
public void onCreate(Bundle savedInstanceState) {
  
  super.onCreate(savedInstanceState);

  // Configure Purchases SDK
  Purchases.configure(this, "public_sdk_key", "my_app_user_id");

  // Airship should already be initialized using Autopilot
  // https://docs.airship.com/platform/android/getting-started/#takeoff

  // Set the Airship channel ID in Purchases
  String channelId = UAirship.shared().getChannel().getId();
  Purchases.getSharedInstance().setAirshipChannelID(channelId);

  // ...
}
```



### [Advanced Alternative] Set Airship User Identity Using Named Users

**Setting the Airship channel ID in RevenueCat is preferred over using Named Users, even if you have a user authentication system.** However, if you're already using Named Users in your Airship integration, you have the option to set the Named User in the Airship SDK as the same app user ID as RevenueCat. Ensure [Named Users is enabled in your Airship dashboard](https://docs.airship.com/guides/messaging/user-guide/project/enable-features/#named-users).

```swift 
func application(application: UIApplication,
                 didFinishLaunchingWithOptions launchOptions: [UIApplicationLaunchOptionsKey: Any]?) -> Bool {

  // Configure Purchases
  Purchases.configure(withAPIKey: "public_sdk_key", appUserID: "my_app_user_id")

  // Initialize Airship
  Airship.takeOff(launchOptions: launchOptions)

  // Identify the user in Airship
  Airship.contact.identify("my_app_user_id")

  // ...

  return true
}
```
```objectivec 
- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {

  // Configure Purchases
  [RCPurchases configureWithAPIKey:@"public_sdk_key" appUserID:@"my_app_user_id"];

  // Initialize Airship
  [UAirship takeOffWithLaunchOptions:launchOptions];
  
  // Identify the user in Airship
  [UAirship.contact identify:@"my_app_user_id"];
  
  // ...

  return YES;
}
```
```kotlin 
override fun onCreate(savedInstanceState: Bundle?) {

  super.onCreate(savedInstanceState)

  // Configure Purchases SDK
  Purchases.configure(this, "public_sdk_key", "my_app_user_id")

  // Airship should already be initialized using Autopilot
  // https://docs.airship.com/platform/android/getting-started/#takeoff

  // Set the Airship channel ID in Purchases
  UAirship.shared().contact.identify("my_app_user_id")

  // ...
}
```
```java 
@Override
public void onCreate(Bundle savedInstanceState) {
  
  super.onCreate(savedInstanceState);

  // Configure Purchases SDK
  Purchases.configure(this, "public_sdk_key", "my_app_user_id");

  // Airship should already be initialized using Autopilot
  // https://docs.airship.com/platform/android/getting-started/#takeoff

  // Identify the user in Airship
  UAirship.shared().getContact().identify("my_app_user_id");

  // ...
}
```



## 2. Send RevenueCat Events to Airship

After you've set up the _Purchase_ SDK and Airship SDK to have the same user identity, you can "turn on" the integration and configure the event names from the RevenueCat dashboard.

1. Navigate to your app in the RevenueCat dashboard and choose 'Airship' from the integrations menu
2. Add your [Airship app key and token](https://docs.airship.com/guides/admin/security/account-security/)
3. Select the location of your Airship cloud site
4. Enter the event names that RevenueCat will send or choose the default event names
5. Select whether you want sales reported as gross revenue (before app store commission), or after store commission and/or estimated taxes.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/fd69e5f-app.revenuecat.com_projects_85ff18c7_integrations_branch_6.png",
        null,
        "Airship configuration page"
      ],
      "align": "center",
      "caption": "Airship configuration page"
    }
  ]
}
[/block]

# Sample Events

Below are sample JSONs that are delivered to Airship for each event type.

```json Initial Purchase
[
  {
    "occurred": "2022-08-17T22:24:09Z",
    "user": {
      "named_user_id": "ZYXWVUTSRQ"
    },
    "body": {
      "name": "rc_initial_purchase_event",
      "value": 5.051,
      "properties": {
        "id": "12345678-1234-1234-1234-123456789012",
        "event_timestamp_ms": 1660775073781,
        "app_user_id": "1234567890",
        "aliases": [
          "$RCAnonymousID:8069238d6049ce87cc529853916d624c"
        ],
        "original_app_user_id": "$RCAnonymousID:87c6049c58069238dce29853916d624c",
        "product_id": "subscription.v0.monthly",
        "period_type": "NORMAL",
        "purchased_at_ms": 1660775049528,
        "expiration_at_ms": 1660775464920,
        "environment": "SANDBOX",
        "entitlement_ids": [
          "Pro"
        ],
        "transaction_id": "GPA.1234-5678-9012-34567", 
        "original_transaction_id": "GPA.1234-5678-9012-34567", 
        "is_family_share": false,
        "country_code": "BR",
        "currency": "BRL",
        "price_in_purchased_currency": 25.99,
        "subscriber_attributes": {
          "$ip": {
            "value": "123.45.67.89",
            "updated_at_ms": 1660764263545
          },
          "$gpsAdId": {
            "value": "12345678-9012-3456-7890-123456789012",
            "updated_at_ms": 1660760899175
          },
          "$fbAnonId": {
            "value": "1234567890-1234-5678-9012-345678901234",
            "updated_at_ms": 1660760899262
          },
          "$androidId": {
            "value": "1234567890123456",
            "updated_at_ms": 1660760899175
          },
          "$appsflyerId": {
            "value": "1234567890123-1234567890123456789",
            "updated_at_ms": 1660760899175
          }
        },
        "store": "PLAY_STORE",
        "takehome_percentage": 0.85,
        "app_id": "1234567890"
      }
    }
  }
]
```
```json Trial Started
[
  {
      "body": {
        "name": "rc_trial_started_event",
        "properties": {
          "aliases": [
            "$RCAnonymousID:8069238d6049ce87cc529853916d624c"
          ],
          "app_id": "1234567890",
          "app_user_id": "1234567890",
          "currency": "USD",
          "entitlement_ids": [
            "Pro"
          ],
          "environment": "PRODUCTION",
          "event_timestamp_ms": 1662955146543,
          "expiration_at_ms": 1663559941000,
          "id": "12345678-1234-1234-1234-123456789012",
          "is_family_share": false,
          "original_app_user_id": "$RCAnonymousID:87c6049c58069238dce29853916d624c",
          "original_transaction_id": "123456789012345",
          "period_type": "TRIAL",
          "presented_offering_id": "default_offering",
          "price_in_purchased_currency": 0,
          "product_id": "1",
          "purchased_at_ms": 1662955141000,
          "store": "APP_STORE",
          "subscriber_attributes": {
            "$email": {
              "updated_at_ms": 1662955084635,
              "value": "firstlast@gmail.com"
          }
        },
        "value": 0
      },
      "occurred": "2022-09-12T03:59:01Z",
      "user": {
        "named_user_id": "ZYXWVUTSRQ"
      }
    }
  }
]
```
```json Trial Converted
[
  {
    "body": {
      "name": "rc_trial_converted_event",
      "properties": {
        "aliases": [
          "$RCAnonymousID:8069238d6049ce87cc529853916d624c"
        ],
        "app_id": "1234567890",
        "app_user_id": "1234567890",
        "country_code": "US",
        "currency": "USD",
        "entitlement_ids": [
          "Pro"
        ],
        "environment": "PRODUCTION",
        "event_timestamp_ms": 1662985791349,
        "expiration_at_ms": 1665579486000,
        "id": "12345678-1234-1234-1234-123456789012",
        "is_family_share": false,
        "is_trial_conversion": true,
        "original_app_user_id": "$RCAnonymousID:87c6049c58069238dce29853916d624c",
        "original_transaction_id": "123456789012345",
        "period_type": "NORMAL",
        "presented_offering_id": "default_offering",
        "price_in_purchased_currency": 5.99,
        "product_id": "1",
        "purchased_at_ms": 1662987486000,
        "store": "APP_STORE",
        "subscriber_attributes": {
          "$email": {
            "updated_at_ms": 1662955084635,
            "value": "firstlast@gmail.com"
          }
        },
      },
      "value": 5.091
    },
    "occurred": "2022-09-12T12:58:06Z",
    "user": {
      "named_user_id": "ZYXWVUTSRQ"
    }
  }
]
```
```json Trial Cancelled
[
  {
    "body": {
      "name": "rc_trial_cancelled_event",
      "properties": {
        "aliases": [
          "$RCAnonymousID:8069238d6049ce87cc529853916d624c"
        ],
        "app_id": "1234567890",
        "app_user_id": "123456789012345",
        "cancel_reason": "UNSUBSCRIBE",
        "country_code": "US",
        "currency": "USD",
        "entitlement_ids": [
          "Pro"
        ],
        "environment": "PRODUCTION",
        "event_timestamp_ms": 1662987212671,
        "expiration_at_ms": 1663262049000,
        "id": "12345678-1234-1234-1234-123456789012",
        "is_family_share": false,
        "original_app_user_id": "$RCAnonymousID:87c6049c58069238dce29853916d624c",
        "original_transaction_id": "123456789012345",
        "period_type": "TRIAL",
        "presented_offering_id": "default_offering",
        "price_in_purchased_currency": 0,
        "product_id": "1",
        "purchased_at_ms": 1662657249000,
        "store": "APP_STORE",
        "subscriber_attributes": {
          "$email": {
            "updated_at_ms": 1662955084635,
            "value": "firstlast@gmail.com"
          }
        },
        "takehome_percentage": 0.85,
        "transaction_id": "123456789012345"
      },
      "value": 0
    },
    "occurred": "2022-09-12T12:53:32Z",
    "user": {
      "named_user_id": "ZYXWVUTSRQ"
    }
  }
]
```
```json Renewal
[
  {
    "body": {
      "name": "rc_renewal_event",
      "properties": {
        "aliases": [
          "$RCAnonymousID:8069238d6049ce87cc529853916d624c"
        ],
        "app_id": "1234567890",
        "app_user_id": "1234567890",
        "country_code": "US",
        "currency": "USD",
        "entitlement_ids": [
          "Pro"
        ],
        "environment": "PRODUCTION",
        "event_timestamp_ms": 1662951401457,
        "expiration_at_ms": 1665540707000,
        "id": "12345678-1234-1234-1234-123456789012",
        "is_family_share": false,
        "is_trial_conversion": false,
        "original_app_user_id": "$RCAnonymousID:87c6049c58069238dce29853916d624c",
        "original_transaction_id": "123456789012345",
        "period_type": "NORMAL",
        "presented_offering_id": "default_offering",
        "price_in_purchased_currency": 5.99,
        "product_id": "1",
        "purchased_at_ms": 1662948707000,
        "store": "APP_STORE",
        "subscriber_attributes": {
          "$appsflyerId": {
            "updated_at_ms": 1651022873900,
            "value": "1234567890123-1234567890123456789"
          },
          "$email": {
            "updated_at_ms": 1660274406606,
            "value": "firstlast@gmail.com"
          },
          "$ip": {
            "updated_at_ms": 1651022873887,
            "value": "123.45.67.89"
          }
        },
        "takehome_percentage": 0.85,
        "transaction_id": "123456789012345"
      },
      "value": 5.091
    },
    "occurred": "2022-09-12T02:11:47Z",
    "user": {
      "named_user_id": "ZYXWVUTSRQ"
    }
  }
]
```
```json Cancellation
[
  {
    "body": {
      "name": "rc_cancellation_event",
      "properties": {
        "aliases": [
          "$RCAnonymousID:8069238d6049ce87cc529853916d624c"
        ],
        "app_id": "1234567890",
        "app_user_id": "1234567890",
        "cancel_reason": "BILLING_ERROR",
        "country_code": "US",
        "currency": "USD",
        "entitlement_ids": [
          "Pro"
        ],
        "environment": "PRODUCTION",
        "event_timestamp_ms": 1663083538724,
        "expiration_at_ms": 1664465906000,
        "id": "12345678-1234-1234-1234-123456789012",
        "is_family_share": false,
        "original_app_user_id": "$RCAnonymousID:87c6049c58069238dce29853916d624c",
        "original_transaction_id": "123456789012345",
        "period_type": "NORMAL",
        "price_in_purchased_currency": 0,
        "product_id": "AutoRenewMonthlyBasic",
        "purchased_at_ms": 1660405106000,
        "store": "APP_STORE",
        "subscriber_attributes": {
          "$appsflyerId": {
            "updated_at_ms": 1647104232082,
            "value": "1234567890123-1234567890123456789"
          },
          "$email": {
            "updated_at_ms": 1649936423436,
            "value": "firstlast@gmail.com"
          },
          "$ip": {
            "updated_at_ms": 1649936467544,
            "value": "123.45.67.89"
          }
        },
        "takehome_percentage": 0.7,
        "transaction_id": "123456789012345"
      },
      "value": 0
    },
    "occurred": "2022-09-13T15:38:58Z",
    "user": {
      "named_user_id": "ZYXWVUTSRQ"
    }
  }
]
```
```json Uncancellation
[
  {
    "occurred": "2022-08-16T16:46:13Z",
    "user": {
      "named_user_id": "ZYXWVUTSRQ"
    },
    "body": {
      "name": "rc_uncancellation_event",
      "value": 0.0,
      "properties": {
        "id": "12345678-1234-1234-1234-123456789012",
        "event_timestamp_ms": 1660668373184,
        "app_user_id": "1234567890",
        "aliases": [
          "$RCAnonymousID:8069238d6049ce87cc529853916d624c"
        ],
        "original_app_user_id": "$RCAnonymousID:87c6049c58069238dce29853916d624c",
        "product_id": "AutoRenewMonthlyBasic",
        "period_type": "NORMAL",
        "purchased_at_ms": 1660413184000,
        "expiration_at_ms": 1663091584000,
        "environment": "PRODUCTION",
        "entitlement_ids": [
          "Pro"
        ],
        "transaction_id": "123456789012345",
        "original_transaction_id": "123456789012345",
        "is_family_share": false,
        "country_code": "US",
        "currency": "USD",
        "price_in_purchased_currency": 0.0,
        "subscriber_attributes": {
          "$ip": {
            "value": "123.45.67.89",
            "updated_at_ms": 1655130803273
          },
          "$email": {
            "value": "firstlast@gmail.com",
            "updated_at_ms": 1655162763950
          },
          "$appsflyerId": {
            "value": "1234567890123-1234567890123456789",
            "updated_at_ms": 1655130796226
          }
        },
        "store": "APP_STORE",
        "takehome_percentage": 0.7,
        "app_id": "1234567890"
      }
    }
  }
]
```



```json Non Subscription Purchase
[
  {
    "body": {
      "name": "rc_non_subscription_purchase_event",
      "properties": {
        "aliases": [
          "$RCAnonymousID:8069238d6049ce87cc529853916d624c"
        ],
        "app_user_id": "1234567890",
        "currency": "USD",
        "entitlement_ids": [
          "Pro"
        ],
        "environment": "PRODUCTION",
        "event_timestamp_ms": 1663031444913,
        "id": "12345678-1234-1234-1234-123456789012",
        "original_app_user_id": "1234567890",
        "original_transaction_id": "123456789012345",
        "period_type": "PROMOTIONAL",
        "price_in_purchased_currency": 0,
        "product_id": "rc_promo_subscription_lifetime",
        "purchased_at_ms": 1663031444879,
        "store": "PROMOTIONAL",
        "subscriber_attributes": {
          "$email": {
            "updated_at_ms": 1663031444396,
            "value": "firstlast@gmail.com"
          }
        },
        "takehome_percentage": 1,
        "transaction_id": "123456789012345"
      },
      "value": 9.99
    },
    "occurred": "2022-09-13T01:10:44Z",
    "user": {
      "named_user_id": "ZYXWVUTSRQ"
    }
  }
]
```
```json Expiration
[
  {
    "body": {
      "name": "rc_expiration_event",
      "properties": {
        "aliases": [
          "$RCAnonymousID:8069238d6049ce87cc529853916d624c"
        ],
        "app_id": "1234567890",
        "app_user_id": "1234567890",
        "country_code": "US",
        "currency": "USD",
        "entitlement_ids": [
          "subscription"
        ],
        "environment": "PRODUCTION",
        "event_timestamp_ms": 1662950285264,
        "expiration_at_ms": 1662948421000,
        "expiration_reason": "UNSUBSCRIBE",
        "id": "12345678-1234-1234-1234-123456789012",
        "is_family_share": false,
        "original_app_user_id": "$RCAnonymousID:87c6049c58069238dce29853916d624c",
        "original_transaction_id": "123456789012345",
        "period_type": "NORMAL",
        "presented_offering_id": "default_offering",
        "price_in_purchased_currency": 0,
        "product_id": "1",
        "purchased_at_ms": 1660270021000,
        "store": "APP_STORE",
        "subscriber_attributes": {
          "$appsflyerId": {
            "updated_at_ms": 1659182049974,
            "value": "1234567890123-1234567890123456789"
          },
          "$email": {
            "updated_at_ms": 1662919930136,
            "value": "firstlast@gmail.com"
          },
          "$ip": {
            "updated_at_ms": 1659182049961,
            "value": "123.45.67.89"
          }
        },
        "takehome_percentage": 0.85,
        "transaction_id": "123456789012345"
      },
      "value": 0
    },
    "occurred": "2022-09-12T02:07:01Z",
    "user": {
      "named_user_id": "ZYXWVUTSRQ"
    }
  }
]
```
```json Billing Issue
[
  {
    "body": {
      "name": "rc_billing_issue_event",
      "properties": {
        "aliases": [
          "$RCAnonymousID:8069238d6049ce87cc529853916d624c"
        ],
        "app_id": "1234567890",
        "app_user_id": "1234567890",
        "country_code": "US",
        "currency": "USD",
        "entitlement_ids": [
          "Pro"
        ],
        "environment": "PRODUCTION",
        "event_timestamp_ms": 1663083538724,
        "expiration_at_ms": 1664465906000,
        "grace_period_expiration_at_ms": 1664465906000,
        "id": "12345678-1234-1234-1234-123456789012",
        "is_family_share": false,
        "original_app_user_id": "$RCAnonymousID:87c6049c58069238dce29853916d624c",
        "original_transaction_id": "123456789012345",
        "period_type": "NORMAL",
        "price_in_purchased_currency": 0,
        "product_id": "AutoRenewMonthlyBasic",
        "purchased_at_ms": 1660405106000,
        "store": "APP_STORE",
        "subscriber_attributes": {
          "$appsflyerId": {
            "updated_at_ms": 1647104232082,
            "value": "1234567890123-1234567890123456789"
          },
          "$email": {
            "updated_at_ms": 1649936423436,
            "value": "firstlast@gmail.com"
          },
          "$ip": {
            "updated_at_ms": 1649936467544,
            "value": "123.45.67.89"
          }
        },
        "takehome_percentage": 0.7,
        "transaction_id": "123456789012345"
      },
      "value": 0
    },
    "occurred": "2022-09-13T15:38:58Z",
    "user": {
      "named_user_id": "ZYXWVUTSRQ"
    }
  }
]
```
```json Product Change
[
  {
    "occurred": "2022-04-15T11:05:27Z",
    "user": {
      "named_user_id": "ZYXWVUTSRQ"
    },
    "body": {
      "name": "rc_product_change_event",
      "value": 0.0,
      "properties": {
        "id": "12345678-1234-1234-1234-123456789012",
        "event_timestamp_ms": 1652324747722,
        "app_user_id": "1234567890",
        "aliases": [
          "$RCAnonymousID:8069238d6049ce87cc529853916d624c"
        ],
        "original_app_user_id": "$RCAnonymousID:87c6049c58069238dce29853916d624c",
        "product_id": "1",
        "period_type": "NORMAL",
        "purchased_at_ms": 1650020727000,
        "expiration_at_ms": 1652612727000,
        "environment": "PRODUCTION",
        "entitlement_ids": [
          "subscription"
        ],
        "presented_offering_id": "default_offering",
        "transaction_id": "123456789012345",
        "original_transaction_id": "123456789012345",
        "is_family_share": false,
        "country_code": "US",
        "new_product_id": "2",
        "currency": "USD",
        "price_in_purchased_currency": 0.0,
        "subscriber_attributes": {
          "$ip": {
            "value": "123.45.67.89",
            "updated_at_ms": 1650694978412
          },
          "$email": {
            "value": "firstlast@gmail.com",
            "updated_at_ms": 1650017723043
          },
          "$appsflyerId": {
            "value": "1234567890123-1234567890123456789",
            "updated_at_ms": 1650694978424
          }
        },
        "store": "APP_STORE",
        "takehome_percentage": 0.85
      }
    }
  }
]
```
