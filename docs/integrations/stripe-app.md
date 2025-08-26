---
title: Stripe Dashboard App
sidebar_label: Stripe
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

![Install app](/docs_images/integrations/stripe-app/install-app.png)

Select 'Install'

![Install](/docs_images/integrations/stripe-app/install.png)

Select 'Sign in with RevenueCat' and log in with your RevenueCat account credentials.

![Sign in with RevenueCat](/docs_images/integrations/stripe-app/sign-in.png)

The RevenueCat App is now installed to your Stripe account!

:::info Project owner must connect with Stripe
Only the owner of the RevenueCat project can connect a Stripe account for their apps - no [collaborators](/projects/collaborators) will be able to add or remove a Stripe connection.
:::

## Using the RevenueCat App

To view data from the RevenueCat App, you must first select a customer in Stripe.

![RevenueCat App at a glance](/docs_images/integrations/stripe-app/at-a-glance.png)

The RevenueCat App is broken into 5 main sections:

### Customer Details

![Customer Details](/docs_images/integrations/stripe-app/customer-details.png)

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

![Attributes](/docs_images/integrations/stripe-app/attributes.png)

The Attributes section allows you to view [attributes](/customers/customer-attributes) you have assigned to this customer.

### Entitlements

![Entitlements](/docs_images/integrations/stripe-app/entitlements.png)

The Entitlements section gives you a quick glance at the current Entitlement status for the customer. You can see which Entitlement has been unlocked along when they'll renew or cancel.

An external link is provided in this section to bring you to the RevenueCat [Entitlement](/getting-started/entitlements#entitlements) settings page.

### Current Offering

![Current Offering](/docs_images/integrations/stripe-app/current-offering.png)

The Current offering section shows the current offering for the customer. This allows you to see what products are displayed in their paywall.

An external link is provided in this section to bring you to the RevenueCat [Offerings](/getting-started/entitlements#offerings) settings page.

### Customer History

![Customer History](/docs_images/integrations/stripe-app/customer-history.png)

The Customer history section lays out a timeline of transactions for the selected customer, ordered by recent transactions towards the top.

![Customer History Expanded](/docs_images/integrations/stripe-app/customer-history-expanded.png)

"Show details" buttons are provided to expand each transaction event to conveniently view metadata such as product ID, purchase and expiration timestamps in a readable format, and price in purchased currency.

:::success That's it!
You can now view RevenueCat's data from for your customers directly within Stripe.
:::
