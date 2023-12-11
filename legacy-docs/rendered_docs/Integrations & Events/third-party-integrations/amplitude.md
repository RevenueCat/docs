---
title: Amplitude
slug: amplitude
excerpt: Integrate in-app subscription events from RevenueCat with Amplitude
hidden: false
categorySlug: integrations
order: 1
parentDoc: 649983b4c31b2e000a3c18f1
---
> 👍 
> 
> The Amplitude integration is to all users signed up after September '23, the legacy Grow and Pro plans, and Enterprise plans. If you're on a legacy Free or Starter plan and want to access this integration, migrate to our new pricing via your [billing settings](https://app.revenuecat.com/settings/billing).

Amplitude can be a useful integration tool for seeing all events and revenue that occur for your app even if it’s not active for a period of time. You can use Amplitude’s product analytics to find patterns in customer behavior and inform marketing strategies.

With our Amplitude integration, you can:

- Create a behavioral cohort of customers based on specific actions, such as watching a specific episode of a show after subscribing.  Follow a cohort throughout their lifecycle to realize overarching trends.
- Measure the path of a user from marketing material to the purchase of a subscription. 

With accurate and up-to-date subscription data in Amplitude, you'll be set to turbocharge your product analytics ⚡️

## Integration at a Glance
| Includes Revenue | Supports Negative Revenue |  Sends Sandbox Events | Includes Subscriber Attributes | Sends Transfer Events |                                                                                Optional Event Types                                                                               |
|:----------------:|:-------------------------:|:---------------------:|:------------------------------:|:---------------------:|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
|         ✅        |             ✅             | Requires API key |    ✅    |           ❌           | non_subscription_purchase_event <br> uncancellation_event <br>subscription_paused_event <br> expiration_event <br> billing_issue_event <br>product_change_event |

# Events

The Amplitude integration tracks the following events:

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
    "0-1": "rc_initial_purchase_event",
    "0-2": "A new subscription has been purchased.",
    "0-3": "✅",
    "0-4": "✅",
    "0-5": "✅",
    "0-6": "✅",
    "0-7": "❌",
    "1-0": "Trial Started",
    "1-1": "rc_trial_started_event",
    "1-2": "The start of an auto-renewing subscription product free trial.",
    "1-3": "✅",
    "1-4": "✅",
    "1-5": "✅",
    "1-6": "✅",
    "1-7": "❌",
    "2-0": "Trial Converted",
    "2-1": "rc_trial_converted_event",
    "2-2": "When an auto-renewing subscription product converts from a free trial to normal paid period.",
    "2-3": "✅",
    "2-4": "✅",
    "2-5": "✅",
    "2-6": "✅",
    "2-7": "❌",
    "3-0": "Trial Cancelled",
    "3-1": "rc_trial_cancelled_event",
    "3-2": "When a user turns off renewals for an auto-renewing subscription product during a free trial period.",
    "3-3": "✅",
    "3-4": "✅",
    "3-5": "✅",
    "3-6": "✅",
    "3-7": "❌",
    "4-0": "Renewal",
    "4-1": "rc_renewal_event",
    "4-2": "An existing subscription has been renewed or a lapsed user has resubscribed.",
    "4-3": "✅",
    "4-4": "✅",
    "4-5": "✅",
    "4-6": "✅",
    "4-7": "❌",
    "5-0": "Cancellation",
    "5-1": "rc_cancellation_event",
    "5-2": "A subscription or non-renewing purchase has been cancelled. See [cancellation reasons](https://www.revenuecat.com/docs/event-types-and-fields#cancellation-and-expiration-reasons) for more details.",
    "5-3": "✅",
    "5-4": "✅",
    "5-5": "✅",
    "5-6": "✅",
    "5-7": "✅",
    "6-0": "Uncancellation",
    "6-1": "rc_uncancellation_event",
    "6-2": "A non-expired cancelled subscription has been re-enabled.",
    "6-3": "✅",
    "6-4": "✅",
    "6-5": "✅",
    "6-6": "❌",
    "6-7": "❌",
    "7-0": "Non Subscription Purchase",
    "7-1": "rc_non_subscription_purchase_event",
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
    "9-1": "rc_expiration_event",
    "9-2": "A subscription has expired and access should be removed.  \n  \nIf you have [Platform Server Notifications](https://www.revenuecat.com/docs/server-notifications) configured, this event will occur as soon as we are notified (within seconds to minutes) of the expiration.  \n  \nIf you do not have notifications configured, delays may be approximately 1 hour.",
    "9-3": "✅",
    "9-4": "✅",
    "9-5": "✅",
    "9-6": "✅",
    "9-7": "✅",
    "10-0": "Billing Issues",
    "10-1": "rc_billing_issue_event",
    "10-2": "There has been a problem trying to charge the subscriber. This does not mean the subscription has expired.  \n  \nCan be safely ignored if listening to CANCELLATION event + cancel_reason=BILLING_ERROR",
    "10-3": "✅",
    "10-4": "✅",
    "10-5": "✅",
    "10-6": "✅",
    "10-7": "❌",
    "11-0": "Product Change",
    "11-1": "rc_product_change_event",
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

For events that have revenue, such as trial conversions and renewals, RevenueCat will automatically record this amount along with the event in Amplitude.

# Setup

## 1. Set Amplitude User Identity

If you're using the Amplitude SDK, you can set the User Id to match the RevenueCat App User Id. This way, events sent from the Amplitude SDK and events sent from RevenueCat can be synced to the same user.

Configure the Amplitude SDK with the same App User Id as RevenueCat or use the `.setUserId()` method on the Amplitude SDK.

```swift 
// Configure Purchases SDK
Purchases.configure(withAPIKey: "public_sdk_key", appUserID: "my_app_user_id")

// Configure Amplitude SDK
Amplitude.instance()?.initializeApiKey("amplitude_api_key", userId: "my_app_user_id")

// Optional User Alias Object attributes
Purchases.shared.attribution.setAttributes(["$amplitudeDeviceId": <AMPLITUDE_DEVICE_ID>])
```
```objectivec 
// Configure Purchases SDK
[RCPurchases configureWithAPIKey:@"public_sdk_key" appUserID:@"my_app_user_id"];

// Configure Amplitude SDK
[[Amplitude] instance] initializeApiKey:@"amplitude_api_key" userId:@"my_app_user_id"];
```
```java 
// Configure Purchases SDK
Purchases.configure(this, "public_sdk_key", "my_app_user_id");

// Configure Amplitude SDK
Amplitude.getInstance().initialize(this, "amplitude_api_key", "my_app_user_id");
```



## Send Amplitude User Identifiers to RevenueCat (Optional)

If your App User ID in RevenueCat is different than the User ID in Amplitude, you can use the Amplitude User ID and/or Amplitude Device ID to identify events by adding a key in [Subscriber Attributes](doc:subscriber-attributes).

| Key                  | Description                                                                                                      |
| :------------------- | :--------------------------------------------------------------------------------------------------------------- |
| `$amplitudeDeviceId` | The Amplitude [Device ID](https://developers.amplitude.com/docs/http-api-deprecated#keys-for-the-event-argument) |
| `$amplitudeUserId`   | The Amplitude [User ID](https://developers.amplitude.com/docs/http-api-deprecated#keys-for-the-event-argument)   |

If both keys are present, RevenueCat will send both the User ID and Device ID to identify events into Amplitude. If only one of the keys are present, RevenueCat will only send the available key. If no keys are present, RevenueCat will send the current RevenueCat App User ID. This property can be set and removed manually, like any other [Subscriber Attribute](doc:subscriber-attributes). For more information how Amplitude tracks unique users, view their docs [here](https://help.amplitude.com/hc/en-us/articles/115003135607-Tracking-unique-users).

## 2. Send RevenueCat Events to Amplitude

After you've set up the _Purchases SDK_ and Amplitude SDK to have the same user identity, you can "turn on" the integration and configure the event names from the RevenueCat dashboard.

1. Navigate to your project in the RevenueCat dashboard and find the _Integrations_ card in the left menu. Select **+ New** 

![](https://files.readme.io/0c37a59-app.revenuecat.com_projects_85ff18c7_collaborators_1.png)

2. Choose **Amplitude** from the Integrations menu
3. Add your Amplitude API key
4. Enter the event names that RevenueCat will send or choose the default event names
5. Select whether you want sales reported as gross revenue (before app store commission), or after store commission and/or estimated taxes.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/bb2663f-app.revenuecat.com_projects_85ff18c7_integrations_branch_7.png",
        null,
        "Amplitude configuration page"
      ],
      "align": "center",
      "caption": "Amplitude configuration page"
    }
  ]
}
[/block]

## Set Amplitude Region (Optional)

If your Amplitude account is hosted on EU servers, toggle the Amplitude Region field to `EU` in the Amplitude integration settings. The region defaults to `US`.

# Sample Event

Below are sample JSONs that are delivered to Amplitude for each event type.

```json Initial Purchase
{
    "api_key": "yourAmplitudeAPIKey",
    "event": {
        "event_type": "rc_initial_purchase_event",
        "partner_id": "revenuecat",
        "insert_id": "a12bc3d4-e5fg-678h-91i0-j23klmn45678",
        "time": 1662493499000,
        "platform": "iOS",
        "revenue": 7.61,
        "productId": "rc_subscription_monthly",
        "event_properties": {
            "subscriber_attributes": {
                "$attConsentStatus": "denied", 
                "$amplitudeDeviceId": "123a4b56-7890-12cd-345e-67f90gh1ij1k"
            },
            "period_type": "NORMAL",
            "purchased_at": "2022-09-06T19: 44: 59Z",
            "expiration_at": "2022-10-06T19: 44: 59Z",
            "environment": "PRODUCTION",
            "entitlement_id": "pro",
            "entitlement_ids": [
                "pro"
            ],
            "presented_offering_id": null,
            "transaction_id": "123456789012345",
            "original_transaction_id": "011223344556677",
            "aliases": [
                "$RCAnonymousID: 121abc123a4abc123123abc123abc1230"
            ],
            "original_app_user_id": "$RCAnonymousID: 1234567890ab1cd1234a55b6c78910a3",
            "store": "APP_STORE",
            "app_user_id": "$RCAnonymousID: 1234567890ab1cd1234a55b6c78910a3",
            "product_id": "rc_subscription_monthly",
            "currency": "EUR",
            "revenue": 7.61,
            "app_id": "app1234567890"
        },
    "user_id": "$RCAnonymousID: 1234567890ab1cd1234a55b6c78910a3"
    }
}
```
```json Trial Started
{
    "api_key": "yourAmplitudeAPIKey",
    "event": {
        "event_type ": "rc_trial_started_event ",
        "partner_id ": "revenuecat ",
        "insert_id ": "a12bc3d4-e5fg-678h-91i0-j23klmn45678",
        "time ": 1662492770000,
        "platform ": "iOS ",
        "revenue ": 0,
        "productId ": "rc_subscription_monthly",
        "event_properties ": {
            "subscriber_attributes ": {
                "$attConsentStatus": "denied", 
                "$amplitudeDeviceId": "123a4b56-7890-12cd-345e-67f90gh1ij1k"
            },
            "period_type ": "TRIAL ",
            "purchased_at ": "2022-09-06T19: 32: 50Z ",
            "expiration_at ": "2022-09-09T19: 32: 50Z ",
            "environment ": "PRODUCTION ",
            "entitlement_id": "pro",
            "entitlement_ids": [
                "pro"
            ],
            "presented_offering_id ": null,
            "transaction_id ": "123456789012345 ",
            "original_transaction_id ": "011223344556677 ",
            "aliases ": [
                "$RCAnonymousID: 121abc123a4abc123123abc123abc1230 "
            ],
            "original_app_user_id ": "$RCAnonymousID: 1234567890ab1cd1234a55b6c78910a3 ",
            "store ": "APP_STORE ",
            "app_user_id ": "$RCAnonymousID: 1234567890ab1cd1234a55b6c78910a3 ",
            "product_id ": "rc_subscription_monthly",
            "currency ": "USD",
            "revenue ": 0,
            "app_id ": "app1234567890"
        },
    "user_id ": "$RCAnonymousID: 1234567890ab1cd1234a55b6c78910a3"
    }
}
```
```json Trial Conversion
{
  "api_key": "yourAmplitudeAPIKey",
  "event": {
    "event_type": "rc_trial_converted_event",
    "partner_id": "revenuecat", 
    "insert_id": "d61ed8b3-d4ed-436e-80b6-a69dabe44855", 
    "time": 1655322275000, 
    "platform": "iOS", 
    "revenue": 139.993, 
    "productId": "rc_3999_1y_1w0", 
    "event_properties": {
      "subscriber_attributes": {
        "$attConsentStatus": "denied", 
        "$amplitudeDeviceId": "123a4b56-7890-12cd-345e-67f90gh1ij1k"
       }, 
       "period_type": "NORMAL", 
       "purchased_at": "2022-06-15T19:44:35Z", 
       "expiration_at": "2022-06-22T19:44:35Z", 
       "environment": "SANDBOX", 
       "entitlement_id": null, 
       "entitlement_ids": ["premium"], 
       "presented_offering_id": null, 
       "transaction_id": "2000000080909203", 
       "original_transaction_id": "2000000080909203", 
       "aliases": ["$RCAnonymousID:e35dd5b6732f4e1aad8c398d635e83e0"], 
       "original_app_user_id": "$RCAnonymousID:e35dd5b6732f4e1aad8c398d635e83e0", 
       "store": "APP_STORE", 
       "app_user_id": "$RCAnonymousID:e35dd5b6732f4e1aad8c398d635e83e0", 
       "product_id": "rc_3999_1y_1w0", 
       "currency": "USD", 
       "revenue": 139.993
      }, 
    "user_id": "$RCAnonymousID:e35dd5b6732f4e1aad8c398d635e83e0""
  }
}
```
```json Trial Cancelled
{
    "api_key": "yourAmplitudeAPIKey",
    "event": {
        "event_type ": "rc_trial_cancelled_event",
        "partner_id": "revenuecat",
        "insert_id": "a12bc3d4-e5fg-678h-91i0-j23klmn45678",
        "time": 1662493279414,
        "platform": "iOS",
        "revenue": 0.0,
        "productId": "rc_subscription_monthly",
        "event_properties": {
            "subscriber_attributes": {
                "$attConsentStatus": "denied", 
                "$amplitudeDeviceId": "123a4b56-7890-12cd-345e-67f90gh1ij1k"
            },
            "period_type": "TRIAL",
            "purchased_at": "2022-09-03T19:41:12Z",
            "expiration_at": "2022-09-06T19:41:12Z",
            "environment": "PRODUCTION",
            "entitlement_id": null,
            "entitlement_ids": null,
            "presented_offering_id": null,
            "transaction_id": "123456789012345",
            "original_transaction_id": "011223344556677",
            "aliases": [
                "$RCAnonymousID: 121abc123a4abc123123abc123abc1230"
            ],
            "original_app_user_id": "$RCAnonymousID: 1234567890ab1cd1234a55b6c78910a3",
            "store": "APP_STORE",
            "app_user_id": "$RCAnonymousID: 1234567890ab1cd1234a55b6c78910a3",
            "product_id": "rc_subscription_monthly",
            "currency": "USD",
            "revenue": 0.0,
            "cancel_reason": "BILLING_ERROR",
            "app_id": "app1234567890"
        },
        "user_id": "$RCAnonymousID: 1234567890ab1cd1234a55b6c78910a3"
    }
}
```
```json Renewal
{
    "api_key": "yourAmplitudeAPIKey",
    "event": {
        "event_type": "rc_renewal_event",
        "partner_id": "revenuecat",
        "insert_id": "a12bc3d4-e5fg-678h-91i0-j23klmn45678",
        "time": 1662524551000,
        "platform": "iOS",
        "revenue": 6.99,
        "productId": "rc_subscription_monthly",
        "event_properties": {
            "subscriber_attributes": {
                "$attConsentStatus": "denied", 
                "$amplitudeDeviceId": "123a4b56-7890-12cd-345e-67f90gh1ij1k"
            },
            "period_type": "NORMAL",
            "purchased_at": "2022-09-07T04:22:31Z",
            "expiration_at": "2022-10-07T04:22:31Z",
            "environment": "PRODUCTION",
            "entitlement_id": "pro",
            "entitlement_ids": [
                "pro"
            ],
            "presented_offering_id": "standard",
            "transaction_id": "123456789012345",
            "original_transaction_id": "011223344556677",
            "aliases": [
                "$RCAnonymousID: 121abc123a4abc123123abc123abc1230"
            ],
            "original_app_user_id": "$RCAnonymousID: 1234567890ab1cd1234a55b6c78910a3",
            "store": "APP_STORE",
            "app_user_id": "$RCAnonymousID: 1234567890ab1cd1234a55b6c78910a3",
            "product_id": "rc_subscription_monthly",
            "currency": "EUR",
            "revenue": 6.99,
            "app_id": "app1234567890"
        },
        "user_id": "$RCAnonymousID: 1234567890ab1cd1234a55b6c78910a3"
    }
}
```
```json Cancellation
{
    "api_key": "yourAmplitudeAPIKey",
    "event": {
        "event_type": "rc_cancellation_event",
        "partner_id": "revenuecat",
        "insert_id": "a12bc3d4-e5fg-678h-91i0-j23klmn45678",
        "time": 1662493540346,
        "platform": "iOS",
        "revenue": 0.0,
        "productId": "rc_subscription_monthly",
        "event_properties": {
            "subscriber_attributes": {
                "$attConsentStatus": "denied", 
                "$amplitudeDeviceId": "123a4b56-7890-12cd-345e-67f90gh1ij1k"
            },
            "period_type": "NORMAL",
            "purchased_at": "2021-09-06T19:44:47Z",
            "expiration_at": "2022-09-06T19:44:47Z",
            "environment": "PRODUCTION",
            "entitlement_id": null,
            "entitlement_ids": null,
            "presented_offering_id": null,
            "transaction_id": "123456789012345",
            "original_transaction_id": "011223344556677",
            "aliases": [
                "$RCAnonymousID: 121abc123a4abc123123abc123abc1230"
            ],
            "original_app_user_id": "$RCAnonymousID: 1234567890ab1cd1234a55b6c78910a3",
            "store": "APP_STORE",
            "app_user_id": "$RCAnonymousID: 1234567890ab1cd1234a55b6c78910a3",
            "product_id": "rc_subscription_monthly",
            "currency": "KZT",
            "revenue": 0.0,
            "cancel_reason": "BILLING_ERROR",
            "app_id": "app1234567890"
        },
        "user_id": "$RCAnonymousID: 1234567890ab1cd1234a55b6c78910a3"
    }
}
```
```json Uncancellation
{
    "api_key": "yourAmplitudeAPIKey",
    "event": {
        "event_type": "rc_uncancellation_event",
        "partner_id": "revenuecat",
        "insert_id": "a12bc3d4-e5fg-678h-91i0-j23klmn45678",
        "time": 1663779027932,
        "platform": "iOS",
        "revenue": 0.0,
        "productId": "rc_subscription_monthly",
        "event_properties": {
            "subscriber_attributes": {
                "$attConsentStatus": "denied", 
                "$amplitudeDeviceId": "123a4b56-7890-12cd-345e-67f90gh1ij1k"
            },
            "period_type": "NORMAL",
            "purchased_at": "2022-08-24T23:10:10Z",
            "expiration_at": "2023-08-24T23:10:10Z",
            "environment": "PRODUCTION",
            "entitlement_id": "pro",
            "entitlement_ids": [
                "pro"
            ],
            "presented_offering_id": "Subscription",
            "transaction_id": "123456789012345",
            "original_transaction_id": "011223344556677",
            "aliases": [
                "$RCAnonymousID: 121abc123a4abc123123abc123abc1230"
            ],
            "original_app_user_id": "$RCAnonymousID: 1234567890ab1cd1234a55b6c78910a3",
            "store": "APP_STORE",
            "app_user_id": "$RCAnonymousID: 1234567890ab1cd1234a55b6c78910a3",
            "product_id": "rc_subscription_monthly",
            "currency": "EUR",
            "revenue": 0.0,
            "app_id": "app1234567890"
        },
    "user_id": "$RCAnonymousID: 1234567890ab1cd1234a55b6c78910a3"
    }
}
```



```json Non Subscription Purchase
{
    "api_key": "yourAmplitudeAPIKey",
    "event": {
        "event_type": "rc_non_subscription_purchase_event",
        "partner_id": "revenuecat",
        "insert_id": "a12bc3d4-e5fg-678h-91i0-j23klmn45678",
        "time": 1662421921000,
        "platform": "iOS",
        "revenue": 9.99,
        "productId": "rc_coins",
        "event_properties": {
            "subscriber_attributes": {
                "$attConsentStatus": "denied", 
                "$amplitudeDeviceId": "123a4b56-7890-12cd-345e-67f90gh1ij1k"
            },
            "period_type": "NORMAL",
            "purchased_at": "2022-09-05T23:52:01Z",
            "expiration_at": null,
            "environment": "PRODUCTION",
            "entitlement_id": null,
            "entitlement_ids": null,
            "presented_offering_id": null,
            "transaction_id": "123456789012345",
            "original_transaction_id": "011223344556677",
            "aliases": [
                "$RCAnonymousID: 121abc123a4abc123123abc123abc1230"
            ],
            "original_app_user_id": "$RCAnonymousID: 1234567890ab1cd1234a55b6c78910a3",
            "store": "APP_STORE",
            "app_user_id": "$RCAnonymousID: 1234567890ab1cd1234a55b6c78910a3",
            "product_id": "rc_subscription_monthly",
            "currency": "USD",
            "revenue": 9.99,
            "app_id": "app1234567890"
        },
    "user_id": "$RCAnonymousID: 1234567890ab1cd1234a55b6c78910a3"
    }
}
```
```json Subscription Paused
{
    "api_key": "yourAmplitudeAPIKey",
    "event": {
        "event_type": "rc_subscription_paused_event",
        "partner_id": "revenuecat",
        "insert_id": "a12bc3d4-e5fg-678h-91i0-j23klmn45678",
        "time": 1663786195063,
        "platform": "iOS",
        "revenue": 0.0,
        "productId": "rc_subscription_monthly",
        "event_properties": {
            "subscriber_attributes": {
                "$attConsentStatus": "denied", 
                "$amplitudeDeviceId": "123a4b56-7890-12cd-345e-67f90gh1ij1k"
            },
            "period_type": "INTRO",
            "purchased_at": "2022-09-19T09:07:33Z",
            "expiration_at": "2022-09-26T13:07:20Z",
            "environment": "PRODUCTION",
            "entitlement_id": "pro",
            "entitlement_ids": [
                "pro"
            ],
            "presented_offering_id": "bold_pricing_modal",
            "transaction_id": "123456789012345",
            "original_transaction_id": "011223344556677",
            "aliases": [
                "$RCAnonymousID: 121abc123a4abc123123abc123abc1230"
            ],
            "original_app_user_id": "$RCAnonymousID: 1234567890ab1cd1234a55b6c78910a3",
            "store": "APP_STORE",
            "app_user_id": "$RCAnonymousID: 1234567890ab1cd1234a55b6c78910a3",
            "product_id": "rc_subscription_monthly",
            "currency": "USD",
            "revenue": 0.0,
            "auto_resume_at": "2022-10-03T11:07:20Z",
            "app_id": "app1234567890"
        },
    "user_id": "$RCAnonymousID: 1234567890ab1cd1234a55b6c78910a3"
    }
}
```
```json Expiration
{
    "api_key": "yourAmplitudeAPIKey",
    "event": {
        "event_type": "rc_expiration_event",
        "partner_id": "revenuecat",
        "insert_id": "a12bc3d4-e5fg-678h-91i0-j23klmn45678",
        "time": 1662414172000,
        "platform": "iOS",
        "revenue": 0.0,
        "productId": "rc_subscription_monthly",
        "event_properties": {
            "subscriber_attributes": {
                "$attConsentStatus": "denied", 
                "$amplitudeDeviceId": "123a4b56-7890-12cd-345e-67f90gh1ij1k"
            },
            "period_type": "NORMAL",
            "purchased_at": "2021-09-05T21:42:52Z",
            "expiration_at": "2022-09-05T21:42:52Z",
            "environment": "PRODUCTION",
            "entitlement_id": null,
            "entitlement_ids": null,
            "presented_offering_id": null,
            "transaction_id": "123456789012345",
            "original_transaction_id": "011223344556677",
            "aliases": [
                "$RCAnonymousID: 121abc123a4abc123123abc123abc1230"
            ],
            "original_app_user_id": "$RCAnonymousID: 1234567890ab1cd1234a55b6c78910a3",
            "store": "APP_STORE",
            "app_user_id": "$RCAnonymousID: 1234567890ab1cd1234a55b6c78910a3",
            "product_id": "rc_subscription_monthly",
            "currency": "USD",
            "revenue": 0.0,
            "expiration_reason": "UNSUBSCRIBE",
            "app_id": "app1234567890"
        },
        "user_id": "$RCAnonymousID:1234567890ab1cd1234a55b6c78910a3"
    }
}
```
```json Billing Issues
{
    "api_key": "yourAmplitudeAPIKey",
    "event": {
        "event_type": "rc_billing_issue_event",
        "partner_id": "revenuecat",
        "insert_id": "a12bc3d4-e5fg-678h-91i0-j23klmn45678",
        "time": 1662665865167,
        "platform": "iOS",
        "revenue": 0.0,
        "productId": "rc_subscription_monthly",
        "event_properties": {
            "subscriber_attributes": {
                "$attConsentStatus": "denied", 
                "$amplitudeDeviceId": "123a4b56-7890-12cd-345e-67f90gh1ij1k"
            },
            "period_type": "NORMAL",
            "purchased_at": "2022-08-08T19:11:04Z",
            "expiration_at": "2022-09-24T19:11:04Z",
            "environment": "PRODUCTION",
            "entitlement_id": "pro",
            "entitlement_ids": [
                "pro"
            ],
            "presented_offering_id": null,
            "transaction_id": "123456789012345",
            "original_transaction_id": "011223344556677",
            "aliases": [
                "$RCAnonymousID: 121abc123a4abc123123abc123abc1230"
            ],
            "original_app_user_id": "$RCAnonymousID: 1234567890ab1cd1234a55b6c78910a3",
            "store": "APP_STORE",
            "app_user_id": "$RCAnonymousID: 1234567890ab1cd1234a55b6c78910a3",
            "product_id": "rc_subscription_monthly",
            "currency": "EUR",
            "revenue": 0.0,
            "grace_period_expiration_at": "2022-09-24T19:11:04Z",
            "app_id": "app1234567890"
        },
        "user_id": "$RCAnonymousID: 1234567890ab1cd1234a55b6c78910a3"
    }
}
```
```json Product Change
{
    "api_key": "yourAmplitudeAPIKey",
    "event": {
        "event_type": "rc_product_change_event",
        "partner_id": "revenuecat",
        "insert_id": "a12bc3d4-e5fg-678h-91i0-j23klmn45678",
        "time": 1663786694542,
        "platform": "iOS",
        "revenue": 0.0,
        "productId": "rc_subscription_monthly",
        "event_properties": {
            "subscriber_attributes": {
                "$attConsentStatus": "denied", 
                "$amplitudeDeviceId": "123a4b56-7890-12cd-345e-67f90gh1ij1k"
            },
            "period_type": "NORMAL",
            "purchased_at": "2020-09-03T15:44:46Z",
            "expiration_at": "2021-09-03T15:44:46Z",
            "environment": "PRODUCTION",
            "entitlement_id": "all-access",
            "entitlement_ids": [
                "all-access"
            ],
            "presented_offering_id": "Subscription",
            "transaction_id": "123456789012345",
            "original_transaction_id": "011223344556677",
            "aliases": [
                "$RCAnonymousID: 121abc123a4abc123123abc123abc1230"
            ],
            "original_app_user_id": "$RCAnonymousID: 1234567890ab1cd1234a55b6c78910a3",
            "store": "APP_STORE",
            "app_user_id": "$RCAnonymousID: 1234567890ab1cd1234a55b6c78910a3",
            "product_id": "rc_subscription_monthly",
            "currency": "USD",
            "revenue": 0.0,
            "new_product_id": "rc_subscription_yearly",
            "app_id": "app1234567890"
        },
    "user_id": "$RCAnonymousID:1234567890ab1cd1234a55b6c78910a3"
    }
}
```

# Subscription Status Attribute

Whenever RevenueCat sends an event to Amplitude, we'll update the `rc_subscription_status` user attribute with any applicable changes, using one of the following values:

| Status              | Description                                                                                                                        |
| :------------------ | :--------------------------------------------------------------------------------------------------------------------------------- |
| active              | The customer has an active, paid subscription which is set to renew at their next renewal date.                                    |
| intro               | The customer has an active, paid subscription through a paid introductory offer.                                                   |
| cancelled           | The customer has a paid subscription which is set to expire at their next renewal date.                                            |
| grace_period        | The customer has a paid subscription which has entered a grace period after failing to renew successfully.                         |
| trial               | The customer is in a trial period which is set to convert to paid at the end of their trial period.                                |
| cancelled_trial     | The customer is in a trial period which is set to expire at the end of their trial period.                                         |
| grace_period_trial  | The customer was in a trial period and has now entered a grace period after failing to renew successfully.                         |
| expired             | The customer's subscription has expired.                                                                                           |
| promotional         | The customer has access to an entitlement through a granted RevenueCat promotional subscription.                                   |
| expired_promotional | The customer previously had access to an entitlement through a granted RevenueCat promotional subscription that has since expired. |
| paused              | The customer has a paid subscription which has been paused and is set to resume at some future date.       

For customers with multiple active subscriptions, this attribute will represent the status of only the subscription for which the most recent event occurred. Therefore, we recommend using `rc_active_entitlements` to understand whether your customers have multiple active subscriptions to be accounted for.

Please note that since this attribute is set and updated when events are delivered, subscribers with events prior to our release of this attribute (during November 2023) will not have this attribute set until/unless a future event (renewal, cancellation, etc) occurs.
