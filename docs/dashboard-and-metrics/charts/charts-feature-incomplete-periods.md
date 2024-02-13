---
title: "Charts Feature: Incomplete Periods"
slug: charts-feature-incomplete-periods
hidden: false
---

## Summary

Our Charts render incomplete periods distinctly to ensure that it's easy to quickly and accurately interpret your data. Incomplete periods are important to recognize because they represent cohorts that are not yet fully mature, and that therefore may behave differently when compared to complete periods.

## What is an incomplete period?

An incomplete period is one where its cohort has not yet fully matured. The definition of a "mature" cohort varies based on the chart, though.

### Event date cohorting

For example, Charts such as Active Subscriptions, MRR, and Revenue, where data is cohorted by event date, the incomplete period will always be the current one (today, this week, etc). This is especially important to recognize when measuring large periods, such as your Revenue by month, where the value halfway through the month may be quite different from what the previous complete data points would show.

![](/images/8d76fa7-Screen_Shot_2023-01-03_at_3.32.58_PM_7d0d284921a71b633eb49f777b47af46.png "Screen Shot 2023-01-03 at 3.32.58 PM.png")

### First seen date cohorting

On the other hand, for Charts such as Realized LTV per Customer and Initial Conversion, which are cohorted by a customer's first seen date, the incomplete period is a function of the current date and the specified Customer Lifetime or Conversion Timeframe.
![](/images/e507eee-Untitled_301798b046ae2bece1831c253bb3b119.png "Untitled.png")

#### Customer Lifetime in Realized LTV Charts

The Customer Lifetime selector limits the time that a cohort has to mature in order for its revenue to be include in lifetime value (LTV). This allows for accurate comparisons of realized LTV between periods, where each cohort has been given equal time to mature.

A specified Customer Lifetime of 30 days means that any revenue generated within the first 30 complete days of a customer's lifetime will be included in their Realized LTV. Therefore, a period is not considered complete until its cohort is at least as old as the selected Customer Lifetime (in this case, 30 days).

If you change the Customer Lifetime selection to be shorter or longer, the length of the periods which will be marked as incomplete will move in the same direction.
![](/images/b08d4b3-Untitled_1_6f941aa3cbd2e089ab84d868a5bf59ff.png "Untitled (1).png")

#### Conversion Timeframe in Conversion Charts

Similarly, the Conversion Timeframe selector limits the time that a cohort has to convert within in order to be counted in the measured conversion rate. This allows for accurate comparisons between periods, where each cohort has been given equal time to convert.

A specified Conversion Timeframe of 7 days means that any conversions that occur within the first 7 complete days since the customer's first seen date will be included in the count of conversions and the conversion rate for that cohort. Therefore, that period will not be considered complete until its cohort is at least as old as the selected Conversion Timeframe (in this case, 7 days).

If you change the Conversion Timeframe to be longer or shorter, the length of the periods which will be marked as incomplete will move in the same direction.

:::warning
Conversion Timeframes are not yet available for the Trial Conversion chart, but will be soon.
:::

### How should I use incomplete periods?

The first and most important way to approach an incomplete period is to be _skeptical_ of it when comparing it to other periods. Is this month's Revenue tracking below last month? Dig deeper before drawing a conclusion based on an incomplete period. For example, there may be particular days of the month that you have a high density of renewals scheduled for.

However, they can also be used as an important signal to understand when a cohort is exhibiting out of the ordinary behavior. For example, if your Actives Movement chart is showing more New Actives during this incomplete month versus your previous complete month; that's a strong a signal that your subscriber acquisition is accelerating, and that it'd be worth your time to dig in and understand why.

### Next Steps

To learn more about our Charts, check out our overview of the experience **[here](/dashboard-and-metrics/charts)**.
