---
title: "[Beta] Stripe Configuration"
slug: stripe-configuration
excerpt: Setting up your Stripe account in RevenueCat
hidden: true
---
In order to use [RevenueCat Checkout](doc:revenuecat-checkout) or manually send Stripe purchases to RevenueCat from your own paywall, you'll need to connect your Stripe account to RevenueCat, create products, and attach those products to your offerings and entitlements.

# Connecting with Stripe
[block:callout]
{
  "type": "info",
  "title": "Project Owner must connect with Stripe",
  "body": "Only the **owner** of the RevenueCat Project can connect a Stripe account for their apps - no collaborators will be able to add or remove a Stripe connection."
}
[/block]
Log into [RevenueCat](https://app.revenuecat.com/settings/account) and click the Connect with Stripe button in your account settings. Follow the instructions to either create a new account with Stripe, or sign in with your existing one. 
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/d5abe42-Screen_Shot_2022-01-12_at_12.36.20_PM.png",
        "Screen Shot 2022-01-12 at 12.36.20 PM.png",
        1796,
        216,
        "#f2f8fb"
      ],
      "sizing": "80",
      "border": true
    }
  ]
}
[/block]
**Stripe Permissions**
RevenueCat requests only **read** access by default. If you enable RevenueCat Pay, RevenueCat will also request **write** access from Stripe in order to make new purchases via the hosted paywall.

You will still maintain full control of your Stripe account via the Stripe dashboard.

# Create a Stripe App

*If you already have a Stripe app set up in your Project, you can skip this section.*

In your [Project](doc:projects) settings, click Apps, then click '+ New'.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/837a6c8-stripe_add_app.png",
        "stripe_add_app.png",
        1752,
        560,
        "#f4f4f4"
      ],
      "sizing": "80",
      "border": true
    }
  ]
}
[/block]
Select Stripe as the platform, and give the app a name before clicking 'Save changes'.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/dd147c1-stripe_name_app.png",
        "stripe_name_app.png",
        1874,
        544,
        "#fafcfb"
      ],
      "sizing": "80",
      "border": true
    }
  ]
}
[/block]
# Configuring Stripe Products and Plans

Create your Stripe product(s) using their [billing dashboard](https://dashboard.stripe.com/subscriptions/products). 

In Stripe, a *product* can have multiple *pricing plans*. These are useful if you want to offer different price points for the same product and work similar to *offerings* and *products* in RevenueCat.
![](https://files.readme.io/29d2207-8154aeb-Screen_Shot_2018-12-06_at_14.26.56.png "8154aeb-Screen_Shot_2018-12-06_at_14.26.56.png")
You can read more about products and plans in their [official documentation](https://stripe.com/docs/billing/quickstart).
[block:callout]
{
  "type": "warning",
  "title": "Important",
  "body": "RevenueCat only supports **per unit** and **recurring quantity** subscription plans. Metered usage and tiers are currently not supported."
}
[/block]
# Add Products to RevenueCat Offerings and Entitlements

Add your Stripe products to your project's [entitlements](doc:entitlements) to easily group the products for your app. RevenueCat will send Stripe subscriptions to your app the same way we do for the other app stores. 
[block:callout]
{
  "type": "info",
  "body": "In order for Stripe subscriptions to unlock [entitlements](doc:entitlements), you must set a Product Identifier in the desired Offering to match a Stripe **Product ID** exactly.",
  "title": "Product Identifier should be a Stripe Product ID"
}
[/block]
# What's next?

- If you're setting up a RevenueCat Checkout hosted paywall, continue the integration by following our [RevenueCat Checkout](doc:revenuecat-checkout) guide.
- If you're going to be handling the Stripe payment flow manually with a custom paywall, continue with our [manual integration guide](doc:stripe).