---
title: Active Trials Movement Chart
slug: active-trials-movement-chart
hidden: false
---

## Definition

The Active Trials Movement chart measures the change in unique active free trials over a period. Active Trials Movement can be thought of as a breakdown of what caused the change in the Active Trials count between two periods.

### Available settings

- Filters: Yes
- Segments: No

## How to use Active Trials Movement in your business

This movement chart, like others in RevenueCat, should be used to answer the “why” behind your Active Trials trend. For example, to understand what’s driving an Active Trials increase or decrease, you might:

1. Segment [Active Trials by Store](https://app.revenuecat.com/charts/trials?chart_type=Line&customer_lifetime=30%20days&range=Last%2090%20days&segment=store)
2. See if any stores are exhibiting the change most significantly
3. Then filter Active Subscriptions Movement by that store to see if the change is driven primarily by New Actives or Churned Actives

## Calculation

For each period, we measure:

1. New Trials: New free trials started
2. Expired Trials: Existing free trials that have expired, regardless of whether they converted to paying.

### Formula

[New Trials] - [Expired Trials] = Active Trials Movement

## FAQs

| Question                                                    | Answer                                                                                                                                                                                                                                            |
| ----------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Is a trial that has been cancelled still considered active? | Yes, as long as the trial has not yet expired, it is considered active.                                                                                                                                                                           |
| At what point is a trial considered expired?                | A trial for a subscription without a grace period is considered expired once its next renewal date has passed without a successful renewal. If a grace period is offered, the end of that grace period is considered the trial’s expiration date. |

![](https://files.readme.io/e5be9bd-ActiveTrialsMvmt.png "ActiveTrialsMvmt.png")
