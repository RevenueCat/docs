---
title: Overview Metrics
slug: overview
excerpt: In-app purchase dashboard
hidden: false
---

The RevenueCat Overview is your in-app purchase hub of key metrics on the health of your business.

## Metrics

![Overview metrics](/docs_images/dashboard-and-metrics/overview/metrics.png)

### Active Trials

The 'Active Trials' card displays the number of active free trials that are currently tracked in RevenueCat. This includes trials which may be cancelled, or within a grace period, until they either convert to paid or expire.

### Active Subscriptions

The 'Active Subscriptions' card displays the number of active paid subscriptions that are currently tracked in RevenueCat. This includes active paid subscriptions which may be cancelled, or within a grace period, until they expire.

### MRR

The 'MRR' card displays the current monthly recurring revenue tracked in RevenueCat. You can read more about how MRR is calculated in our [charts guide here](/dashboard-and-metrics/charts/monthly-recurring-revenue-mrr-chart).

### Revenue

The 'Revenue' card displays the gross revenue tracked in RevenueCat within the last 28 days. This is before any store fees, taxes, etc.

### New Customers

The 'New Customers' card displays the number of App User IDs created in the past 28 days. Multiple App User IDs aliased together will be counted as 1 New Customer.

:::info
You should expect the New Customer count in RevenueCat to be different than the download numbers provided by the respective store. However, if things seem drastically off, make sure you're [identifying users](/customers/user-ids) correctly in RevenueCat.
:::

### Active Users

The 'Active Users' card displays the number of App User IDs that have communicated with RevenueCat in the past 28 days. Active users should be higher than 'New Customers' if your app is retaining users and they keep coming back after 28 days. Multiple App User IDs aliased together will be counted as 1 active user.

:::info
For performance reasons, currently you can expect this number to be updated as quickly as once per hour
:::

## Interacting with cards

You can hover over the clock icon in the card to see how recently the data within the card has been updated.

![Overview card interaction](/docs_images/dashboard-and-metrics/overview/interaction.png)

For most customers, subscription metrics will be updated in real-time, but New Customer and Active Users may be cached for 1-2 hours. For some larger customers, for performance reasons, subscription metrics may be cached for 1-2 hours as well.

Click on each card to see the corresponding chart to better understand your performance.

You can also filter your overview metrics by clicking on individual projects just above the overview cards.

## Sandbox Data

The sandbox data toggle will change the overview metrics data to report from sandbox purchases or production purchases.

Please note, there's no concept of a sandbox or production _user_ in RevenueCat, since the same App User ID can have both production and sandbox receipts. Because of this, **the 'View sandbox data' toggle will not affect 'Installs' or 'Active Users' cards**.

## Recent Transactions

Below the metrics cards is a table of the most recent transactions shown in real-time. Transactions include trial starts, trial conversions, purchases, and renewals.

## Dates and times representation

All dates and times in the dashboard are represented in UTC, unless explicitly specified.

## Next Steps

- Dig into the details of your subscriber base by [looking at the charts →](/dashboard-and-metrics/charts)
