---
title: Subscription Status Chart
slug: subscription-status-chart
hidden: false
---

## Definition

The Subscription Status chart breaks down Active Subscriptions, Active Trials, MRR, ARR, or Subscription Revenue by the current status of the underlying subscription contributing to that measure. A subscription will have a status of Billing Issue if it's currently in a grace period, Set to Cancel if auto-renew is currently disabled, or Set to Renew if neither of those cases applies. Each measure can then be filtered or segmented by values like Product Duration, Expiration Month, and more to understand how these dimensions affect the portion Set to Cancel or in a Billing Issue state.

### Available settings

- Filters: Yes
- Segments: Yes
- Conversion Timeframe: No
- Absolute/Relative Selector: Yes

### Available measures

- Active Subscriptions: The number of unique paid subscriptions that have not expired.
- Active Trials: The number of unique active trials.
- MRR (monthly recurring revenue): The normalized revenue of your active paid subscriptions down to a monthly value.
- ARR (annual recurring revenue): An annualized estimation of your recurring revenue. To compute it, we multiply MRR by 12.
- Subscription Revenue: The total revenue from currently active subscriptions.


## Calculation

### Measure = Active Subscriptions ###
1. Total Active Subscriptions: The total number of currently active subscriptions.
2. Set to Renew: The number of currently active subscriptions that are set to renew at the end of their current period.
3. Set to Cancel: The number of currently active subscriptions that are set to cancel at the end of their current period.
4. Billing Issue: The number of currently active subscriptions that were set to renew at the end of their prior period, but failed to do so due to a billing issue, and are currently in a grace period.

### Measure = Active Trials ###
1. Total Active Trials: The total number of currently active trials.
2. Set to Renew: The number of currently active trials that are set to convert to paid at the end of their current period.
3. Set to Cancel: The number of currently active trals that are set to cancel at the end of their current period.
4. Billing Issue: The number of currently active trials that were set to convert to paid at the end of their prior period, but failed to do so due to a billing issue, and are currently in a grace period.

### Measure = MRR ###
1. Total Active Trials: The total MRR (monthly recurring revenue) of currently active subscriptions.
2. Set to Renew: The MRR of currently active subscriptions that are set to renew at the end of their current period.
3. Set to Cancel: The MRR of currently active subscriptions that are set to cancel at the end of their current period.
4. Billing Issue: The MRR of currently active subscriptions that were set to renew at the end of their prior period, but failed to do so due to a billing issue, and are currently in a grace period.

### Measure = ARR ###
1. Total Active Trials: The total ARR (annual recurring revenue) of currently active subscriptions.
2. Set to Renew: The ARR of currently active subscriptions that are set to renew at the end of their current period.
3. Set to Cancel: The ARR of currently active subscriptions that are set to cancel at the end of their current period.
4. Billing Issue: The ARR of currently active subscriptions that were set to renew at the end of their prior period, but failed to do so due to a billing issue, and are currently in a grace period.

### Measure = Subscription Revenue ###
1. Total Active Trials: The total revenue generated from the last transaction of currently active subscriptions.
2. Set to Renew: The total revenue generated from the last transaction of currently active subscriptions that are set to renew at the end of their current period.
3. Set to Cancel: The total revenue generated from the last transaction of currently active subscriptions that are set to cancel at the end of their current period.
4. Billing Issue: The total revenue generated from the last transaction of currently active subscriptions that were set to renew at the end of their prior period, but failed to do so due to a billing issue, and are currently in a grace period.


:::info
The sum of Set to Renew, Set to Cancel, and Billing Issue will always equal the total, for that given segment.
:::

