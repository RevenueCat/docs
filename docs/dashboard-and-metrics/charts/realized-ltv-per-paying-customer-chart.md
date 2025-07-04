---
title: Realized LTV per Paying Customer Chart
slug: realized-ltv-per-paying-customer-chart
hidden: false
---

Realized LTV (Lifetime Value) per Paying Customer (sometimes also called Average Revenue per Paying User, ARPPU) shows the actual revenue (minus refunds) that was generated by a cohort of paying customers, divided by the number of customers in that cohort.

Therefore, this chart tells you how much revenue you generate from each paying customer, as opposed to each new customer of your app, which [Realized LTV per Customer](/dashboard-and-metrics/charts/realized-ltv-per-customer-chart) measures.

### Available settings

- Filters: Yes
- Segments: Yes
- Customer Lifetime: Yes

## Customer cohorts

This chart is cohorted by the earliest date that a customer:

1. Was "first seen" (first opened your app), or
2. Made their first purchase (for purchases made outside of your app, like promoted purchases in the App Store)

### Example

If a customer first opened your app on April 15th, 2022, but didn't make a purchase until May 21st, 2022, they would be included in the April 15th cohort.

### Customer Lifetime

Using the “Customer Lifetime” selector, you can define the time period after the customer was first seen that revenue should be counted within.

For example, by setting the “Customer Lifetime” selector to 30 days, all revenue generated by a new customer cohort in their first 30 days will be summed and included in the measurement, but any revenue generated after those initial 30 days will be discarded.

:::info
Switch to "Unbounded" for a view of all revenue for that customer cohort.
:::

## Incomplete periods

In addition, since the Customer Lifetime setting determines how long each customer cohort is given before it’s considered fully mature, the periods which are marked as incomplete will change based on that setting.

For example, by setting the “Customer Lifetime” selector to 3 months, all periods which are less than 3 months old will be marked as incomplete, since new revenue generated by those customer cohorts would still be added to the measurement.

Distinguishing between complete and incomplete periods is important for accurately interpreting the behavior of your cohorts and understanding whether a change is simply due to one cohort being less mature than another, or a true underlying performance difference.

## How to use Realized LTV per Paying Customer in your business

Realized LTV per Paying Customer gives you an overall view how the monetization of customer cohorts has developed over time. A common use case is to compare a certain customer lifetime (e.g. 30 days) for users acquired in different months. You can then connect the results with what happened in your product or marketing during those months to compare impact.

Realized LTV per Paying Customer can also be used as a tool to understand the profitability of (paid) acquisition. By comparing the Realized LTV per Paying Customer for a given cohort with the average cost to acquire a new paying customer for that cohort, you can calculate the acquisition profitability.

## Calculation

For each period, we measure:

1. New Paying Customers: The count of new paying customers first seen by RevenueCat within the period.
2. Realized LTV: The amount of revenue generated by that cohort of paying customers within the selected Customer Lifetime, minus refunds.

### Formula

[Realized LTV] / [New Paying Customers] = Realized LTV per Paying Customer

### How lifetime periods are calculated

RevenueCat calculates lifetime periods starting from day 0, which represents the earliest date that a customer was first seen (first opened your app) or made their first purchase (for purchases made outside of your app, like promoted purchases in the App Store). Because we start counting at zero rather than one, each lifetime period contains one more unique day than its name suggests. For example, a 7-day lifetime actually encompasses 8 unique days (day 0 through day 7). If a customer starts a 7-day trial on Tuesday, they typically convert to paid on the following Tuesday, which is the 8th unique day but day 7 when counting from day 0. The same logic applies to the 14-day and 30-day lifetime periods: a 14-day lifetime includes 15 unique days and a 30-day lifetime includes 31 unique days. This calculation method aligns with standard subscription billing cycles and ensures accurate revenue attribution for each customer cohort.

## FAQs

| Question                                                                                                                                                                                                                                                                                                                                                                                      | Answer                                                                                                                                                                                                                         |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Is a paying customer cohorted by their first seen date, or their first paying date?                                                                                                                                                                                                                                                                                                           | Paying customers are cohorted by their first seen date.                                                                                                                                                                        |
| A customer’s first seen date may be different than when they first became a paying customer. If your app offers a trial, for example, you should set the Customer Lifetime to be at least greater than your trial length, otherwise your cohort of customers will have zero paying customers included in it (since all conversions to paying occurred after the specified Customer Lifetime). |
| Does Realized LTV measure revenue before or after store commissions, fees, and taxes?                                                                                                                                                                                                                                                                                                         | Realized LTV is calculated using the total revenue generated from each customer cohort, minus refunds, and therefore it does include revenue that the stores may deduct from your Proceeds due to commissions, taxes, or fees. |
| Are customers who have subscribed to a free trial included as Paying Customers?                                                                                                                                                                                                                                                                                                               | No, a customer who has only subscribed to a free trial and not yet made a purchase is not included in the measure of Paying Customers.                                                                                         |
