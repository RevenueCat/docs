---
title: Active Trials Chart
slug: active-trials-chart
hidden: false
---

## Definition

The Active Trials chart measures the number of unexpired free trials at the end of a given period. Similar to [Active Subscriptions](/dashboard-and-metrics/charts/active-subscriptions-chart), a trial is considered active until it expires, regardless of its auto-renew status.

The volume of Active Trials is an important leading indicator to growth of Active Subscriptions, and ultimately of your MRR. If the volume of active trials is increasing or decreasing it indicates that your business may be accelerating or decelerating respectively. The [Active Trials Movement](/dashboard-and-metrics/charts/active-trials-movement-chart) chart and [Initial Conversion](/dashboard-and-metrics/charts/initial-conversion-chart) chart can help you understand the nature of these movements.

### Available settings

- Filters: Yes
- Segments: Yes

## How to use Active Trials in your business

Active Trials act as a single measure of the size of your acquisition funnel. Your acquisition funnel may have many distinct inputs, such as advertising spend, install rates, initial conversion rate, etc. – but by starting with Active Trials you can answer the question of whether the net change in the size of your trialing audience is growing or shrinking over time.

## Calculation

For each period, the count of Active Trials represents the number of unexpired free trials at the end of the period. Therefore, at a daily resolution, the count represents the number of Active Trials at the end of that day; whereas at a monthly resolution it represents the number of Active Trials at the end of that month.

To understand how that snapshot is generated for each period, check out the [Active Trials Movement](/dashboard-and-metrics/charts/active-trials-movement-chart) chart.

## Sample query from Scheduled Data Exports
With our [Scheduled Data Exports](/integrations/scheduled-data-exports), you can get daily exports of your transactions from RevenueCat to reproduce and customize measures like this one that are provided by RevenueCat. You can find the full set of available sample queries [here](/integrations/scheduled-data-exports#sample-queries-for-revenuecat-measures).

## FAQs

| Question                                                                  | Answer                                                                                                                                                                                                                                            |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Are trials that have disabled their auto-renewal still considered active? | Yes, a trial is considered active as long as it has not expired, even if auto-renewal has been disabled, since that subscriber still retains access to your entitlement and has the opportunity to enable auto-renewal and ultimately convert.    |
| At what point is a trial considered expired?                              | A trial for a subscription without a grace period is considered expired once its next renewal date has passed without a successful renewal. If a grace period is offered, the end of that grace period is considered the trial’s expiration date. |

![](/images/f34fb0a-ActiveTrials_154a51847857ac54ffe0a970e5bf46be.png "ActiveTrials.png")
