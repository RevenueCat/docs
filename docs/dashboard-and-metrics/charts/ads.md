---
title: Ads Charts
sidebar_label: Ads
slug: ads
excerpt: Track and analyze ad monetization metrics
hidden: false
---

RevenueCat's ad charts provide unified visibility into your ad monetization alongside your subscription revenue. Track impressions, clicks, revenue, and key performance metrics across all your ad networks and mediators.

:::warning Data differences with ad networks and mediators
RevenueCat's ad data comes from real-time SDK callbacks and will not match the numbers in your ad network or mediator dashboards. Ad networks and mediators apply post-processing, deduplication, and fraud filtering that can take 24-48 hours to finalize, resulting in different totals. Use RevenueCat for real-time tracking and unified revenue reporting, and your ad platform dashboards for final reconciliation.
:::

## Available Charts

### Performance Metrics

- [**Ad Impressions**](/dashboard-and-metrics/charts/ad-impressions-chart) - Track the total number of times ads were displayed to users
- [**Ad Clicks**](/dashboard-and-metrics/charts/ad-clicks-chart) - Monitor how many times users clicked on ads
- [**Ad Revenue**](/dashboard-and-metrics/charts/ad-revenue-chart) - View revenue generated from ad impressions

### Efficiency Metrics

- [**Ad CTR (Click-Through Rate)**](/dashboard-and-metrics/charts/ad-ctr-chart) - Measure the percentage of impressions that resulted in clicks
- [**Ad RPM (Revenue Per Mille)**](/dashboard-and-metrics/charts/ad-rpm-chart) - Track revenue per 1,000 impressions
- [**Ad Fill Rate**](/dashboard-and-metrics/charts/ad-fill-rate-chart) - Monitor the percentage of ad requests that were successfully filled

### User Metrics

- [**Ad Monetized Customers**](/dashboard-and-metrics/charts/ad-monetized-customers-chart) - Track unique customers who generated ad impressions

## Ad Dimensions

Ad charts can be filtered and segmented by ad-specific dimensions in addition to standard chart dimensions:

- **Network Name**: The advertising network that served the ad (e.g., Google Ads, Facebook Audience Network, Unity Ads)
- **Mediator Name**: The mediation platform managing multiple ad networks (e.g., AdMob, AppLovin)
- **Ad Placement**: The contextual placement where the ad appears in your app
- **Ad Unit**: A unique identifier for a specific ad slot or format in your app
- **Ad Format**: The type of ad displayed (e.g., banner, interstitial, rewarded)

## How to Use Ad Charts

Ad charts help you understand and optimize your ad monetization strategy:

1. **Monitor overall performance**: Track impressions, clicks, and revenue trends over time
2. **Compare efficiency**: Use CTR and RPM to identify which ad placements, networks, or user segments perform best
3. **Optimize fill rates**: Identify gaps in ad delivery to maximize monetization opportunities
4. **Unified revenue view**: See ad revenue alongside subscription revenue for complete business insights
5. **Segment analysis**: Break down metrics by country, platform, or custom dimensions to find optimization opportunities

## Filters and Segments

Like all RevenueCat charts, ad charts support filtering and segmentation by standard chart dimensions in addition to the ad-specific dimensions listed above. This allows you to answer questions like:

- Which countries generate the highest ad RPM?
- How does ad performance differ between platforms?
- What's the CTR for different ad networks or ad placements?
