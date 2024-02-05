---
title: Charts
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

## Data Discrepancies

Reconciling data between multiple sources is a fundamental challenge for all analytics systems. As a consequence, in-app purchase data from Apple, Google, or Stripe may not match what RevenueCat reports in Charts or in [Overview](/dashboard-and-metrics/overview). Common reasons for these discrepancies are:

- You migrated your app to RevenueCat (receipts must be sent through our SDK or API to be counted in Charts)
- There is a disagreement between the store and RevenueCat over a definition (e.g., Apple uses fiscal months, whereas RevenueCat uses calendar months; Google considers trials to be active subscriptions, whereas RevenueCat does not)
- RevenueCat makes an estimation in the absence of clear guidance from the store (e.g., currency conversions, taxes, price changes)

When reporting tax information, please use the data provided by the payment processor (i.e., Apple, Google, Stripe), instead of RevenueCat data.

Please see our [community post](https://community.revenuecat.com/featured-articles-55/about-data-discrepancies-116) for a more in-depth discussion of data discrepancies.

## Recreating Our Charts

Calculating in-app purchase metrics at scale is a complex process: Each of our metrics entail making decisions as to how users are grouped (i.e., cohorts), how users with different subscription histories are compared, etc.

We strive to provide clear and accurate insights into your data, but we cannot guarantee that our Charts definitions will match third-party definitions of similar metrics.

## Charts

For detailed information on a particular Chart, refer to the following guides:

- [Active Subscriptions ](/dashboard-and-metrics/charts/active-subscriptions-chart)
- [Active Subscriptions Movement ](/dashboard-and-metrics/charts/active-subscriptions-movement-chart)
- [Churn ](/dashboard-and-metrics/charts/churn-chart)
- [Refund Rate ](/dashboard-and-metrics/charts/refund-rate-chart)
- [Annual Recurring Revenue (ARR) ](/dashboard-and-metrics/charts/annual-recurring-revenue-arr-chart)
- [Realized LTV per Customer ](/dashboard-and-metrics/charts/realized-ltv-per-customer-chart)
- [Realized LTV per Paying Customer ](/dashboard-and-metrics/charts/realized-ltv-per-paying-customer-chart)
- [Monthly Recurring Revenue (MRR) ](/dashboard-and-metrics/charts/monthly-recurring-revenue-mrr-chart)
- [Monthly Recurring Revenue Movement ](/dashboard-and-metrics/charts/monthly-recurring-revenue-movement-chart)
- [Revenue ](/dashboard-and-metrics/charts/revenue-chart)
- [Conversion to Paying ](/dashboard-and-metrics/charts/conversion-to-paying-chart)
- [Initial Conversion ](/dashboard-and-metrics/charts/initial-conversion-chart)
- [Trial Conversion ](/dashboard-and-metrics/charts/trial-conversion-chart)
- [Subscription Retention ](/dashboard-and-metrics/charts/subscription-retention-chart)
- [Active Trials ](/dashboard-and-metrics/charts/active-trials-chart)
- [Active Trials Movement ](/dashboard-and-metrics/charts/active-trials-movement-chart)

## Filters and Segments

All charts can be filtered, while subscription, revenue, and active trial charts can be filtered and/or segmented.

Filters allow you to limit the charts to only include data that matches one or more attributes. This is useful when you want to check the performance of a specific property, such as a certain country or product identifier.

Segments allow you to break down the chart totals into underlying data segments. This is useful for comparing the performance of specific properties, such as monthly vs. annual subscriptions.

| Attribute                 | Description                                                                                                                                               |
| :------------------------ | :-------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Project                   | The different projects you have access to in RevenueCat. These projects contain your apps across various platforms.                                       |
| Apple Search Ads Ad Group | If you're collecting [Apple Search Ads Attribution](/integrations/attribution/apple-search-ads), the specific ad group that drove the install (iOS only). |
| Apple Search Ads Campaign | If you're collecting [Apple Search Ads Attribution](/integrations/attribution/apple-search-ads), the specific campaign that drove the install (iOS only). |
| Country                   | The device locale that was recorded with the purchase or the last known locale of the customer. May be unknown.                                           |
| First Purchase Month      | The month that the first purchase (incl. free trials) was recorded for the user (segment option only).                                                    |
| Install Month             | The month that the user was first seen by RevenueCat (segment option only).                                                                               |
| Offer                     | The offer that was used for a transaction (if applicable).                                                                                                |
| Offer type                | They type of offer that was used for a transaction (if applicable).                                                                                       |
| Offering                  | The offering identifier set in RevenueCat.                                                                                                                |
| Product Duration          | The duration of the normal subscription period (not trial or intro period).                                                                               |
| Product                   | The product identifier set in the store.                                                                                                                  |
| Store                     | The store that processed the purchase. Either App Store, Play Store, Amazon Appstore, or Stripe.                                                          |

:::info Filters do not affect 'New Customers' number
Filters and segments do not apply to the 'New Customers' number. It is possible for customers to jump between web, iOS, and Android devices, so these filters only apply to transactions, which always happen through a particular Store.
:::

### Understanding offers

Some of your transactions may result from customer's accepting offers you made to them, and RevenueCat allows you to filter and/or segment charts by those offers to understand how they're contributing to business performance.

We track three distinct Offer Types:

| Offer Type        | Description                                                                                                                                                                                                                                                  | Example Offer (where rc.annual.39_99 is the product) |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------- |
| Intro Offer       | A paid introductory offer than the customer accepts as a discount on their initial subscription period. This does NOT include free trial periods. Includes: - App Store Introductory Offers - Play Store paid offers applied on initial subscription periods | Intro Offer (rc.annual.39_99)                        |
| Offer Code        | A promo code that the customer enters to receive a discount or free trial (depending on the offer & store). Includes: - App Store Promo Codes - Play Store Promo Codes                                                                                       | black_friday_discount (rc.annual.39_99)              |
| Promotional Offer | An offer that the customer received through your own custom logic. Includes: - App Store Promotional Offers                                                                                                                                                  | power_user_promo_offer (rc.annual.39_99)             |
| No Offer          | When none of the above Offer Types were used on the transaction                                                                                                                                                                                              | No Offer                                             |

:::warning
At this time, Google Play Offers on Billing Client 5 and above are only supported when they are applied as offers on initial subscription periods.

In addition, Stripe coupon codes are not supported at this time.

(In both cases, revenue for those transactions _is_ correctly tracked, but the promo identifier is not supported for analysis in Charts)
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
![](https://files.readme.io/1386416-image-20230224-130028.png "image-20230224-130028.png")  
**If all of your products begin with a paid subscription, then Initial Conversion = Conversion to Paying, and Trial Conversion is not applicable to your business.**  
![](https://files.readme.io/611728c-image-20230224-155039.png "image-20230224-155039.png")  
**If your products contain a mix of subscriptions with and without trials, then these charts will measure distinct conversion rates. Initial Conversion will equal ([Trial Starts] + [Paying Customers]) / [New Customers], while Conversion to Paying will equal ([Trial Conversions] + [Paying Customers]) / [New Customers].**  
![](https://files.readme.io/179324e-image-20230224-155057.png "image-20230224-155057.png")

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
![](https://files.readme.io/90cf474-demo.revenuecat.com_.png "demo.revenuecat.com_.png")

## Saving Charts

Your most frequently used chart configurations can be saved by clicking on the _Save_ button. This will save all settings such as segments, filters, time / period settings, and bar / line view.

![](https://files.readme.io/bbfca79-Screenshot_2023-03-27_at_2.35.10_PM.png "Screenshot 2023-03-27 at 2.35.10 PM.png")

Time settings are saved relatively. Meaning if you select "last 7 days", the chart will always show the last 7 days prior to the current day (not the 7 days prior to the date the chart was saved). This does not apply to custom timeframes.

Give it a name and select _Save_, your chart will be saved on the left-hand side.

![](https://files.readme.io/e1ba744-Screenshot_2023-03-27_at_2.36.33_PM.png "Screenshot 2023-03-27 at 2.36.33 PM.png")

![](https://files.readme.io/878cc0f-demo.revenuecat.com__1.png "demo.revenuecat.com_ (1).png")

## Other Options

### Date Range

Choose the the date range for the x-axis of the charts.

![](https://files.readme.io/60cba96-Screenshot_2023-03-27_at_2.44.10_PM.png "Screenshot 2023-03-27 at 2.44.10 PM.png")

### Resolution

Choose the time scale for the x-axis of the charts. Use a _day_ timescale to see the most granular level of data and lower resolutions like _month_ to spot longer term trends.

![](https://files.readme.io/15462d2-Screenshot_2023-03-27_at_2.46.13_PM.png "Screenshot 2023-03-27 at 2.46.13 PM.png")

## Timezones

All charts are displayed in UTC time.

## Refunds

Whenever a subscription is refunded, that subscription is counted as active between its start date and the refund date. Any refunded revenue is removed from all revenue-based charts. You can use the [Refund Rate](#refund-rate) chart to gain additional insights into how many of your subscriptions get refunded, and how that refund rate develops over time.

## Next Steps

- Learn how to view the purchase history of a specific user and grant them promotional access via the [Customer View ](/dashboard-and-metrics/customers-group/basic-information)
