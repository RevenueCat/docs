---
title: Configuring Products
slug: entitlements
excerpt: Use Entitlements and Offerings to organize and display products
hidden: false
categorySlug: documentation
order: 2
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

1. Products
2. Entitlements
3. Offerings

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/fb06e40-Screen_Shot_2020-07-01_at_6.12.53_PM.png",
        "Screen Shot 2020-07-01 at 6.12.53 PM.png",
        1470
      ],
      "align": "center",
      "caption": "An example of how products in Apple, Google, and Stripe translate to Products, Entitlements, and Offerings in RevenueCat."
    }
  ]
}
[/block]

The diagram above illustrates how products from Apple, Google, and Stripe would tie into RevenueCat. The configuration is explained in more detail below.

# Products

Products are the individual SKUs that users actually purchase. The stores (Apple, Google, Stripe, and Amazon) process these SKUs and charge the user.

## Store Configuration

No matter how you choose to use RevenueCat, you'll need to first have products set up in the stores. This is done outside of RevenueCat, and where you set things like price, duration, and free trials. If you've never set up products before or need a refresher (or tips and tricks) check out these guides:

- **[iOS / App Store Connect ](doc:ios-products)**
- **[Android / Google Play Console ](doc:android-products)**
- **[Android / Amazon Appstore ](doc:amazon-product-setup)**
- **[Stripe ](doc:stripe-products)**

## RevenueCat Configuration

After your products are set up in the stores, you'll also need to set up a 1-to-1 mapping of the products in RevenueCat as well.

Navigate to the **Products** tab in the settings for your project in the RevenueCat dashboard. To add a new product, click the **+ New** button and enter the product identifier **exactly as it appears in the store**, as well as the store that the product belongs to.

These product identifiers are the link between RevenueCat, and Apple, Google, Stripe, or Amazon.

![](https://files.readme.io/47e4904-Screenshot_2023-03-20_at_16.04.55.png "Screenshot 2023-03-20 at 16.04.55.png")

After clicking "New", you also have the opportunity to directly import products for the following stores: Apple App Store, subscriptions from Google Play Store. Support for importing from other stores will be added in the future. 

If you choose to set up subscription products manually for Google Play apps, you will need to add both the subscription ID and the base plan ID, which you can find in Google Play Console as per the following screenshot:

![](https://files.readme.io/dc9d124-9d0e770-Screen_Shot_2023-01-12_at_5.07.03_PM.png "9d0e770-Screen_Shot_2023-01-12_at_5.07.03_PM.png")

> 📘 
> 
> If a user purchases a product that has not been set up in RevenueCat, the purchase will still go through and be tracked in RevenueCat.

To make it easier to identify your products in RevenueCat, you can optionally set a display name for them by:

1. Navigating to a product's configuration page
2. Clicking **Edit**
3. Entering your desired display name
4. Clicking **Save**

> 📘 
> 
> Product display names must be unique within an app. It's a good practice to include the product duration in the display name to avoid name overlaps, for example: 'My Pro Subscription Monthly', 'My Pro Subscription Yearly' etc".

> 🚧 
> 
> Product display names are currently supported in Charts, and will be supported throughout the Dashboard in the near future.

# Entitlements

An entitlement represents a level of access, features, or content that a user is "entitled" to.

Entitlements are used to ensure a user has appropriate access to content based on their purchases, without having to manage all of the product identifiers in your app code. 

Most apps only have one entitlement, unlocking all premium features. However, if you had two tiers of content such as Gold and Platinum, you would have 2 entitlements.

A user's entitlements are shared across all apps contained within the same project.

## Creating an Entitlement

To create a new entitlement, click **Entitlements** in the left menu of the **Project** dashboard and click **+ New.** You'll need to enter a unique identifier for your entitlement that you can reference in your app, like "pro". 

Most apps only have one entitlement, but create as many as you need. For example a navigation app may have a subscription to "pro" access, and one-time purchases to unlock specific map regions. In this case there would probably be one "pro" entitlement, and additional entitlements for each map region that could be purchased.

![](https://files.readme.io/d09bed8-app.revenuecat.com_projects_3310b6dd_entitlements.png "app.revenuecat.com_projects_3310b6dd_entitlements.png")

## Attaching Products to Entitlements

Once entitlements are created, you should attach products to entitlements. This lets RevenueCat know which entitlements to unlock for users after they purchase a specific product.

When viewing an Entitlement, click the **Attach** button to attach a product. If you've already added your products, you'll be able to select one from the list to attach.

![](https://files.readme.io/24f890c-app.revenuecat.com_projects_3310b6dd_entitlements_1.png "app.revenuecat.com_projects_3310b6dd_entitlements (1).png")

When a product that is attached to an entitlement is purchased, that entitlement becomes active for the duration of the product. Subscription products will unlock entitlements for the subscription duration, and non-consumable and consumable purchases that are attached to an entitlement will unlock that content **forever**.

If you have non-subscription products, you may or may not want to add them to entitlements depending on your use case. If the product is non-consumable (e.g. lifetime access to "pro" features), you likely want to attach it to an entitlement. However, if it is consumable (e.g. purchase more lives in a game) you likely do not want to add them to an entitlement. 

Attaching an entitlement to a product will grant that entitlement to any customers that have previously purchased that product. Likewise, detaching an entitlement from a product will remove it for any customers that have previously purchased that product.

When designing your Entitlement structure, keep in mind that a single product can unlock multiple entitlements, and multiple products may unlock the same entitlement.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/5bb6bc2-Screen_Shot_2020-07-01_at_6.14.38_PM.png",
        "Screen Shot 2020-07-01 at 6.14.38 PM.png",
        1346
      ],
      "align": "center",
      "caption": "Example Entitlement structure with associated Apple, Google, Stripe, or Amazon product identifiers."
    }
  ]
}
[/block]

