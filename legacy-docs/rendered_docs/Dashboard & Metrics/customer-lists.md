---
title: Customer Lists
slug: customer-lists
excerpt: Cohort and export your customers
hidden: false
categorySlug: dashboard
order: 2
---
RevenueCat Customer Lists allow you to cohort and export groups of customers based on some interactions with your app and/or purchase behavior.

Lists are a segment of your customers inside RevenueCat, this can include both paying and non-paying users. Some lists are created automatically for every project (see Default lists below) and you can also create custom lists with your own defined filter logic.

[block:callout]
{
  "type": "info",
  "body": "If you're on a legacy Free plan and want to access custom lists or export lists, migrate to our new pricing via your [billing settings](https://app.revenuecat.com/settings/billing)."
}
[/block]

![](https://files.readme.io/b7ceead-app.revenuecat.com_projects_85ff18c7_api-keys_8.png "app.revenuecat.com_projects_85ff18c7_api-keys (8).png")

[block:callout]
{
  "type": "info",
  "title": "Sandbox Customers",
  "body": "The Customers dashboard tab doesn't support toggling the 'View sandbox data' switch as there is no concept of a sandbox customer in RevenueCat, only sandbox transactions. \n\nTo view customers who have made sandbox transactions you can use the default Sandbox list or apply the 'Made Sandbox Purchase' filter to a list."
}
[/block]
# Find an Individual Customer

You can look up an individual customer by an exact match of their App User ID, Transaction ID, Email Attribute, or Order ID (iOS only). To find a customer via Order ID, you can follow our guide on setting up [In-App Purchase Keys](https://docs.revenuecat.com/docs/in-app-purchase-key-configuration) to unlock this feature. The transaction must show as completed in the [Apple Purchase History](https://support.apple.com/en-gb/HT204088) to be considered a valid Order ID. Note that Transaction ID refers to the identifier in Google Play console and order emails of GPA.1234.1223–, and for Stripe si_abcefg, whereas Order ID refers to the identifier from Apple's order emails.

Looking up customers in RevenueCat is real-time, as soon as a customer exists in RevenueCat they will be searchable here.
![](https://files.readme.io/b9c0217-app.revenuecat.com_projects_85ff18c7_api-keys_9.png "app.revenuecat.com_projects_85ff18c7_api-keys (9).png")
# Viewing a List

## Choose a project
Customer lists are created on a per-project basis, you must select a project before viewing a list. Lists cannot be combined across projects inside of RevenueCat.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/d0db86e-Screenshot_2023-03-27_at_1.00.35_PM.png",
        "Screenshot 2023-03-27 at 1.00.35 PM.png",
        289,
        335,
        "#000000"
      ],
      "sizing": "original"
    }
  ]
}
[/block]
## Default lists
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/81b30f7-app.revenuecat.com_overview.png",
        "app.revenuecat.com_overview.png",
        294,
        283,
        "#000000"
      ],
      "sizing": "original"
    }
  ]
}
[/block]
RevenueCat creates some default lists for every project. Default lists should give you insight into every customer that has ever made any purchase.
[block:parameters]
{
  "data": {
    "h-0": "Default List",
    "h-1": "Description",
    "0-0": "Active",
    "0-1": "Any customer with an active subscription or trial.",
    "1-0": "Sandbox",
    "1-1": "Any customer who has any sandbox transaction associated with their App User ID. This can be useful for isolating development devices or Testflight users.",
    "2-0": "Non-subscription",
    "2-1": "Any customer with a non-subscription purchase associated with their App User ID.",
    "3-0": "Expired",
    "3-1": "Any customer with an expired subscription or trial."
  },
  "cols": 2,
  "rows": 4
}
[/block]

[block:callout]
{
  "type": "info",
  "title": "Promotionals are not considered 'Active'",
  "body": "If a customer has a [Promotional](doc:promotionals) transaction, they are not considered as 'Active'. Note that if a customer has an active subscription + Promotional, they will not be counted in the Active Customer List."
}
[/block]
## Custom lists

