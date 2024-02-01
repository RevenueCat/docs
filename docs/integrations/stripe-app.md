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
RevenueCat data visivle within Stripe is read-only and does not allow for additional filtering in Stripe based on RevenueCat data.
:::

## Setup

### Prerequisites

The customer's Stripe fetch token must exist in RevenueCat in order for RevenueCat to find the Stripe customer. To read more about this, visit the [Send Stripe tokens to RevenueCat](/getting-started/stripe#5-send-stripe-tokens-to-revenuecat) section of our Stripe documentation!

### Installing the app

To install the RevenueCat App in Stripe, navigate to the [RevenueCat App](https://marketplace.stripe.com/apps/revenuecat) on Stripe's App Marketplace. Select the 'Install app' button.

![Screen Shot 2022-04-26 at 5.34.05 PM.png](https://files.readme.io/4a68982-Screen_Shot_2022-04-26_at_5.34.05_PM.png)

Select 'Install'

![](https://files.readme.io/93f135c-Screen_Shot_2022-04-26_at_5.36.14_PM.png "Screen Shot 2022-04-26 at 5.36.14 PM.png")
Select 'Sign in with RevenueCat' and log in with your RevenueCat account credentials.

![](https://files.readme.io/8a5b7a8-Screen_Shot_2022-07-07_at_2.17.30_PM.png "Screen Shot 2022-07-07 at 2.17.30 PM.png")

The RevenueCat App is now installed to your Stripe account!

:::info Project owner must connect with Stripe
Only the owner of the RevenueCat project can connect a Stripe account for their apps - no [collaborators](/welcome/projects/collaborators) will be able to add or remove a Stripe connection.
:::

## Using the RevenueCat App

To view data from the RevenueCat App, you must first select a customer in Stripe.

![RevenueCat App at a glance](https://files.readme.io/cf7a34b-0.1.5.png)

The RevenueCat App is broken into 5 main sections:

### Customer Details

![Customer Details](https://files.readme.io/979583c-0.1.5.png)

The Customer details section displays metadata about your customer such as:

- RevenueCat app user ID
- First Seen
- Last Seen SDK Version
- Last Opened
- Last Seen Platform Version
- Last Seen Locale

These fields will not populate in the app if they are null in the RevenueCat Customer Page.

An external link is provided in this section to bring you to the RevenueCat [Customer History](/dashboard-and-metrics/customers-group/customer-history) page.

### Attributes

![Attributes](https://files.readme.io/7456cc9-0.1.5.png "Attributes")

The Attributes section allows you to view [subscriber attributes](/customers/subscriber-attributes) you have assigned to this customer.

### Entitlements

![Entitlements](https://files.readme.io/3d47025-0.1.5.png "Entitlements")

The Entitlements section gives you a quick glance at the current Entitlement status for the customer. You can see which Entitlement has been unlocked along when they'll renew or cancel.

An external link is provided in this section to bring you to the RevenueCat [Entitlement](/getting-started/entitlements#entitlements) settings page.

### Current Offering

![Current Offering](https://files.readme.io/2b11324-0.1.5.png "Current Offering")

The Current offering section shows the current offering for the customer. This allows you to see what products are displayed in their paywall.

An external link is provided in this section to bring you to the RevenueCat [Offerings](/getting-started/entitlements#offerings) settings page.

### Customer History

![Customer History](https://files.readme.io/ec7cf2b-Screen_Shot_2022-07-07_at_9.37.59_AM.png "Screen Shot 2022-07-07 at 9.37.59 AM.png")

The Customer history section lays out a timeline of transactions for the selected customer, ordered by recent transactions towards the top.

![Customer History Expanded](https://files.readme.io/6a9c463-Screen_Shot_2022-07-07_at_9.45.24_AM.png "Screen Shot 2022-07-07 at 9.45.24 AM.png")

"Show details" buttons are provided to expand each transaction event to conveniently view metadata such as product ID, purchase and expiration timestamps in a readable format, and price in purchased currency.

:::success That's it!
You can now view RevenueCat's data from for your customers directly within Stripe.
:::