> 📘 
> 
> When relying on entitlements to enable access to certain content, it's important that you remember to add new products to their associated entitlements if needed. Failing to add your products to an entitlement, could lead to your users making purchases that don't unlock access to the promised content.

# Offerings

Offerings are the selection of products that are "offered" to a user on your paywall. They're an optional, but recommended feature of RevenueCat that can make it easier to change and experiment with your paywalls.

Offerings allow you to choose which combination of products are shown to a user on your paywall or upsell screen. For example your default Offering may contain a monthly and annual subscription, but you might want to experiment with Offerings with a different combination of subscription durations, trial lengths, prices, etc.

Within each Offering, there must be one or more **Packages**. Packages are simply a group of equivalent products across iOS, Android, and web. If your app is available on multiple platforms, then a Package would contain all of the equivalent product Ids from each platform. 

![](https://files.readme.io/c4f0b08-Screen_Shot_2020-07-01_at_6.35.06_PM.png "Screen Shot 2020-07-01 at 6.35.06 PM.png")

## Creating an Offering

To create an Offering, navigate to the Offerings tab to your project settings in the RevenueCat dashboard, and click **+ New** to get started.

You'll be prompted to enter an **Identifier** and **Description** for your offering. _Note that the offering identifier cannot be changed later_. Once you've entered this information, click **Add**.

![](https://files.readme.io/0b9a2f4-app.revenuecat.com_projects_3310b6dd_entitlements_2.png "app.revenuecat.com_projects_3310b6dd_entitlements (2).png")

**Current Offering**  
The RevenueCat dashboard allows you to choose which Offering should be `current`. The `current` Offering is a convenience method for the Purchases SDK to reference a primary Offering. 

If you build your paywall to reference the `current` Offering, instead of hardcoding an identifier value, you can change this Offering from the dashboard to dynamically display different Offerings at any time. We strongly recommend utilizing the `current` Offering feature. See [Displaying Products](doc:displaying-products) for more info.

## Adding Packages

Each Offering you create should contain at least one Package that holds cross-platform products. 

To create a package, click into your new Offering, then click **+ New** in the Packages section. In the popup, choose an **Identifier** from the dropdown that corresponds with the duration of the package. If a duration isn't suitable for your package (e.g. consumable purchases), then you can choose a custom identifier. Include a **Description**, then click **Add**. 

![](https://files.readme.io/f416859-Screenshot_2023-03-21_at_10.57.10.png "Screenshot 2023-03-21 at 10.57.10.png")

Click into the newly created package and begin attaching product by clicking **Attach**.

![](https://files.readme.io/0c981f7-Screenshot_2023-03-21_at_10.51.29.png "Screenshot 2023-03-21 at 10.51.29.png")

On the next screen, you'll see dropdowns to select the appropriate product for each store. Choose the appropriate products, then click **Attach**.

![](https://files.readme.io/9bad7ea-Screenshot_2023-03-21_at_10.54.31.png "Screenshot 2023-03-21 at 10.54.31.png")

For Google Play store products, if you select a non backwards-compatible product and the [app compatibility setting](doc:google-subscriptions-and-backwards-compatibility) is set to "SDK v6+ and backwards compatible", you will have the ability to configure a backwards compatible fallback product. This product will be available for purchase in previous versions of the SDK which don't yet support non backwards compatible products.

![](https://files.readme.io/fba3a35-Screenshot_2023-03-21_at_10.54.52.png "Screenshot 2023-03-21 at 10.54.52.png")

> 📘 
> 
> Any product can be added to an Offering, even if it's not part of any Entitlement. This can come in handy if your app's paywall contains a combination of subscription products that unlock Entitlements, and consumable products that do not.

Continue this process until all of the packages are created for your Offering, and all Offerings are created.

The packages within an offering can be updated at any time, and their display order can be modified by dragging their position in the table. This display order will be reflected in the SDK when you fetch Offerings.

![](https://files.readme.io/de814f7-app.revenuecat.com_projects_85ff18c7_offerings_packages_pkge2ed0611690_attach_2.png "app.revenuecat.com_projects_85ff18c7_offerings_packages_pkge2ed0611690_attach (2).png")

## Removing Packages

Packages can be removed from an Offering at any time. This can be useful if you want to update your paywall on-the-fly without an app update.

Removing a package from an Offering **does not** remove the products from RevenueCat, remove transactions, or remove the products from any Entitlements. You can re-add a package and products at any time.

![](https://files.readme.io/dff40c4-Screen_Shot_2022-12-05_at_12.12.05_PM.png "Screen Shot 2022-12-05 at 12.12.05 PM.png")

# Next Steps

You've successfully created Entitlements, Offerings, and Packages, and have attached products to be used in your app. 

Continue on to [Displaying Products](doc:displaying-products) to start showing your new Offering in your app.
