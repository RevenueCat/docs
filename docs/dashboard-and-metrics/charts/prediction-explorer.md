---
title: Prediction Explorer (Beta)
slug: prediction-explorer
hidden: false
---

## Definition

The Prediction Explorer allows you to measure the predicted lifetime value (LTV) of various cohort definitions over time to estimate the long-term revenue that may be driven by those cohorts.

:::warning Prediction Explorer Beta
This chart is currently in beta as we refine our prediction modeling to improve accuracy. If you have feedback or questions on the nature of the chart or the data provided, please don't hesitate to reach out to us.
:::

### Available settings

- Filters: Yes
- Segments: No
- Cohort selection: Yes

## Terminology

| Term              | Definition                                                                                                                                                                                                                                                      |
| :---------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Lifetime value (LTV)          | The total revenue (value) generated for a cohort within some defined period (lifetime).                                                                                                                                       |
| Realized LTV  | The lifetime value (LTV) that has already been generated for a cohort within some defined period.  |
| Predicted LTV         | The lifetime value (LTV) that has already been generated for a cohort, plus the additional revenue that we estimate will be generated from the subscriptions in that cohort within some defined period. In order for a cohort to have Predicted LTV, it must be younger than the defined lifetime being measured.                                                                                                   |                             
## Cohorts

The Prediction Explorer supports three different cohort definitions:
1. **New Customers**: The count of customers cohorted by their first seen date by RevenueCat.
2. **Initial Conversions**: The count of customers cohorted by their first conversion date. Conversion includes paid or unpaid and subscription or one-time purchase.
3. **New Paying Customers**: The count of customers cohorted by their first purchase date.

**Comparing cohort definitions**\
Each cohort definition is a unique way of grouping customers together to understand how each unique cohort performs over time.

Because these measures each have unique cohort definition, each period references different groups of customers. For example, the Apr '24 cohort of New Paying Customers may include some customers who happened to also be first seen in Apr '24, and are therefore in the Apr '24 cohort of New Customers, but it may also include some customers who were first seen in prior months. 

In addition, the Apr '24 cohort of New Customers may include customers whose first payment won't occur until after Apr '24.

Therefore, these different cohort definitions should not be thought of as a conversion funnel for the period they reference. Rather, they are independent ways of grouping customers together to understand how each unique cohort performs over time.

## Lifetime Value (LTV) Prediction 

RevenueCat predicts the lifetime value (LTV) of paid subscriptions based on the prior retention rates of subscriptions on the same product, or of a mix of fallback dimensions when sufficient data for the purchased product is unavailable. Our dataset of ____ apps, _____ subscriptions, and over $4B tracked revenue through our platform allows us to reliably estimate lifetime value outcomes.

### When we predict LTV

We predict up to 24 month LTV for all paid subscriptions that are not cancelled or expired. That predicted LTV is included in cells marked with [color code] on the right side of the diagonal divider in the table.

[example screenshot of the split between realized cells vs. predicted cells]

You can use the period selector to look at daily, weekly, monthly, or yearly periods and measure the LTV we predict will be added in each one (for up to 24 months after the start of each paid subscription in the cohort being measured)

[example screenshot of the period selector]

#### Other notes
- "24 month" LTV is defined as 24 months after the first purchase date of the subscription. When cohorting by other customer groups, like New Customers who are cohorted by their first seen date, predictions may be provided for more than 24 months after the cohort's inception since paid subscriptions within the cohort may have been started after the initial period
- We include the payment that may be made exactly at month 24 in our predictions (e.g. the 3rd potential payment for a yearly subscription which originated on 2020-01-01, and had renewal opportunities on 2021-01-01 and 2022-01-01)
- We do _not_ predict increases in LTV from non-subscription revenue (e.g. lifetime purchases, consumables, etc.)


### How we predict LTV

We predict LTV by building a survival curve of sets of subscriptions, translating that survival curve into renewal opportuntiies for each specific subscription, and then modifying the survival curve based on the behavior of the specific subscription we're making a prediction for. 

#### Survival curves

[How we generate survival curves generally]

#### Subscription sets

