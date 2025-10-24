---
title: Experiments Results
slug: experiments-results-v1
hidden: false
---

You'll start seeing experiment results within 24 hours of launch. The Results page gives you a high-level overview of performance and lets you explore key metrics in detail. Results are organized across three tabs.

## Enrollment and notes
At the top of the Results page, you'll see the experiment's enrollment criteria and any notes you've added. This keeps context visible as you review the data. You can update your notes directly on the page as you analyze results.

![Enrollment criteria and experiment notes](/docs_images/experiments/v1/results-enrollment-notes.png)

## Results summary
The **Results summary** tab shows your primary and secondary metrics, the ones selected when setting up the experiment. This is the best place to start analyzing performance across variants.

### Chart and table views
You will first see the primary metric results, with a chart showing the accumulated results for the lifetime of your experiment and a table with the total values. Following this, your secondary metrics will be presented in their respective sections. For each of these metrics you can also display a chart.

![Primary and secondary metric sections in Results summary](/docs_images/experiments/v1/results-primary-metric-viz.png)

### Product breakdown and filters
You can analyze most metrics by product as well. Click on the caret next to the variant name to see the metric broken down by the individual products in your experiment.

![Product level breakdown](/docs_images/experiments/v1/results-product-breakdown.png)

This is helpful when trying to understand what's driving changes in performance, and how it might impact LTV. (A more prominent yearly subscription, for example, may decrease initial conversion rate relative to a more prominent monthly option; but those fewer conversions may produce more Realized LTV per paying customer).
To analyze results of a specific country or platform, use the filters to display only your selected segment.

:::info Data takes 24 hours to appear

The results refresher runs once every 24 hours.

If you're not seeing any data or are seeing unexpected results:

- **Ensure each product that is a part of the experiment has been purchased at least once**
- **Wait another 24 hours until the model can process more data**

When you stop an experiment, the results will continue to be updated for the next 400 days to capture any additional subscription events, and allow you to see how your Realized LTV matures for each variant over time.
:::

### Statistical Confidence

The **Chance to win** metric helps you understand if differences between variants are meaningful real improvements or due to chance. It's calculated based on the observed data and reflects the probability that a treatment variant is performing better than the control.

Example: 
If your Treatment (Variant B) shows a 6.1% initial conversion rate vs 5.2% for your Control (Variant A) with a 98% Chance to Win, you can be confident this improvement is meaningful, not just random variation.

Chance to win helps you make informed decisions about when to end your experiment. Many developers consider 95% Chance to Win sufficient to declare a winner, but the right threshold depends on what you're testing and your risk tolerance. For example, you may opt for a higher Chance to Win when deciding on a high-stakes change, such as whether to use in-app vs web purchases, than when deciding on a paywall copy change.

It's currently available for the following metrics: 
* Initial conversion rate
* Trial conversion rate
* Conversion to paying

These calculations will appear in the Results summary once you've collected enough data to produce reliable results. Use these statistical indicators to make confident decisions about when to end your experiment and decide on a winner.

:::tip Automatic emails for underperforming variants
If the Realized LTV of your Treatment is performing meaningfully worse than your Control, we'll automatically email you to let you know about it so that you can run your test with confidence.
:::

## Full report

The **Full report** tab gives you a detailed view of all experiment metrics. Use it to compare variant performance beyond your primary and secondary metrics.

All experiment metrics are available in tables that show the performance of Variant A (the control) versus the results and change over control of each treatment variant in your experiment.

The customer journey for a subscription product can be complex: a "conversion" may only be the start of a trial, a single payment is only a portion of the total revenue that subscription may eventually generate, and other events like refunds and cancellations are critical to understanding how a cohort is likely to monetize over time.

To help parse your results, we've broken up metrics into three tables:

1. **Initial conversion:** For understanding how these key early conversion rates have been influenced by your test. These metrics are frequently the strongest predictors of LTV changes in an experiment.
 ![Initial conversion table](/docs_images/experiments/v1/results-initial-conversion-table.png)

2. **Paid customers:** For understanding how your initial conversion trends are translating into new paying customers.
 ![Paid customers table](/docs_images/experiments/v1/results-paid-customers-table.png)

3. **Revenue:** For understanding how those two sets of changes interact with each other to yield overall impact to your business.
 ![Revenue table](/docs_images/experiments/v1/results-revenue-table.png)
  
Similar to the Results summary, you can also see a breakdown of the products performance for each metric by clicking on the caret next to the metric name.

There is also an option to visualize the cumulative results of a selected metric in a daily chart. To display the chart, click **Show chart** at the top of the tab section. You can then click **Export chart CSV** to receive an export of all metrics by day for deeper analysis.

![Optional chart in Full report tab](/docs_images/experiments/v1/results-full-report-chart.png)

The results from your experiment can also be exported in this table format using the **Export data CSV** button. This will included aggregate results per variant, and per product results, for flexible analysis.

## Variants setup
The **Variants setup** tab gives you an overview of the Offering linked to each variant. You can quickly access each Offering’s paywall, products, and metadata.

![Variant details](/docs_images/experiments/v1/results-variants-setup.png)

If your experiment uses placements, select the Offering name to view its full details.

## Metric definitions

### Initial conversion metric definitions

