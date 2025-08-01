---
title: Active Customers Chart
slug: active-customers-chart
hidden: false
---

The Active Customers chart measures the number of customers seen in a given period. In RevenueCat, the term "customer" refers to the person using an app, regardless of whether they have yet made a purchase. You can use our conversion charts to measure the portion of these customers that then start trials, convert to paid, etc. Any customers who are aliased to another customer will be excluded from this chart.

This chart provides a view of your total active customer base over time, including both new and returning customers.You can use our conversion charts to measure the portion of these customers that then start trials, convert to paid, etc. 

Any customers who are aliased to another customer will be excluded from this chart. Aliasing occurs when multiple App User IDs are merged together as the same person (for example, when a customer logs in after initially using the app anonymously), ensuring each individual is counted only once.

### Available settings

- Filters: Yes
- Segments: Yes

## How to use Active Customers in your business

This chart should be used to track the total number of customers engaging with your app over time, which reflects your overall customer base size and activity levels, filtered or segmented by the dimensions that are most important to your business to understand which segments are most actively using your app.

For example, if you notice changes in your conversion rates or subscription revenue, you can analyze your active customer volume by segment to understand if the composition of your active customer base has shifted. Similarly, comparing Active Customers to New Customers over time can reveal whether growth is driven by new customer acquisition or improved retention of existing customers.

## Calculation

For each period we count:

1. Active Customers: The number of customers that were seen (had at least one session) during the period.

## FAQs

| Question | Answer |
| --- | --- |
| Why might Active Customers differ from active users reported by other analytics platforms? | Each platform has different definitions and measurement methods. RevenueCat counts a customer as active when they have at least one session (SDK initialization) during the period. Other platforms might use different activity signals like app opens, screen views, or custom events. Additionally, if your app initializes the RevenueCat SDK conditionally or after certain customer actions, this may cause differences in counts. |
| How does customer aliasing affect this metric? | When customers are aliased (merged) in RevenueCat, only the primary customer record is counted to avoid duplication. Aliasing occurs when multiple App User IDs are recognized as the same person - for example, when a customer logs in with their account after initially using the app anonymously, or when they sign in across multiple devices. This ensures that customers who sign in across multiple devices or reinstall the app are counted as a single active customer rather than multiple. |
