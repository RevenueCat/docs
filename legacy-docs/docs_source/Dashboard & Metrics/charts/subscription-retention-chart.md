---
title: Subscription Retention Chart
slug: subscription-retention-chart
hidden: false
---
## Definition

Subscription Retention shows you how paying subscriptions renew and retain over time by cohorts, which are segmented by subscription start date by default, but can be segmented by other fields like Country or Product as well.

### Available settings

- Filters: Yes
- Segments: Yes
- Absolute/Relative Selector: Yes
- Retention Period Selector: Yes

### Segmentation & cohorting

When segmenting by subscription start date, cohorts are segmented by the start of a paid subscription. Subsequent periods along the horizontal table indicate how many subscriptions continued renewing through those periods. 

When segmenting by other dimensions, such as Country or Store, cohorts are segmented by the values within that dimension (e.g. App Store or Play Store for the Store segment), and include all paid subscriptions started within the specified date range. Subsequent periods along the horizontal table indicate the portion of subscriptions that successfully renewed out of all those that had the opportunity to renew in a given period.

## How to use Subscription Retention in your business

Measuring Subscription Retention is crucial for understanding:

1. How your product is delivering value over time
2. How your Realized LTV is likely to change over time, and
3. What subscriber segments exhibit the strongest and weakest retention

By studying this data, you may learn which customer segments are worth focusing your product and marketing efforts on more fully, or where you have the opportunity to improve your pricing to increase retention over time.

## Calculation

For each period, we measure:

**Subscriptions: The count of new paid subscriptions started within that period.**

- This differs from other charts that are cohorted by a customer’s first seen date. This chart is cohorted by first purchase date.

**Retention through each available period**

- Retention: The number of subscriptions in the cohort who made an additional payment in a given period that have had the opportunity to do so.
- Available period: Use the date range selector to determine the range of subscribers to include in the chart. For each cohort included in that date range, all available retention periods will be provided. 

> 📘 Segmenting by other dimensions
> 
> When segmenting by subscription start date, each subscriber in that cohort will have had an equal opportunity to renew within a given period, but when segmenting by other dimensions, each subscriber may have different subscription start dates, and therefore different renewal opportunities.
> 
> As a result, the retention rate within each period cannot be directly compared to the total size of the cohort, because we will only measure the retention rate of the portion of that cohort that had the opportunity to renew in that period (e.g. for Month 3 retention, we will only include subscribers whose subscription start date is at least 3 months ago).

### Formula

**When segmenting by Subscription Start Date**  
[Retained Subscriptions at x period] / [Subscriptions] = Retention

**When segmenting by other dimensions**  
[Retained Subscriptions at x period] / [Subscriptions that have had the opportunity to renew] = Retention

> 📘 
> 
> Retention is always calculated relative to the size of the initial cohort that has had the opportunity to renew. Retention is _not_ calculated relative to the prior period.

## FAQs

[block:parameters]
{
  "data": {
    "h-0": "Question",
    "h-1": "Answer",
    "0-0": "How are resubscribes handled in Subscription Retention?",
    "0-1": "If a user churns, but later resubscribes, they will be counted as a retained subscription in the original purchase period.",
    "1-0": "How are refunds handled in Subscription Retention?",
    "1-1": "Refunded subscriptions are treated like subscriptions that churned during the period that the refund occurred in on the App Store & Play Store, since their access to the product is immediately revoked. On Stripe, however, you can decide whether or not to revoke access, which will determine whether the underlying subscription is treated as churned or not.",
    "2-0": "How are product changes handled in Subscription Retention?",
    "2-1": "This chart measures retention on a per-product basis.  \n  \nIf a subscriber changes products, they would be counted as “churned” on the old product and start a new “retention journey” on the new one. Their new cohort would be based on the date the transaction for the new product was completed.",
    "3-0": "Can I measure Subscription Retention across all product durations?",
    "3-1": "Subscription Retention is filtered by product duration based on the selected Retention Period, and does not support measuring retention across all product durations today.  \n  \nThis is to ensure that the selected Retention Period (e.g. Yearly) maps to the available retention points in a subscriber’s lifecycle.  \n  \nFor example, a monthly subscriber who retained for only 10 months would not be counted as a retained subscriber at 1 year, but has a vastly superior retention rate (and therefore lifetime value) when compared to the subscriber who retained for 2 months, and only the Monthly Retention Period would show that contrast.  \n  \nWe’ll continue improving this chart to allow for more flexible retention measurements in the future.",
    "4-0": "How are incomplete periods displayed in Subscription Retention?",
    "4-1": "The final, incomplete period of a given cohort is indicated with a hashed background.  \n  \nIt shows how many subscriptions are set to renew by the end of the period, taking into account the auto-renewal preference of the subscriptions.",
    "5-0": "How are introductory offers treated in this chart?",
    "5-1": "Introductory offers are not included in the Subscription Retention chart. A subscription's first purchase date is treated as the date of its first payment of the standard subscription period. This differs from other charts which include introductory offers in the definition of paid subscribers because our methodology for measuring retention requires that all transactions in a given subscription are of a single duration."
  },
  "cols": 2,
  "rows": 6,
  "align": [
    "left",
    "left"
  ]
}
[/block]

![](https://files.readme.io/88a06a8-SubscriptionRetention.png "SubscriptionRetention.png")
