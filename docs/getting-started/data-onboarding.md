---
title: Data Onboarding
slug: data-onboarding
excerpt: Get Started with Your Data in RevenueCat
hidden: false
---

So, you're a data person, huh? Well you’re in luck, because we have a lot of it. Here, we’ll cover some of the basics to help you get started with RevenueCat. 

## Core Data Definitions

Let’s start with some definitions to help you understand & analyze your RevenueCat data. You can think about the following core metrics as foundational measures for your conversion funnel. 

* New Customers: 'New Customers' includes the number of unique users (App User IDs) created in a given time window. Multiple App User IDs aliased together will be counted as 1 New Customer. Note: New Customers ≠ Active Subscribers. New Customers simply represents new users that were seen in your app. 
* Initial Conversions: Customers that converted on any product or subscription within the specified Conversion Timeframe 
* Active Subscriptions: Active Subscriptions shows the number of unexpired, paid subscriptions. This includes active paid subscriptions which may be cancelled, or within a grace period, until they expire. 

## Example Chart: Trial Conversions

This becomes a bit more nuanced when observing all current states of your users, including trials, pending conversions, and abandons. A chart that data engineers reference frequently is Trial Conversion Chart, which gives a detailed view into the conversion  funnel, from New Customer to Trials Started, Converted, Pending & Abandoned. 
  
* Trials Started: The number of new customers that were first seen during the cohort period.
* Conversion Rate: The number of trials started by customers in this cohort.
* Pending Rate: The number of active trials that are set to auto-convert on completion.
* Abandon Rate: The number of trials that have completed without converting or that are active but are not set to auto-convert on completion.

## Solving Common Data Challenges with RevenueCat

1. <b>Cross-platform reporting:</b> combining data from multiple sources (e.g. app stores) can be difficult (to say the least) due to lack of common identifiers, differences in definitions in different sources, and delayed data availability. RevenueCat eliminates the need to deduce complex data formats from app stores, which are formatted for transaction processing, not analytics use cases. Read more about <a href="https://www.revenuecat.com/docs/integrations/scheduled-data-exports">Scheduled Date Exports</a> & <a href="https://www.revenuecat.com/docs/integrations/third-party-integrations">3rd Party Integrations</a>.
2. <b>Leveraging Custom User Attributes:</b> organizing customer data to attach to targeted offers, pricing, packaging & paywalls is especially challenging given the above cross-platform challenges. RevenueCat Targeting allows you to use ready-made filters to strategically group your users by any custom attribute you define; or by dimensions like country, app platform, app version, RevenueCat SDK version. <a href="https://www.youtube.com/watch?v=NLNp_q7_RAQ">Watch the Video</a>
3. <b>Monitoring state changes in subscribers:</b> RevenueCat Events notify you in near real-time to any changes that occur to a customer's subscription and can automatically be sent into a variety of third-party tools to get clean data in all of your systems.

RevenueCat events work by connecting directly to the app stores, meaning they are not dependent on any in-app usage or activity and are always sent from RevenueCat's servers. Server-side event detection is crucial for subscription apps since most interesting events occur when your app is inactive (e.g. trial conversions, renewals, cancellations, etc.).

Read more about <a href="https://www.revenuecat.com/docs/integrations/integrations">Events</a> and explore <a href="Common Webhook Flows used to notify you throughout a customer’s journey. 


### More Popular Features & FAQs

1. <a href="https://www.revenuecat.com/docs/dashboard-and-metrics/charts/initial-conversion-chart#conversion-timeframe">Cohorts & Conversion Timeframes</a>
2. <a href="https://www.revenuecat.com/docs/dashboard-and-metrics/charts#date-range">Date Range Options & Conversion Windows</a>
3. <a href="https://community.revenuecat.com/featured-articles-55/about-data-discrepancies-116">Common Data Discrepancies</a>
4. <a href="https://www.revenuecat.com/docs/integrations/integrations">Events Overview & Getting Data Out of RevenueCat</a>
5. <a href="https://www.revenuecat.com/docs/integrations/scheduled-data-exports">Scheduled Data Exports</a>
6. <a href="https://www.revenuecat.com/docs/integrations/third-party-integrations">3rd Party Integrations</a>

