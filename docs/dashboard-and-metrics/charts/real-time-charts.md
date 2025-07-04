---
title: Real-time Charts (Beta)
slug: real-time-charts
excerpt: Overview of the key changes & improvements of our new real-time Charts beta
hidden: true
---

# Real-time Charts (Beta)

We’re excited to welcome you to the beta of our new real-time Charts. We've rebuilt charts to give you faster, more flexible insights, including:

- Real-time reporting on almost all charts
- A new unified subscription model for consistent reporting across stores
- Improved definitions for existing dimensions like Platform and Country
- New dimensions to filter and segment by, including custom attributes in the near future

:::warning Supported stores
At this time only App Store and Play Store aps are supported in Real-time Charts. Support for Stripe, Roku, and RevenueCat Web Billing is coming soon; with the remaining stores to follow.
:::

:::info Feedback
As you explore the beta and have feedback or questions about the experience, [please let us know here](https://form.typeform.com/to/iuAUBGNC).
:::

## Summary of changes

### New features

- Charts are now updated in real-time as events occur [Learn more](/dashboard-and-metrics/charts/real-time-charts#real-time-reporting)
- New filters & segments for deeper analysis [Learn more](/dashboard-and-metrics/charts/real-time-charts#new-and-updated-dimensions)

### Improvements

- Charts are now defined from a consistent subscription definition that is universal across stores, and allows us to distinctly measure cases like a Product Change or a Resubscription separately from a standard Renewal. [Learn more](/dashboard-and-metrics/charts/real-time-charts#improved-subscription-definition)
- Refunded transactions no longer cause metrics like Revenue, Conversion to Paying, etc. to change retroactively for complete periods. Instead, transactions that are later refunded are included by default in all charts, and their revenue or conversion (if applicable) is subtracted on the date the refund actually happened. [Learn more](/dashboard-and-metrics/charts/real-time-charts#refund-behavior)
- The **Platform** dimension now reports a customer's first seen platform, not their last seen platform, to make analyzing acquisition channels easier and to avoid customer dimensions changing over time.
- The **Country** dimensions now reports the country associated with a customer's app store account (if available), or IP-based location otherwise.
- The current Trial Conversion chart included any future payment on an App Store subscription as a conversion to paid, even if that conversion did not come from the trial start. Now, only conversions to paid from the trial start are included in this chart.

## Supported charts

- Initial conversion
- Trial conversion
- Conversion to paying
- New customers
- Realized LTV per customer
- Realized LTV per paying customer
- Active Subscriptions
- Active Subscriptions Movement
- Active Trials
- Active Trials Movement
- ARR
- MRR
- MRR Movement
- Cohort Explorer

## Detailed changes

### Real-time reporting

Previously, charts refreshed every 2 to 12 hours depending on the dataset. Now, most charts update **in real-time**, providing:

- **Immediate insights** into app performance
- **Improved intra-day monitoring** for launches, experiments, or spikes
- **More consistent data across charts**

You can now make faster, more informed decisions without waiting for batch updates.

### Improved subscription definition

Our new real-time charts are now modeled on our **Subscriptions** entity, which normalizes the various store-specific behaviors down to a common set of definitions that can be measured across stores, and have consistent events created for them.

You can learn more about the subscription data model [here](https://www.revenuecat.com/docs/api-v2#tag/Subscription-Data-Model).

#### Impact

As a result of that change, you'll see some differences in the data our real-time Charts provide.

| Change                                   | Description                                                                                                                                                                   | Impact                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| :--------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Product changes create new subscriptions | When a subscriber changes from one product (A) to another (B), we treat their first subscription to product A as expired, and create a second subscription to product B.      | In charts like New Paid Subscriptions and Active Subscriptions Movement, this results in the count of new subscriptions and churned subscriptions increasing by equal amounts. Other charts like Subscription Retention already treated product changes like new subscriptions, and therefore the count of new subscriptions in a given period should more closely align between these charts.                                                                                                                                                                                                                                   |
| Resubscriptions create new subscriptions | When a subscriber starts a subscription after a previous App Store subscription has lapsed, we consider it to be a resubscription, not a renewal on their prior subscription. | In charts like Trial Conversion, payments that would have previously counted as conversions to paid from the original trial start which were actually resubscriptions from a later time are no longer included in the chart. In addition, charts such as New Paid Subscriptions and Active Subscriptions Movement now have new subscriptions and churned subscriptions increasing by equal amounts to account for resubscriptions. Subscription Retention now has an increase in subscriptions, and a proportional decrease in retention for any resubscriptions that were otherwise counted as renewals of prior subscriptions. |

### Refund behavior

:::warning In development
The described refund behaviors for Conversion & LTV charts are in development, and will be supported in the coming days.
:::

When a payment is refunded, it will be deducted from revenue and conversion (if applicable) on the day the refund occurs. Here's how that will impact various chart types:

- **Revenue**: A purchase will add revenue on the day it occurs. If it's later refunded, it will subtract revenue on the day the refund occurs.
- **Conversion**: An applicable purchase will be counted as a conversion in each of the timeframes it is applicable to (e.g. a conversion on day 5 of a customer's lifecycle is included in the 7 days timeframe, 14 days, etc). If it's later refunded, the conversion will be removed in each of the timeframes the refund is applicable to (e.g. a refund on day 10 of a customer's lifecycle results in the conversion being removed from the 14 days timeframe, 30 days, etc; but would not effect the 7 days timeframe, since the refund occurred after that timeframe was completed).
- **Lifetime value (LTV)**: An applicable purchase's revenue will be included in each of the timeframes it is applicable to (e.g. a purchase on day 5 of a customer's lifecycle is included in the 7 days timeframe, 14 days, etc). If it's later refunded, the revenue will be removed in each of the timeframes the refund is applicable to (e.g. a refund on day 10 of a customer's lifecycle results in the revenue being removed from the 14 days timeframe, 30 days, etc; but would not effect the 7 days timeframe, since the refund occurred after that timeframe was completed).

### New and updated dimensions

We've introduced new dimensions for filtering & segmenting, with more coming soon, and have made important updates to existing dimensions to make them more useful.

#### New dimensions

**Available now**

1. Experiment: Filter charts by the experiment & variant that a customer was enrolled in

**Coming soon**

1. App version: Filter & segment charts by the first seen app version of a customer to understand how metrics like conversion rate are impacted by app version
2. Custom attributes: Filter & segment charts by the latest custom attribute values you've set for a customer, to understand how different segments of your audience behave.

#### Updated dimensions

1. Platform: Now refers to the first seen platform of a customer, not their last seen platform, so that metrics like conversion rates and LTV can be segmented by the platform a customer originated on without it changing over time (e.g. if a customer converts on the web and then downloads your iOS app)
2. Country: Now prioritizes the app store country of a customer or purchase over the customer's IP-based location. In charts which measure purchases, like Active Subscriptions, the app store storefront that the purchase occurred in will be used as the country; while in charts that measure customer cohorts, like Initial Conversion or Realized LTV per Customer, the first seen app store country of the customer will be used.

## Getting Started

You can access Real-time Charts from your dashboard by toggling `Real-time` on in Charts. Look for the real-time icon next to supported Charts. To see the current version of each chart, simply toggle `Real-time` off.

As you explore the beta and have feedback or questions about the experience, [please let us know here](https://form.typeform.com/to/iuAUBGNC).

## Upcoming changes & improvements

- Real-time charts support App Store & Play Store apps, with additional store support currently in development.
- Support for custom attributes as a filter & segment is in development, along with app version.
