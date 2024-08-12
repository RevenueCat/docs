---
title: Overview Metrics
slug: overview
excerpt: In-app purchase dashboard
hidden: false
---

The RevenueCat Overview is your in-app purchase hub of key metrics on the health of your business.

## Metrics

### Active Trials

![](/images/dc19304-Screen_Shot_2022-09-02_at_11.26.49_AM_6bf1457a83d44e44752bc7327b25fe5d.png "Screen Shot 2022-09-02 at 11.26.49 AM.png")

The 'Active Trials' card displays the number of active free trials that are currently tracked in RevenueCat. This includes trials which may be cancelled, or within a grace period, until they either convert to paid or expire.

### Active Subscriptions

![](/images/6bfe4ac-Screen_Shot_2022-09-02_at_11.26.55_AM_525a5c532920baea0dc9bc3dbcbafb3a.png "Screen Shot 2022-09-02 at 11.26.55 AM.png")

The 'Active Subscriptions' card displays the number of active paid subscriptions that are currently tracked in RevenueCat. This includes active paid subscriptions which may be cancelled, or within a grace period, until they expire.

### MRR

![](/images/6fef8bd-Screen_Shot_2022-09-02_at_11.27.00_AM_5401bc799d7430b00aa421c42d0f92d8.png "Screen Shot 2022-09-02 at 11.27.00 AM.png")

The 'MRR' card displays the current monthly recurring revenue tracked in RevenueCat. You can read more about how MRR is calculated in our [charts guide here](/dashboard-and-metrics/charts/monthly-recurring-revenue-mrr-chart).

### Revenue

![](/images/06b3330-Screen_Shot_2022-09-02_at_11.27.06_AM_03685f17ef1b21cf9728d3609c372c95.png "Screen Shot 2022-09-02 at 11.27.06 AM.png")

The 'Revenue' card displays the gross revenue tracked in RevenueCat within the last 28 days. This is before any store fees, taxes, etc.

### New Customers

![](/images/5373eb6-Screen_Shot_2022-09-02_at_11.27.13_AM_a972a6c07fcc4cc85a407a573715491b.png "Screen Shot 2022-09-02 at 11.27.13 AM.png")

The 'New Customers' card displays the number of App User IDs created in the past 28 days. Multiple App User IDs aliased together will be counted as 1 New Customer.

:::info
You should expect the New Customer count in RevenueCat to be different than the download numbers provided by the respective store. However, if things seem drastically off, make sure you're [identifying users](/customers/user-ids) correctly in RevenueCat.
:::

### Active Users

![](/images/adc3dbb-Screen_Shot_2022-09-02_at_11.27.19_AM_56f6958cc4d5a66fbfb78db317af99af.png "Screen Shot 2022-09-02 at 11.27.19 AM.png")

The 'Active Users' card displays the number of App User IDs that have communicated with RevenueCat in the past 28 days. Active users should be higher than 'New Customers' if your app is retaining users and they keep coming back after 28 days. Multiple App User IDs aliased together will be counted as 1 active user.

:::info
For performance reasons, currently you can expect this number to be updated as quickly as once per hour
:::

## Interacting with cards

![](/images/413de45-Screen_Shot_2022-09-02_at_11.35.56_AM_73b115e618bada7857555a79623def48.png "Screen Shot 2022-09-02 at 11.35.56 AM.png")

You can hover over the icon in the bottom right corner of the card to see how recently the data within the card has been updated. For most customers, subscription metrics will be updated in real-time, but New Customer and Active Users may be cached for 1-2 hours. For some larger customers, for performance reasons, subscription metrics may be cached for 1-2 hours as well.

Click on the "Explore" icon in the top right corner of the card to see the corresponding chart to better understand your performance.

You can also click on "Filter" just above your Overview cards to filter your metrics by Project.

## Sandbox Data

The sandbox data toggle will change the Overview metrics to report from sandbox purchases or production purchases. There's no concept of a sandbox or production _user_ in RevenueCat, since the same App User Id can have both production and sandbox receipts. Because of this, **the 'View sandbox data' toggle will not affect 'Installs' or 'Active User' cards**.
![](/images/7efaa56-Untitled_33bd2623085b6b0819921280852fd64f.png "Untitled.png")

## Recent Transactions

Below the metrics cards is a table of the most recent transactions shown in real-time. Transactions include trial starts, trial conversions, purchases, and renewals.

## Dates and times representation

All dates and times in the dashboard are represented in UTC, unless explicitly specified.

## Next Steps

- Dig into the details of your subscriber base by [looking at the charts →](/dashboard-and-metrics/charts)
