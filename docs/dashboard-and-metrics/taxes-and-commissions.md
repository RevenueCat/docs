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

For more information on the App Store Small Business Program, [click here](/docs/app-store-small-business-program).

**Google Play Store**

To determine the commission of a given transaction, we look at both the original purchase date of the transaction and the year-to-date sales for your application to determine the commission rate to apply, due to Google’s reduced service fee of 15% on the first $1M in sales for a given app in a calendar year.

For more information on Google’s reduced service fee for the first $1M in sales, [click here](/docs/15-reduced-service-fee).

**Amazon Appstore**

We apply a 30% store commission to all transactions from the Amazon Appstore.

**Stripe**

Stripe’s API provides the necessary details to calculate the various fees which might be charged in a transaction, and we sum these fees to calculate the commission charged by Stripe for a given transaction.

## How we estimate taxes

### Transaction country estimation

In order to calculate an accurate tax rate for each store, we need to know the country that the transaction occurs in and the applicable taxes for the store in that country.

For some stores, like the App Store, in most cases we can detect the store that country that a transaction was created in.

In some cases (for example, USD or EUR transactions on the Google Play Store), we have to estimate the country based on the customer's IP address. This means that we can't guarantee perfect accuracy (for example, if a customer is currently traveling from one Eurozone country to another, or using a VPN), but we have found the estimation to be 95% accurate in most circumstances.

### Store-specific logic

Once we know the country we will base our tax estimation off of, then we apply the store-specific logic to estimate taxes.

:::info
We do not take your location as a developer into account when estimating taxes to be withheld, though some stores & countries may withhold differently on transactions in the country you're operating in.
:::

**App Store**

Apple charges both [Value-Added Tax](<https://taxfoundation.org/tax-basics/value-added-tax-vat/#:~:text=A%20Value%2DAdded%20Tax%20(VAT)%20is%20a%20consumption%20tax,a%20tax%20on%20final%20consumption.>) (VAT) and the [digital services taxes](https://taxfoundation.org/digital-tax-europe-2020/) (DST) that have been put in place by several countries. We use the provided pricing tables from Apple to estimate these tax rates in each country, and calculate them against either the gross or post-commission revenue as applicable.

**Google Play Store & Amazon Appstore**

Both Google Play and Amazon only charge VAT on their transactions, so we lookup VAT per country and calculate it after the commission has been deducted from a transaction.

**Stripe**

If you have enabled Stripe Tax in your Stripe developer account, we will retrieve the precise tax amounts directly from your Stripe invoices, making estimation unnecessary.

To learn more about enabling Stripe Tax in your Stripe developer account, [click here](https://stripe.com/tax).

:::info VAT handling in different stores
Keep in mind that not all stores handle VAT the same way. Apple applies VAT to the post-commission revenue from a transaction, while Google applies VAT to the full amount, yielding different tax percentages (e.g. different values for the `tax_percentage` field).
:::

## How to report revenue after commissions and/or taxes in RevenueCat

### Revenue chart

Our Revenue chart offers the following measures to understand your net revenue:

- **Store commission / fee**: The store commission or payment processor fees that are deducted from your gross revenue.
- **Estimated taxes**: Estimated taxes deducted from gross revenue.
- **Proceeds**: Net revenue after commission, fees, and taxes have been deducted.

### Integrations

For integrations which report revenue you’ll see the option to select a **Sales reporting** mode for the integration. Selecting either “Revenue after store commission” or “Revenue after store commission and taxes” will apply the respective calculations to your data so that your sales are reported in a format that is most appropriate for your use case.

![](https://files.readme.io/f2cba58-Screen_Shot_2022-07-28_at_11.00.05_AM.png "Screen Shot 2022-07-28 at 11.00.05 AM.png")

To learn more about using integrations through RevenueCat, [click here](/docs/integrations).

### Webhooks

In our webhooks you will find a <code>tax_percentage<strong> </strong></code>and <code>commission_percentage</code> field, which specify what percentage of your gross revenue (<code>price</code> and <code>price_in_purchased_currency</code> fields) we estimate to be deducted from your proceeds as taxes and commission. For example, you could calculate your proceeds in USD from the webhook payload as <code>price \* (1 - tax_percentage - commission_percentage)</code>.

To learn more about using our webhooks, [click here](/docs/webhooks).

### Scheduled Data Exports

Our Scheduled Data Exports offer the same two fields, <code>tax_percentage<strong> </strong></code>and <code>commission_percentage</code>, which can be use for estimating proceeds in the same manner through these exports.

To learn more about using our Scheduled Data Exports, [click here](/docs/scheduled-data-exports).
