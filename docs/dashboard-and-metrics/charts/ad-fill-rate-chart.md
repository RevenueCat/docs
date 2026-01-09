---
title: Ad Fill Rate Chart
slug: ad-fill-rate-chart
hidden: false
---

The Ad Fill Rate chart shows how successfully ad requests are being fulfilled with actual ads. A higher fill rate means more opportunities to monetize your users. Low fill rates may indicate targeting issues or limited ad inventory availability.

### Measures

**Ads Requested**: The total number of times your app requested an ad from the ad network. Each request represents a monetization opportunity.

**Ads Loaded**: The number of ads that successfully loaded and were ready to display. This represents fulfilled monetization opportunities.

**Ads Failed to Load**: The number of ad requests that couldn't be filled with an ad. Failed requests represent missed monetization opportunities.

### Calculations

**Fill Rate**: The percentage of ad requests that were successfully filled with ads, calculated as (Ads Loaded ÷ Ads Requested) × 100.

### Available settings

- Filters: Yes
- Segments: Yes

### Ad dimensions

Ad charts can be filtered and segmented by ad-specific dimensions like Ad Network, Ad Mediator, Ad Placement, and Ad Unit. See [Ad Impressions](/dashboard-and-metrics/charts/ad-impressions-chart#ad-dimensions) for details.

## How to use Ad Fill Rate in your business

Fill rate helps you understand how well you're capitalizing on monetization opportunities:

- Monitor fill rate trends to identify issues with ad inventory or targeting
- Segment by country to see if certain regions have lower ad availability
- Compare fill rates across platforms to optimize your ad integration
- Low fill rates may indicate you need to add more ad networks or adjust your targeting settings
- Track "Ads Failed to Load" to quantify missed revenue opportunities

## Calculation

For each period, we calculate:

1. Total ad requests made by your app
2. Total ads that successfully loaded
3. Total ads that failed to load
4. Fill Rate = (Ads Loaded ÷ Ads Requested) × 100

Fill rate is expressed as a percentage with two decimal places of precision.
