---
title: Revenue Chart
slug: revenue-chart
hidden: false
---

## Definition

The Revenue chart displays the total revenue generated during a given period minus refunds.

All revenue from a new paid subscription or renewal is credited to the period the transaction occurred in, so unlike normalized views like MRR, revenue may experience more significant period-over-period fluctuations depending on your mix of subscription durations being started or renewed.

In addition, the revenue chart includes revenue from other sources like non-consumable and consumable purchases, as well as non-renewing subscriptions.

:::info Revenue Chart Updates June 2024
The Revenue chart was updated in June 2024 to add transaction counts, support visualizing Revenue (net of taxes) and Proceeds, improve the estimation of taxes deducted from App Store transactions, and to make the split of New/Renewal revenue optional. [Learn more here.](https://revenuecat.releasenotes.io/release/jKJpf-revenue-chart-updates-chart-proceeds-count-transactions-and-more)
:::

### Measures

The Revenue chart provides both the revenue that was generated in a given period, as well as the count of revenue-generating transactions in that period (minus those that have since been refunded), so that you can compare them to understand why your business is trending the way it is.

### Revenue type

The Revenue chart allows you to select and visualize three different revenue definitions:
1. Revenue: The total revenue generated in a given period, minus refunds from transactions that occurred in that period.
2. Revenue (net of taxes): Revenue generated in a given period (as defined above), minus our estimate of revenue deducted from the stores for taxes (e.g. VAT, DST, etc).
3. Proceeds: Revenue generated in a given period (as defined above), minus our estimate of revenue deducted from the stores for taxes and commission.

Proceeds reflect RevenueCat's estimate of what you will earn from the stores for the revenue you generated, but keep in mind that the App Store's payment schedule is based on Apple's Fiscal Calendar, which does not align with calendar months. [Learn more here.](https://www.revenuecat.com/blog/growth/apple-fiscal-calendar-year-payment-dates/)

In addition, to learn more about how RevenueCat estimates taxes and commissions deducted from the stores, [click here](/dashboard-and-metrics/taxes-and-commissions).

### Transaction type

The Revenue chart can be filtered or segmented by transaction type to measure the count of transactions and volume of revenue coming from either "new" transactions or "renewal" transactions.

- Revenue is considered “new” when it represents the first paid transaction for a given customer, such as: new paid subscriptions, trial to paid conversions, and initial non-subscription purchases.
- All other revenue is considered “renewal” revenue, which in addition to paid subscription renewals may include accepted promotional offers, additional non-renewing subscription purchases, etc.

### Available settings

- Filters: Yes
- Segments: Yes
- Revenue Type: Yes

## How to use Revenue in your business

Revenue is best used as a health metric for operating your business.

- To get a higher-level view of how your business is trending, try switching to a monthly resolution and looking at the last 12 months to see your growth trajectory. ([Explore here](https://app.revenuecat.com/charts/revenue?chart_type=Stacked%20area&conversion_timeframe=7%20days&customer_lifetime=30%20days&range=Last%2012%20months&resolution=2))
- Focus on the mix of new & renewal revenue to understand where your growth is coming from, or segment by dimensions like Project how different products within your business are growing over time.
- Switch to Proceeds to better estimate how your bottom line performance is trending for a given calendar month.

## Calculation

For each period, we measure:

1. Transactions: The count of revenue generating transactions in a given period, minus those that have since been refunded.
2. Revenue: The total revenue generated in a given period, minus refunds from transactions that occurred in that period.
3. Taxes: The total amount deducted for taxes from the revenue generated in a given period.
4. Store Commission / Fees: The total amount deducted for store commissions and fees from the revenue generated in a given period.

### Formulas  
- [Revenue] - [Taxes] = Revenue (net of taxes)
- [Revenue] - ([Store Commission / Fees] + [Taxes]) = Proceeds

Or, to instead get the amounts deducted for each purpose:
- [Revenue] - [Revenue (net of taxes)] = Amount deducted for taxes
- [Revenue (net of taxes)] - [Proceeds] = Amount deducted for store commission & fees

## Sample query from Scheduled Data Exports
With our [Scheduled Data Exports](/integrations/scheduled-data-exports), you can get daily exports of your transactions from RevenueCat to reproduce and customize measures like this one that are provided by RevenueCat. You can find the full set of available sample queries [here](/integrations/scheduled-data-exports#sample-queries-for-revenuecat-measures).

## FAQs

| Question                                                      | Answer                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| ------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| How are refunds incorporated into revenue?                    | When we see a refund processed by a store, we deduct the revenue from the associated transaction from the period that the transaction occurred in. This results in an accurate view of the true revenue generated from a set of transactions that occurred on a given date. We don’t currently offer a chart that measures the refunds that occurred _within_ a given period. To build a custom view of revenue & refunds, consider integrating our [Scheduled Data Exports](/integrations/scheduled-data-exports). |
| How are purchases using Offer Codes accounted for in revenue? | Due to limitations in available information, accurate revenue tracking is not yet supported on initial purchases made with Offer Codes, and those purchases will be set to $0. Revenue from subsequent renewals will be tracked normally. [Learn more here](/subscription-guidance/subscription-offers/ios-subscription-offers#considerations).                                                                                                                                                                     |
| How are product price changes accounted for in revenue?       | Once we detect a product price change in a specific country or currency, we’ll begin applying it to new subscribers immediately. We expect that existing subscribers are grandfathered in at the current price, and therefore revenue reporting will be inaccurate if that is not the case. We recommend creating a new product instead of changing the price on an existing product. [Learn more here](/subscription-guidance/price-changes).                                                                      |
| What exchange rates are used when converting to USD?          | We convert transactions to USD using the exchange rate of the purchased currency on the day of purchase. This may differ from how other sources handle exchange rates. For example, Apple's Sales and Trends reports use a rolling average of the previous month's exchange rates, while their payments to developers are exchanged at or near the time of payment. [More info](https://developer.apple.com/help/app-store-connect/measure-app-performance/differences-in-reporting-tools).                         |
| Why are Proceeds less than $0 for a period?                   | Proceeds may be less than $0 for a period if that period contains Stripe transactions that were low enough prices where Stripe's fee for that transaction exceeded its revenue, resulting in negative proceeds for that transaction. If the negative Proceeds for a period exceed the positive Proceeds from other transactions, the period's Proceeds will be negative.                                                                                                                                            |
