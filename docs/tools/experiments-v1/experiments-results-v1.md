---
title: Experiments Results
slug: experiments-results-v1
hidden: false
---

Within 24 hours of your experiment's launch you'll start seeing data on the Results page. RevenueCat offers experiment results through each step of the subscription journey to give you a comprehensive view of the impact of your test. You can dig into these results in a few different ways, which we'll cover below.

## Results chart

The Results chart should be your primary source for understanding how a specific metric has performed for each variant over the lifetime of your experiment.

![](/images/12ac18a-Screen_Shot_2022-10-13_at_2.47.13_PM_1efde91830213baea395aeb7c6bf9be0.png "Screen Shot 2022-10-13 at 2.47.13 PM.png")

By default you'll see your \*_Realized LTV per customer_ for all platforms plotted daily for the lifetime of your experiment, but you can select any other experiment metric to visualize, or narrow down to a specific platform.

:::info Why Realized LTV per customer?
Lifetime value (LTV) is the standard success measure you should be using for pricing experiments because it captures the full revenue impact on your business. Realized LTV per customer measures the revenue you've accrued so far divided by the total customers in each variant so you understand which variant is on track to produce higher value for your business.

Keep in mind that your LTV over a longer time horizon might be impacted by the renewal behavior of your customers, the mix of product durations they're on, etc.
:::

You can also click **Export chart CSV** to receive an export of all metrics by day for deeper analysis.

:::info Data takes 24 hours to appear

The results refresher runs once every 24 hours.

If you're not seeing any data or are seeing unexpected results, try:

- **Ensuring each product that is a part of the experiment has been purchased at least once**
- **Waiting another 24 hours until the model can process more data**

When you stop an experiment, the results will continue to be updated for the next 400 days to capture any additional subscription events, and allow you to see how your Realized LTV matures for each variant over time.
:::

## Customer journey tables

The customer journey tables can be used to dig into and compare your results across variants.

The customer journey for a subscription product can be complex: a "conversion" may only be the start of a trial, a single payment is only a portion of the total revenue that subscription may eventually generate, and other events like refunds and cancellations are critical to understanding how a cohort is likely to monetize over time.

To help parse your results, we've broken up experiment results into three tables:

1. **Initial conversion:** For understanding how these key early conversion rates have been influenced by your test. These metrics are frequently the strongest predictors of LTV changes in an experiment.
2. **Paid customers:** For understanding how your initial conversion trends are translating into new paying customers.
3. **Revenue:** For understanding how those two sets of changes interact with each other to yield overall impact to your business.
   ![](/images/24e17e5-Screen_Shot_2022-10-18_at_1.20.47_PM_36f27467c3b3e0e2db3667405e13ac2a.png "Screen Shot 2022-10-18 at 1.20.47 PM.png")

In addition to the results per variant that are illustrated above, you can also analyze most metrics by product as well. Click on the caret next to "All" within metrics that offer it to see the metric broken down by the individual products in your experiment. This is especially helpful when trying to understand what's driving changes in performance, and how it might impact LTV. (A more prominent yearly subscription, for example, may decrease initial conversion rate relative to a more prominent monthly option; but those fewer conversions may produce more Realized LTV per paying customer)

![Untitled (1).png](/images/2326dd9-Untitled_1_59b7cf292335cfa89f66d35a91de9af5.png)

The results from your experiment can also be exported in this table format using the **Export data CSV** button. This will included aggregate results per variant, and per product results, for flexible analysis.

:::tip Automatic emails for poor performing tests
If the Realized LTV of your Treatment is performing meaningfully worse than your Control, we'll automatically email you to let you know about it so that you can run your test with confidence.
:::

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

To keep your A and B cohorts on equal footing, only new users are added to experiments. Here's an example to illustrate what can happen if existing users are added to an experiment: an existing user who is placed in a cohort might make a purchase they wouldn't otherwise make because the variant they were shown had a lower price than the default offering they previously saw. This might mean that the user made a purchase out of fear that they were missing out on a sale and wanted to lock in the price in anticipation of it going back up.
:::

| Question                                                                                                  | Answer                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| What is included in the "Other" category in the product level breakdown of my results?                    | If the customers enrolled in your experiment purchased any products that were not included in either the Control or Treatment Offering, then they will be listed in the \"Other\" category when reviewing the product-level breakdown of a metric. This is to ensure that all conversions and revenue generated by these customers can be included when measuring the total revenue impact of one variant vs. another, even if that revenue was generated from other areas of the product experience (like a special offer triggered in your app).                                                                                                                                                                                                                                                                                            |
| Why do the results for one variant contain purchases of products not included in that variant's Offering? | There are many potential reasons for this, but the two most common occur when (1) there are areas of your app that serve products outside of the Current Offering returned by RevenueCat for a given customer, or (2) the offered Subscription Group on the App Store contains additional products outside of that variant's Offering. For the first case, please check and confirm that all places where you serve Products in your app are relying on the Current Offering from RevenueCat to determiner what to display. For the second case, we recommend creating new Subscription Groups on the App Store for each Offering so that a customer who purchases from that Offering will only have that same set of options to select from one when considering changing or canceling their subscription from Subscription Settings on iOS. |
| What happens to customers that were enrolled in an experiment after it's been stopped?                    | New customers will no longer be enrolled in an experiment after it's been stopped, and customers who were already enrolled in the experiment will begin receiving the Default Offering if they reach a paywall again. Since we continually refresh results for 400 days after an experiment has been ended, you may see renewals from these customers in your results, since they were enrolled as part of the test while it was running; but new subscriptions started by these customers after the experiment ended and one-time purchases made after the experiment ended will not be included in the results.                                                                                                                                                                                                                             |
| How can I review the individual customers who were enrolled in my experiment?                             | When using the Get or Create Subscriber endpoint you'll be able to see if an individual subscriber was enrolled in an experiment, and which variant they were assigned to, and can then pass that fact to other destinations like an analytics provider like Amplitude & Mixpanel, or your own internal database.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| How can I filter my results by other dimensions like Country in the Dashboard?                            | Our Dashboard only supports filtering by Platform today, but if there are specific countries you're looking to distinctly measure results for you can instead run simultaneous tests targeting each set of countries. Then, each tests results will tell you how the experiment performed in that country set so you can determine where the change was and was not successful.                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
