---
title: Revenue Chart
slug: /revenue-chart
hidden: false
---

## Definition

The Revenue chart displays the total revenue generated during a given period minus refunds.

All revenue from a new paid subscription or renewal is credited to the period the transaction occurred in, so unlike normalized views like MRR, revenue may experience more significant period-over-period fluctuations depending on your mix of subscription durations being started or renewed.

In addition, the revenue chart includes revenue from other sources like non-consumable and consumable purchases, as well as non-renewing subscriptions.

The default stacked area visualization allows you to measure New Revenue and Renewal Revenue distinctly, with the complete stack representing your Total Revenue.

### New, renewal, and total revenue

The Revenue chart measures new and renewal revenue distinctly by default.

- Revenue is considered “new” when it represents the first paid transaction for a given customer, such as: new paid subscriptions, trial to paid conversions, and initial non-subscription purchases.
- All other revenue is considered “renewal” revenue, which in addition to paid subscription renewals may include accepted promotional offers, additional non-renewing subscription purchases, etc.

### Commissions, taxes, and proceeds

The Revenue chart also estimates the amount deducted for commissions, fees, and taxes from each store to yield an expected Proceeds amount. To learn more about how RevenueCat estimates commissions & taxes, [click here](/dashboard-and-metrics/taxes-and-commissions).

### Available settings

- Filters: Yes
- Segments: Yes

## How to use Revenue in your business

Revenue is best used as a health metric for operating your business.

- To get a higher-level view of how your business is trending, try switching to a monthly resolution and looking at the last 12 months to see your growth trajectory. ([Explore here](https://app.revenuecat.com/charts/revenue?chart_type=Stacked%20area&conversion_timeframe=7%20days&customer_lifetime=30%20days&range=Last%2012%20months&resolution=2))
- Focus on the mix of new & renewal revenue to understand where your growth is coming from, or segment by dimensions like Project how different products within your business are growing over time.

## Calculation

### Revenue

For each period, we measure:

1. New Revenue: Revenue deriving from the first paid transaction of a given customer, such as: new paid subscriptions, trial to paid conversions, and initial non-consumable purchases.
2. Renewal Revenue: Revenue deriving from subsequent paid transactions of a given customer, such as: paid subscription renewals, accepted promotional offers of existing subscribers, additional non-renewing subscription purchases, etc.

**Formula**  
[New Revenue] + [Renewal Revenue] = Total Revenue

### Proceeds

For each period, we measure:

1. Store Commission / Fee: The estimated revenue from a given period that will be deducted by the stores due to their commissions or fees.
2. Taxes: The estimated revenue from a given period that will be deducted by the stores due to VAT or DST.

**Formula**  
[Total Revenue] - ([Store Commission / Fee] + [Taxes]) = Proceeds

## FAQs

| Question                                                      | Answer                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| ------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| How are refunds incorporated into revenue?                    | When we see a refund processed by a store, we deduct the revenue from the associated transaction from the period that the transaction occurred in. This results in an accurate view of the true revenue generated from a set of transactions that occurred on a given date. We don’t currently offer a chart that measures the refunds that occurred _within_ a given period. To build a custom view of revenue & refunds, consider integrating our [Scheduled Data Exports](/integrations/scheduled-data-exports). |
| How are purchases using Offer Codes accounted for in revenue? | Due to limitations in available information, accurate revenue tracking is not yet supported on initial purchases made with Offer Codes, and those purchases will be set to $0. Revenue from subsequent renewals will be tracked normally. [Learn more here](/subscription-guidance/subscription-offers/ios-subscription-offers#considerations).                                                                                                                                                                     |
| How are product price changes accounted for in revenue?       | Once we detect a product price change in a specific country or currency, we’ll begin applying it to new subscribers immediately. We expect that existing subscribers are grandfathered in at the current price, and therefore revenue reporting will be inaccurate if that is not the case. We recommend creating a new product instead of changing the price on an existing product. [Learn more here](/subscription-guidance/price-changes).                                                                      |
| What exchange rates are used when converting to USD?          | We convert transactions to USD using the exchange rate of the purchased currency on the day of purchase. This may differ from how other sources handle exchange rates. For example, Apple's Sales and Trends reports use a rolling average of the previous month's exchange rates, while their payments to developers are exchanged at or near the time of payment. [More info](https://developer.apple.com/help/app-store-connect/measure-app-performance/differences-in-reporting-tools).                         |
| Why are Proceeds less than $0 for a period?                   | Proceeds may be less than $0 for a period if that period contains Stripe transactions that were low enough prices where Stripe's fee for that transaction exceeded its revenue, resulting in negative proceeds for that transaction. If the negative Proceeds for a period exceed the positive Proceeds from other transactions, the period's Proceeds will be negative.                                                                                                                                            |
