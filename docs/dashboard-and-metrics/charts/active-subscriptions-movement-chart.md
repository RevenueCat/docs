---
title: Active Subscriptions Movement Chart
slug: active-subscriptions-movement-chart
hidden: false
---

The Active Subscriptions Movement chart measures the change in unique paid subscriptions over a period. Active Subscriptions Movement can be thought of as a breakdown of what caused the change in the [Active Subscriptions](/dashboard-and-metrics/charts/active-subscriptions-chart) count between two periods.

### Available settings

- Filters: Yes
- Segments: No

## How to use Active Subscriptions Movement in your business

This movement chart, like others in RevenueCat, should be used to answer the “why” behind your Active Subscription trend. For example, to understand what’s driving an Active Subscriptions increase or decrease, you might:

1. Segment [Active Subscriptions by Store](https://app.revenuecat.com/charts/actives?chart_type=Line&customer_lifetime=30%20days&range=Last%2090%20days%3A2022-10-29%3A2023-01-26&segment=store)
2. See if a specific store is exhibiting the change most significantly
3. Then filter Active Subscriptions Movement by that store to see if the change is driven primarily by New Actives or Churned Actives

## Calculation

For each period we count:

1. New Actives: Newly created paid subscriptions.
2. Churned Actives: Newly expired paid subscriptions, minus those that have resubscribed.

For a given period, the difference of these counts is the Movement measured in the chart.

### Formula

[New Actives] - [Churned Actives] = Active Subscription Movement

## Sample query from Scheduled Data Exports

With our [Scheduled Data Exports](/integrations/scheduled-data-exports), you can get daily exports of your transactions from RevenueCat to reproduce and customize measures like this one that are provided by RevenueCat. You can find the full set of available sample queries [here](/integrations/scheduled-data-exports#sample-queries-for-revenuecat-measures).

## FAQs

| Question                                                                | Answer                                                                                                                                                                                                                                                                                           |
| ----------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Can Churned Actives be negative for a period?                           | Yes, if there were more resubscriptions in that period than there were churned actives, then churn for that period would be negative. This means that even without adding any new actives, your active subscriber base would’ve grown in this period.                                            |
| Is a paid subscription that has been cancelled still considered active? | Yes, as long as the cancelled paid subscription has not yet expired, it is considered active.                                                                                                                                                                                                    |
| At what point is a paid subscription considered expired?                | A paid subscription without a grace period is considered expired once its next renewal date has passed without a successful renewal. If a grace period is offered, the end of that grace period is considered the paid subscription's expiration date.                                           |
| What is considered a resubscription?                                    | A resubscription is a subsequent purchase on an existing subscription that was not active in the last period. The most common case for a resubscription is a renewal occurring during a billing retry period after their subscription has already expired, but may occur in other cases as well. |

For more information on what’s considered an active paid subscription, [click here](/dashboard-and-metrics/charts/active-subscriptions-chart).
![](/images/2f1fec5-ActiveSubsriptionsMvmt_ba5268493b1dced736ddd6e9574d0e0c.png "ActiveSubsriptionsMvmt.png")
