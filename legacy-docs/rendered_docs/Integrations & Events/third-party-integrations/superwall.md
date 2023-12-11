---
title: Superwall
slug: superwall
excerpt: Integrate in-app purchase events from RevenueCat with Superwall
hidden: false
categorySlug: integrations
order: 14
parentDoc: 649983b4c31b2e000a3c18f1
---
> 👍 
> 
> The Superwall integration is available to all users signed up after September '23, the legacy Grow and Pro plans, and Enterprise plans. If you're on a legacy Free or Starter plan and want to access this integration, migrate to our new pricing via your [billing settings](https://app.revenuecat.com/settings/billing).

Superwall can be a helpful integration for optimizing pricing and understanding which paywalls are producing customers with the highest LTV. RevenueCat can automatically send billing, subscription, and revenue metrics to Superwall, a paywall SDK that lets you remotely update every aspect of your paywall. 

With our Superwall integration, you can:

- Create paywalls on-the-fly without shipping app updates
- Determine which paywalls have high trial conversion rates
- Find which product & paywall combinations have the highest LTVs
- Offer discounts to users who churn

## Integration at a Glance
| Includes Revenue | Supports Negative Revenue | Sends Sandbox Events | Includes Subscriber Attributes | Sends Transfer Events | Optional Event Types |
|:----------------:|:-------------------------:|:--------------------:|:------------------------------:|:---------------------:|:---------------:|
|         ✅        |             ✅             |           ✅          |                ✅               |           ✅           |        ❌        |

# Events

The Superwall integration tracks the following events:

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
    "0-1": "`INITIAL_PURCHASE`",
    "0-2": "A new subscription has been purchased.",
    "0-3": "✅",
    "0-4": "✅",
    "0-5": "✅",
    "0-6": "✅",
    "0-7": "❌",
    "1-0": "Renewal",
    "1-1": "`RENEWAL`",
    "1-2": "An existing subscription has been renewed or a lapsed user has resubscribed.",
    "1-3": "✅",
    "1-4": "✅",
    "1-5": "✅",
    "1-6": "✅",
    "1-7": "❌",
    "2-0": "Cancellation",
    "2-1": "`CANCELLATION`",
    "2-2": "A subscription or non-renewing purchase has been cancelled. See [cancellation reasons](https://www.revenuecat.com/docs/event-types-and-fields#cancellation-and-expiration-reasons) for more details.",
    "2-3": "✅",
    "2-4": "✅",
    "2-5": "✅",
    "2-6": "✅",
    "2-7": "✅",
    "3-0": "Uncancellation",
    "3-1": "`UNCANCELLATION`",
    "3-2": "A non-expired cancelled subscription has been re-enabled.",
    "3-3": "✅",
    "3-4": "✅",
    "3-5": "✅",
    "3-6": "❌",
    "3-7": "❌",
    "4-0": "Non Subscription Purchase",
    "4-1": "`NON_RENEWING_PURCHASE`",
    "4-2": "A customer has made a purchase that will not auto-renew.",
    "4-3": "✅",
    "4-4": "✅",
    "4-5": "✅",
    "4-6": "✅",
    "4-7": "✅",
    "5-0": "Subscription Paused",
    "5-1": "`SUBSCRIPTION_PAUSED`",
    "5-2": "A subscription has been paused.",
    "5-3": "❌",
    "5-4": "✅",
    "5-5": "❌",
    "5-6": "❌",
    "5-7": "❌",
    "6-0": "Expiration",
    "6-1": "`EXPIRATION`",
    "6-2": "A subscription has expired and access should be removed.  \n  \nIf you have [Platform Server Notifications](https://www.revenuecat.com/docs/server-notifications) configured, this event will occur as soon as we are notified (within seconds to minutes) of the expiration.  \n  \nIf you do not have notifications configured, delays may be approximately 1 hour.",
    "6-3": "✅",
    "6-4": "✅",
    "6-5": "✅",
    "6-6": "✅",
    "6-7": "✅",
    "7-0": "Billing Issue",
    "7-1": "`BILLING_ISSUE`",
    "7-2": "There has been a problem trying to charge the subscriber. This does not mean the subscription has expired.  \n  \nCan be safely ignored if listening to CANCELLATION event + cancel_reason=BILLING_ERROR.",
    "7-3": "✅",
    "7-4": "✅",
    "7-5": "✅",
    "7-6": "✅",
    "7-7": "❌",
    "8-0": "Product Change",
    "8-1": "`PRODUCT_CHANGE`",
    "8-2": "A subscriber has changed the product of their subscription.  \n  \nThis does not mean the new subscription is in effect immediately. See [Managing Subscriptions](doc:managing-subscriptions) for more details on updates, downgrades, and crossgrades.",
    "8-3": "✅",
    "8-4": "✅",
    "8-5": "❌",
    "8-6": "✅",
    "8-7": "❌",
    "9-0": "Transfer\t\t\t",
    "9-1": "`TRANSFER`",
    "9-2": "A transfer of transactions and entitlements was initiated between one App User ID(s) to another.",
    "9-3": "✅",
    "9-4": "✅",
    "9-5": "✅",
    "9-6": "✅",
    "9-7": "❌"
  },
  "cols": 8,
  "rows": 10,
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

