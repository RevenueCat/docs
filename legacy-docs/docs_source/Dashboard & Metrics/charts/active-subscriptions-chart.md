---
title: Active Subscriptions Chart
slug: active-subscriptions-chart
hidden: false
---
## Definition
The Active Subscriptions chart measures the number of unique paid subscriptions that have not expired at the end of each period.

### Available settings

* Filters: Yes
* Segments: Yes

## How to use Active Subscriptions in your business
Active Subscriptions are useful for understanding the number of individual, recurring paid relationships you are currently serving and is a proxy for the size of the business and is powerful when combined with [filters and segments](doc:charts#section-filters-and-segments) to understand the composition of your paid subscriber base.

## Calculation
For each period, the count of Active Subscriptions represents the number of paid, unexpired subscriptions at the end of the period. Therefore, at a daily resolution, the count represents the number of Active Subscriptions at the end of that day; whereas at a monthly resolution it represents the number of Active Subscriptions at the end of that month.

To understand how that snapshot is generated for each period, check out the [Active Subscriptions Movement](doc:active-subscriptions-movement-chart) chart. 

## FAQs
[block:parameters]
{
  "data": {
    "h-0": "Question",
    "h-1": "Answer",
    "0-0": "Is a paid subscription that has been cancelled still considered active?",
    "0-1": "Yes, as long as the cancelled paid subscription has not yet expired, it is considered active.",
    "1-0": "At what point is a paid subscription considered expired?",
    "1-1": "A paid subscription without a grace period is considered expired once its next renewal date has passed without a successful renewal.\n\nIf a grace period is offered, the end of that grace period is considered the paid subscription's expiration date.",
    "2-0": "Can a single customer have multiple paid subscriptions?",
    "2-1": "Yes. This may occur if a customer begins a monthly paid subscription and switches to annual within a single period, or if they subscribed to two distinct products simultaneously.\n\nIf multiple paid subscriptions are active at the same time for one customer, each unique subscription would be counted in this measurement.",
    "3-0": "If a customer has access to my product through Family Sharing, are they counted as a paid subscription?",
    "3-1": "No, since that customer's access is not the result of a payment they've made, we do not consider it a paid subscription."
  },
  "cols": 2,
  "rows": 4
}
[/block]

![](https://files.readme.io/dcd9e6a-ActiveSubscriptions.png "ActiveSubscriptions.png")