- **Customers**: All new customers who've been included in each variant of the experiment.
- **Paywall viewers**: The count of distinct customers who've reached a paywall in each variant in the experiment. (This metric is only available when using RevenueCat Paywalls)
- **Initial conversions**: A purchase of any product offered to a customer in the experiment. This includes products with free trials and non-subscription products as well.
- **Initial conversion rate**: The percent of customers who purchased any product.
- **Trials started**: The number of trials started.
- **Trials completed**: The number of trials completed. A trial may be completed due to its expiration or its conversion to paid.
- **Trials converted**: The number of trials that have converted to a paying subscription. Keep in mind that this metric will lag behind trials started due to the length of the trial offered. For example, if you're offering a 7-day trial, for the first 6 days of your experiment you will see trials started but none converted yet.
- **Trial conversion rate**: The percent of your completed trials that converted to paying subscriptions. (_NOTE: A trial is considered complete on the day of its expiration, but it may not be until later that day that a trial conversion occurs and RevenueCat is informed of it by the store(s). This can cause your Trial conversion rate to appear lower than expected early in the day before all potential trial conversions have come through._)

### Paid customers metric definitions

- **Paid customers**: The number of customers who made at least 1 payment. This includes payments for non-subscription products, but does NOT include free trials. Customers who later received a refund will be counted in this metric, but you can use "Refunded customers" to subtract them out.
- **Conversion to paying**: The percent of customers enrolled in the variant who made at least one payment on any product.
- **Active subscribers**: The number of customers with an active subscription as of the latest results update.
- **Active subscribers (set to renew)**: The number of customers with an active subscription who are set to renew their subscription (e.g. they have not cancelled) as of the latest results update. (_NOTE: This measure is only available in the Customer Journey data table, not the Results chart._)
- **Churned subscribers**: The number of customers with a previously active subscription that has since churned as of the latest results update. A subscriber is considered churned once their subscription has expired (which may be at the end of their grace period if one was offered).
- **Refunded customers**: The number of customers who've received at least 1 refund.

### Revenue metric definitions

- **Realized LTV (revenue)**: The total revenue that's been generated so far (realized) from each experiment variant.

- **Realized LTV per customer**: The total revenue that's been generated so far (realized) from each experiment variant, divided by the number of customers in each variant. This should frequently be your primary success metric for determining which variant performed best.

- **Realized LTV per paying customer**: The total revenue that's been generated so far (realized) from each experiment variant, divided by the number of paying customers in each variant. Compare this with "Conversion to paying" to understand if your differences in Realized LTV are coming the payment conversion funnel, or from the revenue generated from paying customers.

- **Total MRR**: The total monthly recurring revenue your current active subscriptions in each variant would generate on a normalized monthly basis. [Learn more about MRR here.](/dashboard-and-metrics/charts#monthly-recurring-revenue-mrr)

- **Total MRR (set to renew)**: The total monthly recurring revenue your current active subscriptions who are currently set to renew (e.g. they have not cancelled) in each variant would generate on a normalized monthly basis. (_NOTE: This measure is only available in the Customer Journey data table, not the Results chart._)

- **MRR per customer**: The total monthly recurring revenue your current active subscriptions in each variant would generate on a normalized monthly basis, divided by the number of customers in each variant.

- **MRR per paying customer**: The total monthly recurring revenue your current active subscriptions in each variant would generate on a normalized monthly basis, divided by the number of paying customers in each variant.

:::tip Only new users are included in the results

To keep variants balanced, only new users are enrolled in experiments. Existing users may behave differently based on previous experiences or pricing, which can skew results.
:::


| Question                                                                                                  | Answer                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| What is included in the "Other" category in the product level breakdown of my results?                    | If the customers enrolled in your experiment purchased any products that were not included in either the Control or Treatment Offering, then they will be listed in the \"Other\" category when reviewing the product-level breakdown of a metric. This is to ensure that all conversions and revenue generated by these customers can be included when measuring the total revenue impact of one variant vs. another, even if that revenue was generated from other areas of the product experience (like a special offer triggered in your app).                                                                                                                                                                                                                                                                                            |
| Why do the results for one variant contain purchases of products not included in that variant's Offering? | There are many potential reasons for this, but the two most common occur when (1) there are areas of your app that serve products outside of the Current Offering returned by RevenueCat for a given customer, or (2) the offered Subscription Group on the App Store contains additional products outside of that variant's Offering. For the first case, please check and confirm that all places where you serve Products in your app are relying on the Current Offering from RevenueCat to determiner what to display. For the second case, we recommend creating new Subscription Groups on the App Store for each Offering so that a customer who purchases from that Offering will only have that same set of options to select from one when considering changing or canceling their subscription from Subscription Settings on iOS. |
| What happens to customers that were enrolled in an experiment after it's been stopped?                    | New customers will no longer be enrolled in an experiment after it's been stopped, and customers who were already enrolled in the experiment will begin receiving the Default Offering if they reach a paywall again. Since we continually refresh results for 400 days after an experiment has been ended, you may see renewals from these customers in your results, since they were enrolled as part of the test while it was running; but new subscriptions started by these customers after the experiment ended and one-time purchases made after the experiment ended will not be included in the results.                                                                                                                                                                                                                             |
| How can I review the individual customers who were enrolled in my experiment?                             | When using the Get or Create Subscriber endpoint you'll be able to see if an individual subscriber was enrolled in an experiment, and which variant they were assigned to, and can then pass that fact to other destinations like an analytics provider like Amplitude & Mixpanel, or your own internal database.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| What filters are supported in experiments?                            | Our Dashboard currently supports filtering experiments results by Platform and Country. This allows you to determine if the change was successful in a specific regional market, for example. You can also create experiments targeting only specific countries.                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
