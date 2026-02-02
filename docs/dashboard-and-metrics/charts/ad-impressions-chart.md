---
title: Ad Impressions Chart
slug: ad-impressions-chart
hidden: false
---

The Ad Impressions chart tracks the total number of times ads were displayed to users in your app. Impressions represent your ad exposure and are the foundation for calculating other key metrics like CTR and RPM.

:::warning Data differences with ad networks and mediators
RevenueCat's ad data comes from real-time SDK callbacks and will not match the numbers in your ad network or mediator dashboards. Ad networks and mediators apply post-processing, deduplication, and fraud filtering that can take 24-48 hours to finalize, resulting in different totals. Use RevenueCat for real-time tracking and unified revenue reporting, and your ad platform dashboards for final reconciliation.
:::

### Measures

**Impressions**: The total number of times ads were successfully displayed to users. Each impression represents one instance of an ad being shown.

### Available settings

- Filters: Yes
- Segments: Yes

### Ad dimensions

Ad charts can be filtered and segmented by several ad-specific dimensions:

- **Network Name**: The advertising network that served the ad (e.g., Google Ads, Facebook Audience Network, Unity Ads)
- **Mediator Name**: The mediation platform managing multiple ad networks (e.g., AdMob, AppLovin)
- **Ad Format**: The type of ad displayed (e.g., banner, interstitial, rewarded)
- **Ad Placement**: The contextual placement where the ad appears in your app
- **Ad Unit**: A unique identifier for a specific ad slot or format in your app

## How to use Ad Impressions in your business

Ad impressions help you understand the scale of your ad monetization efforts:

- Monitor impression trends to see how ad exposure changes as your user base grows
- Segment by platform or country to understand where most of your ad inventory is being consumed
- Compare impressions against ad revenue to identify variations in monetization efficiency
- Use with Fill Rate to understand how well you're capitalizing on ad opportunities

## Calculation

For each period, we measure the total count of ad impressions where ads were successfully displayed to users. Each impression is counted individually, even if shown to the same user multiple times.

## FAQs

| Question                                                         | Answer                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| ---------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Why don't RevenueCat's ad numbers match my ad network dashboard? | RevenueCat reports ad data from real-time SDK callbacks as they occur. Ad networks and mediators (like AdMob, AppLovin, ironSource) process their data over 24-48 hours, applying deduplication, fraud filtering, and other adjustments that can reduce reported totals. This means RevenueCat may show higher numbers than your ad platform. Use RevenueCat for real-time insights and unified revenue tracking, and your ad platform for final billing reconciliation. |
| Can I reconcile RevenueCat's ad data with my ad network?         | Exact reconciliation is not possible due to the different data processing methodologies. RevenueCat captures raw SDK events in real-time, while ad networks apply various filters and adjustments. For financial reporting, rely on your ad network's finalized numbers. Use RevenueCat's data to understand real-time trends and combine ad revenue with subscription revenue in a single dashboard.                                                                    |
| Which ad metrics are most reliable for decision-making?          | Focus on relative trends and comparisons rather than absolute numbers. For example, comparing RPM across countries or tracking CTR trends over time in RevenueCat will give you actionable insights, even if the absolute impression counts differ from your ad platform.                                                                                                                                                                                                |
