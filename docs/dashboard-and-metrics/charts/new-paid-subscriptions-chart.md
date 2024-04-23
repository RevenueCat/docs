---
title: New Paid Subscriptions Chart
slug: new-paid-subscriptions-chart
hidden: false
---

## Definition

The New Paid Subscriptions chart measures the number of subscriptions that first paid in a period, broken down by how the subscription was created.

When a subscription has its first payment, it becomes an Active Subscription, and therefore Total New Paid Subs in this chart can be directly compared with New Actives in the Active Subscriptions Movement chart.

### Available settings

- Filters: Yes
- Segments: Yes

## How to use New Paid Subscriptions in your business

This chart should be used to track the total number of subscriptions that transition to paid in a given period, filtered or segmented by the dimensions that are most important to your business to understand what segments are most meaningfully contributing to your performance.

Therefore, you may use it to understand what portion of your new subscriptions are coming from each type (from a trial, introductory offer, or direct paid), each store, each country, etc.

In addition, you can also use this chart along with the [Install month](https://app.revenuecat.com/charts/actives_new?chart_type=Line&range=Last%2012%20months&resolution=2&segment=install_month) segment to reconcile conversion charts such as Conversion to Paying and Trial Conversion, since it will show you how many of your new paid subscriptions of each type came from each install month, which is the same cohorting used for conversion charts.

## Calculation

For each period we count:

1. Trial Conversions: New paid subscriptions that started from trials.
2. Intro Offers: New paid subscriptions that started with paid introductory offers.
3. Direct Subscriptions: New paid subscriptions that were directly started without a trial or introductory offer.

:::info
Subscriptions that are started with paid introductory offers are immediately considered paid, active subscriptions. This is different than how trials are handled, since trials do not represent the first payment that a customer makes on their subscription.
:::

### Formula

[Trial Conversions] + [Intro Offers] + [Direct Subscriptions] = Total New Paid Subscriptions

## FAQs

| Question                                                                                                                                          | Answer                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Why might Total New Paid Subscriptions in a given period differ from New Paying Customers in the same period from the Conversion to Paying chart? | These two charts are used to measure two different things: New Paid Subscriptions measures the count of new paid subscriptions that transitioned to paid in a period, and Conversion to Paying measures the conversion rate of customers first seen in a given period who eventually converted to paying. Since the Conversion to Paying chart is cohorted by a customer's first seen date, each period will count the conversions to paying of customer's who were first seen in that period. That means it will exclude conversions to paying that occurred in that period from customer's who were first seen outside of that period, and will include conversions to paying created outside of that period by customer's who were first seen in that period. You can reconcile the difference between these two charts by comparing the Unbounded count of Paying Customers from a given month in the Conversion to Paying chart with the total number of New Paid Subscriptions from a given install month when segmenting the New Paid Subscriptions chart by install month. |
| Why might Trial Conversions in a given period differ from Converted trials in the same period from the Trial Conversion chart?                    | Like the Conversion to Paying chart, the Trial Conversion chart is cohorted by a customer's first seen date, and therefore will differ from the New Paid Subscriptions chart for the same reasons. You can reconcile the differences between these two charts by comparing the Converted trials from a given month in the Trial Conversion chart with the total number of Trial Conversions from a given install month when segmenting the New Paid Subscriptions chart by install month.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
