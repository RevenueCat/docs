---
title: Paywall Abandonment Chart
slug: paywall-abandonment-chart
hidden: true
---

The Paywall Abandonment chart measures the proportion of paywall impressions that did not lead to an initial conversion within 3 days of the first paywall impression. It provides both an overall abandonment rate and a breakdown into bounces and purchase cancellations.

This chart is cohorted by the first paywall impression date for each paywall that a customer sees, and is segmented by paywall by default.

### Available settings

- Filters: Yes
- Segments: Yes
- Selector: Show
  - Paywall Abandonment
  - Paywall Bounce
  - Purchase Cancellation

### Definitions

- Bounce: The customer neither purchased nor initiated a purchase within 3 days.
- Purchase Cancellation: The customer initiated the purchase flow but did not complete payment within 3 days.
- Abandonment: The sum of all bounces and purchase cancellations.

### Cohorting and timeframe

Customers are grouped by the date of their first paywall impression for a given paywall. We evaluate outcomes that occur within the first 3 complete days after that impression to determine bounce, cancellation, or initial conversion. Customers who have an initial conversion within 3 days are not considered abandoned, even if their paid conversion occurs later (e.g., trial converts to paid on day 9), or does not occur at all (e.g., trial does not convert to paid).

## Calculation

For each period, we measure:

1. Paywall Viewers: The count of unique customers who saw the paywall during the cohort period.
2. Bounced (3 days): Customers who neither purchased nor initiated a purchase within 3 days.
3. Purchase Cancellations (3 days): Customers who initiated the purchase flow but did not complete it within 3 days.
4. Total Abandoned (3 days): Bounced + Purchase Cancellations.

### Formulas

- Bounce Rate = [Bounced] / [Paywall Viewers]
- Purchase Cancellation Rate = [Purchase Cancellations] / [Paywall Viewers]
- Abandonment Rate = [Total Abandoned] / [Paywall Viewers]

### Incomplete periods

Because abandonment status is determined over the first 3 days after the paywall impression, very recent periods may be incomplete until the full 3‑day window elapses. Learn more about incomplete periods [here](/dashboard-and-metrics/charts/charts-feature-incomplete-periods).

## How to use Paywall Abandonment in your business

- Investigate high bounce rates as potential issues with value proposition, pricing, or clarity of the paywall.
- Investigate high cancellation rates as potential issues with the purchase flow or payment friction.
- Segment by audience, platform, and acquisition sources to isolate problem areas and improve your paywall and purchase experience.

## FAQs

| Question | Answer |
| --- | --- |
| Does a later paid conversion change abandonment? | If a customer had an initial conversion within 3 days, they are not counted as abandoned even if the paid conversion occurs later. If they did not have an initial conversion within 3 days, they are counted as abandoned regardless of later outcomes. |
| Why might abandonment trends differ from other charts? | This chart cohorts by first paywall impression and evaluates outcomes strictly within a 3‑day window to classify abandonment. |


