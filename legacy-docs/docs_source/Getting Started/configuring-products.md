---
title: "[New] Configuring Products"
slug: configuring-products
excerpt: Understanding Offers and Entitlements and configuring products with RevenueCat
hidden: true
---
The RevenueCat dashboard allows you to specify what level of access each product should unlock for your users, which can greatly simplify your in-app code to check for subscription access. The dashboard also allows you to configure which in-app products are shown to your users remotely, so you can control how they're presented without the need to update your app. This is great for experimenting how different product configurations affect key subscription metrics.

[block:embed]
{
  "html": "<iframe class=\"embedly-embed\" src=\"//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FQxHeZiW4KCA%3Ffeature%3Doembed&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DQxHeZiW4KCA&image=https%3A%2F%2Fi.ytimg.com%2Fvi%2FQxHeZiW4KCA%2Fhqdefault.jpg&key=7788cb384c9f4d5dbbdbeffd9fe4b92f&type=text%2Fhtml&schema=youtube\" width=\"854\" height=\"480\" scrolling=\"no\" title=\"YouTube embed\" frameborder=\"0\" allow=\"autoplay; fullscreen; encrypted-media; picture-in-picture;\" allowfullscreen=\"true\"></iframe>",
  "url": "https://www.youtube.com/watch?v=QxHeZiW4KCA",
  "title": "RevenueCat Products, Offerings, and Entitlements Explained",
  "favicon": "https://www.google.com/favicon.ico",
  "image": "https://i.ytimg.com/vi/QxHeZiW4KCA/hqdefault.jpg",
  "provider": "youtube.com",
  "href": "https://www.youtube.com/watch?v=QxHeZiW4KCA",
  "typeOfEmbed": "youtube"
}
[/block]

There are three levels of product configuration available within RevenueCat:
  1.  Products
  2. Entitlements
  3. Offerings
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/fb06e40-Screen_Shot_2020-07-01_at_6.12.53_PM.png",
        "Screen Shot 2020-07-01 at 6.12.53 PM.png",
        1470,
        570,
        "#e6e4e2"
      ],
      "caption": "See how products in Apple, Google, and Stripe translate to Products, Entitlements, and Offerings in RevenueCat."
    }
  ]
}
[/block]
The diagram above illustrates how products from Apple, Google, and Stripe tie into RevenueCat. The configuration is explained in more detail below.

# Products
Products are the individual SKUs that users actually purchase. The stores (Apple, Google, Stripe) process these SKUs and charge the user.

### Store Configuration
No matter how you choose to use RevenueCat, you'll need to first have products set up in the stores. This is done outside of RevenueCat, and where you set things like price, duration, and free trials. If you've never set up products before or need a refresher (or tips and tricks) check out these guides:

- **[iOS / App Store Connect :fa-arrow-right:](doc:ios-products)**
- **[Android / Google Play Console :fa-arrow-right:](doc:android-products)**
- **[Stripe :fa-arrow-right:](doc:stripe-products)**

### RevenueCat Configuration
After your products are set up in the stores, you'll also need to set up a 1-to-1 mapping of the products in RevenueCat as well.

Navigate to the Products tab in the Settings for your app in the RevenueCat dashboard. To add a new product, click the **+ New** button and enter the product identifier **exactly as it appears in the store**, as well as the store that the product belongs to.

These product identifiers are the link between RevenueCat, and Apple, Google, Stripe.
![](https://files.readme.io/98e472c-products.png "products.png")

[block:callout]
{
  "type": "info",
  "body": "If a user purchases a product that has not been set up in RevenueCat, the purchase will still go through and be tracked in RevenueCat."
}
[/block]
# Entitlements
An entitlement represents a level of access, features, or content that a user is "entitled" to.

Entitlements are used to ensure a user has appropriate access to content based on their purchases, without having to manage all of the product identifiers in your app code. 

Most apps only have one entitlement, unlocking all premium features. However, if you had two tiers of content such as Gold and Platinum, you would have 2 entitlements.

### Creating an Entitlement

To create a new entitlement, click 'Entitlements' in the sidebar of the RevenueCat dashboard and click **+ New.** You'll need to enter a unique identifier for your app's entitlement that you can reference in your app, like "pro". 

Most apps only have one entitlement, but create as many as you need. For example a navigation app may have a subscription to "pro" access, and one-time purchases to unlock specific map regions. In this case there would probably be one "pro" entitlement, and additional entitlements for each map region that could be purchased.

### Attaching Products to Entitlements
Once entitlements are created, you should attach products to entitlements. This lets RevenueCat know which entitlements to unlock for users after they purchase a specific product.

When viewing an Entitlement, click the **Attach** button to attach a product. If you've already added your products, you'll be able to select one from the list to attach.
![](https://files.readme.io/0b89878-24b5651-Screen_Shot_2019-09-24_at_8.44.52_PM.png "24b5651-Screen_Shot_2019-09-24_at_8.44.52_PM.png")
When a product that is attached to an entitlement is purchased, that entitlement becomes active for the duration of the product. Subscription products will unlock entitlements for the subscription duration, and non-consumable and consumable purchases that are attached to an entitlement will unlock that content **forever**.

If you have non-subscription products, you may or may not want to add them to entitlements depending on your use case. If the product is non-consumable (e.g. lifetime access to "pro" features), you likely want to attach it to an entitlement. However, if it is consumable (e.g. purchase more lives in a game) you likely do not want to add them to an entitlement. 

When designing your Entitlement structure, keep in mind that a single product can unlock multiple entitlements. 
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/5bb6bc2-Screen_Shot_2020-07-01_at_6.14.38_PM.png",
        "Screen Shot 2020-07-01 at 6.14.38 PM.png",
        1346,
        741,
        "#f0f4f2"
      ],
      "caption": "Example Entitlement structure with associated Apple, Google, and Stripe product identifiers."
    }
  ]
}
[/block]

