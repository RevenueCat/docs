---
title: Data Export Version 3
slug: data-export-version-3
excerpt: Available from January 2023 to June 2023.
hidden: false
categorySlug: integrations
order: 2
parentDoc: 649983b4c31b2e000a3c1929
---
> 👍 
> 
> Scheduled data exports are available to all users signed up after September '23, the legacy Grow and Pro plans, and Enterprise plans. If you're on a legacy Free or Starter plan and want to access this integration, migrate to our new pricing via your [billing settings](https://app.revenuecat.com/settings/billing).

# Version 3 Change Log

### Expiration fields

- `grace_period_end_time` allows you to distinguish between a subscriber's expected renewal date (`end_time`), and their new expiration date if they've been granted a grace period
- `effective_end_time` represents the date a subscriber will lose access to their entitlement if a successful payment does not occur. It is the latest value of `end_time` and `grace_period_end_time`.
  - This field should be used to represent a subscriber's expiration date when modeling common RevenueCat measures like Active Subscriptions.

### Taxes, commission, and proceeds estimation

- `tax_percentage` represents the estimated portion of a transaction's total revenue that will be deducted from the purchasing store due to taxes. To learn more about RevenueCat's tax estimations, [click here](https://www.revenuecat.com/docs/taxes-and-commissions).
- `commission_percentage` represents the portion of a transaction's total revenue that will be deducted from the purchasing store due to their commissions and fees.
  - `commission_percentage` may differ from the rate expected from the store (e.g. 30%) in cases where taxes are deducted by the store before commission is applied.

### Ownership type

- `ownership_type` can be used to distinguish between transactions that originated from family sharing and those that did not. RevenueCat excludes family sharing transactions from our measures in Charts.

# Full export format

> 📘 
> 
> All dates and times are provided in UTC.

[block:parameters]
{
  "data": {
    "h-0": "Header",
    "h-1": "Can be null",
    "h-2": "Comments",
    "0-0": "`rc_original_app_user_id`",
    "0-1": "",
    "0-2": "Can be used as a unique user identifier to find all of a user's transactions.",
    "1-0": "`rc_last_seen_app_user_id_alias`",
    "1-1": "",
    "1-2": "Can be used together with `rc_original_app_user_id` to match transactions with user identifiers in your systems.",
    "2-0": "`country`",
    "2-1": "✅",
    "2-2": "Last seen country of the subscriber.",
    "3-0": "`product_identifier`",
    "3-1": "",
    "3-2": "The product identifier that was purchased.",
    "4-0": "`start_time`",
    "4-1": "",
    "4-2": "Purchase time of transaction.",
    "5-0": "`end_time`",
    "5-1": "✅",
    "5-2": "Expected expiration time of subscription. Null when `is_auto_renewable = false`  \nFor Google Play, `end_time` can be before `start_time` to indicate an invalid transaction (e.g. billing issue).",
    "6-0": "`grace_period_end_time`\\*",
    "6-1": "✅",
    "6-2": "Expiration time of a grace period (if applicable) for a subscription. Will remain set while a subscription is in its grace period, or if it exited its grace period without renewing. Null when a subscription is not in a grace period or expiration was not due to a grace period.",
    "7-0": "`effective_end_time`\\*",
    "7-1": "✅",
    "7-2": "Single reference point of a subscriber’s expiration and entitlement revocation; inclusive of each store’s logic for refunds, grace periods, cancellations (if one results in entitlement revocation), etc.",
    "8-0": "`store`",
    "8-1": "",
    "8-2": "The source of the transaction. Can be `app_store`, `play_store`, `stripe`, or [`promotional`](doc:promotionals).",
    "9-0": "`is_auto_renewable`",
    "9-1": "",
    "9-2": "`true` for auto-renewable subscriptions, `false` otherwise.",
    "10-0": "`is_trial_period`",
    "10-1": "",
    "10-2": "`true` if the transaction was a trial.",
    "11-0": "`is_in_intro_offer_period`",
    "11-1": "",
    "11-2": "`true` if the transaction is in an introductory offer period.",
    "12-0": "`is_sandbox`",
    "12-1": "",
    "12-2": "`true` for transactions made in a [sandbox environment](doc:sandbox).",
    "13-0": "`price_in_usd`",
    "13-1": "✅",
    "13-2": "The gross revenue generated from the transaction. All prices are converted to USD. Can be null if product prices haven't been collected from the user's device.",
    "14-0": "`takehome_percentage`",
    "14-1": "",
    "14-2": "[DEPRECATED] The estimated percentage of the transaction price that will be paid out to developers after commissions, but before VAT and DST taxes are taken into account. (will be either 0.7 or 0.85)  \n  \nWe recommend using `tax_percentage` and `commission_percentage` to calculate proceeds instead. [Learn more here](https://www.revenuecat.com/docs/taxes-and-commissions).",
    "15-0": "`tax_percentage`\\*",
    "15-1": "",
    "15-2": "The portion of a transaction’s price that will be deducted by the store for taxes. VAT & Digital Services Taxes may be withheld by stores depending on the store and country. To learn more about how RevenueCat estimates taxes, [click here](https://www.revenuecat.com/docs/taxes-and-commissions).",
    "16-0": "`commission_percentage`\\*",
    "16-1": "",
    "16-2": "The portion of a transaction’s price that will be detected by the store for commission. In stores where taxes are deducted before commission, this value will not equal the published commission from a store, because that commission is calculated on the post-tax revenue.",
    "17-0": "`store_transaction_id`",
    "17-1": "",
    "17-2": "orderId or transaction_identifier. **​Can be used as unique id**.",
    "18-0": "`original_store_transaction_id`",
    "18-1": "",
    "18-2": "orderId of first purchase or `original_transaction_id`. Can be used to find all related transactions for a single subscription.",
    "19-0": "`refunded_at`",
    "19-1": "✅",
    "19-2": "When a refund was detected, `null` if none was detected. Can be checked for existence to indicate transactions which have been refunded.",
    "20-0": "`unsubscribe_detected_at`",
    "20-1": "✅",
    "20-2": "When we detected an unsubscribe (opt-out of auto renew).",
    "21-0": "`billing_issues_detected_at`",
    "21-1": "✅",
    "21-2": "When we detected billing issues, `null` if none was detected.",
    "22-0": "`purchased_currency`",
    "22-1": "✅",
    "22-2": "The currency that was used for the transaction.",
    "23-0": "`price_in_purchased_currency`",
    "23-1": "✅",
    "23-2": "The product's price in the currency that was used for the transaction.",
    "24-0": "`entitlement_identifiers`",
    "24-1": "✅",
    "24-2": "An array of entitlements that the transaction unlocked or `null` if it didn't unlock any entitlements.",
    "25-0": "`renewal_number`",
    "25-1": "",
    "25-2": "Always starts at 1. Trial conversions are counted as renewals. `is_trial_conversion` is used to signify whether a transaction was a trial conversion.",
    "26-0": "`is_trial_conversion`",
    "26-1": "",
    "26-2": "If `true`, this transaction is a trial conversion.",
    "27-0": "`presented_offering`",
    "27-1": "✅",
    "27-2": "The offering presented to users. Can be used to filter [Experiment](doc:experiments-overview) transactions.",
    "28-0": "`ownership_type`\\*",
    "28-1": "✅",
    "28-2": "Will be `PURCHASED` when a recorded transaction results from the subscriber’s direct purchase of it, or `FAMILY_SHARED` when a recorded transaction results from the subscriber having received it through Family Sharing.  \n  \nNOTE: The `FAMILY_SHARED` designation is only supported on App Store transactions.",
    "29-0": "`reserved_subscriber_attributes`",
    "29-1": "✅",
    "29-2": "The [reserved subscriber attributes](doc:subscriber-attributes#reserved-attributes) set for the subscriber. Keys begin with `$`.",
    "30-0": "`custom_subscriber_attributes`",
    "30-1": "✅",
    "30-2": "The custom attributes set for the subscriber.",
    "31-0": "`platform`",
    "31-1": "✅",
    "31-2": "Last seen platform of the subscriber."
  },
  "cols": 3,
  "rows": 32,
  "align": [
    "left",
    "left",
    "left"
  ]
}
[/block]

\*Newly added fields for Version 3

To learn more about how to use our transaction data, or get started with sample queries, [click here](https://www.revenuecat.com/docs/scheduled-data-exports).
