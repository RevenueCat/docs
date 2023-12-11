---
title: Get or Create Subscriber
slug: subscribers
excerpt: Gets the latest subscriber info or creates one if it doesn't exist.
hidden: false
categorySlug: revenuecat-api-v1
order: 0
parentDoc: 649983b4c31b2e000a3c1937
---
> 📘 Get OR create a subscriber
> 
> If the provided `app_user_id` doesn't exists, **a new subscriber will be created with the App User Id**.

## Response

If the provided `app_user_id` exists, the response will contain the latest purchase information for that user. 

| Attribute         | Description                                                  |
| :---------------- | :----------------------------------------------------------- |
| `request_date`    | The ISO 8601 datetime of the request.                        |
| `request_date_ms` | The Unix timestamp of the request.                           |
| `subscriber`      | A [Subscriber object](ref:subscribers#the-subscriber-object) |

## The Subscriber object:

[block:parameters]
{
  "data": {
    "h-0": "Attribute",
    "h-1": "Description",
    "0-0": "`original_app_user_id`",
    "0-1": "The first app user ID that was registered for this user.",
    "1-0": "`original_application_version`",
    "1-1": "**Only available on iOS**. This will be `null` until an iOS receipt is sent for the user. After a receipt has been sent, it will indicate the first App Store version of your app that user installed.",
    "2-0": "`original_purchase_date`",
    "2-1": "**Only available on iOS**. The date that the app was first purchased/downloaded by the user. Will be `null` if no receipt is recorded for the user. Useful for [Migrating Subscriptions](doc:migrating-existing-subscriptions).",
    "3-0": "`management_url`",
    "3-1": "URL to manage the active subscription of the user. If the user has an active iOS subscription, this will point to the App Store, if the user has an active Play Store subscription it will point there.  \n  \nIf there are no active subscriptions it will be null.  \n  \nIf the user has multiple active subscriptions for different platforms, this will take the value of the OS in the `X-Platform` header into consideration:  \n- If the request was made on an OS for which there are active subscriptions, this will return the URL for the store that matches the header.  \n- If the request was made on a different OS or the OS was not included in the X-Platform header, this will return the URL for the store of the subscription with the farthest future expiration date.",
    "4-0": "`first_seen`",
    "4-1": "The ISO 8601 datetime string corresponding to  when this user was first seen in RevenueCat .",
    "5-0": "`last_seen`",
    "5-1": "The ISO 8601 datetime string corresponding to when this user was last seen in RevenueCat.",
    "6-0": "`entitlements`",
    "6-1": "A mapping of [Entitlement objects](ref:subscribers#the-entitlement-object) keyed by entitlement ID.",
    "7-0": "`subscriptions`",
    "7-1": "A mapping of [Subscription objects](ref:subscribers#the-subscription-object)  keyed by product ID.",
    "8-0": "`non_subscriptions`",
    "8-1": "A mapping of [Non-Subscription object](ref:subscribers#the-non-subscription-object) arrays keyed by product ID. [Non-Subscription Purchases](doc:non-subscriptions) include consumables, non-consumables, and non-renewing subscriptions.",
    "9-0": "`other_purchases`",
    "9-1": "Deprecated. See `non_subscriptions`",
    "10-0": "`subscriber_attributes`",
    "10-1": "A dictionary of subscriber attribute keys to [Subscriber Attribute objects](ref:subscribers#the-subscriber-attribute-object). **Only included in requests made with secret keys.**  \n  \nFor more details on subscriber attributes, see our [Subscriber Attributes](doc:subscriber-attributes) guide."
  },
  "cols": 2,
  "rows": 11,
  "align": [
    "left",
    "left"
  ]
}
[/block]

## The Entitlement object:

| Attribute                   | Description                                                                                                                                                |
| :-------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `expires_date`              | The ISO 8601 datetime this entitlement is set to expire (may be in the past).                                                                              |
| `grace_period_expires_date` | The ISO 8601 datetime when the grace period for the subscription would expire (may be in the past). Will be null if user has never been in a grace period. |
| `purchase_date`             | The ISO 8601 datetime of the latest purchase or renewal.                                                                                                   |
| `product_identifier`        | The product identifier that unlocked this entitlement.                                                                                                     |

## The Subscription object:

[block:parameters]
{
  "data": {
    "h-0": "Attribute",
    "h-1": "Description",
    "0-0": "`expires_date`",
    "0-1": "The ISO 8601 datetime of the latest known expiration date.",
    "1-0": "`purchase_date`",
    "1-1": "The ISO 8601 datetime of the latest purchase or renewal.",
    "2-0": "`original_purchase_date`",
    "2-1": "The ISO 8601 datetime of the first recorded purchase of this product. This property does not update with renewals or product changes within a subscription group.",
    "3-0": "`ownership_type`",
    "3-1": "Possible values:  \n- `PURCHASED`: The user purchased the product.  \n- `FAMILY_SHARED`: The user has access to the product via their family.",
    "4-0": "`period_type`",
    "4-1": "Possible values for `period_type`:  \n- `normal`: The product is in it's normal period (default)  \n- `trial`: The product is in a free trial period  \n- `intro`: The product is in an introductory pricing period",
    "5-0": "`store`",
    "5-1": "Possible values for `store`:  \n- `app_store`: The product was purchased through Apple App Store.  \n- `mac_app_store`: The product was purchased through the Mac App Store.  \n- `play_store`: The product was purchased through the Google Play Store.  \n- `amazon`: The product was purchased through the Amazon Appstore.  \n- `stripe`: The product was purchased through Stripe.  \n- `promotional`: The product was [granted via RevenueCat](doc:customers#section-granting-promotional-subscriptions).",
    "6-0": "`is_sandbox`",
    "6-1": "Boolean indicating whether the subscription was purchased in sandbox or production environment.",
    "7-0": "`unsubscribe_detected_at`",
    "7-1": "The ISO 8601 datetime that an unsubscribe was detected. Will be null if previously unsubscribed user has resubscribed. Note the subscription may still be active, check the `expires_date` attribute.",
    "8-0": "`billing_issues_detected_at`",
    "8-1": "The ISO 8601 datetime that billing issues were detected. Will be null if previous billing issues were resolved. Note the subscription may still be active, check the `expires_date` attribute.",
    "9-0": "`grace_period_expires_date`",
    "9-1": "The ISO 8601 datetime when the grace period for the subscription would expire (may be in the past). Will be null if user has never been in a grace period.",
    "10-0": "`refunded_at`",
    "10-1": "The ISO 8601 datetime when the subscription was refunded.",
    "11-0": "`auto_resume_date`",
    "11-1": "The ISO 8601 datetime when the subscription will resume after being paused."
  },
  "cols": 2,
  "rows": 12,
  "align": [
    "left",
    "left"
  ]
}
[/block]

## The Non-Subscription object:

[block:parameters]
{
  "data": {
    "h-0": "Attribute",
    "h-1": "Description",
    "0-0": "`id`",
    "0-1": "A unique identifier for the transaction. You can use this to ensure you track consumption of all consumable products.",
    "1-0": "`purchase_date`",
    "1-1": "The ISO 8601 datetime that the purchase happened.",
    "2-0": "`store`",
    "2-1": "Possible values for `store`:  \n- `app_store`: The product was purchased through Apple App Store.  \n- `mac_app_store`: The product was purchased through the Mac App Store.  \n- `play_store`: The product was purchased through the Google Play Store.  \n- `amazon`: The product was purchased through the Amazon Appstore.  \n- `stripe`: The product was purchased through Stripe.",
    "3-0": "`is_sandbox`",
    "3-1": "Boolean indicating whether the subscription was purchased in sandbox or production environment."
  },
  "cols": 2,
  "rows": 4,
  "align": [
    "left",
    "left"
  ]
}
[/block]

## The Subscriber Attribute object:

| Attribute       | Description                                                |    |
| :-------------- | :--------------------------------------------------------- | :- |
| `value`         | The string value of the attribute.                         |    |
| `updated_at_ms` | The Unix timestamp of when the attribute was last updated. |    |

> 🚧 Secret API Key Required For Subscriber Attributes
> 
> The Subscriber Attribute object will only be included in requests made with a [secret API key](doc:authentication).