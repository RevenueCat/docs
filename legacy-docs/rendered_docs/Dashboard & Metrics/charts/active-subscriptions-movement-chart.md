---
title: Active Subscriptions Movement Chart
slug: active-subscriptions-movement-chart
hidden: false
categorySlug: dashboard
order: 2
parentDoc: 649983b4c31b2e000a3c187e
---
## Definition
The Active Subscriptions Movement chart measures the change in unique paid subscriptions over a period. Active Subscriptions Movement can be thought of as a breakdown of what caused the change in the [Active Subscriptions](doc:active-subscriptions-chart) count between two periods.

### Available settings

* Filters: Yes
* Segments: No

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

## FAQs
[block:parameters]
{
  "data": {
    "h-0": "Question",
    "h-1": "Answer",
    "0-0": "Can Churned Actives be negative for a period?",
    "0-1": "Yes, if there were more resubscriptions in that period than there were churned actives, then churn for that period would be negative.\n \nThis means that even without adding any new actives, your active subscriber base would’ve grown in this period.",
    "2-0": "Is a paid subscription that has been cancelled still considered active?",
    "2-1": "Yes, as long as the cancelled paid subscription has not yet expired, it is considered active.",
    "3-0": "At what point is a paid subscription considered expired?",
    "3-1": "A paid subscription without a grace period is considered expired once its next renewal date has passed without a successful renewal. If a grace period is offered, the end of that grace period is considered the paid subscription's expiration date.",
    "1-1": "A resubscription is a subsequent purchase on an existing subscription that was not active in the last period.\n\nThe most common case for a resubscription is a renewal occurring during a billing retry period after their subscription has already expired, but may occur in other cases as well.",
    "1-0": "What is considered a resubscription?"
  },
  "cols": 2,
  "rows": 4
}
[/block]
For more information on what’s considered an active paid subscription, [click here](doc:active-subscriptions-chart).
![](https://files.readme.io/2f1fec5-ActiveSubsriptionsMvmt.png "ActiveSubsriptionsMvmt.png")