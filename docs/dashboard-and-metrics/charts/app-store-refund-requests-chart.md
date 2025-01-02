---
title: App Store Refund Requests Chart
slug: app-store-refund-requests-chart
hidden: false
---

When customers request a refund for their Apple App Store purchases, they must do so directly through Apple. This chart visualizes those requests, breaking them down by their resolution status &mdash; whether the refund was granted, declined, or is still awaiting Apple's decision.

To ensure RevenueCat receives notifications about these requests, you must have [Apple App Store Server Notifications](/platform-resources/server-notifications/apple-server-notifications) configured. For the most accurate and timely data, we recommend using [Apple's V2 notifications](/platform-resources/server-notifications/apple-server-notifications#considerations).

### Available settings

- Filters: Yes
- Segments: Yes

## How to use App Store Refund Requests in your business

This chart provides insight into the outcomes of refund requests for your Apple App Store purchases, showing the volume of granted and declined refunds, as well as requests still awaiting a decision. By analyzing these trends, you can identify shifts in approval patterns and understand how frequently your customers are requesting refunds.

It may be especially useful to analyze your refund requests by the refund reasons that your customers are giving (tip: use the 100% Stacked column chart type for this). Segmenting the chart by "Refund request reason" lets you see how often customers cite reasons like "Unintended Purchase" or "Unsatisfied with Purchase", helping you pinpoint specific areas for improvement. For example, a high volume of refund requests under "Unsatisfied with Purchase" might suggest a need to refine descriptions or messaging.

:::info Unknown refund reason
Apple provides the refund reasons through their V2 notifications. If your chart is showing only "UNKNOWN" when segmenting by "Refund request reason", your app is most likely utilizing Apple's V1 notifications.
:::

If you're looking to influence Apple's refund decision, RevenueCat's [Handling Request Requests](/platform-resources/apple-platform-resources/handling-refund-requests) feature can help by sending additional data to Apple, which may reduce the number of refunds granted.

## Calculation

Each period counts the total number of App Store refund requests received, broken down by the resolution:

- Refund Granted: Apple approved the refund.
- Refund Declined: Apple denied the refund.
- Refund Reversed: Apple has reversed a previously granted refund.
- No Resolution: This is a temporary state that indicates Apple's decision is pending.

:::info Using Apple's V2 notifications for faster updates
With V1 notifications, Apple only sends events for granted refunds. As a result, RevenueCat will default any unresolved requests to "Refund Declined" after 48 hours if no update is received from Apple. V2 notifications, however, include both granted and declined updates directly from Apple, allowing the "No Resolution" status to be updated more promptly.
:::
