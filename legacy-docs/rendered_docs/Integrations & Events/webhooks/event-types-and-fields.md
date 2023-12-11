---
title: Event Types and Fields
slug: event-types-and-fields
excerpt: The types of webhooks sent from RevenueCat
hidden: false
categorySlug: integrations
order: 0
parentDoc: 649983b4c31b2e000a3c185e
---
RevenueCat sends webhooks in response to events that occur in your app. Here these event types are defined, as well as the data contained in each webhook.

# Event Types

[block:parameters]
{
  "data": {
    "h-0": "Webhook Event Type",
    "h-1": "Description",
    "h-2": "App Store",
    "h-3": "Play Store",
    "h-4": "Amazon",
    "h-5": "Stripe",
    "h-6": "Promo",
    "0-0": "`TEST`",
    "0-1": "Test event issued through the RevenueCat dashboard.",
    "0-2": "✅",
    "0-3": "✅",
    "0-4": "❌",
    "0-5": "❌",
    "0-6": "❌",
    "1-0": "`INITIAL_PURCHASE`",
    "1-1": "A new subscription has been purchased.",
    "1-2": "✅",
    "1-3": "✅",
    "1-4": "✅",
    "1-5": "✅",
    "1-6": "❌",
    "2-0": "`RENEWAL`",
    "2-1": "An existing subscription has been renewed or a lapsed user has resubscribed.",
    "2-2": "✅",
    "2-3": "✅",
    "2-4": "✅",
    "2-5": "✅",
    "2-6": "❌",
    "3-0": "`CANCELLATION`",
    "3-1": "A subscription or non-renewing purchase has been cancelled or refunded. Note that in the event of refunds, a subscription's auto-renewal setting may still be active. See [cancellation reasons](https://www.revenuecat.com/docs/event-types-and-fields#cancellation-and-expiration-reasons) for more details.",
    "3-2": "✅",
    "3-3": "✅",
    "3-4": "✅",
    "3-5": "✅",
    "3-6": "✅",
    "4-0": "`UNCANCELLATION`",
    "4-1": "A non-expired cancelled subscription has been re-enabled.",
    "4-2": "✅",
    "4-3": "✅",
    "4-4": "✅",
    "4-5": "❌",
    "4-6": "❌",
    "5-0": "`NON_RENEWING_PURCHASE`",
    "5-1": "A customer has made a purchase that will not auto-renew.",
    "5-2": "✅",
    "5-3": "✅",
    "5-4": "✅",
    "5-5": "✅",
    "5-6": "✅",
    "6-0": "`SUBSCRIPTION_PAUSED`",
    "6-1": "The subscription has set to be paused at the end of the period.  \n  \nPlease note: You should not revoke access when receiving a `SUBSCRIPTION_PAUSED` event, but only when receiving an `EXPIRATION` event (which will have the [expiration reason](https://www.revenuecat.com/docs/event-types-and-fields#cancellation-and-expiration-reasons) `SUBSCRIPTION_PAUSED`)",
    "6-2": "❌",
    "6-3": "✅",
    "6-4": "❌",
    "6-5": "❌",
    "6-6": "❌",
    "7-0": "`EXPIRATION`",
    "7-1": "A subscription has expired and access should be removed.  \n  \nIf you have [Platform Server Notifications](doc:server-notifications) configured, this event will occur as soon as we are notified (within seconds to minutes) of the expiration.  \n  \nIf you do not have notifications configured, delays may be approximately 1 hour.",
    "7-2": "✅",
    "7-3": "✅",
    "7-4": "✅",
    "7-5": "✅",
    "7-6": "✅",
    "8-0": "`BILLING_ISSUE`",
    "8-1": "There has been a problem trying to charge the subscriber. This does not mean the subscription has expired.  \n  \nCan be safely ignored if listening to `CANCELLATION` event + `cancel_reason=BILLING_ERROR`.",
    "8-2": "✅",
    "8-3": "✅",
    "8-4": "✅",
    "8-5": "✅",
    "8-6": "❌",
    "9-0": "`PRODUCT_CHANGE`",
    "9-1": "A **subscriber** has changed the product of their subscription.  \n  \nThis does not mean the new subscription is in effect immediately. See [Managing Subscriptions](doc:managing-subscriptions) for more details on updates, downgrades, and crossgrades.",
    "9-2": "✅",
    "9-3": "✅",
    "9-4": "❌",
    "9-5": "✅",
    "9-6": "❌",
    "10-0": "`TRANSFER`",
    "10-1": "A transfer of transactions and entitlements was initiated between one App User ID(s) to another.  \n  \nPlease note: The webhook will only be sent for the destination user despite us displaying this event in both customer histories because the event body is exactly the same for both users.",
    "10-2": "✅",
    "10-3": "✅",
    "10-4": "✅",
    "10-5": "✅",
    "10-6": "❌",
    "11-0": "`SUBSCRIPTION_EXTENDED`",
    "11-1": "An existing subscription has been extended (the expiration date of the current subscription period has been pushed back to the future).\n\nThis event is fired when a Apple App Store or Google Play Store subscription is extended through the store's API. On the Google Play Store, this event can also sometimes fire when Google defers charging for a renewal by less than 24 hours (for unknown reasons). In this case, you will receive a `SUBSCRIPTION_EXTENDED` webhook, followed by either a `RENEWAL` or `BILLING_ISSUE` webhook within the next 24 hours.",
    "11-2": "✅",
    "11-3": "✅",
    "11-4": "❌",
    "11-5": "✅",
    "11-6": "❌",
    "12-0": "`SUBSCRIBER_ALIAS`",
    "12-1": "**Deprecated**. A new `app_user_id` has been registered for an existing subscriber.",
    "12-2": "",
    "12-3": "",
    "12-4": "",
    "12-5": "",
    "12-6": ""
  },
  "cols": 7,
  "rows": 12,
  "align": [
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

# Events Format

Webhook events are serialized in JSON. The body of a `POST` request to your server will contain the serialized event, as well as the API version.

```json 
{
  "api_version": "1.0",
  "event": {
    "aliases": [
      "yourCustomerAliasedID",
      "yourCustomerAliasedID"
    ],
    "app_id": "yourAppID",
    "app_user_id": "yourCustomerAppUserID",
    "commission_percentage": 0.3,
    "country_code": "US",
    "currency": "USD",
    "entitlement_id": "pro_cat",
    "entitlement_ids": [
      "pro_cat"
    ],
    "environment": "PRODUCTION",
    "event_timestamp_ms": 1591121855319,
    "expiration_at_ms": 1591726653000,
    "id": "UniqueIdentifierOfEvent",
    "is_family_share": false,
    "offer_code": "free_month",
    "original_app_user_id": "OriginalAppUserID",
    "original_transaction_id": "1530648507000",
    "period_type": "NORMAL",
    "presented_offering_id": "OfferingID",
    "price": 2.49,
    "price_in_purchased_currency": 2.49,
    "product_id": "onemonth_no_trial",
    "purchased_at_ms": 1591121853000,
    "store": "APP_STORE",
    "subscriber_attributes": {
      "$Favorite Cat": {
        "updated_at_ms": 1581121853000,
        "value": "Garfield"
      }
    },
    "takehome_percentage": 0.7,
    "tax_percentage": 0.3,
    "transaction_id": "170000869511114",
    "type": "INITIAL_PURCHASE"
  }
}
```

# Common Fields

[block:parameters]
{
  "data": {
    "h-0": "Field",
    "h-1": "Type",
    "h-2": "Description",
    "h-3": "Possible Values",
    "0-0": "`type`",
    "0-1": "String",
    "0-2": "[Type of the event](doc:webhooks#section-event-types).",
    "0-3": "`TEST`  \n  \n`INITIAL_PURCHASE`  \n  \n`NON_RENEWING_PURCHASE`  \n  \n `RENEWAL`  \n  \n `PRODUCT_CHANGE`  \n  \n `CANCELLATION`  \n  \n `BILLING_ISSUE`  \n  \n`SUBSCRIBER_ALIAS`  \n  \n`SUBSCRIPTION_PAUSED`  \n  \n`UNCANCELLATION`  \n  \n`TRANSFER`  \n  \n`SUBSCRIPTION_EXTENDED`",
    "1-0": "`id`",
    "1-1": "String",
    "1-2": "Unique identifier of the event.",
    "1-3": "",
    "2-0": "`app_id`",
    "2-1": "String",
    "2-2": "Unique identifier of the app the event is associated with. Corresponds to an app within a project.  \n  \nThis value will soon be visible in the app's configuration page in project settings.",
    "2-3": "",
    "3-0": "`event_timestamp_ms`",
    "3-1": "Integer",
    "3-2": "The time that the event was generated. Does not necessarily coincide with when the action that triggered the event occurred (purchased, cancelled, etc).",
    "3-3": "",
    "4-0": "`app_user_id`",
    "4-1": "String",
    "4-2": "Last seen app user id of the subscriber.",
    "4-3": "",
    "5-0": "`original_app_user_id`",
    "5-1": "String",
    "5-2": "The first app user id used by the subscriber.",
    "5-3": "",
    "6-0": "`aliases`",
    "6-1": "Arrayk:parame",
    "6-2": "All app user ids ever used by the subscriber.",
    "6-3": ""
  },
  "cols": 4,
  "rows": 7,
  "align": [
    "left",
    "left",
    "left",
    "left"
  ]
}
[/block]

> 📘
>
> When looking up users from the webhook in your systems, make sure to search both the `original_app_user_id` and the `aliases` array.

> 📘
>
> If we have to retry a webhook for any reason, the retry will have the same `id` and `event_timestamp_ms` of the first attempt.

# Subscription Lifecycle Events Fields

[block:parameters]
{
  "data": {
    "h-0": "Field",
    "h-1": "Type",
    "h-2": "Description",
    "h-3": "Possible Values",
    "0-0": "`product_id`",
    "0-1": "String",
    "0-2": "Product identifier of the subscription. Please note: For Google Play products set up in RevenueCat after February 2023, this identifier has the format `<subscription_id>:<base_plan_id>`",
    "0-3": "",
    "1-0": "`entitlement_ids`",
    "1-1": "Arrayk:parame",
    "1-2": "Entitlement identifiers of the subscription.",
    "1-3": "It can be `NULL` if  the `product_id` is not mapped to any entitlements.",
    "2-0": "`entitlement_id`",
    "2-1": "String",
    "2-2": "Deprecated. See `entitlement_ids`.",
    "2-3": "Deprecated. See `entitlement_ids`.",
    "3-0": "`period_type`",
    "3-1": "String",
    "3-2": "Period type of the transaction.",
    "3-3": "`TRIAL`, for free trials.  \n  \n `INTRO`, for introductory pricing.  \n  \n `NORMAL`, standard subscription.  \n  \n`PROMOTIONAL`, for subscriptions granted through RevenueCat.  \n  \n`PREPAID`,for Play Store prepaid transactions .",
    "4-0": "`purchased_at_ms`",
    "4-1": "Integer",
    "4-2": "Time when the transaction was purchased. Measured in milliseconds since Unix epoch",
    "4-3": "",
    "5-0": "`grace_period_expiration_at_ms`",
    "5-1": "Integer",
    "5-2": "**Only available for** `BILLING_ISSUE` **events.**  \n  \nThe time that the grace period for the subscription would expire. Measured in milliseconds since Unix epoch. Use this field to determine if the user is currently in a grace period.",
    "5-3": "It can be `NULL` if subscription does not have a grace period.",
    "6-0": "`expiration_at_ms`",
    "6-1": "Integer",
    "6-2": "Expiration of the transaction. Measured in milliseconds since Unix epoch. Use this field to determine if a subscription is still active.",
    "6-3": "It can be `NULL` for non-subscription purchases.",
    "7-0": "`auto_resume_at_ms`",
    "7-1": "Integer",
    "7-2": "The time when an Android subscription would resume after being paused. Measured in milliseconds since Unix epoch.  \n  \n** Only available for Play Store subscriptions and** `SUBSCRIPTION_PAUSED` **events.**",
    "7-3": "",
    "8-0": "`store`",
    "8-1": "String",
    "8-2": "Store the subscription belongs to.",
    "8-3": "`AMAZON`  \n  \n`APP_STORE`  \n  \n`MAC_APP_STORE`  \n  \n`PLAY_STORE`  \n  \n`PROMOTIONAL`  \n  \n`STRIPE`",
    "9-0": "`environment`",
    "9-1": "String",
    "9-2": "Store environment.",
    "9-3": "`SANDBOX`  \n  \n`PRODUCTION`",
    "10-0": "`is_trial_conversion`",
    "10-1": "Boolean",
    "10-2": "**Only available for** `RENEWAL` **events**.  \n  \nWhether the previous transaction was a free trial or not.",
    "10-3": "`true` or `false`",
    "11-0": "`cancel_reason`",
    "11-1": "String",
    "11-2": "**Only available for** `CANCELLATION` **events**.  \n  \nSee [Cancellation and Expiration Reasons](https://docs.revenuecat.com/docs/webhooks#cancellation-and-expiration-reasons).",
    "11-3": "`UNSUBSCRIBE`  \n  \n `BILLING_ERROR`  \n  \n`DEVELOPER_INITIATED`  \n  \n`PRICE_INCREASE`  \n  \n`CUSTOMER_SUPPORT`  \n  \n`UNKNOWN`",
    "12-0": "`expiration_reason`",
    "12-1": "String",
    "12-2": "**Only available for** `EXPIRATION` **events**.  \n  \nSee [Cancellation and Expiration Reasons](https://docs.revenuecat.com/docs/webhooks#cancellation-and-expiration-reasons).",
    "12-3": "`UNSUBSCRIBE`  \n  \n `BILLING_ERROR`  \n  \n`DEVELOPER_INITIATED`  \n  \n`PRICE_INCREASE`  \n  \n`CUSTOMER_SUPPORT`  \n  \n`UNKNOWN`",
    "13-0": "`new_product_id`",
    "13-1": "String",
    "13-2": "Product identifier of the new product the subscriber has switched to. **Only available for App Store subscriptions and** `PRODUCT_CHANGE` **events**.",
    "13-3": "",
    "14-0": "`presented_offering_id`",
    "14-1": "String",
    "14-2": "**Not available for apps using legacy entitlements.**  \n  \nThe identifier for the offering that was presented to the user during their initial purchase.",
    "14-3": "Can be `NULL` if the purchase was made using purchaseProduct instead of purchasePackage or if the purchase was made outside of your app or before you integrated RevenueCat.",
    "15-0": "`price`",
    "15-1": "Double",
    "15-2": "The USD price of the transaction.",
    "15-3": "Can be `NULL` if the price is unknown, and `0` for free trials.  \n  \nCan be negative for refunds.",
    "16-0": "`currency`",
    "16-1": "String",
    "16-2": "The ISO 4217 currency code that the product was purchased in.",
    "16-3": "`USD`, `CAD`, etc.  \n  \nCan be `NULL` if the currency is unknown.",
    "17-0": "`price_in_purchased_currency`",
    "17-1": "Double",
    "17-2": "The price of the transaction in the currency the product was purchased in.",
    "17-3": "Can be `NULL` if the price is unknown, and `0` for free trials.  \n  \nCan be negative for refunds.",
    "18-0": "`tax_percentage`",
    "18-1": "Double",
    "18-2": "The estimated percentage of the transaction price that was deducted for taxes (varies by country and store).",
    "18-3": "Can be `NULL` if the tax percentage is unknown.",
    "19-0": "`commission_percentage`",
    "19-1": "Double",
    "19-2": "The estimated percentage of the transaction price that was deducted as a store commission / processing fee.",
    "19-3": "Can be `NULL` if the commission percentage is unknown.",
    "20-0": "`takehome_percentage`",
    "20-1": "Double",
    "20-2": "DEPRECATED: The estimated percentage of the transaction price that will be paid out to developers after commissions, but before VAT and DST taxes are taken into account.  \n  \nWe recommend using tax_percentage and commission_percentage to calculate proceeds instead. [Learn more here](https://docs.revenuecat.com/docs/taxes-and-commissions).",
    "20-3": "",
    "21-0": "`subscriber_attributes`",
    "21-1": "Map of attribute names to attribute objects.  \n  \nFor more details see the [subscriber attributes guide](https://docs.revenuecat.com/docs/subscriber-attributes).",
    "21-2": "",
    "21-3": "",
    "22-0": "`transaction_id`",
    "22-1": "String",
    "22-2": "Transaction identifier from Apple/Amazon/Google/Stripe.",
    "22-3": "",
    "23-0": "`original_transaction_id`",
    "23-1": "String",
    "23-2": "`transaction_id` of the original transaction in the subscription from Apple/Amazon/Google/Stripe.",
    "23-3": "",
    "24-0": "`is_family_share`",
    "24-1": "Boolean",
    "24-2": "Indicates if the user made this purchase or if it was shared to them via [Family Sharing](https://help.apple.com/app-store-connect/#/dev45b03fab9).",
    "24-3": "`true` or `false`  \n  \nAlways false for non-Apple purchases.",
    "25-0": "`transferred_from`",
    "25-1": "String[]",
    "25-2": "**This fields is only available when `type` is set to `TRANSFER`.**  \n  \nApp User ID(s) that transactions and entitlements are being taken from, and granted to `transferred_to`.",
    "25-3": "",
    "26-0": "`transferred_to`",
    "26-1": "String[]",
    "26-2": "**This field is only available when `type` is set to `TRANSFER`.**  \n  \nApp User ID(s) that are receiving the transactions and entitlements taken from `transferred_from`.",
    "26-3": "",
    "27-0": "`country_code`",
    "27-1": "String",
    "27-2": "The ISO 3166 country code that the product was purchased in.  \n  \nThe two-letter country code (e.g., US, GB, CA) of the app user's location (this country code is derived from the last seen request from the SDK for the subscriber.)",
    "27-3": "`US`, `CA`, etc.",
    "28-0": "`offer_code`",
    "28-1": "String",
    "28-2": "**This field is not available when `type` is set to `SUBSCRIBER_ALIAS` or `TRANSFER`.**  \n  \nThe offer code that the customer used to redeem the transaction.  \n  \nAvailable for App Store and Play Store. For App Store this property corresponds to the [`offer_code_ref_name`](https://developer.apple.com/documentation/appstorereceipts/offer_code_ref_name). For Play Store this corresponds to the [`promotionCode`](https://developers.google.com/android-publisher/api-ref/rest/v3/purchases.subscriptions).",
    "28-3": "Can be null if no offer code was used for this product."
  },
  "cols": 4,
  "rows": 29,
  "align": [
    "left",
    "left",
    "left",
    "left"
  ]
}
[/block]

> 📘
>
> To get the RevenueCat event `id` from a Subscription Lifecycle webhook, simply make an API call to our GET `/subscribers`endpoint with the `app_user_id` after receiving the webhook and look for the latest purchase in the [subscription](https://www.revenuecat.com/reference/subscribers#the-subscription-object)/[non-subscription](https://www.revenuecat.com/reference/subscribers#the-non-subscription-object) object.

> 📘 Determine trial and subscription duration
>
> To get a trial or subscription's duration from a webhook, you can subtract purchased_at_ms from expiration_at_ms and you will get the duration of the trial in milliseconds.

# Cancellation and Expiration Reasons

[block:parameters]
{
  "data": {
    "h-0": "Reason",
    "h-1": "Description",
    "h-2": "App Store",
    "h-3": "Play Store",
    "h-4": "Amazon",
    "h-5": "Web",
    "h-6": "Promo",
    "0-0": "`UNSUBSCRIBE`",
    "0-1": "Subscriber cancelled voluntarily. **This event fires when a user unsubscribes, not when the subscription expires.**",
    "0-2": "✅",
    "0-3": "✅",
    "0-4": "✅",
    "0-5": "✅",
    "0-6": "❌",
    "1-0": "`BILLING_ERROR`",
    "1-1": "Apple, Amazon, or Google could not charge the subscriber using their payment method.  \n  \nThe `CANCELLATION` event with cancellation reason `BILLING_ERROR` is fired as soon as the billing issue has been detected. The `EXPIRATION` event with expiration reason `BILLING_ERROR` is fired if the grace period (if set up) has ended without recovering the payment, and the customer should lose access to the subscription.",
    "1-2": "✅",
    "1-3": "✅",
    "1-4": "✅",
    "1-5": "❌",
    "1-6": "❌",
    "2-0": "`DEVELOPER_INITIATED`",
    "2-1": "Developer cancelled the subscription.",
    "2-2": "✅",
    "2-3": "✅",
    "2-4": "❌",
    "2-5": "❌",
    "2-6": "✅",
    "3-0": "`PRICE_INCREASE`",
    "3-1": "Subscriber did not agree to a price increase.",
    "3-2": "✅",
    "3-3": "❌",
    "3-4": "❌",
    "3-5": "❌",
    "3-6": "❌",
    "4-0": "`CUSTOMER_SUPPORT`",
    "4-1": "Customer received a refund from Apple support, a Play Store subscription was refunded through RevenueCat, an Amazon subscription was refunded through Amazon support, or a web subscription was refunded. Note that this does not mean that a subscription's autorenewal preference has been deactivated since refunds can be given without cancelling a subscription. You should check the current subscription status to check if the subscription is still active.",
    "4-2": "✅",
    "4-3": "✅",
    "4-4": "✅",
    "4-5": "✅",
    "4-6": "❌",
    "5-0": "`UNKNOWN`",
    "5-1": "Apple did not provide the reason of the cancellation.",
    "5-2": "✅",
    "5-3": "❌",
    "5-4": "❌",
    "5-5": "❌",
    "5-6": "❌",
    "6-0": "`SUBSCRIPTION_PAUSED`",
    "6-1": "The subscription expired because it was paused (only `EXPIRATION` event)",
    "6-2": "❌",
    "6-3": "✅",
    "6-4": "❌",
    "6-5": "❌",
    "6-6": "❌"
  },
  "cols": 7,
  "rows": 7,
  "align": [
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
