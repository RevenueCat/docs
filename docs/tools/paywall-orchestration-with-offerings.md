---
title: Paywall orchestration with Offerings
slug: offerings-guide
excerpt: How to use Offerings for remote paywall orchestration
hidden: false
---

## What are Offerings?

An Offering is the object that contains all the information you need to remotely control your paywall through RevenueCat. Think of each Offering like its own "paywall" that can be uniquely defined, and may even (optionally) include the UI itself.

An Offering may include:

- **Packages**: The types of products you want to serve on your paywall across all stores.
- **Metadata**: The configurable JSON object that can contain other information you want to pass with your Offering, such as the copy that should be used for the CTA, which package should be preselected, or which pre-existing paywall layout should be used to display this Offering.
- **Paywall UI**: The actual UI of your paywall, designed from our templates that are configurable right from our Dashboard without any app updates or code changes. This may be served through a Full Screen View where we are serving the entire paywall, or a Footer View where we are serving only the footer (e.g. the CTA, package selector, etc.) and you retain full control and flexibility of the remaining UI.

![Image](/images/3b5660c-Untitled_11_3a8fa0ccc689ef1d025b378608842839.png)

You can set a Default Offering on the RevenueCat Dashboard to be served to all customers by default, but you can also create additional Offerings for a variety of other powerful use cases to optimize your paywall and grow your customer lifetime value.

## How should I use Offerings on my paywall?

We recommend displaying the **Current Offering** for a given customer on your paywall to ensure you can take advantage of all the remote flexibility of Offerings, which you can learn how to do [here](/getting-started/displaying-products#fetching-offerings).

:::info Current Offering vs. Default Offering
Customer's have a Current Offering that represents what Offering they should be served right now based on the Experiments, Targeting Rules, and other conditions you may have set for displaying Offerings. When no other conditions apply, your Project's Default Offering will be set as a customer's Current Offering.
:::

## What can I do with Offerings in RevenueCat?

:::info Paywall orchestration without code changes & app updates
Because Offerings can be created & modified entirely through our Dashboard, they give you the flexibility to remotely orchestrate your paywall without making any code changes or app updates.
:::

### Remotely control all aspects of your paywall

Changing the Packages in an Offering is easy, but Offerings also make it easy to control _all_ aspects of your paywall.

There are three main ways that you can use Offerings to remotely control the nature of your paywall:

![](/images/d4971fc-image_2cbb407b156f01519afc69289cd15699.png)

Each method has unique benefits and things to consider with it.

| Method                                        | Benefits                                                                                                                                                                                                                                                                                                                                                          | Considerations                                                                                                                                                                                                                                                                                                                                                                |
| --------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Offering Metadata](/tools/offering-metadata) | Maximum flexibility to program any variable of your paywall (including the entire design) into a key/value pair to be modified remotely at any time.                                                                                                                                                                                                              | Even though this approach is the most flexible, it still requires code changes for each new configuration you need to support. For example, once your app is set up to set the string of your paywall call to action (CTA) based on a "cta" key, you can remotely change that string to any other value, but an initial update is needed to create that relationship in code. |
| [Footer Paywall](/tools/paywalls)             | Get out-of-the-box control of the most complex paywall elements (displaying packages on various screen sizes, describing them correctly, supporting intro offers, etc.) with instant support for A/B testing any element of your packages & CTA, while retaining full flexibility for the marketing content of your paywall to be designed exactly as you'd like. | This best-of-both-worlds approach gives you tons of flexibility to experiment with your packages & CTA at zero cost, but like with Metadata, you'll still need to ship app updates to modify other hardcoded elements of the paywall.                                                                                                                                         |
| [Full Screen Paywall](/tools/paywalls)        | Full remote control of your paywall with templates designed to be performant and intuitive so you can launch a new concept painlessly, experiment with tons of variables, and much more.                                                                                                                                                                          | Our list of templates and their configurable elements are growing all the time, but you'll need to work within those available configurations in this approach, which may not give you the same pixel-by-pixel control you'd have from your own custom paywall.                                                                                                               |

:::info
If you're looking to retain as much control of your custom paywall as possible, while still unlocking effortless experimentation, consider coupling a [Footer Paywall](/tools/paywalls/displaying-paywalls#how-to-display-a-footer-paywall-on-your-custom-paywall) with hardcoded elements controlled through Offering Metadata.
:::

### Change the default paywall being served to your customers at any time

The Default Offering you set in the Dashboard is what will be served as Current Offering for a customer when no other conditions apply (e.g. their active enrollment in an Experiment). Typically, to change your paywall you'd need to make changes directly to your app, submit an update for review, and wait for its approval before those changes go live for your customers.

With RevenueCat, you can simply change your Default Offering at any time from the Dashboard to instantly change what gets served to your customers.

### Run an A/B test of a new paywall to determine which one maximizes lifetime value (LTV)

Since you can change the packages, metadata, or paywall UI at any time from our Dashboard; you can also easily experiment with any of those variables through an A/B test. All you need to do is:

1. Create the new Offering you want to test
2. Navigate to Experiments to create a new one
3. Choose the two Offerings you want to test against each other
4. Start the experiment

Once your experiment has been started, RevenueCat will immediately begin splitting new customers into each variant and serving the Offering from their variant as the Current Offering for that customer.

Developers use RevenueCat to grow their customer lifetime value by experimenting with...

1. Product prices
2. Duration mixes (e.g. monthly & annual vs. only annual)
3. Introductory offer type & duration (e.g. 7 day trial vs. 14 day trial)
4. Key copy elements like CTAs, titles, benefit descriptions, etc.
5. Entirely new paywall layouts/designs

...and much more.

[Learn more about Experiments](/tools/experiments-v1)

### Assign specific audiences their own unique paywall

With Targeting, you can set rules to define audiences that you'd like to serve a unique paywall with tailored content and offers for each audience.

Audiences can be defined through dimensions like Country, App, and App Version -- with much more coming soon, enabling you to do things like:

1. Target price-sensitive countries with a unique price point or package mix
2. Only display your new paywall design on app versions that support it
3. Modify the copy or layout of your paywall to highlight the most important benefits in each market

[Learn more about Targeting](/tools/targeting)

Or, to unlock additional flexibility, you can use Offering Metadata with your own custom app logic to decide which Offering should get shown to a customer based on some other arbitrary dimension.

For example, you might add a property like `"source":"black-friday-campaign"`, and choose to serve the Offering with that property when you detect that user came from your Black Friday campaign.

[Learn more about Offering Metadata](/tools/offering-metadata)

### Measure performance by paywall

Through RevenueCat you'll find a customer's **Offering** as a prominent dimension you can use to measure performance by. For example, you can:

1. [Segment Revenue by Offering](https://app.revenuecat.com/charts/revenue?chart_type=Stacked%20area&segment=offering_id) to understand how each unique paywall is contributing to your overall business
2. Use our Scheduled Data Exports to build a custom analysis of your business using `presented_offering`
3. Use one of our many third-party integrations that pass `presented_offering_id` as a property to filter and segment purchase events by their unique paywall