In addition to Default Lists, you can create new Custom Lists with any combination of `AND` filters. See the section below on 'Filters' for a full description of available filters.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/94bb634-app.revenuecat.com_lists_list0332b22d97_1.png",
        "app.revenuecat.com_lists_list0332b22d97 (1).png",
        292,
        370,
        "#000000"
      ],
      "sizing": "original"
    }
  ]
}
[/block]

[block:callout]
{
  "type": "info",
  "body": "Any custom lists you create will also be visible to any project collaborators with Read or Admin privileges.",
  "title": "Custom lists are shared across collaborators"
}
[/block]
# Overview Metrics

For each list, RevenueCat computes overview metrics for the cohort of customers.
![](https://files.readme.io/8070e60-app.revenuecat.com_lists_list0332b22d97_2.png "app.revenuecat.com_lists_list0332b22d97 (2).png")

[block:parameters]
{
  "data": {
    "h-0": "Metric",
    "h-1": "Description",
    "0-0": "Customers",
    "0-1": "The total number of customers in the list.",
    "1-0": "Active Trials",
    "1-1": "The total number of active trials. This includes trials which are cancelled, or in their grace period, and have not yet expired.",
    "2-0": "Active Subscriptions",
    "2-1": "The total number of active subscriptions. This includes subscriptions which are cancelled, or in their grace period, and have not yet expired.",
    "3-0": "Total Revenue",
    "3-1": "The total revenue (USD) that the list of customers has generated, minus refunds."
  },
  "cols": 2,
  "rows": 4
}
[/block]

[block:callout]
{
  "type": "info",
  "body": "Active \"subscribers\" may be lower than your count of all active \"subscriptions\" (e.g. in Overview or Charts) if some customers have multiple active subscriptions.",
  "title": "Active Subscribers vs. Active Subscriptions"
}
[/block]

# List Data

For each list, RevenueCat displays the 100 most recently seen customers in the dashboard.
![](https://files.readme.io/f030395-app.revenuecat.com_projects_85ff18c7_api-keys_8_copy.png "app.revenuecat.com_projects_85ff18c7_api-keys (8) copy.png")
The dashboard shows the App User ID, purchase status, total spent (USD) and the latest product identifier purchased. Additional columns are available when exporting data.
[block:callout]
{
  "type": "info",
  "title": "Customer lists are refreshed every 2 hours",
  "body": "For lists with the filter **Only Customers with Purchases** enabled (see our [Filters](doc:customer-lists#filters) section below), deleted users will be removed in a matter of seconds. For lists without this filter, it will take up to 30 minutes for a deleted user to be removed."
}
[/block]
# Filters

Filters allow you to choose which customers appear in your list. You can create custom lists with any combination of filters. **All filters are applied as AND filters**.
![](https://files.readme.io/20c0838-Screenshot_2023-03-27_at_1.20.54_PM.png "Screenshot 2023-03-27 at 1.20.54 PM.png")
The first filter is a default filter applied to every customer list. You can choose whether the list should be limited to only those customers that have purchases (e.g., started a trial, started a subscription, or made a non-subscription purchase) or not. Lists that are limited to only customers with purchases typically load much faster, because there are many more customers without transactions than those with transactions.


[block:callout]
{
  "type": "info",
  "body": "Filtering customers by purchase is being rolled out gradually, so you may not see this option available in your lists immediately."
}
[/block]
See the table below for additional filters you can apply to your lists.
[block:parameters]
{
  "data": {
    "h-0": "Filter",
    "h-1": "Type",
    "0-0": "Ad",
    "1-0": "Ad Group",
    "2-0": "Auto Renew Intent",
    "3-0": "Campaign",
    "4-0": "Cancellation Date",
    "5-0": "Creative",
    "6-0": "Email",
    "7-0": "First Purchase Date",
    "8-0": "First Seen Date",
    "9-0": "GPS Ad Id",
    "10-0": "Granted RC Promotional",
    "11-0": "IDFA",
    "12-0": "IDFV",
    "13-0": "Keyword",
    "14-0": "Last Seen Country",
    "15-0": "Last Seen Date",
    "16-0": "Latest Entitlement",
    "17-0": "Latest Expiration Date",
    "18-0": "Latest Product",
    "19-0": "Latest Purchase Date",
    "20-0": "Latest Renewal Date",
    "21-0": "Latest Store",
    "24-0": "Media Source",
    "25-0": "Number of Renewals",
    "26-0": "Phone Number",
    "28-0": "Total Spent",
    "29-0": "Trial Cancellation Date",
    "30-0": "Trial End Date",
    "31-0": "Trial Start Date",
    "h-2": "Description",
    "0-1": "String",
    "0-2": "The `$ad` [Subscriber Attribute](doc:subscriber-attributes#attribution-data) for the customer.",
    "1-1": "String",
    "1-2": "The`$adGroup` [Subscriber Attribute](doc:subscriber-attributes#attribution-data) for the customer.",
    "2-1": "Bool",
    "2-2": "Whether the customer has opted out of auto-renew or not.",
    "3-1": "String",
    "3-2": "The`$campaign` [Subscriber Attribute](doc:subscriber-attributes#attribution-data) for the customer.",
    "4-1": "Date",
    "5-2": "The`$creative` [Subscriber Attribute](doc:subscriber-attributes#attribution-data) for the customer.",
    "6-2": "The `$email` [Subscriber Attribute](doc:subscriber-attributes) for the customer.",
    "6-1": "String",
    "5-1": "String",
    "7-1": "Date",
    "8-1": "Date",
    "9-1": "String",
    "10-1": "Bool",
    "11-1": "String",
    "12-1": "String",
    "13-1": "String",
    "14-1": "String",
    "15-1": "Date",
    "16-1": "String",
    "17-1": "Date",
    "18-1": "String",
    "19-1": "Date",
    "20-1": "Date",
    "21-1": "Multi Select",
    "21-2": "The latest store the customer purchased from.",
    "25-1": "Integer",
    "26-1": "String",
    "28-1": "Integer",
    "24-1": "String",
    "29-1": "Date",
    "30-1": "Date",
    "31-1": "Date",
    "4-2": "The date the customer unsubscribed from their subscription. Will be set back to `null` if the customer later resubscribes.",
    "29-2": "The date the customer unsubscribed from their free trial. Will be set back to `null` if the customer later resubscribes.",
    "31-2": "The date the customer started their free trial.",
    "30-2": "The date the customers free trial expires.",
    "28-2": "The total revenue (in USD) spent by the customer.",
    "26-2": "The `$phoneNumber` [Subscriber Attribute](doc:subscriber-attributes) for the customer.",
    "24-2": "The`$mediaSource` [Subscriber Attribute](doc:subscriber-attributes#attribution-data) for the customer.",
    "11-2": "The`$idfa` [Subscriber Attribute](doc:subscriber-attributes#device-identifiers) for the customer.",
    "12-2": "The`$idfv` [Subscriber Attribute](doc:subscriber-attributes#device-identifiers) for the customer.",
    "9-2": "The`$gpsAdId` [Subscriber Attribute](doc:subscriber-attributes#device-identifiers) for the customer.",
    "8-2": "The date the customer was first seen by RevenueCat.",
    "7-2": "The date of the customers first transaction.",
    "25-2": "The total number of renewals the customer has had. A trial conversion is considered a renewal.",
    "10-2": "Whether the customer has been granted a [Promotional Subscription](doc:promotionals) or not.",
    "13-2": "The`$keyword` [Subscriber Attribute](doc:subscriber-attributes#attribution-data) for the customer.",
    "14-2": "The two-letter ISO 3166-1 alpha-2 code of the country where the user was last seen, determined by IP address.",
    "15-2": "The date the customer was last seen by RevenueCat.",
    "16-2": "The latest [Entitlement](doc:entitlements) unlocked by the customer.",
    "17-2": "The latest expiration date of the customers [Entitlement](doc:entitlements).",
    "18-2": "The customers latest purchased product identifier.",
    "19-2": "The customers latest transaction date.",
    "20-2": "The customers latest renewal date. This could be the same as Latest Purchase Date.",
    "27-0": "Status",
    "27-1": "Multi Select",
    "27-2": "The latest status of the customer.",
    "22-0": "Made Non-subscription Purchase",
    "23-0": "Made Sandbox Purchase",
    "23-1": "Bool",
    "22-1": "Bool",
    "23-2": "Whether the customer has made any sandbox purchases or not.",
    "22-2": "Whether the customer has made any [non-subscription](doc:non-subscriptions) purchases or not."
  },
  "cols": 3,
  "rows": 32
}
[/block]

[block:callout]
{
  "type": "info",
  "title": "Date filters are start of day",
  "body": "Selecting any date filters will apply to the start of the day. For example, `2021-01-01` will be `2021-01-01T00:00:00` under the hood."
}
[/block]
# Exporting Data

The complete list of customers in a list can be exported as a .csv file. Exports are processed in the background, and you'll receive an email with a link to download the file. Emails are sent to the logged in account that requested the export. The download links are shareable and available for 30 days. 

Below is a description of the .csv format for the exported data.
[block:parameters]
{
  "data": {
    "h-0": "Column Name",
    "h-1": "Description",
    "0-0": "app_name",
    "0-1": "The name of the app in RevenueCat.",
    "1-0": "app_uuid",
    "1-1": "A unique identifier for the app in RevenueCat.",
    "2-0": "app_user_id",
    "2-1": "The customer's user identifier in RevenueCat.",
    "3-0": "first_seen_at",
    "4-0": "last_seen_at",
    "5-0": "ip_country",
    "6-0": "has_made_sandbox_purchase",
    "6-1": "Boolean indicating whether the customer has made any sandbox purchases.",
    "5-1": "The two-letter ISO 3166-1 alpha-2 code of the country where the user was last seen, determined by IP address of the customer API request.",
    "4-1": "Epoch timestamp in milliseconds when the customer was last seen by RevenueCat.",
    "3-1": "Epoch timestamp in milliseconds when the customer was first seen by RevenueCat.",
    "7-0": "latest_entitlement",
    "7-1": "The most recently unlocked RevenueCat Entitlement identifier.",
    "8-0": "latest_product",
    "8-1": "The most recently purchased product identifier.",
    "9-0": "is_rc_promo",
    "9-1": "Whether the most recent transaction was a RevenueCat Promotional.",
    "10-0": "first_purchase_at",
    "10-1": "Epoch timestamp in milliseconds of the customer's first transaction.",
    "11-1": "Epoch timestamp in milliseconds of the customer's most recent transaction.",
    "11-0": "most_recent_purchase_at",
    "13-0": "trial_start_at",
    "14-0": "trial_end_at",
    "13-1": "Epoch timestamp in milliseconds when the customer started a free trial.",
    "14-1": "Epoch timestamp in milliseconds of the customer's free trial expiration date.",
    "12-0": "most_recent_renewal_at",
    "12-1": "Epoch timestamp in milliseconds of the customer's most recent renewal transaction.",
    "15-0": "latest_expiration_at",
    "16-0": "subscription_opt_out_at",
    "17-0": "trial_opt_out_at",
    "18-0": "total_renewals",
    "19-0": "total_spent",
    "20-0": "latest_store",
    "21-0": "latest_auto_renew_intent",
    "22-0": "all_purchased_product_ids",
    "23-0": "most_recent_billing_issues_at",
    "18-1": "The total number of subscription renewals for the customer.",
    "19-1": "The total amount spent by the customer in USD.",
    "20-1": "The latest store that the customer purchased from.",
    "15-1": "Epoch timestamp in milliseconds of the customer's latest expiration date. If greater than now, then the customer has an active subscription.",
    "16-1": "Epoch timestamp in milliseconds when a subscription or trial cancellation was detected by RevenueCat.",
    "17-1": "Epoch timestamp in milliseconds when the latest trial cancellation was detected by RevenueCat.",
    "21-1": "Boolean indicating whether the customer has chosen to have their subscription or trial auto-renew. . Can be either `t` (true), or `f` (false).",
    "22-1": "A comma separated list of all the product identifiers purchased by the customer.",
    "23-1": "Epoch timestamp in milliseconds when a subscription billing issue was detected by RevenueCat.",
    "24-0": "email",
    "24-1": "The `$email` [Subscriber Attribute](doc:subscriber-attributes) for the customer, if set.",
    "25-0": "phone_number",
    "26-0": "media_source",
    "27-0": "campaign",
    "28-0": "ad_group",
    "29-0": "ad",
    "30-0": "keyword",
    "31-0": "creative",
    "32-0": "idfa",
    "33-0": "idfv",
    "25-1": "The `$phoneNumber` [Subscriber Attribute](doc:subscriber-attributes) for the customer, if set.",
    "26-1": "The `$mediaSource` [Subscriber Attribute](doc:subscriber-attributes#attribution-data) for the customer, if set.",
    "27-1": "The `$campaign` [Subscriber Attribute](doc:subscriber-attributes#attribution-data) for the customer, if set.",
    "28-1": "The`$adGroup` [Subscriber Attribute](doc:subscriber-attributes#attribution-data) for the customer, if set.",
    "29-1": "The `$ad` [Subscriber Attribute](doc:subscriber-attributes#attribution-data) for the customer, if set.",
    "30-1": "The `$keyword` [Subscriber Attribute](doc:subscriber-attributes#attribution-data) for the customer, if set.",
    "31-1": "The `$creative` [Subscriber Attribute](doc:subscriber-attributes#attribution-data) for the customer, if set.",
    "32-1": "The `$idfa` [Subscriber Attribute](doc:subscriber-attributes#device-identifiers) for the customer, if set.",
    "33-1": "The `$idfv` [Subscriber Attribute](doc:subscriber-attributes#device-identifiers) for the customer, if set.",
    "34-0": "gps_ad_id",
    "34-1": "The $gpsAdId [Subscriber Attribute](doc:subscriber-attributes#device-identifiers) for the customer, if set.",
    "35-0": "custom_attributes",
    "35-1": "JSON representation of any custom [Subscriber Attributes](doc:subscriber-attributes) set for the customer."
  },
  "cols": 2,
  "rows": 36
}
[/block]

[block:callout]
{
  "type": "info",
  "title": "\"The last successful export finished recently. Please, wait some minutes before submitting another export.\"",
  "body": "Note that there is a wait time of 30 minutes between each export."
}
[/block]
## Exported files

Customer List exports are CSV files compressed in a GZ file. A GZ file is a compressed file similar to a ZIP file, although it uses a different compression algorithm. 

Note that the timestamps in the exports are measured in milliseconds since Unix epoch. To convert these timestamps into a readable date, the formula is `(A1÷86400000)+(DATE(1970,1,1))` where `A1` is the corresponding cell. 

**macOS**
Can be opened by Archive Utility, included in macOS by default.

**Windows**
Can be opened with a third party utility like WinZip or 7-Zip.
[block:callout]
{
  "type": "info",
  "title": "Check for .csv file extension",
  "body": "If you're having trouble opening the exported/uncompressed file, you may need to manually add the .csv extension."
}
[/block]

# Next Steps

* Learn how to view the purchase history of a specific user and grant them promotional access via the [Customer View :fa-arrow-right:](doc:customers)
