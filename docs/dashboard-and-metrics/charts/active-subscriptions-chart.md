---
title: Active Subscriptions Chart
slug: active-subscriptions-chart
hidden: false
---

## Definition

The Active Subscriptions chart measures the number of unique paid subscriptions that have not expired at the end of each period.

### Available settings

- Filters: Yes
- Segments: Yes

## How to use Active Subscriptions in your business

Active Subscriptions are useful for understanding the number of individual, recurring paid relationships you are currently serving and is a proxy for the size of the business and is powerful when combined with [filters and segments](/dashboard-and-metrics/charts#section-filters-and-segments) to understand the composition of your paid subscriber base.

## Calculation

For each period, the count of Active Subscriptions represents the number of paid, unexpired subscriptions at the end of the period. Therefore, at a daily resolution, the count represents the number of Active Subscriptions at the end of that day; whereas at a monthly resolution it represents the number of Active Subscriptions at the end of that month.

To understand how that snapshot is generated for each period, check out the [Active Subscriptions Movement](/dashboard-and-metrics/charts/active-subscriptions-movement-chart) chart.

## Sample query from Scheduled Data Exports
With our [Scheduled Data Exports](/integrations/scheduled-data-exports), you can get daily exports of your transactions from RevenueCat to reproduce and customize measures like this one that are provided by RevenueCat. You can find the full set of available sample queries [here](/integrations/scheduled-data-exports#sample-queries-for-revenuecat-measures).

## FAQs

| Question                                                                                                | Answer                                                                                                                                                                                                                                                                                                                         |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Is a paid subscription that has been cancelled still considered active?                                 | Yes, as long as the cancelled paid subscription has not yet expired, it is considered active.                                                                                                                                                                                                                                  |
| At what point is a paid subscription considered expired?                                                | A paid subscription without a grace period is considered expired once its next renewal date has passed without a successful renewal. If a grace period is offered, the end of that grace period is considered the paid subscription's expiration date.                                                                         |
| Can a single customer have multiple paid subscriptions?                                                 | Yes. This may occur if a customer begins a monthly paid subscription and switches to annual within a single period, or if they subscribed to two distinct products simultaneously. If multiple paid subscriptions are active at the same time for one customer, each unique subscription would be counted in this measurement. |
| If a customer has access to my product through Family Sharing, are they counted as a paid subscription? | No, since that customer's access is not the result of a payment they've made, we do not consider it a paid subscription.                                                                                                                                                                                                       |

![](/images/dcd9e6a-ActiveSubscriptions_813b59205812f8fe5605f662c2f18abc.png "ActiveSubscriptions.png")
