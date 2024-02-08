---
title: Creating Offerings to Test
slug: /creating-offerings-to-test
hidden: false
---

In this guide we'll cover how to craft your test hypothesis, and how to set up a new Offering in RevenueCat to test your hypothesis.

## Crafting your test hypothesis

A successful experiment starts with a clear hypothesis that states what variable you'll be changing in your experiment, and what you expect to happen as a result of that.

- A good test hypothesis can be as simple as "I expect to increase my revenue by changing my subscription price to x"
- A great test hypothesis can also be as specific as "By changing my subscription price to x, I expect to increase my Realized LTV per customer by y%, due to a z% increase in my Realized LTV per paying customer."

Through Experiments, you can test any variable related to the products you're serving your customers. You may want to test higher or lower prices, the presence or absence of a trial offer, the length of a trial offer, the number of duration options to offer, the relative price of one duration vs. another, etc. [Check out these 10 price test ideas](https://www.revenuecat.com/blog/growth/10-price-test-ideas-for-your-mobile-app/) if you're looking for inspiration on where to start.

In addition, by programming your app to be responsive to Offering Metadata, you can test any other paywall variable outside of your product selection as well. [Learn more here](/tools/offering-metadata).

## Setting up a new offering to test your hypothesis

Experiments uses [Offerings](/getting-started/entitlements#offerings) to represent the hypothesis that's being tested (aka: the group of products that will be offered to your customers). An Offering is a collection of Packages that contain Products from each store you're looking to serve that Offering on.

So to run an experiment with RevenueCat, you'll need to create a new Offering that contains the Products you want to test, and uses the correct set of metadata key/values if they are applicable to your experiment.

### Creating new Products in each store

The Products themselves must first be created in each store in order to be served through RevenueCat. [You can refresh yourself on how to create Products in each store here](/getting-started/entitlements#store-configuration).

When creating new Products to experiment with, here are a few things to keep in mind:

**New in-app purchases need to be submitted for review to Apple**  
When creating a new in-app purchase through App Store Connect, it'll need to be submitted to Apple for review and approved before it can be served to customers and offered through RevenueCat. [Learn more.](https://help.apple.com/app-store-connect/#/dev1986a0e5c)

:::info In-app purchase review times may vary

Much like app review, in-app purchase review times may vary from a few hours to a few days, and sometimes more. Keep this in mind when planning for a new experiment: the earlier you can create and submit new in-app purchases for review the better!

In-app purchases on the Play Store, on the other hand, do not go through a review process and can therefore be used for testing immediately.
:::

:::info Test new Products before setting them live

Be sure to test any new Products in your app before setting them live through an experiment to make sure the functionality works, and allows you to accurately test your hypothesis.

For example, if you're offering a free trial for the first time, ensure your paywall clearly demonstrates that.

:::

**Use distinct Subscription Groups on the App Store for each RevenueCat Offering when testing new prices**  
A RevenueCat Offering is the full collection of products that you intend to serve a given customer, and a Subscription Group on the App Store should frequently be used the same way.

By creating a new Subscription Group for each new RevenueCat Offering, you ensure that:

- A given customer will only ever be offered products from a single Subscription Group, and therefore will not accidentally create multiple subscriptions if the app prompts them to subscribe at different times.
- A given customer will only ever be offered the option to upgrade/downgrade/crossgrade to other products in that same Subscription Group through their subscription settings on iOS, rather than seeing the set of products that was offered to other customers through an experiment, and may have different prices associated with them.

**App Product Pages list up to 10 sold products in the In-App Purchases section**  
Unfortunately, there's no good way to avoid this: the App Store will automatically show up to 10 sold products for each app in the In-App Purchases section of the app's Product Page on the App Store, which means customers may see different price points available than what they are offered in the app.

This is true for some of the largest app's on the store as well, and is just something to be aware of more than to avoid.
