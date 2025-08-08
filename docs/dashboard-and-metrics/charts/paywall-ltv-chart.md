---
title: Paywall LTV Chart
slug: paywall-ltv-chart
hidden: false
---

The Paywall LTV chart measures the realized lifetime value generated from customers who had an initial conversion within 3 days of their first paywall impression. It lets you view total revenue, revenue net of taxes, or proceeds, and also average LTV per viewer.

This chart is cohorted by the first paywall impression date for each customer–paywall pair. It tracks revenue from initial conversions that occurred within 3 days following the first paywall impression and then continues to attribute all subsequent revenue from those conversions indefinitely (e.g., trial conversion on day 9, renewals on day 39, 69, etc.).

### Available settings

- Filters: Yes
- Segments: Yes
- Selector: Revenue Type
  - Revenue
  - Revenue (net of taxes)
  - Proceeds

### Cohorting

Customers are grouped by the date of their first paywall impression for a given paywall. Revenue is included only for customers who had an initial conversion within 3 days of that impression. After that gateway, all future revenue from those conversions is included in LTV.

### Measures

1. Paywall Viewers: The count of unique customers who saw the paywall during the cohort period.
2. Initial Conversions (3 days): The count of customers with any initial conversion (trial start, paid subscription, or one‑time purchase) within 3 days after first seeing the paywall.
3. Realized LTV (Revenue): Total revenue realized from those customers after an initial conversion within 3 days, minus refunds.
4. Realized LTV (net of taxes): Revenue minus estimated taxes.
5. Proceeds: Revenue minus estimated taxes and commissions.

### Calculations

- Realized LTV per Viewer = [Realized LTV] / [Paywall Viewers]
- Realized LTV (net of taxes) per Viewer = [Realized LTV (net of taxes)] / [Paywall Viewers]
- Proceeds per Viewer = [Proceeds] / [Paywall Viewers]

### Incomplete periods

Because initial conversions are limited to 3 days following the first impression, very recent cohorts may be incomplete until the 3‑day window elapses. Learn more about incomplete periods [here](/dashboard-and-metrics/charts/charts-feature-incomplete-periods).

## How to use Paywall LTV in your business

- Compare realized value across paywalls to understand which designs/offerings generate the most value per viewer.
- Switch revenue type to align closer to bottom‑line estimates (net of taxes or proceeds).
- Segment by audience or acquisition dimensions to see how LTV varies by country, campaign, or offering.

## FAQs

| Question | Answer |
| --- | --- |
| Why is revenue included even if paid events happen after 3 days? | Customers must have an initial conversion within 3 days to be included; all subsequent paid events are then attributed to LTV, even if they occur later (e.g., trial to paid on day 9, renewals on day 39/69). |
| Does LTV include refunds? | Yes, LTV is reported net of refunds. |
| What’s the difference between Revenue, Revenue (net of taxes), and Proceeds? | Revenue is gross revenue; Revenue (net of taxes) subtracts estimated taxes; Proceeds subtracts both estimated taxes and commissions. See [Taxes and commissions](/dashboard-and-metrics/taxes-and-commissions). |
| Why might LTV cohorts differ from other LTV or revenue charts? | This chart cohorts by first paywall impression and requires a 3‑day initial conversion to include downstream revenue, which differs from other cohorting and inclusion rules. |


