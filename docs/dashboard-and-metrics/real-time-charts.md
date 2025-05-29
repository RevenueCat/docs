---
title: Real-time Charts (Beta)
sidebar_label: Overview
slug: real-time-charts
excerpt: Overview of the key changes & improvements of our new real-time Charts beta
hidden: true
---

# Real-time Charts (Beta)

We’re excited to welcome you to the beta of our new real-time Charts. This release includes powerful updates to how subscriptions are defined and reported, introduces **real-time data refresh**, and adds **new filters and segmentation options** for deeper analysis.

## Summary of changes

### New features

- Charts are now updated in real-time as events occur [Learn more](link)
- New filters & segments for deeper analysis [Learn more](link)

### Improvements

- Charts are now defined from a consistent subscription definition that is universal across stores, and allows us to distinctly measure cases like a Product Change or a Resubscription separately from a standard Renewal. [Learn more](link)
- Refunded transactions no longer cause metrics like Revenue, Conversion to Paying, etc. to change after the fact. Instead, transactions that are later refunded are included by default in all charts. [Learn more](link)
- The **Platform** dimension now reports a customer's first seen platform, not their last seen platform
- The **Country** dimensions now reports a customer's storefront (if available), or IP-based location if storefron is not available

### Bug fixes

- The current Trial Conversion chart was incorrectly including refunded transactions. The new real-time chart now includes them by design, and will soon support the ability to filter them out if desired.

## Supported charts

- Initial conversion
- Trial conversion
- Conversion to paying
- Active Subscriptions
- Active Subscriptions Movement
- Active Trials
- Active Trials Movement
- ARR
- MRR
- MRR Movement

## Detailed changes

### Real-time reporting

Previously, charts refreshed every 3 to 12 hours depending on the dataset. Now, most charts update **in real-time**, providing:

- **Immediate insights** into app performance
- **Improved intra-day monitoring** for launches, experiments, or spikes
- **More consistent data across reports**

You can now make faster, more informed decisions without waiting for batch updates.

### Improved subscription definitions

We've significantly enhanced how subscriptions are counted and classified. These updates align more closely with how businesses track meaningful events in a customer’s lifecycle.

**What’s changed:**

- **Resubscriptions** (when a user churns and later resubscribes) are now **counted as _new_ subscriptions** rather than renewals. This change affects charts such as:

  - **New Paid Subscriptions**: May show an **increase**, as resubscriptions are no longer lumped in with renewals.
  - **Trial Conversion Rates**: May show a **decrease**, since resubscriptions are not counted as trial-to-paid conversions.

- **Product changes** (when a subscriber switches plans) are now treated as **new subscriptions**, since they often change the cadence or value of the billing cycle.

> These updates also apply to the **v2 API**, ensuring consistent definitions across both UI and programmatic access.

### New & updated dimensions

We've introduced new dimensions for filtering & segmenting, with more coming soon, and have made important updates to existing dimensions to make them more useful.

**New dimensions**

1. App version: Filter & segment charts by the first seen app version of a customer to understand how metrics like conversion rate are impacted by app version
2. Experiment: Filter & segment charts by the experiment & variant that a customer was enrolled in

**Updated dimensions**

1. Platform: Now refers to the first seen platform of a customer, not their last seen platform, so that metrics like conversion rates and LTV can be segmented by the platform a customer originated on without it changing over time (e.g. if a customer converts on the web and then downloads your iOS app)
2. Country: Now prioritizes the storefront of a customer or purchase over the customer's IP-based location. In charts which measure purchases, like Active Subscriptions, the storefront that the purchase occurred in will be used as the country; while in charts that measure customer cohorts, like Initial Conversion or Realized LTV per Customer, the first seen storefront of the customer will be used.

:::info Custom attributes
We'll continue to expand segmentation options during the beta, including adding support for filtering & segmenting by custom attributes.
:::

## Getting Started

You can access Real-time Charts from your dashboard by toggling `Real-time` on in Charts. Look for the real-time icon next to supported Charts. To see the current version of each chart, simply toggle `Real-time` off.

As you explore the beta, and have any questions about the experience, [please let us know here](link),

## Known Differences & Beta Notes

- Legacy charts may differ from Charts v2 due to updated subscription classification logic.
- Real-time reporting is available for most metrics, but a few may still refresh periodically while we finalize coverage.
