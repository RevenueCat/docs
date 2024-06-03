---
title: Taxes and Commissions
slug: taxes-and-commissions
excerpt: How RevenueCat estimates taxes and commissions for transactions
hidden: false
---

RevenueCat can optionally report revenue after store commissions, or after taxes and commissions through various features like integrations, webhooks, and our Revenue chart; but there's some context you should be aware of when using RevenueCat's tax estimation to see your net revenue from a transaction.

## How we estimate commissions

The factors we take into account to accurately estimate commissions vary by store, as each store has its own rates and policies for determining the percentage they take on a given transaction.

**App Store**

To determine the commission of a given transaction, we look at both the original purchase date of the transaction and your presence in the App Store Small Business Program to determine whether a 15% or 30% commission will be charged.

For more information on the App Store Small Business Program, [click here](/platform-resources/apple-platform-resources/app-store-small-business-program).

**Google Play Store**

To determine the commission of a given transaction, we look at both the original purchase date of the transaction and the year-to-date sales for your application to determine the commission rate to apply, due to Google’s reduced service fee of 15% on the first $1M in sales for a given app in a calendar year.

For more information on Google’s reduced service fee for the first $1M in sales, [click here](/platform-resources/google-platform-resources/15-reduced-service-fee).

**Amazon Appstore**

We apply a 30% store commission to all transactions from the Amazon Appstore.

**Stripe**

Stripe’s API provides the necessary details to calculate the various fees which might be charged in a transaction, and we sum these fees to calculate the commission charged by Stripe for a given transaction.

## How we estimate taxes

### Transaction country identification

In order to calculate an accurate tax rate for each store, we need to know the country that the transaction occurs in and the applicable taxes for the store in that country.

In some cases (for example, USD or EUR transactions on the Google Play Store), we may have to estimate the country based on the customer's IP address, but in the vast majority of the cases the store country of a transaction is deterministic and known by RevenueCat, especially for transactions occurring in 2024 or later.

:::info
We do not take your location as a developer into account when estimating taxes to be withheld, though some stores & countries may withhold differently on transactions in the country you're operating in.
:::

### Calulcating taxes for the mobile stores

The App Store, Google Play Store, and Amazon Appstore stores appear to charge both [Value-Added Tax](<https://taxfoundation.org/tax-basics/value-added-tax-vat/#:~:text=A%20Value%2DAdded%20Tax%20(VAT)%20is%20a%20consumption%20tax,a%20tax%20on%20final%20consumption.>) (VAT) and the [digital services taxes](https://taxfoundation.org/digital-tax-europe-2020/) (DST) that have been put in place by several countries. However, they do not apply identical tax rates for each country, so we:
1. Find the proceeds quoted by the store for a given price in a given country
2. Use that to determine the tax rate being charged to yield proceeds

Since these stores each deduct taxes from revenue first before commissions are deducted, to then calculate the portion of a given transaction that was deducted for taxes, we:
1. Use the found tax rate to determine what was deducted from the customer price due to taxes: `price / (1 + [tax rate]) = [amount deducted for taxes]`
2. Divide the amount deducted due to taxes from the customer price to get the `tax_percentage` that's provided in events, used to calculate Charts, etc: `[amount deducted for taxes] / price = tax_percentage`

:::Info June 2024 App Store Updates
Previously, we calculated taxes deducted App Store transactions after commission had been deducted. In June 2024 we updated this behavior to deduct taxes first to better match Apple's behavior. Though the yielded Proceeds are not affected by this ordering, the portion deducted for taxes and commission respectively are changed by this. 

The Revenue chart and Scheduled Data Exports have been updated to reflect this improved definition, but please keep in mind that prior events dispatched by RevenueCat will still contain the old values.
:::

### Calculating taxes for Stripe

If you have enabled Stripe Tax in your Stripe developer account, we will retrieve the precise tax amounts directly from your Stripe invoices, making estimation unnecessary.

To learn more about enabling Stripe Tax in your Stripe developer account, [click here](https://stripe.com/tax).

:::info VAT handling in different stores
Keep in mind that not all stores handle VAT the same way. Apple applies VAT to the post-commission revenue from a transaction, while Google applies VAT to the full amount, yielding different tax percentages (e.g. different values for the `tax_percentage` field).
:::

## How to report revenue after commissions and/or taxes in RevenueCat

### Revenue chart

Our Revenue chart offers the following measures to understand your net revenue:

- **Revenue (net of taxes)**: Revenue generated in a given period (as defined above), minus our estimate of revenue deducted from the stores for taxes (e.g. VAT, DST, etc).
- **Proceeds**: Revenue generated in a given period (as defined above), minus our estimate of revenue deducted from the stores for taxes and commission.

### Integrations

For integrations which report revenue you’ll see the option to select a **Sales reporting** mode for the integration. Selecting either “Revenue after store commission” or “Revenue after store commission and taxes” will apply the respective calculations to your data so that your sales are reported in a format that is most appropriate for your use case.

![](/images/f2cba58-Screen_Shot_2022-07-28_at_11.00.05_AM_eb65360ca78d1af8b652552d73b45417.png "Screen Shot 2022-07-28 at 11.00.05 AM.png")

To learn more about using integrations through RevenueCat, [click here](/integrations/integrations).

### Webhooks

In our webhooks you will find a <code>tax_percentage<strong> </strong></code>and <code>commission_percentage</code> field, which specify what percentage of your gross revenue (<code>price</code> and <code>price_in_purchased_currency</code> fields) we estimate to be deducted from your proceeds as taxes and commission. For example, you could calculate your proceeds in USD from the webhook payload as <code>price \* (1 - tax_percentage - commission_percentage)</code>.

To learn more about using our webhooks, [click here](/integrations/webhooks).

### Scheduled Data Exports

Our Scheduled Data Exports offer the same two fields, <code>tax_percentage<strong> </strong></code>and <code>commission_percentage</code>, which can be use for estimating proceeds in the same manner through these exports.

To learn more about using our Scheduled Data Exports, [click here](/integrations/scheduled-data-exports).
