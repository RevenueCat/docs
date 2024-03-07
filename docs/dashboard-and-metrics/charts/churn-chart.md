---
title: Churn Chart
slug: churn-chart
hidden: false
---

## Definition

Churn measures the percentage of active subscriptions that were lost during a given period that have not yet resubscribed.

### Available settings

- Filters: Yes
- Segments: Yes

### Cohorting

Since churn rate is measured as a portion of all active subscriptions, it specifically does not measure the churn/retention rates of specific customer cohorts. To answer those questions, check out our [Subscription Retention](/dashboard-and-metrics/charts/subscription-retention-chart) chart.

## How to use Churn in your business

A stable or declining churn rate indicates a healthy, growing business; and should be monitored like a health metric for that reason. However, keep in mind that churn can be relatively high for mobile apps when compared to web SaaS products.

Use the Active Subscriptions Movement chart to monitor if new paying subscribers is growing faster than churning subscribers over a given period, and consider segmenting the Churn chart by key dimensions like country or product duration to understand which subscriber segments have the lowest churn (and therefore that you may have the strongest product market fit with).

## Calculation

For each period we measure:

1. Actives: The count of paid, active (unexpired) subscriptions at the beginning of the period.
2. Churned Actives: The count of paid subscriptions that have expired within the period, minus those that have resubscribed.

### Formula

([Churned Actives] / [Actives]) \* 100 = Churn Rate

## FAQs

| Question                                                                                                    | Answer                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ----------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Is a cancelled subscription (e.g. a subscriber that has disabled auto-renewal) considered churned?          | No, a cancelled subscription is not considered churned until their subscription has expired.                                                                                                                                                                                                                                                                                                                                                                                                            |
| Can churn be negative for a period?                                                                         | Yes, if there were more resubscriptions in that period than there were churned active subscriptions, then churn for that period would be negative. This means that even without adding any new active subscriptions, your active subscriber base would’ve grown in this period.                                                                                                                                                                                                                         |
| Why does the Actives count for a given period not match the Active Subscriptions count for the same period? | Actives in the Churn chart is a count of the number of active subscriptions at the start of each period, while Active Subscriptions counts the number of active subscriptions at the end of each period. This is so that Churn can be expressed as a portion of an unchanging value over a given period (starting active subscriptions), while Active Subscription can show the end result of the change over that period (ending active subscriptions) driven by new and churned active subscriptions. |
| What is considered a resubscription?                                                                        | A resubscription is a subsequent purchase on an existing subscription that was not active in the last period. The most common case for a resubscription is a renewal occurring during a billing retry period after their subscription has already expired, but may occur in other cases as well.                                                                                                                                                                                                        |

![](/images/2835802-Churn_a87d0bc9a90035facac27b97c4ec9ebc.png "Churn.png")
