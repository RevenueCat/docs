---
title: Charts Overview
sidebar_label: Overview
slug: charts
excerpt: Analyzing your subscription business with visualizations
hidden: false
---

:::tip
Charts are available to all users signed up after September '23, the legacy Starter and Pro plans, and Enterprise plans. If you're on a legacy Free plan and want to access this integration, migrate to our new pricing via your [billing settings](https://app.revenuecat.com/settings/billing)
:::

RevenueCat charts allow you to understand your user base with key subscription specific metrics, filters, and segments. All charts are generated from the current snapshot of purchase receipts saved in RevenueCat and work independently from any in-app usage.

This means that your charts are always up-to-date, without having to rely on any client-side event logging. However, since receipt files are dynamic, this means even historical data may change from day-to-day if for example a user was refunded. This also means that data in RevenueCat may be different than other systems tracking similar metrics - see the section on [Differences In Data](/dashboard-and-metrics/charts#differences-in-data) for more information.

:::info Charts show production data only
Due to the limitations of the sandbox environments, charts are only displayed for production transaction data.
:::

## Data differences between systems

Reconciling data between multiple sources is a fundamental challenge for all analytics systems. As a consequence, in-app purchase data from Apple, Google, or Stripe may not match what RevenueCat reports in Charts or in [Overview](/dashboard-and-metrics/overview). Common reasons for these discrepancies are:

- You migrated your app to RevenueCat (receipts must be sent through our SDK or API to be counted in Charts)
- There is a disagreement between the store and RevenueCat over a definition (e.g., Apple uses fiscal months, whereas RevenueCat uses calendar months; Google considers trials to be active subscriptions, whereas RevenueCat does not)
- RevenueCat makes an estimation in the absence of clear guidance from the store (e.g., currency conversions, taxes, price changes)

When reporting tax information, please use the data provided by the payment processor (i.e., Apple, Google, Stripe), instead of RevenueCat data.

Please see our [community post](https://community.revenuecat.com/featured-articles-55/about-data-discrepancies-116) for a more in-depth discussion of data discrepancies.

## Recreating our Charts

Calculating in-app purchase metrics at scale is a complex process: Each of our metrics entail making decisions as to how users are grouped (i.e., cohorts), how users with different subscription histories are compared, etc.

We strive to provide clear and accurate insights into your data, but we cannot guarantee that our Charts definitions will match third-party definitions of similar metrics.

## Charts

For detailed information on a particular Chart, refer to the following guides:

- [Active Subscriptions](/dashboard-and-metrics/charts/active-subscriptions-chart)
- [Active Subscriptions Movement](/dashboard-and-metrics/charts/active-subscriptions-movement-chart)
- [Active Trials](/dashboard-and-metrics/charts/active-trials-chart)
- [Active Trials Movement](/dashboard-and-metrics/charts/active-trials-movement-chart)
- [Annual Recurring Revenue (ARR)](/dashboard-and-metrics/charts/annual-recurring-revenue-arr-chart)
- [App Store Refund Requests](/dashboard-and-metrics/charts/app-store-refund-requests-chart)
- [Churn](/dashboard-and-metrics/charts/churn-chart)
- [Cohort Explorer](/dashboard-and-metrics/charts/cohort-explorer)
- [Conversion to Paying](/dashboard-and-metrics/charts/conversion-to-paying-chart)
- [Initial Conversion](/dashboard-and-metrics/charts/initial-conversion-chart)
- [Monthly Recurring Revenue (MRR)](/dashboard-and-metrics/charts/monthly-recurring-revenue-mrr-chart)
- [Monthly Recurring Revenue Movement](/dashboard-and-metrics/charts/monthly-recurring-revenue-movement-chart)
- [New Customers](/dashboard-and-metrics/charts/new-customers-chart)
- [New Paid Subscriptions](/dashboard-and-metrics/charts/new-paid-subscriptions-chart)
- [New Trials](/dashboard-and-metrics/charts/new-trials-chart)
- [Non-subscription Purchases](/dashboard-and-metrics/charts/non-subscription-purchases-chart)
- [Play Store Cancel Reasons](/dashboard-and-metrics/charts/play-store-cancel-reasons-chart)
- [Prediction Explorer](/dashboard-and-metrics/charts/prediction-explorer)
- [Realized LTV per Customer](/dashboard-and-metrics/charts/realized-ltv-per-customer-chart)
- [Realized LTV per Paying Customer](/dashboard-and-metrics/charts/realized-ltv-per-paying-customer-chart)
- [Refund Rate](/dashboard-and-metrics/charts/refund-rate-chart)
- [Revenue](/dashboard-and-metrics/charts/revenue-chart)
- [Subscription Retention](/dashboard-and-metrics/charts/subscription-retention-chart)
- [Subscription Status](/dashboard-and-metrics/charts/subscription-status-chart)
- [Trial Conversion](/dashboard-and-metrics/charts/trial-conversion-chart)

## Filters and Segments

All charts can be filtered, and most charts support segmenting, though in some cases with a limited set of dimensions.

Filters allow you to limit the charts to only include data that matches one or more attributes. This is useful when you want to check the performance of a specific property, such as a certain country or product identifier.

Segments allow you to break down the chart totals into underlying data segments. This is useful for comparing the performance of specific properties, such as monthly vs. annual subscriptions.

| Attribute                   | Description                                                                                                                                                                                                                                   |
| :-------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Project                     | The different projects you have access to in RevenueCat. These projects contain your apps across various platforms.                                                                                                                           |
| Attribution Source          | If you're collecting [Apple Search Ads Attribution](/integrations/attribution/apple-search-ads), the source that the install derived from, between Apple Search Ads and Organic (iOS only).                                                   |
| Apple Search Ads Campaign   | If you're collecting [Apple Search Ads Attribution](/integrations/attribution/apple-search-ads), the specific campaign that drove the install (iOS only).                                                                                     |
| Apple Search Ads Ad Group   | If you're collecting [Apple Search Ads Attribution](/integrations/attribution/apple-search-ads), the specific ad group that drove the install (iOS only).                                                                                     |
| Apple Search Ads Keyword    | If you're collecting [Apple Search Ads Attribution](/integrations/attribution/apple-search-ads), the specific keyword that drove the install (iOS only).                                                                                      |
| Apple Search Ads Claim Type | If you're collecting [Apple Search Ads Attribution](/integrations/attribution/apple-search-ads), the attribution type that drove the install, `Click` for click-through attribution and `Impression` for view-through attribution (iOS only). |
| Country                     | The device locale that was recorded with the purchase or the last known locale of the customer. May be unknown.                                                                                                                               |
| First Purchase Month        | The month that the first purchase (incl. free trials) was recorded for the user (segment option only).                                                                                                                                        |
| Install Month               | The month that the user was first seen by RevenueCat (segment option only).                                                                                                                                                                   |
| Offer                       | The offer that was used for a transaction (if applicable).                                                                                                                                                                                    |
| Offer type                  | They type of offer that was used for a transaction (if applicable).                                                                                                                                                                           |
| Offering                    | The offering identifier set in RevenueCat.                                                                                                                                                                                                    |
| Placement                   | The custom paywall location that was defined in your app to serve an Offering.                                                                                                                                                                |
| Product Duration            | The duration of the normal subscription period (not trial or intro period).                                                                                                                                                                   |
| Product                     | The product identifier set in the store.                                                                                                                                                                                                      |
| Store                       | The store that processed the purchase. Either App Store, Play Store, Amazon Appstore, or Stripe.                                                                                                                                              |
| Targeting Rule              | A collection of conditions that, when they are true for a given customer, will result in that customer matching the rule and being served the corresponding Offerings.                                                                        |

:::info Product filters do not affect 'New Customers' number
Filters that refer to product dimensions such as Product, Product Duration, and Store do not apply to the 'New Customers' measure, since a New Customer may not have made a purchase and therefore not all New Customers could be filtered by this dimension. Other measures in these charts, such as Trial Starts or Realized LTV, can be filtered by product dimensions since the measures are derived from purchases.
:::

### Understanding offers

Some of your transactions may result from customer's accepting offers you made to them, and RevenueCat allows you to filter and/or segment charts by those offers to understand how they're contributing to business performance.

Here’s a quick look at the different offer types, showing how each is mapped from the store terminology to our terminology.

Below are the definitions for App Store offer types:

![](/images/app_store_offer_types.png)

Below are the definitions for Play Store offer types:

![](/images/play_store_offer_types.png)

For more details, check out the chart below.

| Offer Type         | Description                                                                                                                                           | Includes                                                                                                                                                                                                                                   | Example Offer (where rc.annual.39_99 is the product)                                                               |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| Free Trial         | A free introductory offer the customer accepts as a free trial.                                                                                       | <ul><li>App Store **Free Trial** Introductory Offers</li><li>Play Store free trial offer applied on initial subscription periods</li></ul>                                                                                                 | <ul><li>App Store: Free trial (rc.annual.39_99)</li><li>Play Store: free_trial_offer (rc.annual.39_99)</li></ul>   |
| Introductory Offer | A paid introductory offer that the customer accepts as a discount on their initial subscription period. This **does NOT** include free trial periods. | <ul><li>App Store **Pay Up Front** and **Pay As You Go** Introductory Offers</li><li>Play Store paid offers applied on initial subscription periods, including sequential discounted payments after the first subscription start</li></ul> | <ul><li>App Store: Intro Offer (rc.annual.39_99)</li><li>Play Store: intro_price_offer (rc.annual.39_99)</li></ul> |
| Offer Code         | A promo code that the customer enters to receive a discount or free trial (depending on the offer & store).                                           | <ul><li>App Store Offer Codes</li><li>Play Store Promo Codes (Billing Client 4 and earlier)</li></ul>                                                                                                                                      | black_friday_discount (rc.annual.39_99)                                                                            |
| Promotional Offer  | An offer that the customer received through your own custom logic.                                                                                    | <ul><li>App Store Promotional Offers</li></ul>                                                                                                                                                                                             | power_user_promo_offer (rc.annual.39_99)                                                                           |
| Win-Back Offer     | An offer that a customer with an expired subscription received to win them back.                                                                      | <ul><li>App Store Win-Back Offers</li></ul>                                                                                                                                                                                                | winback_monthly_offer (rc.annual.39_99)                                                                            |
| Unspecified Offer  | A Play Store offer for which we do not know the eligility criteria.                                                                                   | <ul><li>All other BC5 offers that are not applied on initial subscription periods</li></ul>                                                                                                                                                | holiday_2024_december (rc.annual.39_99)                                                                            |
| No Offer           | When none of the above Offer Types were used on the transaction.                                                                                      | None                                                                                                                                                                                                                                       | No Offer                                                                                                           |

:::warning
At this time, Stripe coupon codes are not supported.

(Revenue for those transactions _is_ correctly tracked, but the promo identifier is not supported for analysis in Charts)
:::

When filtering or segmenting by Offer Type, you'll be able to measure the aggregate usage of that Offer Type across all Stores and Products.

When filtering or segmenting by Offer, you'll be able to measure the usage of a specific Offer on a specific Product.

And of course, you can mix and match filters as needed to create your ideal view, such as:

1. [Active Subscriptions filtered to the App Store segmented by Offer Type](https://app.revenuecat.com/charts/actives?chart_type=Line&conversion_timeframe=7%20days&customer_lifetime=30%20days&filter=store%3A%3D%3Aapp_store&range=Last%2090%20days%3A2023-09-01%3A2023-11-29&segment=offer_type)
2. [Revenue filtered to the Offer Code Offer Type segmented by Offer](https://app.revenuecat.com/charts/revenue?chart_type=Stacked%20area&conversion_timeframe=7%20days&customer_lifetime=30%20days&filter=offer_type%3A%3D%3Aoffer_code&range=Last%2012%20months%3A2022-11-29%3A2023-11-29&segment=offer)

:::info
In order for RevenueCat to accurately track revenue for offer codes, you will need to upload an in-app purchase key. See our guide on [In-App Purchase Key Configuration](/service-credentials/itunesconnect-app-specific-shared-secret/in-app-purchase-key-configuration) for step-by-step instructions.
:::

## Conversion Charts

### Cohorting

To ensure our conversion rate charts provide an accurate measurement of the conversion "funnel" that an individual customer experiences, they are cohorted by the earliest date that a customer:

1. Was "first seen" (first opened your app), or
2. Made their first purchase (for purchases made outside of your app, like promoted purchases in the App Store)

**Example**: If a customer first opened your app on April 15th, 2022, but didn't make a purchase until May 21st, 2022, they would be included in the April 15th cohort.

:::info
Measuring conversion rates through a cohort of customers _from_ a given period, as opposed to a count of events _within_ a given period, is critical for accurate performance comparison.
:::

### Understanding conversion rates

We offer three conversion rate charts to measure different aspects of your conversion funnel:

1. Initial Conversion: The proportion of new customers from a given period who subscribe to or purchase any product, including free trials.
2. Conversion to Paying: The proportion of new customers from a given period who subscribe to or purchase any paid product.
3. Trial Conversion: The proportion of new customers from a given period starting free trials, through their conversion into paying subscriptions.

It's important to understand the relationships between these three charts, since depending on the nature of your product offerings, you may use these charts for different purposes.

**If all of your products offer a free trial, then Initial Conversion = Trial Start Rate.**
![](/images/1386416-image-20230224-130028_3ebe43d2f74d332988fa5cc86056ad41.png "image-20230224-130028.png")
**If all of your products begin with a paid subscription, then Initial Conversion = Conversion to Paying, and Trial Conversion is not applicable to your business.**
![](/images/611728c-image-20230224-155039_3cd4ae218ce1ee001a43382672e0e89a.png "image-20230224-155039.png")
**If your products contain a mix of subscriptions with and without trials, then these charts will measure distinct conversion rates. Initial Conversion will equal ([Trial Starts] + [Paying Customers]) / [New Customers], while Conversion to Paying will equal ([Trial Conversions] + [Paying Customers]) / [New Customers].**
![](/images/179324e-image-20230224-155057_9d198e0f4279cf5ab4d1de8487dbbf23.png "image-20230224-155057.png")

### Conversion Timeframes

On our Initial Conversion and Conversion to Paying charts we offer a "Conversion Timeframe" selector that lets you choose how long to give each cohort to convert within to be included in the chart.

Since these charts are cohorted by a customer's first seen date, earlier cohorts have had more opportunity to convert, which is one reason why the most recent periods in your chart might have lower reported conversion rates.

By setting a Conversion Timeframe of 7 days, for example, you ensure that even periods which are much older than 7 days only include conversions that occurred within 7 complete days of customer's first seen date in the chart. If you compare that to a recent cohort that's also had 7 complete days to convert, that you're seeing an accurate comparison of performance within that defined time period.

Here's a specific example using a 7 day Conversion Timeframe:

- A cohort that is 14 days old would only include conversions that occurred within the first 7 complete days, but none that occurred after
- A cohort that is 10 days old would include all conversions that occurred within the first 7 complete days, but none that occurred after, allowing for accurate comparison with the older cohort even though that cohort has had more opportunities to convert -- that additional time is excluded from this view.
- While a cohort that is 5 days old would include all conversions that occurred thus far, since all have occurred within the first 7 complete days, and it would additionally be marked as incomplete, since that cohort still has remaining time before it reaches full maturity.

:::info
Select the "Unbounded" conversion timeframe to see all the conversions for a given cohort, regardless of when they occurred.
:::

Additionally, cohorts that have not yet had the time fully mature (as defined by the Conversion Timeframe selected) will be marked as incomplete periods and styled accordingly. This ensures that you can interpret their performance accurately against other periods. Learn more about incomplete periods [here](/dashboard-and-metrics/charts/charts-feature-incomplete-periods).

:::warning
Conversion Timeframes are not yet supported on the Trial Conversion chart, but will be coming soon.
:::

## Exporting Data

The underlying chart data can be exported in .csv format by clicking the _Export CSV_ button.
![](/images/90cf474-demo.revenuecat.com__a403889fd60cfe4971459f241850f4e8.png "demo.revenuecat.com_.png")

## Saving Charts

Your most frequently used chart configurations can be saved by clicking on the _Save_ button. This will save all settings such as segments, filters, time / period settings, and bar / line view.

![](/images/bbfca79-Screenshot_2023-03-27_at_2.35.10_PM_b90317c45fb2b111673dd43ed89652f3.png "Screenshot 2023-03-27 at 2.35.10 PM.png")

Time settings are saved relatively. Meaning if you select "last 7 days", the chart will always show the last 7 days prior to the current day (not the 7 days prior to the date the chart was saved). This does not apply to custom timeframes.

Give it a name and select _Save_, your chart will be saved on the left-hand side.

![](/images/e1ba744-Screenshot_2023-03-27_at_2.36.33_PM_7f239f46e30c51d62b4a1040a1fbca12.png "Screenshot 2023-03-27 at 2.36.33 PM.png")

![](/images/878cc0f-demo.revenuecat.com__1_5704f56b46d8a9c7e420ec327a608ca2.png "demo.revenuecat.com_ (1).png")

## Displaying revenue data in other currencies

By default the RevenueCat Dashboard is set to use USD as the display currency, but this can be modified through Account Settings to view your data in other supported currencies. To learn more, [click here](/dashboard-and-metrics/display-currency).

## Other Options

### Date Range

Choose the the date range for the x-axis of the charts.

![](/images/60cba96-Screenshot_2023-03-27_at_2.44.10_PM_dfb13d7069873848b7418a679089562a.png "Screenshot 2023-03-27 at 2.44.10 PM.png")

### Resolution

Choose the time scale for the x-axis of the charts. Use a _day_ timescale to see the most granular level of data and lower resolutions like _month_ to spot longer term trends.

![](/images/15462d2-Screenshot_2023-03-27_at_2.46.13_PM_7f966ba5038c8ba6eafd5bbc9e9b851b.png "Screenshot 2023-03-27 at 2.46.13 PM.png")

## Timezones

All charts are displayed in UTC time.

## Refunds

Whenever a subscription is refunded, that subscription is counted as active between its start date and the refund date. Any refunded revenue is removed from all revenue-based charts. You can use the [Refund Rate](#refund-rate) chart to gain additional insights into how many of your subscriptions get refunded, and how that refund rate develops over time.

## Next Steps

- Learn how to view the purchase history of a specific user and grant them entitlement access via the [Customer View ](/dashboard-and-metrics/customer-history/basic-information)