# Setup

## 1. Set Superwall User Identity

In order to associate RevenueCat subscription data with Superwall paywall events, the RevenueCat app user ID must match the Superwall app user ID. You can read more about how Superwall handles user ID’s in their documentation [here](https://docs.superwall.me/docs/user-management). You can set up a custom app user ID in RevenueCat by following the instructions in our [Identifying Users](https://docs.revenuecat.com/docs/user-ids#provided-app-user-id) documentation.

## 2. Send RevenueCat events to Superwall

After you've set up the Purchases SDK and Superwall SDK to have the same user identity, you can "turn on" the integration from the RevenueCat dashboard. 

1. Navigate to your project in the RevenueCat dashboard and find the _Integrations_ card in the left menu. Select **+ New**

![](https://files.readme.io/db31ce4-app.revenuecat.com_projects_85ff18c7_collaborators_1.png)

2. Choose **Superwall** from the Integrations menu
3. Add your Superwall Token (Superwall settings > Integrations)

Remember to select _Add Integration_

![](https://files.readme.io/ed95ba8-app.revenuecat.com_projects_85ff18c7_integrations_intercom_5.png)

# Testing the Superwall integration

## Make a sandbox purchase with a new user

Simulate a new user installing your app, and go through your app flow to complete the sandbox purchase.

## Check that the Superwall event delivered successfully

While still on the Customer View, select the purchase event in the [Customer History](doc:customer-history) page and make sure that the Superwall integration event exists and was delivered successfully.

![](https://files.readme.io/1643a7c-Screenshot_at_Feb_07_16-35-24.png "Screenshot at Feb 07 16-35-24.png")

## Check Superwall dashboard for the delivered event

Navigate to your Superwall dashboard > Users and search for the created app user ID. You will see events RevenueCat has dispatched to the Superwall under 'Recent Events'.

![](https://files.readme.io/71fe3aa-Screenshot_at_Feb_07_16-36-50.png "Screenshot at Feb 07 16-36-50.png")

# Sample Events

Below are sample JSONs that are delivered to Superwall for each event type. 

```json Initial Purchase
{
    "event": {
        "event_timestamp_ms": 1641980452341,
        "product_id": "annual",
        "period_type": "NORMAL",
        "purchased_at_ms": 1641980447000,
        "expiration_at_ms": 1642585247000,
        "environment": "PRODUCTION",
        "entitlement_ids": [
            "premium"
        ],
        "presented_offering_id": null,
        "transaction_id": "123456789012345",
        "original_transaction_id": "123456789012345",
        "is_family_share": false,
        "country_code": "US",
        "app_user_id": "$RCAnonymousID:87c6049c58069238dce29853916d624c",
        "aliases": [
            "12abc345d67e890fgh12j3lm456n7890"
        ],
        "original_app_user_id": "$RCAnonymousID:87c6049c58069238dce29853916d624c",
        "currency": "USD",
        "price": 89.99,
        "price_in_purchased_currency": 89.99,
        "subscriber_attributes": {
            "$ip": {
                "value": "123.45.67.89",
                "updated_at_ms": 1641980373773
            },
            "$idfa": {
                "value": "00000000-0000-0000-0000-000000000000",
                "updated_at_ms": 1641980373773
            },
            "$idfv": {
                "value": "12345A6B-C789-0D1E-FG23-456H6I7J890K",
                "updated_at_ms": 1641980373773
            },
            "$appsflyerId": {
                "value": "1234567890123-1234567890123456789",
                "updated_at_ms": 1641980373775
            }
        },
        "store": "APP_STORE",
        "takehome_percentage": 0.7,
        "offer_code": null,
        "type": "INITIAL_PURCHASE",
        "id": "12345678-1234-1234-1234-123456789012",
        "app_id": "1234567890"
    },
    "api_version": "1.0"
}
```
```json Renewal
{
    "event": {
        "event_timestamp_ms": 1641990066553,
        "product_id": "weekly",
        "period_type": "NORMAL",
        "purchased_at_ms": 1642018648000,
        "expiration_at_ms": 1642623448000,
        "environment": "PRODUCTION",
        "entitlement_ids": [
            "premium"
        ],
        "presented_offering_id": null,
        "transaction_id": "123456789012345",
        "original_transaction_id": "123456789012345",
        "is_family_share": false,
        "country_code": "US",
        "app_user_id": "$RCAnonymousID:87c6049c58069238dce29853916d624c",
        "aliases": [
            "12abc345d67e890fgh12j3lm456n7890"
        ],
        "original_app_user_id": "$RCAnonymousID:87c6049c58069238dce29853916d624c",
        "currency": "USD",
        "is_trial_conversion": false,
        "price": 4.99,
        "price_in_purchased_currency": 4.99,
        "subscriber_attributes": {
            "$ip": {
                "value": "123.45.67.89",
                "updated_at_ms": 1635966996059
            },
            "$idfa": {
                "value": "00000000-0000-0000-0000-000000000000",
                "updated_at_ms": 1635966996058
            },
            "$idfv": {
                "value": "12345A6B-C789-0D1E-FG23-456H6I7J890K",
                "updated_at_ms": 1634600054627
            },
            "$email": {
                "value": "firstlast@gmail.com",
                "updated_at_ms": 1635967259599
            },
            "$appsflyerId": {
                "value": "1234567890123-1234567890123456789",
                "updated_at_ms": 1634600054630
            },
            "$displayName": {
                "value": "FirstLast",   
                "updated_at_ms": 1635967185821
            }
        },
        "store": "APP_STORE",
        "takehome_percentage": 0.7,
        "offer_code": null,
        "type": "RENEWAL",
        "id": "12345678-1234-1234-1234-123456789012",
        "app_id": "1234567890"
    },
    "api_version": "1.0"
}
```
```json Cancellation
{
    "event": {
        "event_timestamp_ms": 1641979460185,
        "product_id": "annual",
        "period_type": "NORMAL",
        "purchased_at_ms": 1641489607000,
        "expiration_at_ms": 1673025607000,
        "environment": "PRODUCTION",
        "entitlement_ids": [
            "premium"
        ],
        "presented_offering_id": null,
        "transaction_id": "123456789012345",
        "original_transaction_id": "123456789012345",
        "is_family_share": false,
        "country_code": "US",
        "app_user_id": "$RCAnonymousID:87c6049c58069238dce29853916d624c",
        "aliases": [
            "12abc345d67e890fgh12j3lm456n7890"
        ],
        "original_app_user_id": "$RCAnonymousID:87c6049c58069238dce29853916d624c",
        "cancel_reason": "UNSUBSCRIBE",
        "currency": "USD",
        "price": 0.0,
        "price_in_purchased_currency": 0.0,
        "subscriber_attributes": {
            "$ip": {
                "value": "123.45.67.89",
                "updated_at_ms": 1640922085884
            },
            "$idfa": {
                "value": "00000000-0000-0000-0000-000000000000",
                "updated_at_ms": 1640922085883
            },
            "$idfv": {
                "value": "12345A6B-C789-0D1E-FG23-456H6I7J890K",
                "updated_at_ms": 1640884773572
            },
            "$email": {
                "value": "firstlast@gmail.com",
                "updated_at_ms": 1640884952087
            },
            "$appsflyerId": {
                "value": "1234567890123-1234567890123456789",
                "updated_at_ms": 1640884773577
            },
            "$displayName": {
                "value": "FirstLast",   
                "updated_at_ms": 1640884932761
            }
        },
        "store": "APP_STORE",
        "takehome_percentage": 0.7,
        "offer_code": null,
        "type": "CANCELLATION",
        "id": "12345678-1234-1234-1234-123456789012",
        "app_id": "1234567890"
    },
    "api_version": "1.0"
}
```
```json Uncancellation
{
    "event": {
        "event_timestamp_ms": 1663976681591,
        "product_id": "annual",
        "period_type": "NORMAL",
        "purchased_at_ms": 1642861650000,
        "expiration_at_ms": 1674397650000,
        "environment": "PRODUCTION",
        "entitlement_ids": [
            "premium"
        ],
        "presented_offering_id": "standard",
        "transaction_id": "123456789012345",
        "original_transaction_id": "123456789012345",
        "is_family_share": false,
        "country_code": "US",
        "app_user_id": "$RCAnonymousID:87c6049c58069238dce29853916d624c",
        "aliases": [
            "12abc345d67e890fgh12j3lm456n7890"
        ],
        "original_app_user_id": "$RCAnonymousID:87c6049c58069238dce29853916d624c",
        "currency": "USD",
        "price": 0.0,
        "price_in_purchased_currency": 0.0,
        "subscriber_attributes": {
            "$ip": {
                "value": "123.45.67.89",
                "updated_at_ms": 1642861599292
            },
            "$idfa": {
                "value": "00000000-0000-0000-0000-000000000000",
                "updated_at_ms": 1642861599292
            },
            "$idfv": {
                "value": "12345A6B-C789-0D1E-FG23-456H6I7J890K",
                "updated_at_ms": 1642861529624
            },
            "$amplitudeDeviceId": {
                "value": "12345A6B-C789-0D1E-FG23-456H6I7J890K",
                "updated_at_ms": 1662591626817
            }
        },
        "store": "APP_STORE",
        "takehome_percentage": 0.7,
        "offer_code": null,
        "tax_percentage": 0.0,
        "commission_percentage": 0.3,
        "type": "UNCANCELLATION",
        "id": "12345678-1234-1234-1234-123456789012",
        "app_id": "1234567890"
    },
    "api_version": "1.0"
}
```
```json Non Subscription Purchase
{
    "event": {
        "event_timestamp_ms": 1642005085499,
        "product_id": "400_tokens",
        "period_type": "NORMAL",
        "purchased_at_ms": 1642005085444,
        "expiration_at_ms": 1644683485444,
        "environment": "PRODUCTION",
        "entitlement_ids": [
            "premium"
        ],
        "presented_offering_id": null,
        "transaction_id": "123456789012345",
        "original_transaction_id": "123456789012345",
        "is_family_share": null,
        "country_code": "US",
        "app_user_id": "$RCAnonymousID:87c6049c58069238dce29853916d624c",
        "aliases": [
            "12abc345d67e890fgh12j3lm456n7890"
        ],
        "original_app_user_id": "$RCAnonymousID:87c6049c58069238dce29853916d624c",
        "currency": "USD",
        "price": 3.99,
        "price_in_purchased_currency": 3.99,
        "subscriber_attributes": {
            "$ip": {
                "value": "123.45.67.89",
                "updated_at_ms": 1605515259156
            },
            "$idfa": {
                "value": "00000000-0000-0000-0000-000000000000",
                "updated_at_ms": 1605515259155
            },
            "$idfv": {
                "value": "12345A6B-C789-0D1E-FG23-456H6I7J890K",
                "updated_at_ms": 1605515259156
            },
            "$email": {
                "value": "firstlast@gmail.com",
                "updated_at_ms": 1608329355624
            },
            "$appsflyerId": {
                "value": "1234567890123-1234567890123456789",
                "updated_at_ms": 1578134994616
            },
            "$displayName": {
                "value": "FirstLast",   
                "updated_at_ms": 1608329355625
            }
        },
        "store": "APP_STORE",
        "takehome_percentage": 1.0,
        "offer_code": null,
        "type": "NON_RENEWING_PURCHASE",
        "id": "12345678-1234-1234-1234-123456789012",
    },
    "api_version": "1.0"
}
```
```json Subscription Paused
{
    "event": {
        "event_timestamp_ms": 1663972580977,
        "product_id": "monthly",
        "period_type": "NORMAL",
        "purchased_at_ms": 1663950641060,
        "expiration_at_ms": 1666549841060,
        "environment": "PRODUCTION",
        "entitlement_ids": null,
        "presented_offering_id": null,
        "transaction_id": "GPA.1234-5678-9012-34567",
        "original_transaction_id": "GPA.1234-5678-9012-34567",
        "is_family_share": false,
        "country_code": null,
        "app_user_id": "$RCAnonymousID:87c6049c58069238dce29853916d624c",
        "aliases": [
            "12abc345d67e890fgh12j3lm456n7890"
        ],
        "original_app_user_id": "$RCAnonymousID:87c6049c58069238dce29853916d624c",
        "auto_resume_at_ms": 1674491441060,
        "currency": "USD",
        "price": 0.0,
        "price_in_purchased_currency": 0.0,
        "subscriber_attributes": {},
        "store": "PLAY_STORE",
        "takehome_percentage": 0.85,
        "offer_code": null,
        "tax_percentage": 0.0,
        "commission_percentage": 0.15,
        "type": "SUBSCRIPTION_PAUSED",
        "id": "12345678-1234-1234-1234-123456789012",
        "app_id": "1234567890"
    },
    "api_version": "1.0"
}
```



```json Expiration
{
    "event": {
        "event_timestamp_ms": 1641979680052,
        "product_id": "annual",
        "period_type": "NORMAL",
        "purchased_at_ms": 1610443458000,
        "expiration_at_ms": 1641979458000,
        "environment": "PRODUCTION",
        "entitlement_ids": [
            "premium"
        ],
        "presented_offering_id": null,
        "transaction_id": "123456789012345",
        "original_transaction_id": "123456789012345",
        "is_family_share": false,
        "country_code": "AU",
        "app_user_id": "$RCAnonymousID:87c6049c58069238dce29853916d624c",
        "aliases": [
            "12abc345d67e890fgh12j3lm456n7890"
        ],
        "original_app_user_id": "$RCAnonymousID:87c6049c58069238dce29853916d624c",
        "expiration_reason": "UNSUBSCRIBE",
        "currency": "AUD",
        "price": 0.0,
        "price_in_purchased_currency": 0.0,
        "subscriber_attributes": {
            "$ip": {
                "value": "123.45.67.89",
                "updated_at_ms": 1625546407475
            },
            "$idfa": {
                "value": "00000000-0000-0000-0000-000000000000",
                "updated_at_ms": 1625546407473
            },
            "$idfv": {
                "value": "12345A6B-C789-0D1E-FG23-456H6I7J890K",
                "updated_at_ms": 1625466331505
            },
            "$email": {
                "value": "firstlast@gmail.com",
                "updated_at_ms": 1625466352128
            },
            "$appsflyerId": {
                "value": "1234567890123-1234567890123456789",
                "updated_at_ms": 1625466331510
            },
            "$displayName": {
                "value": "FirstLast",   
                "updated_at_ms": 1625466352133
            }
        },
        "store": "APP_STORE",
        "takehome_percentage": 0.85,
        "offer_code": null,
        "type": "EXPIRATION",
        "id": "12345678-1234-1234-1234-123456789012",
        "app_id": "1234567890"
    },
    "api_version": "1.0"
}
```
```json Billing Issue
{
    "event": {
        "event_timestamp_ms": 1641989467593,
        "product_id": "monthly",
        "period_type": "NORMAL",
        "purchased_at_ms": 1641985292000,
        "expiration_at_ms": 1673521292000,
        "environment": "PRODUCTION",
        "entitlement_ids": [
            "premium"
        ],
        "presented_offering_id": null,
        "transaction_id": "123456789012345",
        "original_transaction_id": "123456789012345",
        "is_family_share": false,
        "country_code": "ZA",
        "app_user_id": "$RCAnonymousID:87c6049c58069238dce29853916d624c",
        "aliases": [
            "12abc345d67e890fgh12j3lm456n7890"
        ],
        "original_app_user_id": "$RCAnonymousID:87c6049c58069238dce29853916d624c",
        "grace_period_expiration_at_ms": null,
        "currency": "USD",
        "price": 0.0,
        "price_in_purchased_currency": 0.0,
        "subscriber_attributes": {
            "$ip": {
                "value": "123.45.67.89",
                "updated_at_ms": 1641380990137
            },
            "$idfa": {
                "value": "00000000-0000-0000-0000-000000000000",
                "updated_at_ms": 1641380990136
            },
            "$idfv": {
                "value": "12345A6B-C789-0D1E-FG23-456H6I7J890K",
                "updated_at_ms": 1641380990136
            },
            "$email": {
                "value": "firstlast@gmail.com",
                "updated_at_ms": 1641380601324
            },
            "$appsflyerId": {
                "value": "1234567890123-1234567890123456789",
                "updated_at_ms": 1641380990138
            },
            "$displayName": {
                "value": "FirstLast",   
                "updated_at_ms": 1641449423479
            }
        },
        "store": "APP_STORE",
        "takehome_percentage": 1.0,
        "offer_code": null,
        "type": "BILLING_ISSUE",
        "id": "12345678-1234-1234-1234-123456789012",
        "app_id": "1234567890"
    },
    "api_version": "1.0"
}
```
```json Product Change
{
    "event": {
        "event_timestamp_ms": 1642108701236,
        "product_id": "monthly",
        "period_type": "NORMAL",
        "purchased_at_ms": 1639087828000,
        "expiration_at_ms": 1641766228000,
        "environment": "PRODUCTION",
        "entitlement_ids": [
            "premium"
        ],
        "presented_offering_id": null,
        "transaction_id": "123456789012345",
        "original_transaction_id": "123456789012345",
        "is_family_share": false,
        "country_code": "CA",
        "app_user_id": "$RCAnonymousID:87c6049c58069238dce29853916d624c",
        "aliases": [
            "12abc345d67e890fgh12j3lm456n7890"
        ],
        "original_app_user_id": "$RCAnonymousID:87c6049c58069238dce29853916d624c",
        "new_product_id": "annual",
        "currency": "CAD",
        "price": 0.0,
        "price_in_purchased_currency": 0.0,
        "subscriber_attributes": {
            "$ip": {
                "value": "123.45.67.89",
                "updated_at_ms": 1607426876996
            },
            "$idfa": {
                "value": "00000000-0000-0000-0000-000000000000",
                "updated_at_ms": 1607426876996
            },
            "$idfv": {
                "value": "12345A6B-C789-0D1E-FG23-456H6I7J890K",
                "updated_at_ms": 1607426876996
            },
            "$email": {
                "value": "firstlast@gmail.com",
                "updated_at_ms": 1608040666659
            },
            "$appsflyerId": {
                "value": "1234567890123-1234567890123456789",
                "updated_at_ms": 1582818527279
            },
            "$displayName": {
                "value": "FirstLast",   
                "updated_at_ms": 1608040666660
            }
        },
        "store": "APP_STORE",
        "takehome_percentage": 0.7,
        "offer_code": null,
        "type": "PRODUCT_CHANGE",
        "id": "12345678-1234-1234-1234-123456789012",
        "app_id": "1234567890"
    },
    "api_version": "1.0"
}
```



> 👍 You've done it!
> 
> You should start seeing subscription data from RevenueCat appear in Superwall.
