---
title: Overview
slug: /dashboard-overview
excerpt: In-app purchase dashboard
hidden: false
---

The RevenueCat Overview is your in-app purchase hub of key metrics on the health of your business.

## Metrics

### Active Trials

![](https://files.readme.io/dc19304-Screen_Shot_2022-09-02_at_11.26.49_AM.png "Screen Shot 2022-09-02 at 11.26.49 AM.png")

The 'Active Trials' card displays the number of active free trials that are currently tracked in RevenueCat. This includes trials which may be cancelled, or within a grace period, until they either convert to paid or expire.

### Active Subscriptions

![](https://files.readme.io/6bfe4ac-Screen_Shot_2022-09-02_at_11.26.55_AM.png "Screen Shot 2022-09-02 at 11.26.55 AM.png")

The 'Active Subscriptions' card displays the number of active paid subscriptions that are currently tracked in RevenueCat. This includes active paid subscriptions which may be cancelled, or within a grace period, until they expire.

### MRR

![](https://files.readme.io/6fef8bd-Screen_Shot_2022-09-02_at_11.27.00_AM.png "Screen Shot 2022-09-02 at 11.27.00 AM.png")

The 'MRR' card displays the current monthly recurring revenue tracked in RevenueCat. You can read more about how MRR is calculated in our [charts guide here](/monthly-recurring-revenue-mrr-chart).

### Revenue

![](https://files.readme.io/06b3330-Screen_Shot_2022-09-02_at_11.27.06_AM.png "Screen Shot 2022-09-02 at 11.27.06 AM.png")

The 'Revenue' card displays the gross revenue tracked in RevenueCat within the last 28 days. This is before any store fees, taxes, etc.

### New Customers

![](https://files.readme.io/5373eb6-Screen_Shot_2022-09-02_at_11.27.13_AM.png "Screen Shot 2022-09-02 at 11.27.13 AM.png")

The 'New Customers' card displays the number of App User IDs created in the past 28 days. Multiple App User IDs aliased together will be counted as 1 New Customer.

:::info
You should expect the New Customer count in RevenueCat to be different than the download numbers provided by the respective store. However, if things seem drastically off, make sure you're [identifying users](/user-ids) correctly in RevenueCat.
:::

### Active Users

![](https://files.readme.io/adc3dbb-Screen_Shot_2022-09-02_at_11.27.19_AM.png "Screen Shot 2022-09-02 at 11.27.19 AM.png")

The 'Active Users' card displays the number of App User IDs that have communicated with RevenueCat in the past 28 days. Active users should be higher than 'New Customers' if your app is retaining users and they keep coming back after 28 days. Multiple App User IDs aliased together will be counted as 1 active user.

:::info
For performance reasons, currently you can expect this number to be updated as quickly as once per hour
:::

## Interacting with cards

![](https://files.readme.io/413de45-Screen_Shot_2022-09-02_at_11.35.56_AM.png "Screen Shot 2022-09-02 at 11.35.56 AM.png")

You can hover over the icon in the bottom right corner of the card to see how recently the data within the card has been updated. For most customers, subscription metrics will be updated in real-time, but New Customer and Active Users may be cached for 1-2 hours. For some larger customers, for performance reasons, subscription metrics may be cached for 1-2 hours as well.

Click on the "Explore" icon in the top right corner of the card to see the corresponding chart to better understand your performance.

You can also click on "Filter" just above your Overview cards to filter your metrics by Project.

## Sandbox Data

The sandbox data toggle will change the Overview metrics to report from sandbox purchases or production purchases. There's no concept of a sandbox or production _user_ in RevenueCat, since the same App User Id can have both production and sandbox receipts. Because of this, **the 'View sandbox data' toggle will not affect 'Installs' or 'Active User' cards**.
![](https://files.readme.io/7efaa56-Untitled.png "Untitled.png")

## Recent Transactions

Below the metrics cards is a table of the most recent transactions shown in real-time. Transactions include trial starts, trial conversions, purchases, and renewals.

## Dates and times representation

All dates and times in the dashboard are represented in UTC, unless explicitly specified.

## Next Steps

- Dig into the details of your subscriber base by [looking at the charts ➡️](/charts)