[block:callout]
{
  "type": "info",
  "body": "When relying on entitlements to enable access to certain content, it's important that you remember to add new products to their associated entitlements if needed. Failing to add your products to an entitlement, could lead to your users making purchases that don't unlock access to the promised content."
}
[/block]
# Offerings

Offerings are the the selection of products that are "offered" to a user on your paywall. They're an optional, but recommended feature of RevenueCat that can make it easier to change and experiment with your paywalls.

Offerings allow you to choose which combination of products are shown to a user on your paywall or upsell screen. For example your default Offering may contain a monthly and annual subscription, but you might want to experiment with Offerings with a different combination of subscription durations, trial lengths, prices, etc.

Within each Offering, there must be one or more **Packages**. Packages are simply a group of equivalent products across iOS and Android. If your app is available on multiple platforms, then a Package would contain all of the equivalent product Ids from each platform. 
![](https://files.readme.io/c4f0b08-Screen_Shot_2020-07-01_at_6.35.06_PM.png "Screen Shot 2020-07-01 at 6.35.06 PM.png")
### Creating an Offering

To create an Offering, navigate to the Offerings tab to your app's settings in the RevenueCat dashboard, and click **+ New** to get started.

You'll be prompted to enter an **Identifier** and **Description** for your offering. *Note that the offering identifier cannot be changed later*. Once you've entered this information, click **Add**.

**Current Offering**
The RevenueCat dashboard allows you to choose which Offering should be `current`. The `current` Offering is a convenience method for the Purchases SDK to reference a primary Offering. 

If you build your paywall to reference the `current` Offering, instead of hardcoding an identifier value, you can change this Offering from the dashboard to dynamically display different Offerings at any time. We strongly recommend utilizing the `current` Offering feature. See [Displaying Products](doc:displaying-products) for more info.

### Adding Packages
Each Offering you create should contain at least one Package that holds cross-platform products. 

To create a package, click into your new Offering, then click **+ New** in the Packages section. In the popup, choose an **Identifier** from the dropdown that corresponds with the duration of the package. If a duration isn't suitable for your package (e.g. consumable purchases), then you can choose a custom identifier. Include a **Description**, then click **Add**. 
![](https://files.readme.io/392984c-f3c7513-Screen_Shot_2019-09-24_at_9.00.21_PM.png "f3c7513-Screen_Shot_2019-09-24_at_9.00.21_PM.png")
Click into the newly created package and begin attaching product by clicking **Attach**.
![](https://files.readme.io/7c327ed-Screen_Shot_2020-06-29_at_2.37.36_PM.png "Screen_Shot_2020-06-29_at_2.37.36_PM.png")
In the popup you'll see dropdowns to select the appropriate product for each store. Choose the appropriate products, then click **Attach**.
![](https://files.readme.io/d7fdca7-41db7d0-Screen_Shot_2019-09-24_at_9.05.56_PM.png "41db7d0-Screen_Shot_2019-09-24_at_9.05.56_PM.png")

[block:callout]
{
  "type": "info",
  "body": "Any product can be added to an Offering, even if it's not part of any Entitlement. This can come in handy if your paywall contains a combination of subscription products that unlock Entitlements, and consumable products that do not."
}
[/block]
Continue this process until all of the packages are created for your Offering, and all Offerings are created.

The packages within an offering can be updated at any time, and their display order can be modified by dragging their position in the table. This display order will be reflected in the SDK when you fetch Offerings.
![](https://files.readme.io/9185a10-7ec7062-Screen_Shot_2019-09-26_at_1.45.45_PM.png "7ec7062-Screen_Shot_2019-09-26_at_1.45.45_PM.png")
# Next Steps
You've successfully created Entitlements, Offerings, and Packages, and have attached products to be used in your app. 

Continue on to [Displaying Products](doc:displaying-products) to start showing your new Offering in your app.
