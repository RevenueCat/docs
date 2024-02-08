---
title: Trial Conversion Chart
slug: /trial-conversion-chart
hidden: false
---

## Definition

The Trial Conversion chart gives you insight into the conversion of customers starting free trials, through their conversion into paying subscriptions.

### Available settings

- Filters: Yes
- Segments: No
- Conversion Timeframe: No (coming soon)
- Absolute/Relative Selector: Yes

### Customer cohorts

This chart is cohorted by the earliest date that a customer:

1. Was "first seen" (first opened your app), or
2. Made their first purchase (for purchases made outside of your app, like promoted purchases in the App Store)

**Example**: If a customer first opened your app on April 15th, 2022, but didn't make a purchase until May 21st, 2022, they would be included in the April 15th cohort.

:::info
Measuring conversion rates through a cohort of customers _from_ a given period, as opposed to a count of events _within_ a given period, is critical for accurate performance comparison.
:::

## How to use Trial Conversion in your business

Trials Conversion funnels are extremely important for understanding how well your app is monetizing.

The Start Rate is a valuable way of measuring how easily users are finding your trial, and how compelling its value proposition is; but Conversion Rate is the real measure of how effectively that value proposition has been delivered through your product during the trial period.

The product of these two rates [(Start Rate) x (Conversion Rate)] is your Overall Conversion Rate which is also indicative of the overall fit of your product and pricing.

## Calculation

For each period, we measure:

**Absolute**

1. New Customers: The count of new customers first seen by RevenueCat within the period.
2. Trials: The count of those customers that started a free trial.
3. Converted: The count of those trial starts that converted to paid.
4. Pending: The count of those trial starts that have not yet converted to paid, have auto-renew enabled, and have not yet expired.
5. Abandoned: The count of those trial starts that have auto-renew disabled or have expired.

**Relative**

1. New Customers: The count of new customers first seen by RevenueCat within the period.
2. Start Rate: The portion of those customers that started a free trial.
3. Conversion Rate: The portion of those trial starts that converted to paid.
4. Pending Rate: The portion of those trial starts that have not yet converted to paid, have auto-renew enabled, and have not yet expired.
5. Abandoned Rate: The portion of those trial starts that have auto-renew disabled or have expired.

### Formulas

1. [Trials] / [New Customers] = Start Rate
2. [Converted] / [Trials] = Conversion Rate
3. [Pending] / [Trials] = Pending Rate
4. [Abandoned] / [Trials] = Abandoned Rate

:::info
The sum of Converted, Pending, and Abandoned will always equal the count of Trials for a given period.
:::

## FAQs

| Question                                                                                                        | Answer                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| What is the relationship between Trial Conversion and other conversion charts?                                  | Learn more about the relationship between conversion charts [here](/dashboard-and-metrics/charts#understanding-conversion-rates).                                                                                                                                                                                                                                                                                                                                                                                                   |
| If a payment is later refunded, will that cause the number of Converted trials or Conversion Rate to decrease?  | Yes, a refunded paid transaction would be excluded from this chart. Therefore, the corresponding customer cohort would have fewer converted trials and a lower Conversion Rate after that refund occurred. [Learn more here](/dashboard-and-metrics/charts/refund-rate-chart).                                                                                                                                                                                                                                                      |
| Does this chart count how many of each conversion type occurred in a given period?                              | No, the Trial Conversion chart is measuring what portion of a cohort of customers from a given period converted – it does not measure when those conversions happened, or what other conversion to trial or paid might have happened in a given period. To measure new conversions that occurred within a given period, explore our [Active Subscriptions Movement](/dashboard-and-metrics/charts/active-subscriptions-movement-chart) chart and [Active Trials Movement](/dashboard-and-metrics/charts/active-trials-chart) chart. |
| Why does the count of New Customers not change when filtering by Product, Product Duration, Store, or Offering? | These filters are only applicable to subscribers because a customer does not have a designated “product” unless they make a purchase. Because of this, when using filters that only apply to subscribers, only the conversion measure will be filtered.                                                                                                                                                                                                                                                                             |
| Why does the count of Trials or Conversions in this chart differ from other sources outside of RevenueCat?      | Though there are many reasons why different data sources may have different definitions, the most common difference between our conversion charts and other sources is our cohorting definition. Because this chart is cohorted by a customer’s first seen date, the count of Trials or Conversions in each period is likely to differ from other sources that either cohort based on event date, or have a different definition of a comparable customer cohort.                                                                   |
| Does the Trial Conversion chart support Conversion Timeframe selection?                                         | Not at this time, though support for Conversion Timeframe selection in this chart will come in the future.                                                                                                                                                                                                                                                                                                                                                                                                                          |

![](https://files.readme.io/bdf3068-TrialConversion.png "TrialConversion.png")
