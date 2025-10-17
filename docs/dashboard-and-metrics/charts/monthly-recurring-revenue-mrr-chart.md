---
title: Monthly Recurring Revenue (MRR) Chart
slug: monthly-recurring-revenue-mrr-chart
hidden: false
---

The Monthly Recurring Revenue (MRR) chart measures the normalized revenue of your active paid subscriptions down to a monthly value. It’s a way of normalizing the scale of your business to better understand your velocity or size outside of the fluctuations that may arise from varying subscription durations. It doesn't map directly to revenue, but it is a useful standardization.

MRR is computed by "normalizing" subscriptions to a 1-month period. Non-recurring subscriptions, consumable, or one-time purchases are not computed in MRR. For example:

- An active subscription that is $8/month will contribute $8 to MRR (price \* 1) each month it remains active
- While an active subscription that costs $120/year will contribute $10 dollars per month to MRR (price \* 1/12) for 12 months each year it remains active

This normalizing of all durations to a 1 month period makes it easier to compare the value of different subscriptions of different durations together.

### Revenue type

The MRR chart allows you to select and visualize three different revenue definitions:

1. Revenue: The total revenue generated in a given period, minus refunds from transactions that occurred in that period.
2. Revenue (net of taxes): Revenue generated in a given period (as defined above), minus our estimate of revenue deducted from the stores for taxes (e.g. VAT, DST, etc).
3. Proceeds: Revenue generated in a given period (as defined above), minus our estimate of revenue deducted from the stores for taxes and commission.

Proceeds reflect RevenueCat's estimate of what you will earn from the stores for the revenue you generated, but keep in mind that the App Store's payment schedule is based on Apple's Fiscal Calendar, which does not align with calendar months. [Learn more here.](https://www.revenuecat.com/blog/growth/apple-fiscal-calendar-year-payment-dates/)

In addition, to learn more about how RevenueCat estimates taxes and commissions deducted from the stores, [click here](/dashboard-and-metrics/taxes-and-commissions).

### Available settings

- Filters: Yes
- Segments: Yes
- Revenue Type: Yes

## How to use Monthly Recurring Revenue (MRR) in your business

MRR is an important measure because it not only captures the size of your subscriber base, but translates that into a real velocity metric for your business by normalizing different durations to a common “denominator” (monthly recurring revenue). MRR and [ARR](/dashboard-and-metrics/charts/annual-recurring-revenue-arr-chart) are considered the standard velocity metrics for subscription software companies.

To understand how your subscriber cohorts are growing over time, try segmenting by first purchase month, changing the resolution to monthly, and creating a stacked area chart to see how monthly subscriber cohorts have translated into added MRR to your business over time. ([Explore here](https://app.revenuecat.com/charts/mrr?chart_type=Stacked%20area&conversion_timeframe=7%20days&customer_lifetime=30%20days&range=Last%20year&resolution=2&segment=first_purchase_month), and change the date range to meet your needs)

## Calculation

First, to convert a subscription payment to normalized monthly revenue, we apply the following conversion:

| Subscription Duration | Normalized Monthly Revenue |
| :-------------------- | :------------------------- |
| 1 Day                 | price \* 30                |
| 3 Days                | price \* 10                |
| 7 Days / 1 Week       | price \* 4                 |
| 2 Weeks               | price \* 2                 |
| 4 Weeks               | price \* 1                 |
| 1 Month               | price \* 1                 |
| 2 Months              | price \* (1/2)             |
| 3 Months              | price \* (1/3)             |
| 6 Months              | price \* (1/6)             |
| 1 Year                | price \* (1/12)            |

:::info
Weekly subscription durations will underestimate MRR over periods longer than 1 month (e.g. a 1 Week subscription would renew 17 times in a 4 month period, not 16), but given the high number of renewals before that extra revenue would be realized, we instead calculate what would be generated in a 1 month period.
:::

For every [active paid subscription](/dashboard-and-metrics/charts/active-subscriptions-chart) in a given period, we sum their monthly recurring revenue value (e.g. `price * (1/12)` for a yearly subscription) to yield your total MRR for that period.

For each period, MRR is calculated as a snapshot based on the count of active subscriptions at the end of the period. Therefore, at a daily resolution, MRR is calculated from the number of Active Subscriptions at the end of that day; whereas at a monthly resolution it is calculated from the number of Active Subscriptions at the end of that month.

To understand how that snapshot is generated for each period, check out the [MRR Movement](/dashboard-and-metrics/charts/monthly-recurring-revenue-movement-chart) chart.

## Sample query from Scheduled Data Exports

With our [Scheduled Data Exports](/integrations/scheduled-data-exports), you can get daily exports of your transactions from RevenueCat to reproduce and customize measures like this one that are provided by RevenueCat. You can find the full set of available sample queries [here](/integrations/scheduled-data-exports#sample-queries-for-revenuecat-measures).

## FAQs

| Question                                                                            | Answer                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| ----------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| What counts as an active paid subscription for the MRR measurement?                 | Any paid, unexpired subscription is considered active. [Learn more here](/dashboard-and-metrics/charts/active-subscriptions-chart).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| Does MRR exclude subscriptions with auto-renewal disabled?                          | No, MRR includes normalized monthly revenue from all active paid subscriptions – even if their auto-renew status is currently disabled.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| Are non-recurring subscriptions, consumable, or one-time purchases included in MRR? | No, since these purchases do not represent recurring revenue, they are not included in the MRR calculation.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| Is MRR calculated before commission and taxes?                                      | Yes, MRR is calculated using the gross price of your active subscriptions. Commission & taxes deducted by the stores would need to be additionally deducted from MRR to understand expected proceeds.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| Why does my monthly revenue not equal my MRR?                                       | MRR may differ from revenue due to renewals of various subscription lengths occurring within a given month. For example, you may have very few annual subscriptions renewing this month vs. last month, resulting in lower revenue captured this month simply due to those subscribers not being due to renew yet. Because MRR is calculated in real-time based on currently active subscriptions, the number will fluctuate as new subscriptions are added and active subscribers churn out. If there are fewer new subscribers than churned subscriptions for a given period, MRR will go down and could be another reason actual revenue ends up being lower than recently calculated MRR. |

:::info
If a Stripe subscription is canceled with immediate effect, this may cause temporary unusual behavior in your MRR, since RevenueCat will estimate the length of a subscription based on the purchase & expiration dates if the product duration is unknown.
:::
