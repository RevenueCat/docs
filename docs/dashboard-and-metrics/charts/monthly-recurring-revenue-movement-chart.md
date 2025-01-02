---
title: Monthly Recurring Revenue Movement Chart
slug: monthly-recurring-revenue-movement-chart
hidden: false
---

The Monthly Recurring Revenue Movement chart shows how New Subscriptions and Churned Subscriptions affect MRR. New MRR is MRR that was added during the period by New Subscriptions. Churned MRR is MRR that was lost in the period by Churned Subscriptions.

Learn more about how MRR is calculated [here](/dashboard-and-metrics/charts/monthly-recurring-revenue-mrr-chart).

### Available settings

- Filters: Yes
- Segments: No

## How to use MRR Movement in your business

Looking at MRR Movement is important to understand the factors that cause your MRR to increase or decrease over a period and give insight into what grows or contracts your business. Add filters to understand how specific subscriber segments are influencing this metric.

## Calculation

For each period, we measure:

1. New MRR: The sum of new MRR added by subscriptions that converted to paid in that period.
2. Churned MRR: The sum of churned MRR lost by subscriptions that churned out of their active, paid status in that period; minus MRR gained from resubscriptions.

### Formula

[New MRR] - [Churned MRR] = MRR Movement

## Sample query from Scheduled Data Exports

With our [Scheduled Data Exports](/integrations/scheduled-data-exports), you can get daily exports of your transactions from RevenueCat to reproduce and customize measures like this one that are provided by RevenueCat. You can find the full set of available sample queries [here](/integrations/scheduled-data-exports#sample-queries-for-revenuecat-measures).

## FAQs

| Question                                                            | Answer                                                                                                                                                                                                                                                                                                                                                               |
| ------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| How is a new subscription assigned to a period for New MRR?         | Since MRR is measuring the normalized revenue of paid subscriptions, we use the date of a subscription’s first payment to determine which period to include it within. For subscriptions without a trial, this will equal the start date of the subscription. For subscriptions with a trial, this will equal the date of the subscriber’s trial to paid conversion. |
| How is a churned subscription assigned to a period for Churned MRR? | A paid subscription is considered churned once it expires, which may occur at its next expected renewal date if its unsuccessful, or may occur later if a grace period is offered on that subscription. Learn more about how churned subscriptions are defined [here](/dashboard-and-metrics/charts/churn-chart).                                                    |

![](/images/c9f70af-MRRMvmt_9c341a69ac5f90dba842bf571056b85f.png "MRRMvmt.png")
