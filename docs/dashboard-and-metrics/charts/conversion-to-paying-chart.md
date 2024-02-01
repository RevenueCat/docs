---
title: Conversion to Paying Chart
slug: conversion-to-paying-chart
hidden: false
---

## Definition

The Conversion to Paying chart shows what proportion of new customers become paying customers. For many subscription app businesses, this represents a successful completion of the acquisition funnel, and marks the transition of this customer from a subscriber to acquire to a subscriber to retain.

### Available settings

- Filters: Yes
- Segments: Yes
- Conversion Timeframe: Yes

### Customer cohorts

This chart is cohorted by the earliest date that a customer:

- Was "first seen" (first opened your app), or
- Made their first purchase (for purchases made outside of your app, like promoted purchases in the App Store)

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

## How to use Conversion to Paying in your business

The conversion rate to paying is a good indicator of how effective your app is at acquiring customers who are most likely to pay for your product and demonstrating the value of your premium products.

Since it may capture multiple steps of your acquisition funnel (e.g. the conversion to trial start, and then to paid from trial), try segmenting by key subscriber demographics and exploring other conversion charts to analyze your trends more deeply.

## Calculation

For each period, we measure:

1. New Customers: The count of new customers first seen by RevenueCat within the period
2. Paying Customers: The count of those customers that made any payment (such as subscriptions not in their trial period, or non-renewing IAPs) within the specified Conversion Timeframe

### Formula

[Paying Customers] / [New Customers] = Conversion to Paying

## FAQs

| Question                                                                                                        | Answer                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| What types of payments get counted as a conversion to paying?                                                   | If a customer purchases any product, or starts any paid subscription, they are counted as a paid conversion. This includes subscription starts with introductory offers; as well as one-time transactions such as non-consumables, consumables, and non-renewing subscriptions.                                                                                                                                                                              |
| If a payment is later refunded, will that cause Conversion to Paying to decrease?                               | Yes, a refunded paid transaction would be excluded from this chart. Therefore, the corresponding customer cohort would have lower Conversion to Paying after that refund occurred. [Learn more here](/docs/dashboard-and-metrics/charts/refund-rate-chart).                                                                                                                                                                                                                               |
| What is the relationship between Conversion to Paying and other conversion charts?                              | Learn more about the relationship between conversion charts [here](/docs/dashboard-and-metrics/charts#understanding-conversion-rates).                                                                                                                                                                                                                                                                                                                                             |
| Does this chart count how many conversions to paying occurred in a given period?                                | No, the Conversion to Paying chart is measuring what portion of a cohort of customers from a given period convert to paying – it does not measure when those conversions happened, or what other conversion to paying might have happened in a given period. To measure new conversions to paying within a given period, explore our [Active Subscriptions Movement](/docs/dashboard-and-metrics/charts/active-subscriptions-movement-chart) chart.                                       |
| Why does the count of New Customers not change when filtering by Product, Product Duration, Store, or Offering? | These filters are only applicable to subscribers because a customer does not have a designated “product” unless they make a purchase. Because of this, when using filters that only apply to subscribers, only the conversion measure will be filtered.                                                                                                                                                                                                      |
| Why does the count of Paying Customers in this chart differ from other sources outside of RevenueCat?           | Though there are many reasons why different data sources may have different definitions, the most common difference between our conversion charts and other sources is our cohorting definition. Because this chart is cohorted by a customer’s first seen date, the count of Paying Customers in each period is likely to differ from other sources that either cohort based on event date, or have a different definition of a comparable customer cohort. |

![](https://files.readme.io/452d65c-ConversionToPaying.png "ConversionToPaying.png")
