---
title: Scheduled Data Exports
slug: scheduled-data-exports
excerpt: Data deliveries of all of your apps' transaction data (formerly ETL Exports)
hidden: false
categorySlug: integrations
order: 7
---
> 👍 
> 
> Scheduled data exports are available to all users signed up after September '23, the legacy Grow and Pro plans, and Enterprise plans. If you're on a legacy Free or Starter plan and want to access this integration, migrate to our new pricing via your [billing settings](https://app.revenuecat.com/settings/billing).

RevenueCat can automatically send data deliveries of all of your apps' transaction data to various cloud storage providers. These are in the form of [gzip compressed](https://en.wikipedia.org/wiki/Gzip) .csv files delivered daily.

# Setup Instructions

- [Amazon S3 Setup ](doc:scheduled-data-exports-s3)
- [Google Cloud Storage Setup ](doc:scheduled-data-exports-gcp)

# Version Change Log

- [Data Export Version 4](https://www.revenuecat.com/docs/data-export-version-4) (Latest)
- [Data Export Version 3](https://www.revenuecat.com/docs/data-export-version-3)

# Transaction Format

_Applicable to the latest version_

> 📘 
> 
> All dates and times are provided in UTC.

[block:parameters]
{
  "data": {
    "h-0": "Header",
    "h-1": "Description",
    "h-2": "Type",
    "h-3": "Example value",
    "h-4": "Can be null",
    "0-0": "`rc_original_app_user_id`",
    "0-1": "Can be used as a unique user identifier to find all of a user's transactions.",
    "0-2": "string",
    "0-3": "`$RCAnonymousID:87c6049c58069238dce29853916d624c`",
    "0-4": "",
    "1-0": "`rc_last_seen_app_user_id_alias`",
    "1-1": "Can be used together with `rc_original_app_user_id` to match transactions with user identifiers in your systems.",
    "1-2": "string",
    "1-3": "`$RCAnonymousID:87c6049c58069238dce29853916d624c`",
    "1-4": "",
    "2-0": "`country`",
    "2-1": "Store country of a transaction when known, or an IP-based estimate of a subscriber's country when not known.",
    "2-2": "string",
    "2-3": "`GB`",
    "2-4": "✅",
    "3-0": "`country_source`\\*",
    "3-1": "`from_sdk` when the store country of a transaction is known, or `estimated` when `country` is sourced from an IP-based estimate.",
    "3-2": "string",
    "3-3": "`from_sdk`",
    "3-4": "✅",
    "4-0": "`product_identifier`",
    "4-1": "The product identifier that was purchased.",
    "4-2": "string",
    "4-3": "`rc_subscription_monthly`",
    "4-4": "",
    "5-0": "`product_display_name`\\*",
    "5-1": "The display name of the product identifier if one has been set",
    "5-2": "string",
    "5-3": "`Monthly $9.99`",
    "5-4": "✅",
    "6-0": "`product_duration`\\*",
    "6-1": "The standard duration of the product if one is known by RevenueCat. May be null if RevenueCat does not know the authoritative duration.  \n  \n`product_duration` does not represent the trial or introductory period length of a transaction, it only represents the standard duration of the product that's been subscribed to.",
    "6-2": "string",
    "6-3": "`P1M`",
    "6-4": "✅",
    "7-0": "`start_time`",
    "7-1": "Purchase time of transaction.",
    "7-2": "datetime",
    "7-3": "`2023-01-01 08:27:06`",
    "7-4": "",
    "8-0": "`end_time`",
    "8-1": "Expected expiration time of subscription. Null when `is_auto_renewable = false`  \nFor Google Play, `end_time` can be before `start_time` to indicate an invalid transaction (e.g. billing issue).",
    "8-2": "datetime",
    "8-3": "`2023-02-01 08:27:06`",
    "8-4": "✅",
    "9-0": "`grace_period_end_time`",
    "9-1": "Expiration time of a grace period (if applicable) for a subscription. Will remain set while a subscription is in its grace period, or if it exited its grace period without renewing. Null when a subscription is not in a grace period or expiration was not due to a grace period.",
    "9-2": "datetime",
    "9-3": "`2023-02-17 08:27:06`",
    "9-4": "✅",
    "10-0": "`effective_end_time`",
    "10-1": "Single reference point of a subscriber’s expiration and entitlement revocation; inclusive of each store’s logic for cancellations, grace periods, etc.",
    "10-2": "datetime",
    "10-3": "`2023-02-17 08:27:06`",
    "10-4": "✅",
    "11-0": "`store`",
    "11-1": "The source of the transaction. Can be `app_store`, `play_store`, `stripe`, or [`promotional`](doc:promotionals).",
    "11-2": "string",
    "11-3": "`play_store`",
    "11-4": "",
    "12-0": "`is_auto_renewable`",
    "12-1": "`true` for auto-renewable subscriptions, `false` otherwise.",
    "12-2": "boolean",
    "12-3": "`true`",
    "12-4": "",
    "13-0": "`is_trial_period`",
    "13-1": "`true` if the transaction was a trial.",
    "13-2": "boolean",
    "13-3": "`false`",
    "13-4": "",
    "14-0": "`is_in_intro_offer_period`",
    "14-1": "`true` if the transaction is in an introductory offer period.",
    "14-2": "boolean",
    "14-3": "`false`",
    "14-4": "",
    "15-0": "`is_sandbox`",
    "15-1": "`true` for transactions made in a [sandbox environment](doc:sandbox).",
    "15-2": "boolean",
    "15-3": "`false`",
    "15-4": "",
    "16-0": "`price_in_usd`",
    "16-1": "The revenue (converted to USD) generated from the transaction after accounting for full and partial refunds. Can be null if product prices haven't been collected from the user's device. ",
    "16-2": "float",
    "16-3": "`0`",
    "16-4": "✅",
    "17-0": "`purchase_price_in_usd`\\*",
    "17-1": "The gross revenue (converted to USD) generated from the transaction. Remains set for refunded transactions. Can be null if product prices haven't been collected from the user's device.",
    "17-2": "float",
    "17-3": "`9.99`",
    "17-4": "✅",
    "18-0": "`takehome_percentage`",
    "18-1": "[DEPRECATED] The estimated percentage of the transaction price that will be paid out to developers after commissions, but before VAT and DST taxes are taken into account. (will be either 0.7 or 0.85)  \n  \nWe recommend using `tax_percentage` and `commission_percentage` to calculate proceeds instead. [Learn more here](https://www.revenuecat.com/docs/taxes-and-commissions).",
    "18-2": "float",
    "18-3": "`0.7`",
    "18-4": "",
    "19-0": "`tax_percentage`",
    "19-1": "The portion of a transaction’s price that will be deducted by the store for taxes. VAT & Digital Services Taxes may be withheld by stores depending on the store and country. To learn more about how RevenueCat estimates taxes, [click here](https://www.revenuecat.com/docs/taxes-and-commissions).",
    "19-2": "float",
    "19-3": "`0.1442`",
    "19-4": "",
    "20-0": "`commission_percentage`",
    "20-1": "The portion of a transaction’s price that will be detected by the store for commission. In stores where taxes are deducted before commission, this value will not equal the published commission from a store, because that commission is calculated on the post-tax revenue.",
    "20-2": "float",
    "20-3": "`0.15`",
    "20-4": "",
    "21-0": "`store_transaction_id`",
    "21-1": "orderId or transaction_identifier. **​Can be used as unique id**.",
    "21-2": "string",
    "21-3": "`123456789012345`",
    "21-4": "",
    "22-0": "`original_store_transaction_id`",
    "22-1": "orderId of first purchase or `original_transaction_id`. Can be used to find all related transactions for a single subscription.",
    "22-2": "string",
    "22-3": "`011223344556677`",
    "22-4": "",
    "23-0": "`refunded_at`",
    "23-1": "When a refund was detected, `null` if none was detected. Is not set in the case of upgraded transactions for which the App Store issues a partial refund.",
    "23-2": "datetime",
    "23-3": "`2023-02-20 05:47:55`",
    "23-4": "✅",
    "24-0": "`unsubscribe_detected_at`",
    "24-1": "When we detected an unsubscribe (opt-out of auto renew).",
    "24-2": "datetime",
    "24-3": "`2023-02-16 14:17:10`",
    "24-4": "✅",
    "25-0": "`billing_issues_detected_at`",
    "25-1": "When we detected billing issues, `null` if none was detected.",
    "25-2": "datetime",
    "25-3": "`2023-02-01 08:27:15`",
    "25-4": "✅",
    "26-0": "`purchased_currency`",
    "26-1": "The currency that was used for the transaction.",
    "26-2": "string",
    "26-3": "`GBP`",
    "26-4": "✅",
    "27-0": "`price_in_purchased_currency`",
    "27-1": "The revenue (in the purchased currency) generated from the transaction after accounting for full and partial refunds. Can be null if product prices haven't been collected from the user's device.",
    "27-2": "float",
    "27-3": "`0`",
    "27-4": "✅",
    "28-0": "`purchase_price_in_purchased_currency`\\*",
    "28-1": "The gross revenue (in the purchased currency) generated from the transaction. Remains set for refunded transactions. Can be null if product prices haven't been collected from the user's device.",
    "28-2": "float",
    "28-3": "`3.99`",
    "28-4": "✅",
    "29-0": "`entitlement_identifiers`",
    "29-1": "An array of entitlements that the transaction unlocked or `null` if it didn't unlock any entitlements.",
    "29-2": "string array",
    "29-3": "`\"[\"\"membership\"\", \"\"full_access\"\"]\"`",
    "29-4": "✅",
    "30-0": "`renewal_number`",
    "30-1": "Always starts at 1. Trial conversions are counted as renewals. `is_trial_conversion` is used to signify whether a transaction was a trial conversion.",
    "30-2": "integer",
    "30-3": "`2`",
    "30-4": "",
    "31-0": "`is_trial_conversion`",
    "31-1": "If `true`, this transaction is a trial conversion.",
    "31-2": "boolean",
    "31-3": "`true`",
    "31-4": "",
    "32-0": "`presented_offering`",
    "32-1": "The offering presented to users.",
    "32-2": "string",
    "32-3": "`Default Offering`",
    "32-4": "✅",
    "33-0": "`ownership_type`",
    "33-1": "Will be `PURCHASED` when a recorded transaction results from the subscriber’s direct purchase of it, or `FAMILY_SHARED` when a recorded transaction results from the subscriber having received it through Family Sharing.  \n  \nNOTE: The `FAMILY_SHARED` designation is only supported on App Store transactions.",
    "33-2": "string",
    "33-3": "`PURCHASED`",
    "33-4": "✅",
    "34-0": "`reserved_subscriber_attributes`",
    "34-1": "The [reserved subscriber attributes](doc:subscriber-attributes#reserved-attributes) set for the subscriber. Keys begin with `$`.",
    "34-2": "string JSON",
    "34-3": "`\"{\"\"$ip\"\": {\"\"value\"\": \"\"203.78.120.117\"\", \"\"updated_at_ms\"\": 1672549200}, \"\"$gpsAdId\"\": {\"\"value\"\": \"\"80480bdc-06e0-11ee-be56-0242ac120002\"\", \"\"updated_at_ms\"\": 1672549200}, \"\"$androidId\"\": {\"\"value\"\": \"\"12345a9876b4c123\"\", \"\"updated_at_ms\"\": 1673097132390}}\"`",
    "34-4": "✅",
    "35-0": "`custom_subscriber_attributes`",
    "35-1": "The custom attributes set for the subscriber.",
    "35-2": "string JSON",
    "35-3": "`\"{\"\"feature_setting\"\": {\"\"value\"\": \"\"1\"\", \"\"updated_at_ms\"\": 1672549200}, \"\"survey_response\"\": {\"\"value\"\": \"\"2\"\", \"\"updated_at_ms\"\": 1599112814785}}\"`",
    "35-4": "✅",
    "36-0": "`platform`",
    "36-1": "Last seen platform of the subscriber.",
    "36-2": "string",
    "36-3": "`android`",
    "36-4": "✅",
    "37-0": "`experiment_id`\\*",
    "37-1": "The unique ID of the Experiment that the subscriber is or was enrolled in. Will be null if the subscriber has not been enrolled in an experiment.  \n  \nLearn more about Experiments [here](https://www.revenuecat.com/docs/experiments-v1).",
    "37-2": "string",
    "37-3": "`prexp3a8a234abc`",
    "37-4": "✅",
    "38-0": "`experiment_variant`\\*",
    "38-1": "The value of the Experiment variant that the subscriber is or was enrolled in. `a` represents the Control, and `b` represents the Treatment. Will be null if the subscriber has not been enrolled in an experiment.  \n  \nLearn more about Experiments [here](https://www.revenuecat.com/docs/experiments-v1).",
    "38-2": "string",
    "38-3": "`a`",
    "38-4": "✅",
    "39-0": "`updated_at`\\*",
    "39-1": "The last time an attribute of the transaction was modified.",
    "39-2": "datetime",
    "39-3": "`2023-02-20 05:47:55`",
    "39-4": ""
  },
  "cols": 5,
  "rows": 40,
  "align": [
    "left",
    "left",
    "left",
    "left",
    "left"
  ]
}
[/block]

\*Available only on our most recent export version

> 📘 Re-enable integration to update to latest version
> 
> If your exports don't contain all of the columns above, you may be on an older export version. To update to the latest version just delete, and re-add the integration from the RevenueCat dashboard.

## A note on transaction data

All transaction data is based on the store receipts that RevenueCat has received. Receipts often have inconsistencies and quirks which may need to be considered. For example:

- The expiration date of a purchase can be before the purchase date. This is Google's way of invalidating a transaction, for example when Google is unable to bill a user some time after a subscription renews. This doesn’t occur on iOS.
- If you migrated to RevenueCat, Google subscriptions that were expired for more then 60 days before being migrated will not have transaction histories in export files.
- Apple and Google do not provide the transaction price directly, so we must rely on historical data for the products that we have. This isn’t 100% accurate in cases where the prices were changed or receipts were imported.
- Renewal numbers start at 1, even for trials. Trial conversions increase the renewal number.
- Data is pulled from a snapshot of the current receipt state, this means that the same transaction can be different from one delivery to another if something changed, e.g.refunds, and billing issues. You should recompute metrics for past time periods periodically to take these changes into account.

We try to normalize or at least annotate these quirks as much as possible, but by and large we consider receipts as the sources of truth, so any inconsistencies in the transaction data can always be traced back to the receipt

# Sample queries for RevenueCat measures

You can use the following sample queries (written in Postgresql) as starting points for reproducing common RevenueCat measures.

```pgsql Active Trials
-- Active Trials as of your [targeted_date]

SELECT
  COUNT(*)
FROM
  [revenuecat_data_table]
WHERE date(effective_end_time) > [targeted_date]
  AND date(start_time) <= [targeted_date]
  AND is_trial_period = 'true'
  AND (effective_end_time IS NULL OR DATE_DIFF('s', start_time, effective_end_time)::float > 0)
  AND ownership_type != 'FAMILY_SHARED'
  AND store != 'promotional'
  AND is_sandbox != 'true'

-- The RevenueCat Active Trials chart excludes
-- promotional transactions and transactions resulting from family sharing
-- since they do not reflect auto-renewing future payments.
```
```pgsql Active Subscriptions
-- Active Subscriptions as of your [targeted_date]

SELECT
  COUNT(*)
FROM
  [revenuecat_data_table]
WHERE date(effective_end_time) > [targeted_date]
  AND date(start_time) <= [targeted_date]
  AND is_trial_period = 'false'
  AND (effective_end_time IS NULL OR DATE_DIFF('s', start_time, effective_end_time)::float > 0)
  AND ownership_type != 'FAMILY_SHARED'
  AND store != 'promotional'
  AND is_sandbox != 'true'

-- The RevenueCat Active Subscriptions chart excludes trials,
-- promotional transactions, and transactions resulting from family sharing
-- since they do not reflect auto-renewing future payments.
```
```pgsql Revenue
-- Revenue generated on [targeted_date]

SELECT
  SUM(purchase_price_in_usd) as total_revenue,
  SUM(price_in_usd) as total_revenue_net_of_refunds,
  SUM(price_in_usd * (1 - tax_percentage - commission_percentage)) as proceeds
FROM
  [revenuecat_data_table]
WHERE date(start_time) = [targeted_date]
  AND is_trial_period = 'false'
  AND ownership_type != 'FAMILY_SHARED'
  AND store != 'promotional'
  AND is_sandbox != 'true'

-- Transactions which have been refunded can be identified through the refunded_at field.
```

# Sample queries for customized measures

Scheduled Data Exports are a powerful way to add your own customizations on top of the core measures provided by RevenueCat. Check out the following sample queries (written in Postgresql) for some ideas.

```pgsql Active Subs by Custom Attribute
-- How many Active Subscriptions do I have with a given custom attribute value?
  
SELECT
  COUNT(*)
FROM
  [revenuecat_data_table] rc
  
WHERE date(effective_end_time) > [targeted_date]
  AND date(start_time) <= [targeted_date]
  AND is_trial_period = 'false'
  AND (effective_end_time IS NULL OR DATE_DIFF('s', start_time, effective_end_time)::float > 0)
  AND ownership_type != 'FAMILY_SHARED'
  AND store != 'promotional'
  AND is_sandbox != 'true'
  AND json_extract_path_text(custom_subscriber_attributes, '[custom_attribute_key].value') = [custom_attribute_value]
```
```pgsql Weekly Revenue (starting Monday)
-- What is my weekly revenue, where Monday is set as the start day of the week?

SELECT
  date_trunc('week', start_time) as week,
  SUM(price_in_usd) as total_revenue
FROM
  [revenuecat_data_table]
WHERE date(start_time) BETWEEN [targeted_period_start_date] AND [targeted_period_end_date]
  AND is_trial_period = 'false'
  AND ownership_type != 'FAMILY_SHARED'
  AND store != 'promotional'
  AND is_sandbox != 'true'
GROUP BY week
```
```pgsql Realized LTV Segments
-- What is my Realized LTV of each monthly subscription cohort, segmented by whether they were offered a trial?
  
WITH 
(SELECT
  MIN(start_time) as subscription_start_time,
  original_store_transaction_id,
  MAX(is_trial_period) as had_a_trial,
  SUM(price_in_usd) as realized_ltv
FROM
  [revenuecat_data_table]
WHERE date(start_time) > [targeted_period_start_date]
  AND ownership_type != 'FAMILY_SHARED'
  AND store != 'promotional'
  AND is_sandbox != 'true'
  GROUP BY original_store_transaction_id) as subscriptions
  
SELECT
  to_char(first_start_time, 'YYYY-MM') as subscription_start_month,
  had_a_trial,
  COUNT() as subscriptions,
  SUM(realized_ltv) as realized_ltv,
  SUM(realized_ltv) / COUNT() as realized_ltv_per_subscription
FROM
  subscriptions
```
```pgsql Active Trials by Grace Period Status
-- What portion of my Active Trials are in a grace period?
  
SELECT
  CASE
    WHEN grace_period_end_time IS NOT NULL THEN 'in_grace_period'
    ELSE 'in_trial_period'
    end_as period_type,
  COUNT(*) as active_trials
FROM
  [revenuecat_data_table]
WHERE date(effective_end_time) > [targeted_date]
  AND date(start_time) <= [targeted_date]
  AND is_trial_period = 'true'
  AND (effective_end_time IS NULL OR DATE_DIFF('s', start_time, effective_end_time)::float > 0)
  AND ownership_type != 'FAMILY_SHARED'
  AND store != 'promotional'
  AND is_sandbox != 'true'
GROUP BY period_type
```
```pgsql Realized LTV Per Paying Customer by First Purchase Date
-- What is my Realized LTV per Paying Customer cohorted by First Purchase Date?
  
WITH filtered_transactions AS
  (SELECT *
  FROM [revenuecat_data_table] rc
  WHERE is_trial_period = 'false'
    AND was_refunded = 'false'
    AND ownership_type = 'PURCHASED'
    AND is_sandbox != 'true'
    AND store != 'promotional'
    AND price > 0),

first_purchase_dates AS
  (SELECT
    rc_original_app_user_id,
    MIN(start_time) as first_purchase_date
  FROM filtered_transactions ft
  GROUP BY 1)

SELECT
  DATE(fpd.first_purchase_date) AS first_purchase_date,
  COUNT(DISTINCT rc_original_app_user_id) AS paying_customers,
  SUM(CASE WHEN DATEADD(day, 7, first_purchase_date) > start_time THEN price_in_usd ELSE 0 END)::DECIMAL(18,2) AS total_ltv_7_days,
  SUM(CASE WHEN DATEADD(day, 30, first_purchase_date) > start_time THEN price_in_usd ELSE 0 END)::DECIMAL(18,2) AS total_ltv_30_days,
  SUM(CASE WHEN DATEADD(month, 6, first_purchase_date) > start_time THEN price_in_usd ELSE 0 END)::DECIMAL(18,2) AS total_ltv_6_months,
  SUM(CASE WHEN DATEADD(month, 12, first_purchase_date) > start_time THEN price_in_usd ELSE 0 END)::DECIMAL(18,2) AS total_ltv_12_months,
  SUM(CASE WHEN DATEADD(month, 24, first_purchase_date) > start_time THEN price_in_usd ELSE 0 END)::DECIMAL(18,2) AS total_ltv_24_months,
  SUM(price_in_usd)::DECIMAL(18,2) AS total_ltv_unbounded,
  (SUM(CASE WHEN DATEADD(day, 7, first_purchase_date) > start_time THEN price_in_usd ELSE 0 END)/COUNT(DISTINCT rc_original_app_user_id))::DECIMAL(18,2) AS avg_ltv_7_days,
  (SUM(CASE WHEN DATEADD(day, 30, first_purchase_date) > start_time THEN price_in_usd ELSE 0 END)/COUNT(DISTINCT rc_original_app_user_id))::DECIMAL(18,2) AS avg_ltv_30_days,
  (SUM(CASE WHEN DATEADD(month, 6, first_purchase_date) > start_time THEN price_in_usd ELSE 0 END)/COUNT(DISTINCT rc_original_app_user_id))::DECIMAL(18,2) AS avg_ltv_6_months,
  (SUM(CASE WHEN DATEADD(month, 12, first_purchase_date) > start_time THEN price_in_usd ELSE 0 END)/COUNT(DISTINCT rc_original_app_user_id))::DECIMAL(18,2) AS avg_ltv_12_months,
  (SUM(CASE WHEN DATEADD(month, 23, first_purchase_date) > start_time THEN price_in_usd ELSE 0 END)/COUNT(DISTINCT rc_original_app_user_id))::DECIMAL(18,2) AS avg_ltv_24_months,
  (SUM(price_in_usd)/COUNT(DISTINCT rc_original_app_user_id))::DECIMAL(18,2) AS avg_ltv_unbounded
FROM filtered_transactions ft
LEFT JOIN first_purchase_dates fpd 
  ON fpd.rc_original_app_user_id = ft.rc_original_app_user_id
GROUP BY 1
```