When a product has had enough prior subscriptions created for it to build a reliable survival curve, we'll use that product's survival curve as the base to predict LTV for all future subscriptions on that product.

:::tip Defining subscriptions
We treat each unique subscription product that a customer purchases as a unique subscription. Therefore, when a product change occurs, such as from a monthly product to a yearly product; the monthly subscription will be treated as churned when it ends, and a new yearly subscription will be created and have it's lifetime value predicted for 24 months following the first purchase date of that yearly subscription.
:::

If there is not enough data for that product, we'll use fallback survival curves that are built on the dimensions that have the most meaningful impact on LTV, such as:
1. Store
2. Product duration

#### Auto renew status and its effect on LTV

The primary signal we use determine whether a subscription's survival curve needs to be altered from the average for its product is its auto renew status. Or, in other words: a subscription which has disabled auto renewal has a _far_ lower likelihood of surviving until its next renewal, and a subscription which is still set to auto renew has a slightly higher likelihood of survinging until its next renewal at each subsequent day when that remains true.

That also means that subscriptions with different attributes, such as those from different countries or with different app usage patterns, will still have different LTV predictions generated for them if this underlying attribute difference also causes them to cancel their subscriptions at different rates.

It's important to note that cancellation rates also take time to be observed in a cohort. Because of that, **we recommend waiting until a cohort is at least 7-14 days old before comparing their predicted LTV with other cohorts.**

### On reliability & accuracy

When using the Prediction Explorer to anticipate future performance, its important to keep in mind that many variables can affect the true performance of a cohort over time, such as:
- Differences in involuntary churn vs. prior cohorts
- Differences in how early or late in a given renewal period subscriptions typically cancel
- Changes to the product being used that materially change likelihood to cancel or retain

In testing our beta prediction model, we've observed that >70% of Products with at least 1,000 paid subscriptions have 12 month LTV predictions that are >90% accurate. Meaning, the Predicted LTV for those subscriptions is within 10% of the true Realized LTV we observed for those subscriptions.

However, there are also some observable patterns in that testing that influence accuracy:
1. Yearly products are most reliable, followed by Monthly, and then Weekly. Shorter durations produce greater fluctuation in LTV when measuring long lifetimes.
2. App Store products are generally more reliable than Play Store products.
3. Products with a higher volume of historical subscriptions have higher reliability.

#### Reliability indicators

In the Prediction Explorer we'll distinguish between two types of predictions:
1. Predictions made for cohorts that are too small to be reliable
2. Predictions made for cohorts of a sufficient sample size

When a cohort is too small, and therefore its predictions should be taken with extreme caution, we'll indicate that with a tooltip and yellow cell shading to distinguish these as our lowest confidence predictions:

[screenshot]

When a cohort has a sufficient sample size of customers and subscriptions for us to provide a more reliable prediction for it, we'll indicate that with a light green cell shading to distinguish these as predicted values vs. other darker green cells which only contain Realized LTV:

[screenshot]

:::warning
All future lifetime value predictions contain some degree of risk and uncertainty, and should therefore be used with caution in analysis when comparing with certain values like Realized LTV.
:::

####  Other limitations
1. Stripe subscriptions are excluced from the Prediction Explorer Beta, since a single Stripe product can have multiple durations, which must first be known before a reliable survival curve can be built.
2. Products which had a price change may have less accurate predictions for a period following the price change if the new survival rates are not fully observed through changes in cancellation behavior.
3. We do not (yet) predict conversion _to_ a paid subscription from non-paying customers, which means the total predicted LTV of a cohort only includes those subscriptions that have already converted to paid, and may change over time if additional subscriptions convert to paid.

## How to use the Prediction Explorer in your business

The Prediction Explorer can be used to answer many different questions, like:
- At an average CAC of $x, what is my estimated time to payback?
- How can I expect LTV to grow over time for recent cohorts vs. prior cohorts?
- Do subscriptions on Yearly Product A have a higher 24 month LTV than those on Monthly Product B?
- How does the predicted LTV from a given Apple Search Ads campaign compare with the predicted LTV of other subscriptions?

## Calculation

[to be added]

## FAQs

[to be added]
