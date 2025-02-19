---
title: Stripe Dashboard App
slug: stripe-app
excerpt: Install and use the RevenueCat App in Stripe App Marketplace
hidden: false
---

The RevenueCat App in Stripe's App Marketplace combines Stripe’s customer and billing data with enriched data from RevenueCat’s native cross-platform SDKs and subscription backend. Rather than context switching between RevenueCat’s customer details and Stripe’s customer profile in multiple windows, the RevenueCat App combines RevenueCat data into a single page view within Stripe.

You will be able to do the following:

- Quickly navigate to RevenueCat customer and setting pages with convenient buttons
- View RevenueCat customer metadata such as app user ID, last seen RevenueCat SDK version, last seen locale, and timestamps (first and last seen) when your customer interacted with your app
- View transaction events for Stripe, as well as cross-platform purchases across Apple App Store, Google Play Store, and Amazon Appstore

:::info
RevenueCat data visible within Stripe is read-only and does not allow for additional filtering in Stripe based on RevenueCat data.
:::

## Setup

### Prerequisites

The customer's Stripe fetch token must exist in RevenueCat in order for RevenueCat to find the Stripe customer. To read more about this, visit the [Send Stripe tokens to RevenueCat](/web/integrations/stripe#5-send-stripe-tokens-to-revenuecat) section of our Stripe documentation!

### Installing the app

To install the RevenueCat App in Stripe, navigate to the [RevenueCat App](https://marketplace.stripe.com/apps/revenuecat) on Stripe's App Marketplace. Select the 'Install app' button.

![Screen Shot 2022-04-26 at 5.34.05 PM.png](/images/4a68982-Screen_Shot_2022-04-26_at_5.34.05_PM_bb447390fba0c22686a624dd8d54d147.png)

Select 'Install'

![](/images/93f135c-Screen_Shot_2022-04-26_at_5.36.14_PM_e90b5b5f9ad8b4d9880a8cd3a3e9f243.png "Screen Shot 2022-04-26 at 5.36.14 PM.png")
Select 'Sign in with RevenueCat' and log in with your RevenueCat account credentials.

![](/images/8a5b7a8-Screen_Shot_2022-07-07_at_2.17.30_PM_b7557aa0d89b0b0e16727d136ba1b950.png "Screen Shot 2022-07-07 at 2.17.30 PM.png")

The RevenueCat App is now installed to your Stripe account!

:::info Project owner must connect with Stripe
Only the owner of the RevenueCat project can connect a Stripe account for their apps - no [collaborators](/projects/collaborators) will be able to add or remove a Stripe connection.
:::

## Using the RevenueCat App

To view data from the RevenueCat App, you must first select a customer in Stripe.

![RevenueCat App at a glance](/images/cf7a34b-0.1.5_609cea14c8480cd32d8023acfcf3f259.png)

The RevenueCat App is broken into 5 main sections:

### Customer Details

![Customer Details](/images/979583c-0.1.5_ba86664c8e5fad165ede12b3d9e05772.png)

The Customer details section displays metadata about your customer such as:

- RevenueCat app user ID
- First Seen
- Last Seen SDK Version
- Last Opened
- Last Seen Platform Version
- Last Seen Locale

These fields will not populate in the app if they are null in the RevenueCat Customer Page.

An external link is provided in this section to bring you to the RevenueCat [Customer History](/dashboard-and-metrics/customer-history) page.

### Attributes

![Attributes](/images/7456cc9-0.1.5_0b72dd0786b62bfaa77f43e09c99dd3f.png "Attributes")

The Attributes section allows you to view [attributes](/customers/customer-attributes) you have assigned to this customer.

### Entitlements

![Entitlements](/images/3d47025-0.1.5_fd92f328d3e78a895c9394850fca087c.png "Entitlements")

The Entitlements section gives you a quick glance at the current Entitlement status for the customer. You can see which Entitlement has been unlocked along when they'll renew or cancel.

An external link is provided in this section to bring you to the RevenueCat [Entitlement](/getting-started/entitlements#entitlements) settings page.

### Current Offering

![Current Offering](/images/2b11324-0.1.5_069ddcf4d89461796d3eae95a4f1e4c8.png "Current Offering")

The Current offering section shows the current offering for the customer. This allows you to see what products are displayed in their paywall.

An external link is provided in this section to bring you to the RevenueCat [Offerings](/getting-started/entitlements#offerings) settings page.

### Customer History

![Customer History](/images/ec7cf2b-Screen_Shot_2022-07-07_at_9.37.59_AM_7038a18f55148668c83efaf96783b489.png "Screen Shot 2022-07-07 at 9.37.59 AM.png")

The Customer history section lays out a timeline of transactions for the selected customer, ordered by recent transactions towards the top.

![Customer History Expanded](/images/6a9c463-Screen_Shot_2022-07-07_at_9.45.24_AM_63b4d811132a21e25ddd1331b51eb1a0.png "Screen Shot 2022-07-07 at 9.45.24 AM.png")

"Show details" buttons are provided to expand each transaction event to conveniently view metadata such as product ID, purchase and expiration timestamps in a readable format, and price in purchased currency.

:::success That's it!
You can now view RevenueCat's data from for your customers directly within Stripe.
:::
