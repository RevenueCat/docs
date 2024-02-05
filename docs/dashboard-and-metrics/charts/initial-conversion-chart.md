---
title: Initial Conversion Chart
slug: initial-conversion-chart
hidden: false
---

## Definition

The Initial Conversion chart shows what proportion of new customers subscribe to or purchase any product. This includes trial starts, direct subscription purchases (with or without introductory offers), and purchases of non-renewing IAPs like consumables.

### Available settings

- Filters: Yes
- Segments: Yes
- Conversion Timeframe: Yes

### Customer cohorts

This chart is cohorted by the earliest date that a customer:

1. Was "first seen" (first opened your app), or
2. Made their first purchase (for purchases made outside of your app, like promoted purchases in the App Store)

**Example**: If a customer first opened your app on April 15th, 2022, but didn't make a purchase until May 21st, 2022, they would be included in the April 15th cohort.

:::info
Measuring conversion rates through a cohort of customers _from_ a given period, as opposed to a count of events _within_ a given period, is critical for accurate performance comparison.
:::

### Conversion Timeframe

The Conversion Timeframe selector limits the amount of time each cohort (period) has to convert within to enable accurate period-over-period comparisons. For example, at a Conversion Timeframe of 7 days:

- A cohort that is 14 days old would only include conversions that occurred within the first 7 complete days, but none that occurred after
- A cohort that is 10 days old would include all conversions that occurred within the first 7 complete days, but none that occurred after, allowing for accurate comparison with the older cohort even though that cohort has had more opportunities to convert -- that additional time is excluded from this view.
- While a cohort that is 5 days old would include all conversions that occurred thus far, since all have occurred within the first 7 complete days, and it would additionally be marked as incomplete, since that cohort still has remaining time before it reaches full maturity.

:::info
Select the "Unbounded" conversion timeframe to see all conversions for a given cohort, regardless of when they occurred.
:::

## How to use Initial Conversion in your business

The initial conversion rate is a good indicator of how effective your app is at acquiring customers who are most likely to pay for your product, and messaging the value proposition of your premium products, including the effectiveness of your paywall.

Try segmenting by key acquisition dimensions, such as by [Apple Search Ads Campaign](https://app.revenuecat.com/charts/initial_conversion?chart_type=Line&conversion_timeframe=7%20days&customer_lifetime=30%20days&range=Last%2012%20months%3A2022-02-09%3A2023-02-09&resolution=2&segment=apple_search_ads_campaign) (requires the [Apple Search Ads](/integrations/attribution/apple-search-ads) integration), to see which customer groups you are converting most effectively.

Or, check out [Experiments](/tools/experiments-v1/experiments-overview-v1) to launch your first pricing test to see how you can optimize your pricing to increase conversions.

## Calculation

For each period, we measure:

1. New Customers: The count of new customers first seen by RevenueCat within the period
2. Initial Conversions: The count of those customers that converted on any product or subscription within the specified Conversion Timeframe

### Formula

[Initial Conversions] / [New Customers] = Initial Conversion Rate

## FAQs

| Question                                                                                                        | Answer                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| What types of conversions get counted as an initial conversion?                                                 | If a customer purchases any product, or starts any subscription, they are counted as an initial conversion. This includes subscription starts with trials or introductory offers; as well as one-time transactions such as non-consumables, consumables, and non-renewing subscriptions.\n\nTry filtering by specific products to understand which products are driving the highest number of initial conversions for your business.                                                                       |
| What is the relationship between Initial Conversion and other conversion charts?                                | Learn more about the relationship between conversion charts [here](/dashboard-and-metrics/charts#understanding-conversion-rates).                                                                                                                                                                                                                                                                                                                                                                          |
| If a payment is later refunded, will that cause Initial Conversion to decrease?                                 | If some of your Initial Conversions derive from paid transactions (as opposed to trials) then yes, a refunded paid transaction would be excluded from this chart. \n\nTherefore, the corresponding customer cohort would have lower Initial Conversion after that refund occurred. [Learn more here](/dashboard-and-metrics/charts/refund-rate-chart).                                                                                                                                                     |
| Does this chart count how many initial conversions occurred in a given period?                                  | No, the Initial Conversion chart is measuring what portion of a cohort of customers from a given period had a conversion – it does not measure when those conversions happened, or what other conversions might have happened in a given period.\n\nTo measure new conversions that occurred within a given period, explore our [Active Subscriptions Movement](active-subscriptions-movement-chart) chart and [Active Trials Movement](/dashboard-and-metrics/charts/active-trials-movement-chart) chart. |
| Why does the count of New Customers not change when filtering by Product, Product Duration, Store, or Offering? | These filters are only applicable to subscribers because a customer does not have a designated “product” unless they make a purchase.\n\nBecause of this, when using filters that only apply to subscribers, only the conversion measure will be filtered.                                                                                                                                                                                                                                                 |
| Why does the count of Initial Conversions in this chart differ from other sources outside of RevenueCat?        | Though there are many reasons why different data sources may have different definitions, the most common difference between our conversion charts and other sources is our cohorting definition.\n\nBecause this chart is cohorted by a customer’s first seen date, the count of Initial Conversions in each period is likely to differ from other sources that either cohort based on event date, or have a different definition of a comparable customer cohort.                                         |

![](https://files.readme.io/67164f0-InitialConversion.png "InitialConversion.png")
