---
title: Trial Conversion Chart
slug: trial-conversion-chart
hidden: false
categorySlug: dashboard
order: 13
parentDoc: 649983b4c31b2e000a3c187e
---
## Definition
The Trial Conversion chart gives you insight into the conversion of customers starting free trials, through their conversion into paying subscriptions.

### Available settings

* Filters: Yes
* Segments: No
* Conversion Timeframe: No (coming soon)
* Absolute/Relative Selector: Yes

### Customer cohorts
This chart is cohorted by the earliest date that a customer:

1. Was "first seen" (first opened your app), or
2. Made their first purchase (for purchases made outside of your app, like promoted purchases in the App Store)

**Example**: If a customer first opened your app on April 15th, 2022, but didn't make a purchase until May 21st, 2022, they would be included in the April 15th cohort.
[block:callout]
{
  "type": "info",
  "body": "Measuring conversion rates through a cohort of customers *from* a given period, as opposed to a count of events *within* a given period, is critical for accurate performance comparison."
}
[/block]
## How to use Trial Conversion in your business
Trials Conversion funnels are extremely important for understanding how well your app is monetizing. 

The Start Rate is a valuable way of measuring how easily users are finding your trial, and how compelling its value proposition is; but Conversion Rate is the real measure of how effectively that value proposition has been delivered through your product during the trial period. 

The product of these two rates [(Start Rate) x (Conversion Rate)] is your Overall Conversion Rate which is also indicative of the overall fit of your product and pricing.

## Calculation
For each period, we measure:

**Absolute**
1. New Customers: The count of new customers first seen by RevenueCat within the period.
2. Trials: The count of those customers that started a free trial.
3. Converted: The count of those trial starts that converted to paid.
4. Pending: The count of those trial starts that have not yet converted to paid, have auto-renew enabled, and have not yet expired.
5. Abandoned: The count of those trial starts that have auto-renew disabled or have expired.

**Relative**
1. New Customers: The count of new customers first seen by RevenueCat within the period.
2. Start Rate: The portion of those customers that started a free trial.
3. Conversion Rate: The portion of those trial starts that converted to paid.
4. Pending Rate: The portion of those trial starts that have not yet converted to paid, have auto-renew enabled, and have not yet expired.
5. Abandoned Rate: The portion of those trial starts that have auto-renew disabled or have expired.

### Formulas

1. [Trials] / [New Customers] = Start Rate
2. [Converted] / [Trials] = Conversion Rate
3. [Pending] / [Trials] = Pending Rate
4. [Abandoned] / [Trials] = Abandoned Rate
[block:callout]
{
  "type": "info",
  "body": "The sum of Converted, Pending, and Abandoned will always equal the count of Trials for a given period."
}
[/block]
## FAQs
[block:parameters]
{
  "data": {
    "h-0": "Question",
    "h-1": "Answer",
    "0-0": "What is the relationship between Trial Conversion and other conversion charts?",
    "0-1": "Learn more about the relationship between conversion charts [here](https://www.revenuecat.com/docs/charts#understanding-conversion-rates).",
    "1-0": "If a payment is later refunded, will that cause the number of Converted trials or Conversion Rate to decrease?",
    "1-1": "Yes, a refunded paid transaction would be excluded from this chart. \n\nTherefore, the corresponding customer cohort would have fewer converted trials and a lower Conversion Rate after that refund occurred. [Learn more here](doc:refund-rate-chart).",
    "2-0": "Does this chart count how many of each conversion type occurred in a given period?",
    "2-1": "No, the Trial Conversion chart is measuring what portion of a cohort of customers from a given period converted – it does not measure when those conversions happened, or what other conversion to trial or paid might have happened in a given period.\n\nTo measure new conversions that occurred within a given period, explore our [Active Subscriptions Movement](doc:active-subscriptions-movement-chart) chart and [Active Trials Movement](doc:active-trials-chart) chart.",
    "3-0": "Why does the count of New Customers not change when filtering by Product, Product Duration, Store, or Offering?",
    "3-1": "These filters are only applicable to subscribers because a customer does not have a designated “product” unless they make a purchase.\n\nBecause of this, when using filters that only apply to subscribers, only the conversion measure will be filtered.",
    "4-0": "Why does the count of Trials or Conversions in this chart differ from other sources outside of RevenueCat?",
    "4-1": "Though there are many reasons why different data sources may have different definitions, the most common difference between our conversion charts and other sources is our cohorting definition.\n\nBecause this chart is cohorted by a customer’s first seen date, the count of Trials or Conversions in each period is likely to differ from other sources that either cohort based on event date, or have a different definition of a comparable customer cohort.",
    "5-0": "Does the Trial Conversion chart support Conversion Timeframe selection?",
    "5-1": "Not at this time, though support for Conversion Timeframe selection in this chart will come in the future."
  },
  "cols": 2,
  "rows": 6
}
[/block]

![](https://files.readme.io/bdf3068-TrialConversion.png "TrialConversion.png")