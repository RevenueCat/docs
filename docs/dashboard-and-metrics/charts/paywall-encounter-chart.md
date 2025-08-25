---
title: Paywall Encounter Chart
slug: paywall-encounter-chart
hidden: true
---

The Paywall Encounter chart measures how many of your new customers encounter a paywall after opening your app for the first time. It helps you understand paywall visibility and reach in your new customer experience, showing what percentage of customers see a paywall within specific timeframes.

This chart is cohorted by first seen date and tracks whether a customer encounters a paywall within the selected timeframe (1, 3, 7, or 14 days). It provides insights into how effectively you're exposing paywalls to new customers and how quickly they encounter them in their journey.

:::info RevenueCat Paywalls only
This chart currently only tracks paywall encounters for apps using [RevenueCat Paywalls](/tools/paywalls). Paywalls implemented with custom code are not tracked in this chart.
:::

### Available settings

- Filters: Yes
- Segments: Yes  
- Selector: Encounter Timeframe
  - 1 day
  - 3 days
  - 7 days
  - 14 days

### Cohorting

Customers are grouped by their first seen date (the date they first opened your app). Each period represents the cohort of customers who were first seen in that period, and the chart tracks whether they encountered a paywall within the selected timeframe.

### Encounter timeframes

The Encounter Timeframe selector allows you to choose how long after a customer's first seen date to measure paywall encounters:

- **1 day**: Measures encounters within the first complete day
- **3 days**: Measures encounters within the first 3 complete days
- **7 days**: Measures encounters within the first 7 complete days
- **14 days**: Measures encounters within the first 14 complete days

This ensures fair comparison across cohorts by using consistent measurement windows, regardless of when the cohort started.

## Calculation

For each period, we measure:

1. **New Customers**: The total count of customers who were first seen during the cohort period.
2. **Paywall Encounters**: The count of customers who encountered at least one paywall within the selected timeframe after their first seen date.

### Formula

- Encounter Rate = [Paywall Encounters] / [New Customers] × 100%

### Incomplete periods

Recent cohorts that haven't had enough time to complete the full encounter timeframe are marked as incomplete. For example, if you're viewing the 7-day encounter rate, cohorts from the last 6 days will be marked as incomplete since they haven't had the full 7 days to potentially encounter a paywall. Learn more about incomplete periods [here](/dashboard-and-metrics/charts/charts-feature-incomplete-periods).

## How to use Paywall Encounter in your business

- **Optimize paywall placement**: Low encounter rates may indicate that your paywall is too deep in the user flow or triggered by actions that few users take.
- **Balance user experience**: Very high early encounter rates (e.g., 90%+ on day 1) might indicate an overly aggressive monetization strategy that could impact retention.
- **Segment analysis**: Use segmentation to understand encounter rates across different user groups, platforms, or acquisition channels to identify opportunities for improvement.
- **A/B testing validation**: Compare encounter rates between test variants to ensure your experiments are reaching enough users for statistical significance.
- **Funnel optimization**: Combine with conversion charts to understand the full funnel from app install → paywall encounter → conversion.

## FAQs

| Question | Answer |
| --- | --- |
| Why are my encounter rates low? | Low rates could indicate that your paywall trigger conditions are too restrictive, the paywall is placed too deep in the user journey, or users are churning before reaching the paywall. Review your paywall trigger logic and user flow. |
| Does this track all paywalls in my app? | No, this chart only tracks paywalls implemented using RevenueCat Paywalls. Custom-coded paywalls are not included in these metrics. |
| What counts as an "encounter"? | An encounter is recorded when a customer sees a paywall impression for the first time. Multiple impressions by the same customer are not counted separately. |
| How does this differ from paywall conversion charts? | This chart measures exposure (how many users see a paywall), while conversion charts measure effectiveness (how many users who see a paywall convert). Together, they provide a complete picture of paywall performance. |
| Why might a cohort show 0% encounter rate? | This could happen if you recently implemented RevenueCat Paywalls, if there's an issue with paywall implementation, or if the paywall conditions are never met by users in that cohort. |
| Can I see which specific paywalls were encountered? | When segmented by paywall, you can see encounter rates for individual paywalls. The default view shows the aggregate encounter rate across all paywalls. |
