---
title: Stripe Free Trials
slug: stripe-free-trials
excerpt: Setting up free trials in Stripe or Stripe Checkout
hidden: false
categorySlug: offers-lifecycle-guidance
order: 2
parentDoc: 649983b4c31b2e000a3c18f5
---
[block:api-header]
{
  "title": "Subscriptions"
}
[/block]
To add a free trial to a Subscription, navigate to **Billing...Subscriptions...Create subscription**

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/2cb9959-Screenshot_2023-03-06_at_1.03.34_PM.png",
        "Screenshot 2023-03-06 at 1.03.34 PM.png",
        2000,
        570,
        "#000000"
      ],
      "caption": "",
      "sizing": "80"
    }
  ]
}
[/block]
In the **Create a Subscription* modal, enter the number of days for your free trial. 
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/6c10157-Screenshot_2023-03-06_at_12.56.29_PM.png",
        "Screenshot 2023-03-06 at 12.56.29 PM.png",
        2278,
        1992,
        "#000000"
      ],
      "caption": "",
      "sizing": "80"
    }
  ]
}
[/block]

[block:callout]
{
  "type": "info",
  "title": "Using Stripe's API",
  "body": "Free trials can be added to a Subscription through Stripe's API. See Stripe's [pre-built Checkout page](https://stripe.com/docs/billing/quickstart#add-trial-toggle) for an example.\n\nStripe's full trial documentation can be found [here](https://stripe.com/docs/billing/subscriptions/trials)."
}
[/block]

[block:api-header]
{
  "title": "Products"
}
[/block]
Stripe presently allows for free trials to be set per price in **Products...Add product** 

RevenueCat will correctly detect these trials, but Stripe recommends against this approach. Trials configured on Products will not be compatible with Stripe Checkout or quotes.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/4bf4ef3-Screenshot_2023-03-06_at_12.53.54_PM.png",
        "Screenshot 2023-03-06 at 12.53.54 PM.png",
        732,
        384,
        "#000000"
      ],
      "caption": ""
    }
  ]
}
[/block]