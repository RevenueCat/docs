---
title: Offerings
sidebar_label: Offerings
slug: overview
---

Offerings are the selection of [products](/offerings/products-overview) that are "offered" to a user on your paywall. Using RevenueCat Offerings is optional, but enable features like Paywalls, Experiments, and Targeting.

<YouTubeEmbed videoId="QxHeZiW4KCA" title="RevenueCat Products, Offerings, and Entitlements Explained" />

## How Offerings Work

Offerings are a way to group products together to display to users. You can think of them as a "paywall" that contains a set of products.

Offerings are created and configured in the RevenueCat dashboard. When using [RevenueCat Paywalls](/tools/paywalls), you'll configure a single paywall that is paired to a single Offering.

### Packages

Within each Offering, there must be one or more **Packages**. Packages are simply a group of equivalent products across iOS, Android, and web. If your app is available on multiple platforms, then a Package would contain all of the equivalent product identifiers from each platform.

![](/images/c4f0b08-Screen_Shot_2020-07-01_at_6.35.06_PM_bebc522b7112c8d3fe6a4549256ba588.png "Screen Shot 2020-07-01 at 6.35.06 PM.png")

### Default Offering

The RevenueCat dashboard allows you to choose which Offering should be the Default Offering for customers in your Project. This Default Offering will be returned in the Purchases SDK as a customer's `current` Offering when using the `getOfferings` method if no other conditions apply to them.

If you build your paywall to reference the `current` Offering, instead of hardcoding an identifier value, you can change this Offering from the dashboard to dynamically display different Offerings at any time, either by modifying your Project's Default Offering or by utilizing features like [Targeting](https://www.revenuecat.com/docs/tools/targeting) and [Experiments](https://www.revenuecat.com/docs/tools/targeting). We strongly recommend utilizing the `current` Offering feature. See [Displaying Products](/getting-started/displaying-products) for more info.

## Creating an Offering

To create an Offering, navigate to the Offerings tab to your project settings in the RevenueCat dashboard, and click **+ New** to get started.

You'll be prompted to enter an **Identifier** and **Description** for your offering. _Note that the offering identifier cannot be changed later_. Once you've entered this information, click **Save**.

![Screenshot](/images/7508f4b-Screenshot_2023-12-05_at_10.17.25_PM_4a7403e5b880248ab9c00c129c89edd6.png)

### Adding Packages

Each Offering you create should contain at least one Package that holds cross-platform products.

To create a package, click into your new Offering, then click **+ New** in the Packages section. In the popup, choose an **Identifier** from the dropdown that corresponds with the duration of the package. If a duration isn't suitable for your package (e.g. consumable purchases), then you can choose a custom identifier. Include a **Description**, then click **Save**.

![](/images/f416859-Screenshot_2023-03-21_at_10.57.10_dc01f310276ab6c27a087da90a72a782.png "Screenshot 2023-03-21 at 10.57.10.png")

Click into the newly created package and begin attaching product by clicking **Attach**.

![](/images/0c981f7-Screenshot_2023-03-21_at_10.51.29_6b599e6b850c5fc7ef2631a5adec12e9.png "Screenshot 2023-03-21 at 10.51.29.png")

On the next screen, you'll see dropdowns to select the appropriate product for each store. Choose the appropriate products, then click **Attach**.

![](/images/9bad7ea-Screenshot_2023-03-21_at_10.54.31_7ebbf8f6f7f03c93fc30178ec082fffd.png "Screenshot 2023-03-21 at 10.54.31.png")

For Google Play store products, if you select a non backwards-compatible product and the [app compatibility setting](/getting-started/entitlements/google-subscriptions-and-backwards-compatibility) is set to "SDK v6+ and backwards compatible", you will have the ability to configure a backwards compatible fallback product. This product will be available for purchase in previous versions of the SDK which don't yet support non backwards compatible products.

![](/images/fba3a35-Screenshot_2023-03-21_at_10.54.52_499e0d4c200876ac2fb91f6174911865.png "Screenshot 2023-03-21 at 10.54.52.png")

:::info
Any product can be added to an Offering, even if it's not part of any Entitlement. This can come in handy if your app's paywall contains a combination of subscription products that unlock Entitlements, and consumable products that do not.
:::

Continue this process until all of the packages are created for your Offering, and all Offerings are created.

The packages within an offering can be updated at any time, and their display order can be modified by dragging their position in the table. This display order will be reflected in the SDK when you fetch Offerings.

![](/images/de814f7-app.revenuecat.com_projects_85ff18c7_offerings_packages_pkge2ed0611690_attach_2_a52581f352630063980b5d583618970a.png "app.revenuecat.com_projects_85ff18c7_offerings_packages_pkge2ed0611690_attach (2).png")

### Removing Packages

Packages can be removed from an Offering at any time. This can be useful if you want to update your paywall on-the-fly without an app update.

Removing a package from an Offering **does not** remove the products from RevenueCat, remove transactions, or remove the products from any Entitlements. You can re-add a package and products at any time.

![](/images/dff40c4-Screen_Shot_2022-12-05_at_12.12.05_PM_8a4763f6533fdd43a377809bc374da70.png "Screen Shot 2022-12-05 at 12.12.05 PM.png")

## Paywalls

Offerings can be paired with a [paywall](/tools/paywalls) that is configured in the RevenueCat dashboard. RevenueCat Paywalls are an easy way to display a set of products to a user, and can be configured remotely.

You can read more about how to create and configure paywalls in our [Paywalls](/tools/paywalls) guide.

## Fetching Offerings

Offerings are fetched through the SDK via the `getOfferings` method. These are pre-fetched in most cases on app launch, so the completion block to get offerings won't need to make a network request in most cases.

For more information on how to fetch Offerings, see our [Displaying Products](/getting-started/displaying-products) guide.

To fetch a user's Offering configuration via the REST API, see our [API Reference](/api-v1#tag/offerings/operation/get-offerings).

## Next steps

Once you've created an Offering, you can design a paywall to display to your users.

<Button href="/docs/tools/paywalls">Create a paywall →</Button>
