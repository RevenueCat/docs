---
title: New Customers Chart
slug: new-customers-chart
hidden: false
---

## Definition

The New Customers chart measures the number of customers first seen in a given period. In RevenueCat, the term "customer" refers to the person using an app, regardless of whether they have yet made a purchase. You can use our conversion charts to measure the portion of these customers that then start trials, convert to paid, etc. Any customers who are aliased to another customer will be excluded from this chart.

This number will directly correspond with the count of New Customers used in our conversion, LTV, and explorer charts which provide additional measures in relation to the count of New Customers for a given period.

### Available settings

- Filters: Yes
- Segments: Yes

## How to use New Customers in your business

This chart should be used to track the total number of customers being created over time, which may be comparable to installs, filtered or segmented by the dimensions that are most important to your business to understand what segments are most meaningfully contributing to your performance.

For example, if you notice your initial or paid conversion rate behavior changing, consider analyzing your new customer volume by segment to understand if the volume or mix of new customers coming to your app has meaningfully shifted at the same time.

## Calculation

For each period we count:

1. New Customers: The number of new customers that were seen for the first time in the period.

## FAQs

| Question                                                                                                                        | Answer                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Why might New Customers in a given period differ from the number of installs I see reported by another platform in that period? | Each platform has their own definitions and available data that they use to measure installs, and frequently these numbers will differ between any two sources. When counting new customers in RevenueCat, there are a few things to keep in mind. First, a new customer is created when the SDK is initialized, so if a customer uninstalls your app, then reinstalls it, and they are not identified after the SDK is initialized, then they will appear as an additional new customer (just like they would in other 3rd party tools that rely on identification to connect otherwise unique device IDs together). In addition, if your app initializes the RevenueCat SDK sometime after its first opened, or if your app has some installers who never open the app, that may also cause differences between new customers created in RevenueCat vs. installs reported by other platforms. For more information on identifying customers in RevenueCat, [click here](https://www.revenuecat.com/docs/customers/user-ids). |
