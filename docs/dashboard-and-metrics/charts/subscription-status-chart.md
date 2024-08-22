---
title: Subscription Status Chart
slug: subscription-status-chart
hidden: false
---

## Definition

The Subscription Status chart breaks down Active Subscriptions, Active Trials, MRR, ARR, or Subscription Revenue by the current status of the underlying subscription contributing to that measure. A subscription can have a status of:
- Set to renew: The subscription is set to renew at the end of its current period.
- Set to cancel: The subscription is set to expire at the end of its current period.
- Billing issue: The subscription was set to renew at the end of its prior period, but failed to do so due to a billing issue, and is currently in a grace period.

### Available settings

- Filters: Yes
- Segments: Yes

## How to use Subscription Status in your business

The Subscription Status chart is an important way to monitor the portion of your Active Subscriptions, MRR, etc. that are set to renew at the end of their current period; and to break that status down by key business dimensions. For example, you may want to analyze the portion that are set to cancel on Monthly products vs. Yearly products, or use the new [Expiration month](https://app.revenuecat.com/charts/actives) [UPDATE THIS LINK] segment to estimate your MRR that's currently set to renew in each future monthly period.

## Calculation

For [Active Subscriptions](/dashboard-and-metrics/charts/active-subscriptions-chart), [Active Trials](/dashboard-and-metrics/charts/active-trials-chart), [MRR](/dashboard-and-metrics/charts/monthly-recurring-revenue-mrr-chart), and [ARR](/dashboard-and-metrics/charts/annual-recurring-revenue-arr-chart) we first calculate the current value of those metrics. You can click on each measure in the prior sentence to learn more about how they are calculated.

Then, if that subscription is past its expected expiration date and is in a grace period, we'll categorize it in the **Billing issue** status. Otherwise, we'll categorize the subscription as **Set to renew** or **Set to cancel** based on its current auto renew status.

## FAQs (to be updated)

| Question                                                                                                | Answer                                                                                                                                                                                                                                                                                                                         |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Is a paid subscription that has been cancelled still considered active?                                 | Yes, as long as the cancelled paid subscription has not yet expired, it is considered active.                                                                                                                                                                                                                                  |
| At what point is a paid subscription considered expired?                                                | A paid subscription without a grace period is considered expired once its next renewal date has passed without a successful renewal. If a grace period is offered, the end of that grace period is considered the paid subscription's expiration date.                                                                         |
| Can a single customer have multiple paid subscriptions?                                                 | Yes. This may occur if a customer begins a monthly paid subscription and switches to annual within a single period, or if they subscribed to two distinct products simultaneously. If multiple paid subscriptions are active at the same time for one customer, each unique subscription would be counted in this measurement. |
| If a customer has access to my product through Family Sharing, are they counted as a paid subscription? | No, since that customer's access is not the result of a payment they've made, we do not consider it a paid subscription.                                                                                                                                                                                                       |

![](/images/dcd9e6a-ActiveSubscriptions_813b59205812f8fe5605f662c2f18abc.png "ActiveSubscriptions.png")
