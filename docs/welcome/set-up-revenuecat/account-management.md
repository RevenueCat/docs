---
title: Billing and account settings
slug: account-management
excerpt: Managing your account and changing plans
hidden: false
---

## Account Security & 2FA

Read more about account security and two-factor authentication in our [Account Security](/welcome/set-up-revenuecat/security) guide.

## Update your email or name

You can change your account email and name from your [account settings](https://app.revenuecat.com/settings/account) in the dashboard.

## How does billing work?

RevenueCat bills based on **Monthly Tracked Revenue**, or MTR, for each plan. MTR is different than Monthly Recurring Revenue, or MRR, and includes the revenue from all purchases and renewals including non-subscription products. You can see your account's current MTR [here](https://app.revenuecat.com/settings/billing). Billing periods will not follow the calendar month, but rather will be from the same date of a month until the same date of the next month (for example: July 15th until August 15th).

Read more on our [Pricing](https://www.revenuecat.com/pricing) page.

### What happens when you reach $2.5k in MTR?

As your app grows, RevenueCat will remain free until you reach $2.5k in MTR, and beyond that limit for everyone on the Pro Plan, we will bill for 1% of revenue. If you do fall below that amount in subsequent months, RevenueCat will return to being free for you.

An example of how you can expect to be charged for the Pro plan can be found below:

- Your MTR Tracked < $2,500 = Free
- Your MTR Tracked > $2,500 = 1% of your MTR tracked. For instance, if you earned $2,600 in the previous billing cycle, you would incur a charge of $26.

If you join RevenueCat and quickly exceed $2.5k in MTR in your first month, you will receive a grace period of 30 days starting from when you reach the limit in order to add a credit card, fix your billing details, or make your payment through another method. If no payment is completed by the end of this grace period, your access will be restricted until a payment has been made successfully.

If you pass the initial month after you joined and pass the limit later on, your access to those features will be restricted immediately until a payment has been made successfully. For example, this situation would occur if an app exceeded $2.5k in MTR after 2 months of using RevenueCat.

The abilities that would be restricted are as follows:

- View and Filter Charts
- Create new Customer Lists
- Export Customer Lists
- View Customer History (Viewing the Customer Details will remain)
- View individual events
- Add Customer Attributes
- Create new Experiments
- Edit running Experiments (Viewing Results and stopping will remain)
- Create new Paywalls
- Edit existing Paywalls (Using existing Paywalls will remain)

### Where to find invoices?

An invoice will be emailed to the owner of a project at the end of the current billing period. If you want to have the invoices emailed to additional email addresses, you can reach out to [Developer Support](https://app.revenuecat.com/settings/support) in order to have them added to your profile for future invoices. You can also view a history of invoices on the [Invoices page](https://app.revenuecat.com/settings/billing/invoices) under the billing category of the project owner's account settings. The history will only list invoices with non-zero billed amounts, so you may see gaps between billing periods if you do not meet the $2.5k limit in every billing period.

### Invoice details

You can update how your company name, address, and Tax ID/VAT number appear on your invoices in [billing settings](https://app.revenuecat.com/settings/billing) under **Invoice details**.

![update your invoice details in your billing settings](/docs_images/account/invoice-details.png)

If you have not added a payment method, you will not receive invoices nor will you be able to change your invoice details.

If you need more than one Tax ID, or you would like to forward your invoices to a different email address, please reach out to [RevenueCat Support](https://app.revenuecat.com/settings/support) for assistance.

## Display Currency

You can select a currency to be used across the dashboard. See [Display Currency](/dashboard-and-metrics/display-currency) for more information.

## Delete your account

To delete your RevenueCat account, you'll first need to delete **all of your [Projects](/projects/overview)**. Please note, deleting any active Projects will prevent users from accessing their purchases via the RevenueCat SDK but **will not** cancel any of your customer's active subscriptions. RevenueCat will not delete your projects for you.

Once your projects have been deleted, navigate to your [account settings](https://app.revenuecat.com/settings/account) and click `Delete this Account`:

![delete account button](/docs_images/account/delete-account.png)

You will be asked to enter your password to confirm.

If your account is managed by an SSO organization, reach out to RevenueCat Support via the dashboard [Contact Us](https://app.revenuecat.com/settings/support) form in your account settings and request your account to be deleted.

<details>
<summary>Shutting down your RevenueCat account</summary>

RevenueCat's goal is to be useful in your app development journey. If you need to shut down your RevenueCat account and/or remove RevenueCat from your app, follow these steps to ensure a smooth transition.

1. Export your data
   - If needed, contact [RevenueCat Support](https://app.revenuecat.com/settings/support) to export all user receipts
   - Download additional data exports from the dashboard:
     - [Scheduled Data Exports](/integrations/scheduled-data-exports)
     - Charts exports
     - Customer list exports

2. If removing RevenueCat from your app, update your application
   - Remove the RevenueCat SDK from your app
   - If needed, configure your own purchase validation and subscription management

3. Delete your RevenueCat project
   - **Warning**: This action is immediate and irreversible. Users still on older app versions will lose access to RevenueCat services

4. Delete your RevenueCat account

Please note that active subscriptions will not be canceled when shutting down your RevenueCat account.

If you have any questions, don't hesitate to reach out to [RevenueCat Support](https://app.revenuecat.com/settings/support).

</details>
