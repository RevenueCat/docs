---
title: Paywall Conversion Chart
slug: paywall-conversion-chart
hidden: false
---

The Paywall Conversion chart measures how effectively your paywalls convert viewers into customers. It supports multiple conversion types so you can analyze initial conversion, paid conversion, trial starts, and trial conversions.

This chart is cohorted by the first paywall impression date for each customer–paywall pair. It evaluates initial conversions that occur within 3 days of a customer's first paywall impression. For customers who do convert within that 3‑day window, the chart then attributes downstream outcomes like paid conversion and trial conversion even if those happen later (for example, a trial conversion on day 9 or renewals months later).

### Available settings

- Filters: Yes
- Segments: Yes
- Selector: Show
  - Initial Conversion
  - Paid Conversion
  - Trial Start Rate
  - Trial Conversion

### Cohorting

Customers are grouped by the date of their first paywall impression for a given paywall. Each period therefore represents the cohort of customers who first saw the paywall in that period.

### 3‑day initial conversion timeframe

- Initial conversion is measured within the first 3 complete days after the first paywall impression.
- Paid conversion and trial conversion are attributed to a cohort only if the customer had an initial conversion within those 3 days. Those subsequent outcomes may occur later and are still attributed to the cohort.

Examples:

- Day 0: first paywall impression → Day 2: trial start (initial conversion) → Day 9: trial converts to paid → Later renewals. Result: counts as an initial conversion; paid conversion is counted; future revenue contributes to LTV‑related charts.
- Day 0: first paywall impression → Day 7: trial start (outside 3 days). Result: no initial conversion; the impression is counted as abandoned (see definition in Abandonment chart).

## Calculation

For each period, we measure based on the selector:

1. Paywall Viewers: The count of unique customers who saw the paywall during the cohort period.
2. Initial Conversions (3 days): The count of customers with any initial conversion (trial start, paid subscription, or one‑time purchase) within 3 days after first seeing the paywall.
3. Paid Conversions: The count of customers who made a paid conversion that is attributable to an initial conversion within 3 days. This includes direct paid within 3 days or paid from a trial that started within 3 days and converted later.
4. Trial Starts: The count of customers who started a trial within 3 days after first seeing the paywall.
5. Trial Conversions: The count of customers who converted to paid from a trial that started within 3 days after first seeing the paywall (the conversion itself may occur later).

### Formulas

- Initial Conversion Rate = [Initial Conversions (3 days)] / [Paywall Viewers]
- Paid Conversion Rate = [Paid Conversions] / [Paywall Viewers]
- Trial Start Rate = [Trial Starts] / [Paywall Viewers]
- Trial Conversion Rate = [Trial Conversions] / [Paywall Viewers]

### Incomplete periods

Because this chart is cohorted by first paywall impression date and measures a 3‑day initial conversion window, very recent periods may be incomplete until the full 3 days have elapsed. Learn more about incomplete periods [here](/dashboard-and-metrics/charts/charts-feature-incomplete-periods).

## How to use Paywall Conversion in your business

- Compare paywalls to understand which designs, messages, or offerings drive higher initial and paid conversions.
- Segment by key dimensions (e.g., Country, Store, Offering, First seen platform, Ad campaign) to identify where performance differs.
- Use Trial Start and Trial Conversion to assess the trial path separately from direct paid pathways.

## FAQs

| Question | Answer |
| --- | --- |
| Why does Paid Conversion include conversions that occur after 3 days? | Paid conversion is attributed only if the customer had an initial conversion within the first 3 days; the paid event itself may occur later (e.g., trial to paid on day 9). |
| How are one‑time purchases handled? | A one‑time purchase within 3 days counts as an initial conversion and as a paid conversion. |
| How are refunds handled? | Paid conversions are counts, not revenue. Revenue‑related charts (e.g., Paywall LTV) subtract refunds from revenue. |
| Why might results differ from other conversion charts? | This chart cohorts by first paywall impression and uses a fixed 3‑day initial conversion window. Other charts may cohort by first seen date or event date, or use different timeframes. |


