---
title: Subscription Status Chart
slug: subscription-status-chart
hidden: false
---

The Subscription Status chart breaks down Active Subscriptions, Active Trials, MRR, ARR, or Subscription Revenue by the current status of the underlying subscription contributing to that measure. A subscription can have a status of:

- Set to renew: The subscription is set to renew at the end of its current period.
- Set to cancel: The subscription is set to expire at the end of its current period.
- Billing issue: The subscription was set to renew at the end of its prior period, but failed to do so due to a billing issue, and is currently in a grace period.

### Available settings

- Filters: Yes
- Segments: Yes

## How to use Subscription Status in your business

The Subscription Status chart is an important way to monitor the portion of your Active Subscriptions, MRR, etc. that are set to renew at the end of their current period; and to break that status down by key business dimensions. For example, you may want to analyze the portion that are set to cancel on Monthly products vs. Yearly products, or use the new [Expiration month](https://app.revenuecat.com/charts/subscription_status?chart_type=Column&conversion_timeframe=7%20days&customer_lifetime=30%20days&range=Last%2090%20days%3A2024-05-25%3A2024-08-22&segment=expiration_month) segment to estimate your MRR that's currently set to renew in each future monthly period.

## Calculation

For [Active Subscriptions](/dashboard-and-metrics/charts/active-subscriptions-chart), [Active Trials](/dashboard-and-metrics/charts/active-trials-chart), [MRR](/dashboard-and-metrics/charts/monthly-recurring-revenue-mrr-chart), and [ARR](/dashboard-and-metrics/charts/annual-recurring-revenue-arr-chart) we first calculate the current value of those metrics. You can click on each measure in the prior sentence to learn more about how they are calculated.

Then, if that subscription is past its expected expiration date and is in a grace period, we'll categorize it in the **Billing issue** status. Otherwise, we'll categorize the subscription as **Set to renew** or **Set to cancel** based on its current auto renew status.

For Subscription Revenue, we take the revenue from the last transaction and assume the next transaction will have the same revenue, and then assign that revenue to a status using the same criteria described above.

:::warning Subscriptions with atypical prices
Subscriptions whose last transaction was a Paid Introductory Offer or another type of paid offer may have their Subscription Revenue undercounted until the next standard payment occurs. In addition, keep in mind that any Product Changes that occur on a subscription before its next renewal will effect the Subscription Revenue assumed for that subscription.
:::

## FAQs (to be updated)

| Question                                                                                                                 | Answer                                                                                                                                                                                                                                                 |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Is a paid subscription that has been cancelled still considered active?                                                  | Yes, as long as the cancelled paid subscription has not yet expired, it is considered active, and will be marked with the status of **Set to cancel** in this chart.                                                                                   |
| At what point is a paid subscription considered expired?                                                                 | A paid subscription without a grace period is considered expired once its next renewal date has passed without a successful renewal. If a grace period is offered, the end of that grace period is considered the paid subscription's expiration date. |
| Why are my Active Subscriptions in the Subscription Status Chart slightly different than the Active Subscriptions Chart? | These two charts may refresh at different times, and therefore have slightly different figures depending on which one has more recently been updated.                                                                                                  |
| Can I see the portion of [Active Subscriptions, MRR, etc.] that were set to cancel as of prior periods?                  | Unfortunately, this is not supported in Charts right now.                                                                                                                                                                                              |
