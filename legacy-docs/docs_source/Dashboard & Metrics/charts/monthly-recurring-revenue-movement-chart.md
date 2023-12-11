---
title: Monthly Recurring Revenue Movement Chart
slug: monthly-recurring-revenue-movement-chart
hidden: false
---
## Definition
The Monthly Recurring Revenue Movement chart shows how New Subscriptions and Churned Subscriptions affect MRR. New MRR is MRR that was added during the period by New Subscriptions. Churned MRR is MRR that was lost in the period by Churned Subscriptions.

Learn more about how MRR is calculated [here](doc:monthly-recurring-revenue-mrr-chart).

### Available settings

* Filters: Yes
* Segments: No

## How to use MRR Movement in your business
Looking at MRR Movement is important to understand the factors that cause your MRR to increase or decrease over a period and give insight into what grows or contracts your business. Add filters to understand how specific subscriber segments are influencing this metric.

## Calculation
For each period, we measure:

1. New MRR: The sum of new MRR added by subscriptions that converted to paid in that period.
2. Churned MRR: The sum of churned MRR lost by subscriptions that churned out of their active, paid status in that period; minus MRR gained from resubscriptions.

### Formula
[New MRR] - [Churned MRR] = MRR Movement

## FAQs
[block:parameters]
{
  "data": {
    "0-0": "How is a new subscription assigned to a period for New MRR?",
    "0-1": "Since MRR is measuring the normalized revenue of paid subscriptions, we use the date of a subscription’s first payment to determine which period to include it within.\n\nFor subscriptions without a trial, this will equal the start date of the subscription.\n\nFor subscriptions with a trial, this will equal the date of the subscriber’s trial to paid conversion.",
    "1-0": "How is a churned subscription assigned to a period for Churned MRR?",
    "1-1": "A paid subscription is considered churned once it expires, which may occur at its next expected renewal date if its unsuccessful, or may occur later if a grace period is offered on that subscription.\n\nLearn more about how churned subscriptions are defined [here](doc:churn-chart)."
  },
  "cols": 2,
  "rows": 2
}
[/block]

![](https://files.readme.io/c9f70af-MRRMvmt.png "MRRMvmt.png")