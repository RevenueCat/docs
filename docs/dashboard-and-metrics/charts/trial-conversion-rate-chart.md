---
title: Trial Conversion Rate Chart
slug: trial-conversion-rate-chart
hidden: true
---

The Trial Conversion Rate chart measures the number of trials that started in a given period, and the portion of them that converted to paying customers, so that you can understand how likelihood to pay changes over time and by various dimensions.

:::warning Trial Conversion Rate vs. Trial Conversion Funnel
Please note that the number of Trial Starts reported in each period in this chart will differ from the same period of the Trial Conversion Funnel, since the funnel is cohorted by a customer's first seen date, not by trial start date.
:::

### Available settings

- Filters: Yes
- Segments: Yes
- Conversion Timeframe: No

### Trial cohorts

This chart is cohorted by a trial's start date. As a result, all dates which contain trials that have not yet ended will have an incomplete conversion rate, since those trials may still convert to paid but have not yet had the opportunity to.

:::info Incomplete period styling
Support for incomplete period styling on this chart will come in the future.
:::

## How to use Trial Conversion Rate in your business

Tracking the conversion rate from trial to paid is critical for understanding whether customers are getting the expected value out of your app.

In addition, this chart can be segmented by product dimensions like Product Duration and Offering to analyze how likelihood to pay is influenced by the type of purchase being made; or by customer dimensions like Apple Search Ads Keyword, to understand how a customer's acquisition source is impacting conversion.

## Calculation

For each period, we measure:

1. Trial Starts: The count of trials started in the period.
2. Conversions: The count of those trials that converted to paid.

### Formulas

1. [Conversions] / [Trial Starts] = Conversion Rate

## FAQs

| Question                                                                                                               | Answer                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ---------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| What is the relationship between Trial Conversion and other conversion charts?                                         | Learn more about the relationship between conversion charts [here](/dashboard-and-metrics/charts#understanding-conversion-rates).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| Why might Trial Starts in a given period differ from Trial Starts in the same period from the Trial Conversion Funnel? | These two charts are used to measure two different things: Trial Conversion Rate measures the count of trials started in a period, and Trial Conversion Funnel measures the conversion rate of customers first seen in a given period through the trial funnel. Since the Trial Conversion Funnel is cohorted by a customer's first seen date, each period will count the trials created by customer's who were first seen in that period (if the trial was their first conversion). That means it will exclude trials created in that period from customer's who were first seen outside of that period, and will include trials created outside of that period by customer's who were first seen in that period. |
| If a payment is later refunded, will that cause the number of Conversions and the Conversion Rate to decrease?         | Yes, a refunded trial to paid conversion would be excluded from this chart.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| Does the Trial Conversion Rate chart support incomplete period styling?                                                | Not at this time, though support for incomplete period styling in this chart will come in the future.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
