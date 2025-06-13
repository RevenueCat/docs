---
title: Customer Lists
slug: customer-lists
excerpt: Cohort and export your customers
hidden: false
---

RevenueCat Customer Lists allow you to cohort and export groups of customers based on some interactions with your app and/or purchase behavior.

Lists are a segment of your customers inside RevenueCat, this can include both paying and non-paying users. Some lists are created automatically for every project (see Default lists below) and you can also create custom lists with your own defined filter logic.

:::info Sandbox Customers
The Customers dashboard tab doesn't support toggling the 'View sandbox data' switch as there is no concept of a sandbox customer in RevenueCat, only sandbox transactions.

To view customers who have made sandbox transactions you can use the default Sandbox list or apply the 'Made Sandbox Purchase' filter to a list.
:::

## Find an Individual Customer

You can look up an individual customer by an exact match of their App User ID, Transaction ID, Email Attribute, or Order ID (iOS only). To find a customer via Order ID, you can follow our guide on setting up [In-App Purchase Keys](/service-credentials/itunesconnect-app-specific-shared-secret/in-app-purchase-key-configuration) to unlock this feature. The transaction must show as completed in the [Apple Purchase History](https://support.apple.com/en-gb/HT204088) to be considered a valid Order ID. Note that Transaction ID refers to the identifier in Google Play console and order emails of GPA.1234.1223–, and for Stripe si_abcefg, whereas Order ID refers to the identifier from Apple's order emails.

:::warning Sandbox transaction search
Customer lookup by Transaction ID and Order ID works for production purchases only.
:::

Looking up customers in RevenueCat is real-time, as soon as a customer exists in RevenueCat they will be searchable here.

![Find a customer](/docs_images/customers/find-customer.png)

## Viewing a List

### Choose a project

Customer lists are available in each project. Select your project from the project dropdown to view lists.

![Choose a project](/docs_images/customers/choose-project.png)

### Default lists

![Default lists](/docs_images/customers/default-lists.png)

RevenueCat creates some default lists for every project. Default lists should give you insight into every customer that has ever made any purchase.

| Default List        | Description                                                                      |
| ------------------- | -------------------------------------------------------------------------------- |
| Active subscription | Any customer with an active subscription or trial.                               |
| Sandbox             | Any customer who has any sandbox transaction associated with their App User ID.  |
| Non-subscription    | Any customer with a non-subscription purchase associated with their App User ID. |
| Expired             | Any customer with an expired subscription or trial.                              |

:::info Granted Entitlements are not considered 'Active'

If a customer has a [Granted Entitlement](/dashboard-and-metrics/customer-history/promotionals) transaction, they are not considered as 'Active'. Note that if a customer has an active subscription + Granted Entitlement, they will not be counted in the Active Customer List.

:::

### Custom lists

In addition to Default Lists, you can create new Custom Lists with any combination of `AND` filters. See the section below on 'Filters' for a full description of available filters.

![Custom lists](/docs_images/customers/custom-lists.png)

:::info Custom lists are shared across collaborators
Any custom lists you create will also be visible to any project collaborators with Read or Admin privileges.
:::

## Overview Metrics

For each list, RevenueCat computes overview metrics for the cohort of customers.

![Aggregate metrics](/docs_images/customers/aggregate-metrics.png)

| Metric               | Description                                                                                                                                    |
| -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| Customers            | The total number of customers in the list.                                                                                                     |
| Active Trials        | The total number of active trials. This includes trials which are cancelled, or in their grace period, and have not yet expired.               |
| Active Subscriptions | The total number of active subscriptions. This includes subscriptions which are cancelled, or in their grace period, and have not yet expired. |
| Total Revenue        | The total revenue (USD) that the list of customers has generated, minus refunds.                                                               |

:::info Active Subscribers vs. Active Subscriptions
Active "subscribers" may be lower than your count of all active "subscriptions" (e.g. in Overview or Charts) if some customers have multiple active subscriptions.
:::

## List Data

For each list, RevenueCat displays the 100 most recently seen customers in the dashboard.

![Customers table](/docs_images/customers/customers-table.png)

The dashboard shows the App User ID, purchase status, total spent (USD) and the latest product identifier purchased. Additional columns are available when exporting data.

:::info Data freshness
Customer lists are refreshed every 2 hours automatically
:::

## Filters

Filters allow you to choose which customers appear in your list. You can create custom lists with any combination of filters. **All filters are applied as AND filters**.

![Customer list filters](/docs_images/customers/customer_list_filters.png)

:::info Duplicating a Customer List
If you would like to create another version of a List with further filters, you can open the filters menu and click the "Create New List" button, which will become clickable after adding the additional filters that you would like to be applied to the new version. Once you click the button, it will show a prompt to name this new Customer List, which will be created after you name it. The original Customer List will remain the same without the newly-added filters.
:::

See the table below for all filters you can apply to your lists.

| Filter                             | Type         | Description                                                                                                                |
| ---------------------------------- | ------------ | -------------------------------------------------------------------------------------------------------------------------- |
| Ad                                 | String       | The `$ad` [Attribute](/customers/customer-attributes#attribution-data) for the customer.                                   |
| Ad Group                           | String       | The `$adGroup` [Attribute](/customers/customer-attributes#attribution-data) for the customer.                              |
| App Version                        | String       | The version of the app that the customer was last seen using.                                                              |
| Auto Renew Intent                  | Bool         | Whether the customer has opted out of auto-renew or not.                                                                   |
| Campaign                           | String       | The `$campaign` [Attribute](/customers/customer-attributes#attribution-data) for the customer.                             |
| Cancellation Date                  | Date         | The date the customer unsubscribed from their subscription. Will be set back to `null` if the customer later resubscribes. |
| Creative                           | String       | The `$creative` [Attribute](/customers/customer-attributes#attribution-data) for the customer.                             |
| Email                              | String       | The `$email` [Attribute](/customers/customer-attributes) for the customer.                                                 |
| Experiment Id                      | String       | The unique ID of the experiment that the customer was enrolled in (if applicable).                                         |
| Experiment Variant                 | String       | The variant in the experiment that the customer was enrolled in (if applicable).                                           |
| First Purchase Date                | Date         | The date of the customer's first transaction.                                                                              |
| First Seen Date                    | Date         | The date the customer was first seen by RevenueCat.                                                                        |
| GPS Ad Id                          | String       | The `$gpsAdId` [](/customers/customer-attributes#device-identifiers) for the customer.                                     |
| Granted Entitlement via RevenueCat | Bool         | Whether the customer has been [granted an Entitlement](/dashboard-and-metrics/customer-history/promotionals) or not.       |
| IDFA                               | String       | The `$idfa` [Attribute](/customers/customer-attributes#device-identifiers) for the customer.                               |
| IDFV                               | String       | The `$idfv` [Attribute](/customers/customer-attributes#device-identifiers) for the customer.                               |
| Keyword                            | String       | The `$keyword` [Attribute](/customers/customer-attributes#attribution-data) for the customer.                              |
| Last Seen App Id                   | String       | The ID of the app that the customer was last seen using.                                                                   |
| Last Seen App Name                 | String       | The name of the app that the customer was last seen using.                                                                 |
| Last Seen Country                  | String       | The two-letter ISO 3166-1 alpha-2 code of the country where the user was last seen, determined by IP address.              |
| Last Seen Date                     | Date         | The date the customer was last seen by RevenueCat.                                                                         |
| Last Seen Locale                   | String       | The customer's last seen locale.                                                                                           |
| Last Seen Platform                 | String       | The platform that the customer was last seen using.                                                                        |
| Last Seen Platform Version         | String       | The version of the platform that the customer was last seen using.                                                         |
| Last Seen RevenueCat SDK Version   | String       | The RevenueCat SDK version being used in the customer's last seen app version.                                             |
| Latest Entitlement                 | String       | The latest [Entitlement](/getting-started/entitlements) unlocked by the customer.                                          |
| Latest Expiration Date             | Date         | The latest expiration date of the customer's [Entitlement](/getting-started/entitlements).                                 |
| Latest Offer                       | String       | The identifier of the latest offer that the customer used to make a purchase (if applicable).                              |
| Latest Offer Type                  | String       | The type of the latest offer that the customer used to make a purchase (if applicable).                                    |
| Latest Ownership Type              | String       | The ownership type of the customer's latest purchase, used to distinguish family sharing purchases.                        |
| Latest Purchased Offering          | String       | The offering that the customer's latest purchased was made from.                                                           |
| Latest Product                     | String       | The customer's latest purchased product identifier.                                                                        |
| Latest Purchase Date               | Date         | The customer's latest transaction date.                                                                                    |
| Latest Renewal Date                | Date         | The customer's latest renewal date. This could be the same as the Latest Purchase Date.                                    |
| Latest Store                       | Multi Select | The latest store the customer purchased from.                                                                              |
| Latest Store Country               | Multi Select | The latest store country the customer purchased from.                                                                      |
| Media Source                       | String       | The `$mediaSource` [Attribute](/customers/customer-attributes#attribution-data) for the customer.                          |
| Number of Renewals                 | Integer      | The total number of renewals the customer has had. A trial conversion is considered a renewal.                             |
| Phone Number                       | String       | The `$phoneNumber` [Attribute](/customers/customer-attributes) for the customer.                                           |
| Total Spent                        | Integer      | The total revenue (in USD) spent by the customer.                                                                          |
| Trial Cancellation Date            | Date         | The date the customer unsubscribed from their free trial. Will be set back to `null` if the customer later resubscribes.   |
| Trial End Date                     | Date         | The date the customer's free trial expires.                                                                                |
| Trial Start Date                   | Date         | The date the customer started their free trial.                                                                            |
| Made Non-subscription Purchase     | Bool         | Whether the customer has made any [non-subscription](/platform-resources/non-subscriptions) purchases or not.              |
| Made Sandbox Purchase              | Bool         | Whether the customer has made any sandbox purchases or not.                                                                |
| Status                             | Multi Select | The latest status of the customer.                                                                                         |

:::info Date filters are start of day
Selecting any date filters will apply to the start of the day. For example, `2021-01-01` will be `2021-01-01T00:00:00` under the hood.
:::

## Exporting Data

The complete list of customers in a list can be exported as a .csv file. Exports are processed in the background, and you'll receive an email with a link to download the file. Emails are sent to the logged in account that requested the export. The download links are shareable and available for 30 days.

Below is a description of the .csv format for the exported data.

| Column Name                   | Description                                                                                                                                  |
| ----------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| project_id                    | The ID of the project in Revenuecat.                                                                                                         |
| project_name                  | The name of the project in Revenuecat.                                                                                                       |
| app_name                      | The name of the app the customer was last seen using.                                                                                        |
| app_id                        | The ID of the app the customer was last seen using.                                                                                          |
| app_user_id                   | The customer's user identifier in RevenueCat.                                                                                                |
| first_seen_at                 | Epoch timestamp in milliseconds when the customer was first seen by RevenueCat.                                                              |
| last_seen_at                  | Epoch timestamp in milliseconds when the customer was last seen by RevenueCat.                                                               |
| last_seen_app_version         | The version of the app that the customer was last seen using.                                                                                |
| last_seen_ip_country          | The two-letter ISO 3166-1 alpha-2 code of the country where the user was last seen, determined by IP address of the customer API request.    |
| last_seen_platform            | The platform that the customer was last seen using.                                                                                          |
| last_seen_platform_version    | The version of the platform that the customer was last seen using.                                                                           |
| last_seen_sdk_version         | The RevenueCat SDK version being used in the customer's last seen app version.                                                               |
| last_seen_locale              | The device locale that the customer was last seen using.                                                                                     |
| price_experiment_id           | The unique ID of the experiment that the customer was enrolled in (if applicable).                                                           |
| price_experiment_variant      | The variant of the experiment that the customer was enrolled in (if applicable).                                                             |
| has_made_sandbox_purchase     | Boolean indicating whether the customer has made any sandbox purchases.                                                                      |
| latest_entitlement            | The most recently unlocked RevenueCat Entitlement identifier.                                                                                |
| latest_product                | The most recently purchased product identifier.                                                                                              |
| is_rc_promo                   | Whether the most recent transaction was a RevenueCat Granted Entitlement.                                                                    |
| first_purchase_at             | Epoch timestamp in milliseconds of the customer's first transaction.                                                                         |
| most_recent_purchase_at       | Epoch timestamp in milliseconds of the customer's most recent transaction.                                                                   |
| trial_start_at                | Epoch timestamp in milliseconds when the customer started a free trial.                                                                      |
| trial_end_at                  | Epoch timestamp in milliseconds of the customer's free trial expiration date.                                                                |
| most_recent_renewal_at        | Epoch timestamp in milliseconds of the customer's most recent renewal transaction.                                                           |
| latest_expiration_at          | Epoch timestamp in milliseconds of the customer's latest expiration date. If greater than now, then the customer has an active subscription. |
| subscription_opt_out_at       | Epoch timestamp in milliseconds when a subscription or trial cancellation was detected by RevenueCat.                                        |
| trial_opt_out_at              | Epoch timestamp in milliseconds when the latest trial cancellation was detected by RevenueCat.                                               |
| total_renewals                | The total number of subscription renewals for the customer.                                                                                  |
| total_spent                   | The total amount spent by the customer, shown in the currency selected in your Account Settings.                                             |
| latest_store                  | The latest store that the customer purchased from.                                                                                           |
| latest_store_country          | The latest store country that the customer purchased from.                                                                                   |
| latest_auto_renew_intent      | Boolean indicating whether the customer has chosen to have their subscription or trial auto-renew.                                           |
| all_purchased_product_ids     | A comma separated list of all the product identifiers purchased by the customer.                                                             |
| most_recent_billing_issues_at | Epoch timestamp in milliseconds when a subscription billing issue was detected by RevenueCat.                                                |
| latest_offer                  | The identifier of the latest offer that the customer used to make a purchase (if applicable).                                                |
| latest_offer_type             | The type of the latest offer that the customer used to make a purchase (if applicable).                                                      |
| latest_purchased_offering     | The offering that the customer's latest purchased was made from.                                                                             |
| latest_ownership_type         | The ownership type of the customer's latest purchase, used to distinguish family sharing purchases.                                          |
| email                         | The `$email` [Attribute](/customers/customer-attributes) for the customer, if set.                                                           |
| phone_number                  | The `$phoneNumber` [Attribute](/customers/customer-attributes) for the customer, if set.                                                     |
| media_source                  | The `$mediaSource` [Attribute](/customers/customer-attributes#attribution-data) for the customer, if set.                                    |
| campaign                      | The `$campaign` [Attribute](/customers/customer-attributes#attribution-data) for the customer, if set.                                       |
| ad_group                      | The`$adGroup` [Attribute](/customers/customer-attributes#attribution-data) for the customer, if set.                                         |
| ad                            | The `$ad` [Attribute](/customers/customer-attributes#attribution-data) for the customer, if set.                                             |
| keyword                       | The `$keyword` [Attribute](/customers/customer-attributes#attribution-data) for the customer, if set.                                        |
| creative                      | The `$creative` [Attribute](/customers/customer-attributes#attribution-data) for the customer, if set.                                       |
| idfa                          | The `$idfa` [Attribute](/customers/customer-attributes#device-identifiers) for the customer, if set.                                         |
| idfv                          | The `$idfv` [Attribute](/customers/customer-attributes#device-identifiers) for the customer, if set.                                         |
| gps_ad_id                     | The $gpsAdId [Attribute](/customers/customer-attributes#device-identifiers) for the customer, if set.                                        |
| custom_attributes             | JSON representation of any custom [Attributes](/customers/customer-attributes) set for the customer.                                         |
| currency                      | The currency that total_spent is provided in, based on the Display Currency you've configured in Account Settings.                           |

:::info "The last successful export finished recently. Please, wait some minutes before submitting another export."
Note that there is a wait time of 30 minutes between each export.
:::

### Exported files

Customer List exports are CSV files compressed in a GZ file. A GZ file is a compressed file similar to a ZIP file, although it uses a different compression algorithm. The exports use a semicolon delimiter, so if the files are not formatted correctly when viewed as spreadsheets, you may need to change your delimiter settings in the spreadsheet software.

Note that the timestamps in the exports are measured in milliseconds since Unix epoch. To convert these timestamps into a readable date, the formula is `(A1÷86400000)+(DATE(1970,1,1))` where `A1` is the corresponding cell.

**macOS**
Can be opened by Archive Utility, included in macOS by default.

**Windows**
Can be opened with a third party utility like WinZip or 7-Zip.

:::info Check for .csv file extension
If you're having trouble opening the exported/uncompressed file, you may need to manually add the .csv extension.
:::

## Next Steps

- Learn how to view the purchase history of a specific user and grant them promotional access via the [Customer View →](/dashboard-and-metrics/customer-history/basic-information)
